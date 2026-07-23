import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home-hero";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";
import { AdsterraNativeBanner } from "@/components/adsterra-native-banner";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "NB Prompts | Professional AI Blog & Creator Tools Guides",
  description:
    "NB Prompts is a professional AI blogging platform offering premium AI prompt ideas, step-by-step image tools tutorials, and AI engineering courses for creators.",
  keywords: [
    "NB Prompts",
    "AI prompts",
    "AI tools blog",
    "blogging tips",
    "midjourney prompts",
    "chatgpt prompts",
    "free online tools",
    "prompt engineering course",
    "creator resources"
  ],
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "NB Prompts | Professional AI Blog & Creator Tools Guides",
    description:
      "Discover cinematic AI prompts, free tools guides, and professional blogging tutorials on NB Prompts — designed for creators, marketers, and bloggers.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/main-logo.png`,
        width: 1792,
        height: 2380,
        alt: `${SITE_NAME} logo`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "NB Prompts | Professional AI Blog & Creator Tools Guides",
    description:
      "Discover cinematic AI prompts, free tools guides, and professional blogging tutorials on NB Prompts — designed for creators, marketers, and bloggers.",
    images: [`${SITE_URL}/main-logo.png`]
  }
};

export default function HomePage() {
  const allPosts = getAllPosts();
  const homePosts = [...allPosts].sort(
    (left, right) =>
      new Date(right.updatedAt ?? right.publishedAt).getTime() -
      new Date(left.updatedAt ?? left.publishedAt).getTime()
  );
  const latestPost = homePosts[0];
  const featuredPosts = homePosts.slice(1, 4);
  const latestPosts = homePosts.slice(1, 7);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://newbananaprompts.in/#website",
        "url": "https://newbananaprompts.in",
        "name": "NB Prompts",
        "description": "NB Prompts is a professional AI blogging platform offering premium AI prompt ideas, step-by-step image tools tutorials, and AI engineering courses for creators.",
        "publisher": {
          "@id": "https://newbananaprompts.in/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://newbananaprompts.in/search?query={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://newbananaprompts.in/#organization",
        "name": "NB Prompts",
        "url": "https://newbananaprompts.in",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://newbananaprompts.in/#logo",
          "url": "https://newbananaprompts.in/main-logo.png",
          "contentUrl": "https://newbananaprompts.in/main-logo.png",
          "caption": "NB Prompts Logo"
        },
        "image": {
          "@id": "https://newbananaprompts.in/#logo"
        },
        "sameAs": [
          "https://www.youtube.com/@ShobhitManar",
          "https://www.instagram.com/vermabanker?igsh=bWN4cGcyYXhkMW8x",
          "https://www.linkedin.com/in/shobhitverma838190/",
          "https://github.com/VermaBytes"
        ]
      }
    ]
  };

  return (
    <div className="space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* =========================
          HERO SECTION
      ========================= */}
      <HomeHero latestPost={latestPost} />

      {/* =========================
          FEATURED BLOGS
      ========================= */}
      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Featured Articles</p>
            <h2 className="theme-text-primary font-[family-name:var(--font-heading)] text-xl font-bold sm:text-2xl">
              Smart guides for AI prompts & tools.
            </h2>
          </div>
          <Link href="/blogs" className="theme-button rounded-none px-3.5 py-2 text-xs font-semibold transition hover:scale-105">
            View All Articles
          </Link>
        </div>
        <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* =========================
          COURSES / ACADEMY
      ========================= */}
      <section id="courses" className="space-y-6">
        <div className="space-y-2">
          <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">AI Academy</p>
          <h2 className="theme-text-primary font-[family-name:var(--font-heading)] text-xl font-bold sm:text-2xl">
            Syllabus-Based Structured AI Courses.
          </h2>
          <p className="theme-text-secondary max-w-2xl text-sm leading-7 sm:text-base">
            Detailed learning paths to master prompt engineering, workflow automation, and AI-powered coding.
          </p>
        </div>
        <div className="content-grid md:grid-cols-2">
          
          {/* TRACK 1 - DEVELOPER TRACK */}
          <Link
            href="/courses/web-development-with-ai"
            className="tool-card group relative overflow-hidden rounded-none p-0"
            aria-label="Open Web Development with AI course"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src="/posts/30dayweb-development.png"
                alt="30 Days Web Development with AI course thumbnail"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="hero-cta inline-flex items-center rounded-none px-4 py-2 text-xs font-semibold text-white shadow-lg">
                  Start Developer Track
                </span>
              </div>
            </div>
            <div className="space-y-2.5 px-4.5 py-4.5">
              <span className="rounded-none bg-cyan-500/10 border border-cyan-400/20 px-2 py-0.5 text-[10px] font-semibold text-cyan-300">
                AI Developers Track
              </span>
              <h3 className="theme-text-primary text-lg font-bold pt-0.5">Web Development with AI (30 Days)</h3>
              <p className="theme-text-secondary text-xs leading-5">
                Learn HTML, CSS, JavaScript, and modern layout structures 10x faster using AI prompts. (Lectures: 08/30 Complete)
              </p>
            </div>
          </Link>

          {/* TRACK 2 - CREATOR TRACK */}
          <div
            className="tool-card group relative overflow-hidden rounded-none p-0 opacity-90 cursor-not-allowed"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src="/posts/image1.png"
                alt="Prompt Engineering course thumbnail"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-orange-500/90 text-white rounded-none px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider shadow-lg">
                  Waitlist Open
                </span>
              </div>
            </div>
            <div className="space-y-2.5 px-4.5 py-4.5">
              <span className="rounded-none bg-orange-500/10 border border-orange-400/20 px-2 py-0.5 text-[10px] font-semibold text-orange-300">
                AI Creators Track
              </span>
              <h3 className="theme-text-primary text-lg font-bold pt-0.5">Prompt Engineering & Automation</h3>
              <p className="theme-text-secondary text-xs leading-5">
                Master Midjourney art style codes, ChatGPT advanced prompt structures, and Zapier/Make AI automations.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ADSTERRA NATIVE BANNER PLACEHOLDER */}
      <AdsterraNativeBanner />

      {/* =========================
          LATEST POSTS
      ========================= */}
      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Latest Updates</p>
            <h2 className="theme-text-primary font-[family-name:var(--font-heading)] text-xl font-bold sm:text-2xl">
              Fresh blog posts and prompt guides.
            </h2>
          </div>
          <Link href="/blogs" className="theme-button rounded-none px-3.5 py-2 text-xs font-semibold transition hover:scale-105">
            Browse All Blogs
          </Link>
        </div>
        <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}

