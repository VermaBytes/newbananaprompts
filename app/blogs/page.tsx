import type { Metadata } from "next";
import { PostsExplorer } from "@/components/posts-explorer";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Browse AI prompts, image tools, blogging articles, and online utility guides on NB Prompts."
};

export default function BlogsPage() {
  const posts = getAllPosts();

  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Blogs Library</p>
        <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
          Browse prompts, tools, and creator posts.
        </h1>
        <p className="theme-text-secondary max-w-2xl text-sm leading-7 sm:text-base">
          Search posts, filter by topic, and explore a cleaner library of AI prompts, image tools, and blogging guides.
        </p>
      </div>
      <PostsExplorer posts={posts} />
    </section>
  );
}
