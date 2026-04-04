import type { Metadata } from "next";
import { PostsExplorer } from "@/components/posts-explorer";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Browse AI prompts, image tools, blogging articles, and online utility guides on NB Prompts.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  }
};

export default async function BlogsPage({
  searchParams
}: {
  searchParams?: Promise<{ query?: string | string[] }>;
}) {
  const posts = getAllPosts();
  const resolvedParams = searchParams ? await searchParams : undefined;
  const rawQuery = resolvedParams?.query;
  const query = Array.isArray(rawQuery) ? rawQuery.join(" ") : rawQuery ?? "";

  return (
    <section className="space-y-5">
      <div className="space-y-2">
      </div>
      <PostsExplorer posts={posts} query={query} />
    </section>
  );
}
