import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/posts";

export function HomeHero({ latestPost }: { latestPost?: BlogPost }) {
  if (!latestPost) return null;

  const date = latestPost.updatedAt ?? latestPost.publishedAt;
  const displayDate = new Date(date).toLocaleDateString("en-GB", {
    year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Kolkata"
  });

  return (
    <section aria-labelledby="featured-article-title" className="relative overflow-hidden rounded-none bg-white dark:bg-slate-950">
      <div className="grid items-center gap-6 p-4 sm:gap-8 sm:p-6 lg:grid-cols-[1.15fr_1fr] lg:p-8">
        <div className="order-last flex min-w-0 flex-col justify-center gap-4 pb-2 sm:gap-5 lg:py-2">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
            <span className="theme-kicker">Featured article</span>
            <span className="rounded-none bg-cyan-500/10 px-3 py-1 text-cyan-700 dark:text-cyan-300">{latestPost.category}</span>
          </div>
          <h1 id="featured-article-title" className="theme-text-primary font-[family-name:var(--font-heading)] text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[2rem]">
            <Link href={`/post/${latestPost.slug}`} className="theme-title-link">{latestPost.title}</Link>
          </h1>
          <p className="theme-text-secondary max-w-xl text-sm leading-7 sm:text-base">{latestPost.description}</p>
          <div className="theme-text-muted flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm">
            <span>By {latestPost.author}</span>
            <span>{latestPost.updatedAt ? "Updated" : "Published"} <time dateTime={date}>{displayDate}</time></span>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Link href={`/post/${latestPost.slug}`} className="inline-flex items-center gap-3 rounded-none bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300">
              Read the guide <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="/blogs" className="theme-title-link theme-text-primary text-sm font-semibold">Explore all articles <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </div>
        <Link href={`/post/${latestPost.slug}`} aria-label={`Read ${latestPost.title}`} className="order-first relative block aspect-video w-full overflow-hidden rounded-none bg-slate-100 dark:bg-slate-900">
          <Image src={latestPost.image} alt={latestPost.imageAlt ?? latestPost.title} fill priority sizes="(max-width: 640px) calc(100vw - 66px), (max-width: 1023px) calc(100vw - 98px), (max-width: 1280px) 52vw, 600px" className="object-contain" />
        </Link>
      </div>
    </section>
  );
}
