"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { BlogPost } from "@/lib/posts";
import { PromptCard } from "@/components/prompt-card";
import { PostCardSkeleton } from "@/components/post-card-skeleton";

const filters = ["All", "Image Prompts", "Student Prompts", "God Image Prompts"] as const;

export function PostsExplorer({ posts = [], query = "" }: { posts?: BlogPost[]; query?: string }) {
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("query") ?? "";
  const effectiveQuery = urlQuery || query;
  const [category, setCategory] = useState<(typeof filters)[number]>("All");

  const filteredPosts = useMemo(() => {
    const normalizedQuery = effectiveQuery.trim().toLowerCase();

    return posts.filter((post) => {
      const searchableText = [post.title, post.seoTitle, post.description, post.author, ...post.tags].join(" ").toLowerCase();
      const matchesCategory =
        category === "All" ||
        (category === "Image Prompts" && post.category === "Image Prompts") ||
        (category === "God Image Prompts" &&
          /god|krishna|shiva|mata|devi|durga|ram|hanuman|temple|devotional|spiritual/.test(searchableText)) ||
        (category === "Student Prompts" && /student|study|school|education|exam|notes/.test(searchableText));
      const matchesQuery = normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, posts, effectiveQuery]);

  const visiblePosts = filteredPosts;
  const isLoading = posts.length === 0;

  return (
    <div className="space-y-5">
      <div className="mb-4">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <span className="theme-text-muted mb-2 block text-xs font-bold uppercase tracking-[0.18em]">Category</span>
            <div className="flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setCategory(item);
                  }}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold ${
                    category === item ? "theme-chip-active shadow-sm" : "theme-chip theme-soft-hover"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}
        </div>
      ) : visiblePosts.length > 0 ? (
        <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
          {visiblePosts.map((post) => {
            const promptText =
              post.sections?.[0]?.paragraphs?.join(" ") ||
              post.description ||
              post.title;
            return (
              <PromptCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                image={post.image}
                prompt={promptText}
                tags={[]}
                tryUrl="https://www.bing.com/images/create"
              />
            );
          })}
        </div>
      ) : (
        <div className="site-panel rounded-2xl px-6 py-12 text-center">
          <h2 className="theme-text-primary font-(family-name:--font-heading) text-2xl font-bold">No posts found</h2>
          <p className="theme-text-secondary mt-3">Try a different keyword or switch to another category.</p>
        </div>
      )}
    </div>
  );
}
