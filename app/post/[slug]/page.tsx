
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyButton } from "@/components/copy-button";
import { RelatedPosts } from "@/components/related-posts";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { isPostReadyForIndexing } from "@/data/content-quality";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type PostPageProps = {
  params: {
    slug: string;
  };
};

// Only editorially approved slugs are generated. Unknown and review-required
// slugs must return a real HTTP 404 instead of a streamed soft-404 response.
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      robots: {
        index: false,
        follow: false
      },
      alternates: {
        canonical: `${SITE_URL}/post/${slug}`
      }
    };
  }

  const canonicalUrl = `${SITE_URL}/post/${post.slug}`;
  const metaDescription = getMetaDescription(post.description);
  return {
    title: post.metaTitle ?? post.seoTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl
    },
    robots: {
      index: isPostReadyForIndexing(post.slug),
      follow: true
    },
    openGraph: {
      title: post.seoTitle,
      description: metaDescription,
      url: canonicalUrl,
      type: "article",
      siteName: SITE_NAME,
      publishedTime: post.publishedAt,
      modifiedTime: getSchemaModifiedDate(post),
      authors: [post.author],
      images: [
        {
          url: `${SITE_URL}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt ?? post.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: metaDescription,
      images: [`${SITE_URL}${post.image}`]
    }
  };
}

function getUpdatedDateLabel(publishedAt: string, updatedAt?: string) {
  const targetDate = updatedAt ? new Date(updatedAt) : new Date(publishedAt);
  return targetDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function getSchemaModifiedDate(post: { publishedAt: string; updatedAt?: string }) {
  return post.updatedAt ?? post.publishedAt;
}

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function getMetaDescription(description: string) {
  if (description.length <= 160) return description;
  const shortened = description.slice(0, 157).replace(/\s+\S*$/, "").trim();
  return `${shortened}…`;
}

function getSectionId(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function sanitizeArticleHtml(html: string) {
  // Editorial-review posts are not public routes. Preserve the useful anchor
  // text while removing links that would otherwise lead visitors to a 404.
  return html.replace(
    /<a\b[^>]*href=(["'])\/post\/([^"'#?]+)[^"']*\1[^>]*>([\s\S]*?)<\/a>/gi,
    (match, _quote: string, slug: string, label: string) =>
      isPostReadyForIndexing(slug) ? match : label
  );
}

function getReadingTime(post: { sections: { heading: string; paragraphs: string[] }[] }) {
  const words = post.sections
    .flatMap((section) => [section.heading, ...section.paragraphs])
    .map(stripHtml)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 220));
}

function getTocItems(post: { sections: { heading: string }[] }) {
  return post.sections
    .filter((section) => !section.heading.toLowerCase().includes("faq"))
    .slice(0, 18)
    .map((section) => ({
      id: getSectionId(section.heading),
      label: section.heading.replace(/^\d+\.\s*/, "")
    }));
}

function extractFaqs(post: any) {
  const faqSection = post.sections.find((s: any) => 
    s.heading.toLowerCase().includes("faq") || 
    s.heading.toLowerCase().includes("frequently asked questions")
  );
  if (!faqSection) return null;

  const faqs: { question: string; answer: string }[] = [];
  faqSection.paragraphs.forEach((paragraph: string) => {
    const cleanParagraph = paragraph.replace(/<br\s*\/?>/gi, "\n");
    const lines = cleanParagraph.split("\n");
    if (lines.length >= 2) {
      const qLine = lines[0].replace(/<\/?[^>]+(>|$)/g, "").trim();
      const aLine = lines[1].replace(/<\/?[^>]+(>|$)/g, "").trim();
      
      const qMatch = qLine.match(/^Q\d*:\s*(.*)/i);
      const aMatch = aLine.match(/^A:\s*(.*)/i);
      
      if (qMatch && aMatch) {
        faqs.push({
          question: qMatch[1].trim(),
          answer: aMatch[1].trim()
        });
      }
    } else {
      const text = cleanParagraph.replace(/<\/?[^>]+(>|$)/g, "").trim();
      const parts = text.split(/\s*-\s*A:\s*/i);
      if (parts.length === 2) {
        const qPart = parts[0].replace(/^Q\d*:\s*/i, "").trim();
        faqs.push({
          question: qPart.endsWith("?") ? qPart : qPart + "?",
          answer: parts[1].trim()
        });
      }
    }
  });

  return faqs.length > 0 ? faqs : null;
}


function extractItemList(post: { sections: { heading: string }[] }) {
  const items = post.sections
    .map((section) => {
      const match = section.heading.match(/^(\d+)\.\s+(.+)$/);
      return match ? { position: Number(match[1]), name: match[2].trim() } : null;
    })
    .filter((item): item is { position: number; name: string } => Boolean(item))
    .sort((left, right) => left.position - right.position);

  return items.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: items.map((item) => ({
          "@type": "ListItem",
          position: item.position,
          name: item.name
        }))
      }
    : null;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category);
  const allPosts = getAllPosts();
  const latestUpdates = allPosts.filter((p) => p.slug !== post.slug).slice(0, 4);
  const canonicalUrl = `${SITE_URL}/post/${post.slug}`;
  const encodedTitle = encodeURIComponent(post.title);
  const encodedUrl = encodeURIComponent(canonicalUrl);
  const readingTime = getReadingTime(post);
  const tocItems = getTocItems(post);
  const isIndexable = isPostReadyForIndexing(post.slug);

  const ctaLinks: Record<string, { label: string; href: string; prompt?: string }> = {
    "remove-background-from-image-online-free-easy-method-2026": {
      label: "Remove Bg",
      href: "https://www.remove.bg/"
    },
    "image-ko-20kb-me-convert-kaise-kare-free-easy-tarika": {
      label: "Compress Image",
      href: "https://www.iloveimg.com/compress-image"
    },
    "jpg-to-png-converter-free-online-image-convert-tool-2026-guide": {
      label: "Convert Image",
      href: "https://www.iloveimg.com/convert-to-png/jpg-to-png"
    },
    "navratri-ai-photo-generator-mata-rani-ke-saath-apni-photo-banaye-free": {
      label: "Generate Image",
      href: "https://www.bing.com/images/create",
      prompt:
        "Create a realistic devotional image of a young person standing beside Goddess Durga (Mata Rani). The person should look natural, smiling, and wearing traditional Indian clothes. Goddess Durga should appear divine with glowing aura, sitting on a lion, holding weapons, and blessing pose. Background: Navratri festival decoration with lights, mandir, diyas, and flowers. Lighting: golden divine glow, cinematic, ultra realistic. Style: highly detailed, 4K, realistic photography style. Emotion: peaceful, spiritual, bhaktimay feeling."
    },
    "instagram-par-viral-3d-social-media-ai-avatar-kaise-banayein-free-bing-prompts-2026": {
      label: "Create Avatar",
      href: "https://www.bing.com/images/create",
      prompt:
        "Create a realistic 3D illustration of a 22-year-old Indian boy sitting casually on a stylish wooden chair in front of a giant social media logo of 'Instagram'. The character should wear a modern hoodie, sneakers, and sunglasses. The background should feature his username 'YOUR NAME' in glowing blue neon lights on the wall. The lighting should be cinematic with high resolution."
    },
    "golden-hour-riverside-camping-portrait": {
      label: "Create Image",
      href: "https://www.bing.com/images/create",
      prompt:
        "A high-resolution DSLR photo using an 85mm lens at f/1.8, showing a young man with South Asian features and a friendly smile, relaxing in a tan folding camping chair. He is wearing a red and black checkered flannel shirt, dark blue jeans, and rugged brown leather boots, holding a camping mug. The setting is a peaceful riverside at golden hour, with a small tan tent and a glowing campfire nearby. The background features a lush green forest with soft bokeh, creating a serene outdoor atmosphere."
    },
    "dark-moody-cyberpunk-portrait-prompt": {
      label: "Try It",
      href: "https://www.bing.com/images/create",
      prompt:
        "Dark moody portrait of a mysterious person in low light, neon glow highlights, cinematic shadows, cyberpunk atmosphere, ultra detailed, high contrast, 4K wallpaper style"
    }
  };

  const postCta = ctaLinks[post.slug];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.seoTitle,
    "description": post.description,
    "image": `${SITE_URL}${post.image}`,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": `${SITE_URL}/author`
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/main-logo.png`
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": new Date(getSchemaModifiedDate(post)).toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": `${SITE_URL}/blogs`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": canonicalUrl
      }
    ]
  };

  const faqs = extractFaqs(post);
  const itemListSchema = extractItemList(post);
  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <div className="reading-progress pointer-events-none fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {itemListSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      )}
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      
      {/* =========================
          BACK BUTTON
      ========================= */}
      <nav aria-label="Breadcrumb" className="theme-text-muted overflow-x-auto text-xs">
        <ol className="flex min-w-max items-center gap-2">
          <li><Link href="/" className="hover:text-cyan-400 hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/blogs" className="hover:text-cyan-400 hover:underline">Blogs</Link></li>
          <li aria-hidden="true">/</li>
          <li className="max-w-[55vw] truncate theme-text-secondary" aria-current="page">{post.title}</li>
        </ol>
      </nav>
      <div className="flex items-center">
        <Link
          href="/blogs"
          className="theme-button theme-soft-hover inline-flex items-center gap-2 rounded-none px-3.5 py-1.5 text-xs font-semibold"
        >
          ← All Articles
        </Link>
      </div>

      {/* =========================
          TWO-COLUMN MAIN GRID (GaadiWaadi inspired + AI styling)
      ========================= */}
      <div className="grid gap-8 lg:grid-cols-[1fr_340px] items-start">
        
        {/* =========================
            LEFT COLUMN: ARTICLE
        ========================= */}
        <div className="space-y-8 min-w-0">
          <article className="site-panel overflow-hidden rounded-none shadow-lg border border-cyan-400/10 dark:border-white/10">
            
            {/* FEATURED IMAGE */}
            <div
              className={`post-featured-image-frame relative w-full overflow-hidden border-b border-cyan-400/10 dark:border-white/10 ${
                [
                  "best-ai-tools-for-digital-marketers-2026",
                  "25-best-ai-tools-for-graphic-designers-2026"
                ].includes(post.slug)
                  ? "aspect-[3/2]"
                  : "aspect-[16/9]"
              }`}
            >
              <Image
                src={post.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 850px"
                className="post-featured-image-backdrop object-cover"
                aria-hidden="true"
              />
              <Image
                src={post.image}
                alt={post.imageAlt ?? post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 850px"
                className="post-featured-image-main object-contain"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/25 via-transparent to-white/10 dark:to-white/5" />
            </div>

            {/* ARTICLE CONTENTS */}
            <div className="space-y-5 px-5 py-6 sm:px-8 sm:py-8">
              
              {/* METADATA CHIPS */}
              <div className="flex flex-wrap items-center gap-3 text-xs theme-text-muted">
                <span className="rounded-none bg-cyan-500/10 border border-cyan-400/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <span>By</span>
                  <Link href="/author" className="font-semibold text-cyan-400 hover:underline">
                    {post.author}
                  </Link>
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-500" />
                <span>Published: {post.dateLabel}</span>
                <span className="w-1 h-1 rounded-full bg-slate-500" />
                <span>Last Updated: {getUpdatedDateLabel(post.publishedAt, post.updatedAt)}</span>
                <span className="w-1 h-1 rounded-full bg-slate-500" />
                <span>{readingTime} min read</span>
              </div>

              {/* HEADING & SUBTITLE */}
              <header className="space-y-3.5">
                <h1 className="theme-text-primary text-balance font-[family-name:var(--font-heading)] text-xl font-extrabold sm:text-2xl lg:text-[1.85rem] leading-snug tracking-tight">
                  {post.title}
                </h1>
                <p className="theme-text-secondary text-sm leading-7 border-l-4 border-cyan-400 pl-3 py-0.5">
                  {post.description}
                </p>
              </header>

              {!isIndexable ? (
                <aside className="border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-xs leading-6 theme-text-secondary">
                  This page is undergoing editorial review and is temporarily excluded from search results. Verify time-sensitive details with primary sources.
                </aside>
              ) : null}

              <aside className="theme-surface space-y-2 border-l-4 border-emerald-400 px-4 py-3" aria-label="Editorial note">
                <h2 className="theme-text-primary text-sm font-bold">Editorial transparency</h2>
                <p className="theme-text-secondary text-xs leading-6">
                  This article is published under {post.author}&apos;s byline and reviewed against our editorial checklist. AI tools may assist research organization or drafting, but they do not replace human editing. Product features, prices, exam rules, and AI outputs can change, so verify important details on the linked official source before acting. See our{" "}
                  <Link href="/editorial-policy" className="font-semibold text-cyan-400 hover:underline">editorial policy</Link>
                  {" "}or <Link href="/contact" className="font-semibold text-cyan-400 hover:underline">report a correction</Link>.
                </p>
              </aside>

              {/* DYNAMIC POST CTA BOX */}
              {postCta ? (
                <div className="theme-surface space-y-3 rounded-none px-3.5 py-3.5 text-center">
                  {postCta.prompt ? (
                    <div className="relative rounded-none border border-dashed border-cyan-400/30 px-3.5 py-3.5 text-left">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="theme-kicker text-[10px] font-semibold uppercase tracking-[0.22em]">Main Prompt</p>
                        <div className="flex items-center gap-1.5">
                          <CopyButton text={postCta.prompt} />
                          <a
                            href={postCta.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-none bg-[#159947] px-3 py-1.5 text-[10px] font-semibold text-white shadow-lg shadow-[#159947]/25 transition hover:-translate-y-0.5 hover:bg-[#0d7a38]"
                          >
                            Try Now
                          </a>
                        </div>
                      </div>
                      <p className="theme-text-secondary mt-2 text-xs leading-6">{postCta.prompt}</p>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {/* SOCIAL SHARING COMPONENT */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-y border-cyan-400/5 py-3">
                <a
                  href="https://www.instagram.com/vermabanker?igsh=bWN4cGcyYXhkMW8x"
                  target="_blank"
                  rel="noreferrer"
                  className="theme-button theme-soft-hover rounded-none px-3 py-1.5 text-[10px] font-bold transition hover:scale-105"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@ShobhitManar"
                  target="_blank"
                  rel="noreferrer"
                  className="theme-button theme-soft-hover rounded-none px-3 py-1.5 text-[10px] font-bold transition hover:scale-105"
                >
                  YouTube
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-button theme-soft-hover rounded-none px-3 py-1.5 text-[10px] font-bold transition hover:scale-105"
                >
                  Share on Facebook
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-button theme-soft-hover rounded-none px-3 py-1.5 text-[10px] font-bold transition hover:scale-105"
                >
                  Share on LinkedIn
                </a>
              </div>

              {/* DYNAMIC ARTICLE SECTIONS */}
              <div className="post-content space-y-8 pt-4">
                {post.sections.map((section) => {
                  const isPromptCard = section.heading.toLowerCase().includes("prompt");
                  const promptText = section.paragraphs.join("\n\n");
                  const sectionId = getSectionId(section.heading);

                  if (isPromptCard) {
                    return (
                      <section key={section.heading} className="space-y-4">
                        <h2 
                          id={sectionId}
                          className="theme-text-primary text-xl font-bold font-[family-name:var(--font-heading)]"
                        >
                          {section.heading}
                        </h2>
                        {section.subheading ? (
                          <h3 className="theme-text-secondary text-sm font-semibold">{section.subheading}</h3>
                        ) : null}
                        <div className="theme-surface space-y-3 rounded-none border border-dashed border-cyan-400/30 px-4 py-4 bg-cyan-950/5">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <p className="theme-kicker text-[10px] font-bold uppercase tracking-[0.22em]">AI Prompt Box</p>
                            <CopyButton text={promptText} />
                          </div>
                          <div className="space-y-3">
                            {section.paragraphs.map((paragraph) => (
                              <div 
                                key={paragraph} 
                                className="theme-text-secondary text-xs leading-6"
                                dangerouslySetInnerHTML={{ __html: sanitizeArticleHtml(paragraph) }}
                              />
                            ))}
                          </div>
                        </div>
                      </section>
                    );
                  }

                  return (
                    <section key={section.heading} className="space-y-3">
                      <h2 
                        id={sectionId}
                        className="theme-text-primary text-2xl font-bold font-[family-name:var(--font-heading)] leading-tight pt-2"
                      >
                        {section.heading}
                      </h2>
                      {section.subheading ? (
                        <h3 className="theme-text-secondary text-base font-semibold">{section.subheading}</h3>
                      ) : null}
                      <div className="space-y-4">
                        {section.paragraphs.map((paragraph) => (
                          <div 
                            key={paragraph} 
                            className="theme-text-secondary text-sm leading-7"
                            dangerouslySetInnerHTML={{ __html: sanitizeArticleHtml(paragraph) }}
                          />
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>

              {/* AUTHOR BIO CARD */}
              <div className="mt-12 border-t border-cyan-400/10 pt-8">
                <div className="theme-surface rounded-none p-5 flex flex-col sm:flex-row items-center sm:items-start gap-5 border border-cyan-400/10">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-cyan-400/20">
                    <Image
                      src="/main-logo.png"
                      alt={post.author}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-3 text-center sm:text-left">
                    <div>
                      <h4 className="theme-text-primary text-base font-bold">
                        About the Author: <Link href="/author" className="text-cyan-400 hover:underline">{post.author}</Link>
                      </h4>
                      <p className="theme-text-muted text-[11px] font-semibold uppercase tracking-wider mt-0.5">
                        Founder & Lead Creator
                      </p>
                    </div>
                     <p className="theme-text-secondary text-xs leading-5">
                       Shobhit Verma is a digital creator, educator, and the founder of NB Prompts & VermaBytes. He creates actionable guides on AI tools, ChatGPT prompts, and competitive government exam strategies to help students boost productivity and build successful digital careers.
                     </p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-1">
                      <a href="https://www.youtube.com/@ShobhitManar" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-red-400 text-xs font-semibold transition">
                        YouTube
                      </a>
                      <a href="https://www.instagram.com/vermabanker?igsh=bWN4cGcyYXhkMW8x" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-400 text-xs font-semibold transition">
                        Instagram
                      </a>
                      <a href="https://www.linkedin.com/in/shobhitverma838190/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 text-xs font-semibold transition">
                        LinkedIn
                      </a>                      <a href="https://github.com/VermaBytes" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white text-xs font-semibold transition">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </article>
        </div>

        {/* =========================
            RIGHT COLUMN: STICKY SIDEBAR (Clean Editorial + Glowing AI effects)
        ========================= */}
        <aside className="space-y-5 lg:sticky lg:top-24">
          {tocItems.length > 0 ? (
            <div className="site-panel toc-panel rounded-none px-5 py-4 space-y-3">
              <h3 className="theme-text-primary font-[family-name:var(--font-heading)] text-sm font-bold border-b border-cyan-400/10 pb-2.5">
                Table of Contents
              </h3>
              <nav className="space-y-2 pr-1">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="toc-link block text-[11px] leading-4 text-slate-400 transition hover:text-cyan-300"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          ) : null}
          
          {/* SIDEBAR BLOCK: AI Academy Course CTA */}
          <div className="group relative overflow-hidden rounded-none border border-cyan-400/20 bg-gradient-to-br from-cyan-950/40 to-slate-900/60 p-4.5 shadow-md backdrop-blur-xl transition hover:border-cyan-400/40">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-none bg-cyan-500/10 blur-2xl transition duration-500 group-hover:bg-cyan-500/25" />
            <span className="rounded-none bg-cyan-500/10 border border-cyan-400/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-cyan-300">
              AI Academy Track
            </span>
            <h3 className="theme-text-primary font-[family-name:var(--font-heading)] text-base font-bold mt-2.5">
              Web Development with AI
            </h3>
            <p className="mt-1.5 text-[11px] leading-4.5 text-slate-300">
              Structured lectures to build real skills using AI. Preserving Shobhit's complete Web Dev track!
            </p>
            <Link
              href="/courses/web-development-with-ai"
              className="hero-cta mt-4 flex items-center justify-center rounded-none py-2 text-[11px] font-bold text-white shadow-lg transition hover:scale-105"
            >
              Start Learning Now
            </Link>
          </div>

          {/* SIDEBAR BLOCK: Trending / Recent AI Guides */}
          <div className="site-panel rounded-none p-4.5 space-y-3">
            <h3 className="theme-text-primary font-[family-name:var(--font-heading)] text-sm font-bold border-b border-cyan-400/10 pb-2.5">
              Trending AI Guides
            </h3>
            <div className="space-y-3">
              {relatedPosts.slice(0, 4).map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/post/${entry.slug}`}
                  className="group flex gap-2.5 items-center transition duration-300"
                >
                  <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-none border border-slate-200/10">
                    <Image
                      src={entry.image}
                      alt={entry.title}
                      fill
                      sizes="80px"
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="theme-text-primary text-[11px] font-bold leading-snug line-clamp-2 group-hover:text-cyan-400 transition-colors duration-200">
                      {entry.title}
                    </h4>
                    <span className="theme-text-muted text-[8.5px] uppercase font-bold tracking-wider">
                      {entry.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* SIDEBAR BLOCK: Latest AI Updates */}
          <div className="site-panel rounded-none p-4.5 space-y-3">
            <h3 className="theme-text-primary font-[family-name:var(--font-heading)] text-sm font-bold border-b border-cyan-400/10 pb-2.5">
              Latest AI Updates
            </h3>
            <div className="space-y-3">
              {latestUpdates.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/post/${entry.slug}`}
                  className="group flex gap-2.5 items-center transition duration-300"
                >
                  <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-none border border-slate-200/10">
                    <Image
                      src={entry.image}
                      alt={entry.title}
                      fill
                      sizes="80px"
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="theme-text-primary text-[11px] font-bold leading-snug line-clamp-2 group-hover:text-cyan-400 transition-colors duration-200">
                      {entry.title}
                    </h4>
                    <span className="theme-text-muted text-[8.5px] uppercase font-bold tracking-wider">
                      {entry.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </aside>

      </div>

      {/* =========================
          RELATED POSTS SECTION (Footer of article)
      ========================= */}
      <div className="pt-4">
        <RelatedPosts posts={relatedPosts} currentSlug={post.slug} />
      </div>
    </div>
  );
}
