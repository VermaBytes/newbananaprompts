import Image from "next/image";
import Link from "next/link";
import type { PostPreview } from "@/lib/posts";

export function PostCard({ post }: { post: PostPreview }) {
  const date = post.updatedAt ?? post.publishedAt;
  const displayDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kolkata"
  });

  return (
    <article className="prompt-card group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 transition-shadow hover:shadow-lg dark:border-cyan-900/30">
      <Link href={`/post/${post.slug}`} className="relative block aspect-[1000/630] w-full overflow-hidden">
        <Image src={post.image} alt={post.imageAlt ?? post.title} fill loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]" />
      </Link>
      <div className="prompt-card-body flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="theme-kicker font-semibold">{post.category}</span>
          <time dateTime={date} className="theme-text-muted">{post.updatedAt ? "Updated " : ""}{displayDate}</time>
        </div>
        <h2 className="theme-text-primary font-[family-name:var(--font-heading)] text-lg font-bold leading-snug">
          <Link href={`/post/${post.slug}`} className="theme-title-link">{post.title}</Link>
        </h2>
        <p className="theme-text-secondary line-clamp-3 text-sm leading-6">{post.description}</p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
          <span className="theme-text-muted text-xs">{post.author}</span>
          <Link href={`/post/${post.slug}`} className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-600 dark:text-cyan-400">Read article <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </div>
    </article>
  );
}
