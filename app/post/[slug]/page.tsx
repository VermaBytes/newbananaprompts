import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { RelatedPosts } from "@/components/related-posts";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
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
          url: post.image,
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
      images: [post.image]
    }
  };
}


export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
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
        url: `${SITE_URL}/logo.svg`
      }
    },
    mainEntityOfPage: canonicalUrl
  };

  return (
    <article className="mx-auto max-w-4xl space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="space-y-4">
        <Link
          href="/"
          className="theme-button theme-soft-hover inline-flex items-center rounded-sm px-4 py-2 text-sm font-semibold"
        >
          Back to Home
        </Link>
        <div className="site-panel overflow-hidden rounded-sm">
          <div className="relative aspect-[16/8] border-b border-slate-200">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
          <div className="space-y-6 px-6 py-8 sm:px-10 sm:py-10">
            <div className="theme-text-muted flex flex-wrap items-center gap-3 text-sm">
              <span className="theme-surface theme-kicker rounded-sm px-3 py-1 font-semibold">{post.category}</span>
              <span>{post.dateLabel}</span>
              <span>By {post.author}</span>
            </div>
            <header className="space-y-4">
              <h1 className="theme-text-primary text-balance font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight sm:text-5xl">
                {post.title}
              </h1>
              <p className="theme-text-secondary max-w-3xl text-lg leading-8">{post.description}</p>
            </header>
            {postCta ? (
              <div className="theme-surface space-y-4 rounded-2xl px-4 py-4 text-center">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <span className="theme-text-primary text-base font-semibold">{postCta.label}</span>
                  <a
                    href={postCta.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-[#159947] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#159947]/25 transition hover:-translate-y-0.5 hover:bg-[#0d7a38]"
                  >
                    Click here
                  </a>
                </div>
                {postCta.prompt ? (
                  <div className="rounded-xl border border-dashed border-[#d6c7b6] px-4 py-4 text-left">
                    <p className="theme-kicker text-xs font-semibold uppercase tracking-[0.22em]">Prompt</p>
                    <p className="theme-text-secondary mt-2 text-sm leading-7">{postCta.prompt}</p>
                  </div>
                ) : null}
              </div>
            ) : null}
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                target="_blank"
                rel="noreferrer"
                className="theme-button theme-soft-hover rounded-full px-4 py-2 text-sm font-semibold"
              >
                Share on X
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noreferrer"
                className="theme-button theme-soft-hover rounded-full px-4 py-2 text-sm font-semibold"
              >
                Share on Facebook
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noreferrer"
                className="theme-button theme-soft-hover rounded-full px-4 py-2 text-sm font-semibold"
              >
                Share on LinkedIn
              </a>
            </div>
            <div className="post-content space-y-8">
              {post.sections.map((section) => (
                <section key={section.heading} className="space-y-3">
                  <h2>{section.heading}</h2>
                  {section.subheading ? <h3>{section.subheading}</h3> : null}
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AdPlaceholder />
      <RelatedPosts posts={relatedPosts} currentSlug={post.slug} />
    </article>
  );
}
