import type { Metadata } from "next";
import { PostsExplorer } from "@/components/posts-explorer";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blogs | AI Prompts, Reviews & Tools Guides",
  description: "Browse cinematic AI prompts, detailed prompt engineering guides, free AI tool reviews, and productivity articles on NB Prompts.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  }
};

export default async function BlogsPage({
  searchParams
}: {
  searchParams?: { query?: string | string[] };
}) {
  const posts = getAllPosts();
  const resolvedParams = searchParams;
  const rawQuery = resolvedParams?.query;
  const query = Array.isArray(rawQuery) ? rawQuery.join(" ") : rawQuery ?? "";

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">AI Library</p>
        <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
          AI Prompts & Tools Blog
        </h1>
        <p className="theme-text-secondary max-w-2xl text-sm leading-7 sm:text-base">
          High-quality articles, step-by-step AI tool tutorials, and copy-ready image prompts to skyrocket your productivity.
        </p>
      </div>
      <PostsExplorer posts={posts} query={query} />
    </section>
  );
}

