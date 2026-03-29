import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/posts";

function isTrending(post: BlogPost) {
  const publishedAt = new Date(post.publishedAt).getTime();
  const daysSincePublish = (Date.now() - publishedAt) / (1000 * 60 * 60 * 24);
  return daysSincePublish <= 21;
}

export function PostCard({ post }: { post: BlogPost }) {
  const trending = isTrending(post);

  return (
    <article className="prompt-card group overflow-hidden rounded-[1.6rem]">
      <Link href={`/post/${post.slug}`} className="relative block aspect-video overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
      </Link>
      <div className="prompt-card-body flex flex-1 flex-col gap-3 px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <p className="theme-text-muted text-xs font-medium uppercase tracking-[0.18em]">{post.dateLabel}</p>
          <span className="card-category rounded-full px-3 py-1 text-xs font-semibold">{post.category}</span>
          {trending ? <span className="card-badge rounded-full px-3 py-1 text-xs font-semibold">Trending</span> : null}
        </div>
        <h2 className="theme-text-primary font-(family-name:--font-heading) text-xl font-bold leading-tight sm:text-2xl">
          <Link href={`/post/${post.slug}`} className="theme-title-link">
            {post.title}
          </Link>
        </h2>
        <div className="pt-1">
          <Link
            href={`/post/${post.slug}`}
            className="prompt-read-more inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}
