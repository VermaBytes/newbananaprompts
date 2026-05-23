"use client";

import { useMemo } from "react";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";

export function SearchResults({ query = "" }: { query?: string }) {
  const posts = getAllPosts();
  const normalized = query.trim().toLowerCase();

  const postMatches = useMemo(() => {
    if (!normalized) return posts;
    return posts.filter((post) => {
      const text = [
        post.title,
        post.seoTitle,
        post.description,
        post.author,
        post.category,
        ...post.tags
      ].join(" ").toLowerCase();
      return text.includes(normalized);
    });
  }, [normalized, posts]);

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="theme-text-primary text-2xl font-bold">
            {normalized ? `Search Results for "${query}"` : "All Articles"}
          </h2>
          <span className="theme-text-muted text-sm">{postMatches.length} results</span>
        </div>
        {postMatches.length ? (
          <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
            {postMatches.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="site-panel rounded-2xl px-6 py-12 text-center">
            <h3 className="theme-text-primary text-xl font-bold">No results found</h3>
            <p className="theme-text-secondary mt-2">Try searching for other terms like "midjourney", "cyberpunk", or "ai tools".</p>
          </div>
        )}
      </section>
    </div>
  );
}

