import type { BlogPost } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export function RelatedPosts({ posts, currentSlug }: { posts: BlogPost[]; currentSlug: string }) {
  const filteredPosts = posts.filter((post) => post.slug !== currentSlug).slice(0, 3);

  if (filteredPosts.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="related-posts" className="space-y-5">
      <div className="space-y-2">
        <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.24em]">Keep Reading</p>
        <h2 id="related-posts" className="theme-text-primary font-[family-name:var(--font-heading)] text-3xl font-bold">
          Related Posts
        </h2>
      </div>
      <div className="content-grid">
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
