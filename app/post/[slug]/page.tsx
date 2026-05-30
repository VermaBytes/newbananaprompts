import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { CopyButton } from "@/components/copy-button";
import { RelatedPosts } from "@/components/related-posts";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found"
    };
  }

  const canonicalUrl = `${SITE_URL}/post/${post.slug}`;
  const keywords = Array.from(
    new Set([
      ...post.tags,
      post.category,
      post.title,
      "AI prompts",
      "free online tools",
      "blogging tips",
      "image tools"
    ]).values()
  );

  return {
    title: post.seoTitle,
    description: post.description,
    keywords,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      url: canonicalUrl,
      type: "article",
      siteName: SITE_NAME,
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: `${SITE_URL}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.description,
      images: [`${SITE_URL}${post.image}`]
    }
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category);
  const canonicalUrl = `${SITE_URL}/post/${post.slug}`;
  const encodedTitle = encodeURIComponent(post.title);
  const encodedUrl = encodeURIComponent(canonicalUrl);

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seoTitle,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`
      }
    },
    mainEntityOfPage: canonicalUrl
  };

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* =========================
          BACK BUTTON
      ========================= */}
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
        <div className="space-y-8">
          <article className="site-panel overflow-hidden rounded-none shadow-lg border border-cyan-400/10 dark:border-white/10">
            
            {/* FEATURED IMAGE */}
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-cyan-400/10 dark:border-white/10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 850px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/50 to-transparent" />
            </div>

            {/* ARTICLE CONTENTS */}
            <div className="space-y-5 px-5 py-6 sm:px-8 sm:py-8">
              
              {/* METADATA CHIPS */}
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-wider">
                <span className="rounded-none bg-cyan-500/10 border border-cyan-400/20 px-2.5 py-0.5 text-cyan-300">
                  {post.category}
                </span>
                <span className="theme-text-muted">{post.dateLabel}</span>
                <span className="theme-text-muted">By {post.author}</span>
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
                  href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-button theme-soft-hover rounded-none px-3 py-1.5 text-[10px] font-bold transition hover:scale-105"
                >
                  Share on X
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

                  if (isPromptCard) {
                    return (
                      <section key={section.heading} className="space-y-4">
                        <h2 className="theme-text-primary text-xl font-bold font-[family-name:var(--font-heading)]">
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
                              <p key={paragraph} className="theme-text-secondary text-xs leading-6">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </section>
                    );
                  }

                  return (
                    <section key={section.heading} className="space-y-3">
                      <h2 className="theme-text-primary text-2xl font-bold font-[family-name:var(--font-heading)] leading-tight pt-2">
                        {section.heading}
                      </h2>
                      {section.subheading ? (
                        <h3 className="theme-text-secondary text-base font-semibold">{section.subheading}</h3>
                      ) : null}
                      <div className="space-y-4">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="theme-text-secondary text-sm leading-7">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>

            </div>
          </article>

          {/* AD / PROMOTION PLACEHOLDER */}
          <AdPlaceholder />
        </div>

        {/* =========================
            RIGHT COLUMN: STICKY SIDEBAR (Clean Editorial + Glowing AI effects)
        ========================= */}
        <aside className="space-y-5 lg:sticky lg:top-24">
          
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

          {/* SIDEBAR BLOCK: Subscription Box */}
          <div className="site-panel rounded-none p-4.5 space-y-3">
            <h3 className="theme-text-primary font-[family-name:var(--font-heading)] text-sm font-bold">
              Join AI Newsletter
            </h3>
            <p className="theme-text-secondary text-[11px] leading-4.5">
              Copy-ready Midjourney prompt bundles and fresh AI tools directly in your inbox.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-none border border-cyan-400/20 bg-white/5 px-3.5 py-2 text-xs text-white outline-none focus:border-cyan-400"
              />
              <button
                type="button"
                className="w-full rounded-none bg-gradient-to-r from-cyan-500 to-blue-500 py-2 text-[11px] font-bold text-white shadow-lg transition hover:scale-105"
              >
                Subscribe Now
              </button>
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
