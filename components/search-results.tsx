"use client";

import { useMemo } from "react";
import { PromptCard } from "@/components/prompt-card";
import { PostCard } from "@/components/post-card";
import { promptCards } from "@/data/prompt-cards";
import { getAllPosts } from "@/lib/posts";

export function SearchResults({ query = "" }: { query?: string }) {
  const posts = getAllPosts();
  const normalized = query.trim().toLowerCase();

  const promptMatches = useMemo(() => {
    if (!normalized) return promptCards;
    return promptCards.filter((card) => {
      const text = [card.title, card.prompt, ...(card.tags || [])].join(" ").toLowerCase();
      return text.includes(normalized);
    });
  }, [normalized]);

  const postMatches = useMemo(() => {
    if (!normalized) return posts;
    return posts.filter((post) => {
      const text = [post.title, post.seoTitle, post.description, post.author, ...post.tags].join(" ").toLowerCase();
      return text.includes(normalized);
    });
  }, [normalized, posts]);

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="theme-text-primary text-2xl font-bold">Prompt Results</h2>
          <span className="theme-text-muted text-sm">{promptMatches.length} results</span>
        </div>
        {promptMatches.length ? (
          <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
            {promptMatches.map((card) => (
              <PromptCard key={card.slug} {...card} />
            ))}
          </div>
        ) : (
          <p className="theme-text-secondary">No prompt results found.</p>
        )}
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="theme-text-primary text-2xl font-bold">Blog Results</h2>
          <span className="theme-text-muted text-sm">{postMatches.length} results</span>
        </div>
        {postMatches.length ? (
          <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
            {postMatches.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="theme-text-secondary">No blog results found.</p>
        )}
      </section>
    </div>
  );
}
