import type { Metadata } from "next";
import { PostsExplorer } from "@/components/posts-explorer";
import { getAllPosts, type BlogPost } from "@/lib/posts";
import { promptCards } from "@/data/prompt-cards";

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
  const promptPosts: BlogPost[] = promptCards.map((card, index) => ({
    slug: card.slug,
    title: card.title,
    seoTitle: card.title,
    description: card.prompt,
    category: "Image Prompts",
    author: "NB Prompts",
    publishedAt: new Date(Date.now() - index * 1000 * 60).toISOString(),
    dateLabel: "April 2026",
    image: card.image,
    tags: card.tags.map((tag) => tag.replace("#", "")),
    sections: [
      {
        heading: "Prompt (Copy-Ready)",
        paragraphs: [card.prompt]
      }
    ]
  }));
  const posts = [...getAllPosts(), ...promptPosts];
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
