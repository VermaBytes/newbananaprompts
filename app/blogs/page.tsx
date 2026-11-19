import type { Metadata } from "next";
import { PostsExplorer } from "@/components/posts-explorer";
import { getPostPreviews } from "@/lib/posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blogs | AI Prompts, Reviews & Tools Guides",
  description: "Browse cinematic AI prompts, detailed prompt engineering guides, free AI tool reviews, and productivity articles on NB Prompts.",
  alternates: {
    canonical: "/blogs"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "Blogs | AI Prompts, Reviews & Tools Guides",
    description: "Browse cinematic AI prompts, detailed prompt engineering guides, free AI tool reviews, and productivity articles on NB Prompts.",
    url: `${SITE_URL}/blogs`,
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
    title: "Blogs | AI Prompts, Reviews & Tools Guides",
    description: "Browse cinematic AI prompts, detailed prompt engineering guides, free AI tool reviews, and productivity articles on NB Prompts.",
    images: [`${SITE_URL}/main-logo.png`]
  }
};

export default async function BlogsPage({
  searchParams
}: {
  searchParams?: { query?: string | string[] };
}) {
  const posts = getPostPreviews();
  const resolvedParams = searchParams;
  const rawQuery = resolvedParams?.query;
  const query = Array.isArray(rawQuery) ? rawQuery.join(" ") : rawQuery ?? "";

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">AI Library</p>
        <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-3xl">
          AI Prompts & Tools Blog
        </h1>
      </div>
      <PostsExplorer posts={posts} query={query} />
    </section>
  );
}

