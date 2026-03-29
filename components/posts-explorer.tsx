"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/posts";
import { PostCard } from "@/components/post-card";
import { PostCardSkeleton } from "@/components/post-card-skeleton";

const filters = ["All", "AI Tools", "Earn Money", "Images Prompt", "Student Prompt", "Videos Prompt"] as const;
const POSTS_PER_PAGE = 6;

export function PostsExplorer({ posts = [], query = "" }: { posts?: BlogPost[]; query?: string }) {
  const [category, setCategory] = useState<(typeof filters)[number]>("All");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts.filter((post) => {
      const searchableText = [post.title, post.seoTitle, post.description, post.author, ...post.tags].join(" ").toLowerCase();
      const matchesCategory =
        category === "All" ||
        (category === "AI Tools" && post.category === "AI Tools") ||
        (category === "Earn Money" && post.category === "Earn Money") ||
        (category === "Images Prompt" && post.category === "Image Prompts") ||
        (category === "Videos Prompt" && post.category === "Video Prompts") ||
        (category === "Student Prompt" && /student|study|school|education/.test(searchableText));
      const matchesQuery = normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, posts, query]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredPosts.length;
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
                    setVisibleCount(POSTS_PER_PAGE);
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
      <div className="theme-surface flex flex-col gap-2 rounded-2xl px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="theme-text-secondary font-medium">
          Showing {visiblePosts.length} of {filteredPosts.length} posts
        </p>
        <p className="theme-text-muted">Browse {category === "All" ? "all prompts" : category}</p>
      </div>
      {isLoading ? (
        <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}
        </div>
      ) : visiblePosts.length > 0 ? (
        <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
          {visiblePosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="site-panel rounded-2xl px-6 py-12 text-center">
          <h2 className="theme-text-primary font-(family-name:--font-heading) text-2xl font-bold">No posts found</h2>
          <p className="theme-text-secondary mt-3">Try a different keyword or switch to another category.</p>
        </div>
      )}
      {canLoadMore ? (
        <div>
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + POSTS_PER_PAGE)}
            className="theme-button theme-soft-hover rounded-xl px-5 py-3 text-sm font-semibold"
          >
            Load More Posts
          </button>
        </div>
      ) : null}
    </div>
  );
}
