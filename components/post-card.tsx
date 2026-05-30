import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/posts";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="prompt-card group flex flex-col h-full overflow-hidden rounded-none border border-cyan-400/5">
      <Link href={`/post/${post.slug}`} className="relative block aspect-[1000/630] overflow-hidden w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
      </Link>
      <div className="prompt-card-body flex-1 flex flex-col justify-between p-4 gap-3">
        <div className="space-y-1.5">
          <p className="theme-text-muted text-[10px] font-semibold uppercase tracking-[0.15em]">{post.dateLabel}</p>
          <h2 className="theme-text-primary font-[family-name:var(--font-heading)] text-sm sm:text-base font-bold leading-snug">
            <Link href={`/post/${post.slug}`} className="theme-title-link">
              {post.title}
            </Link>
          </h2>
        </div>
        <div className="pt-1">
          <Link
            href={`/post/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#06b6d4] hover:text-[#22d3ee] transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
