
import { getImageDimensions } from "@/lib/image-dimensions";
import { getPostModifiedDate, hasPostUpdate } from "@/lib/post-dates";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/posts";

export function HomeHero({ latestPost }: { latestPost?: BlogPost }) {
  if (!latestPost) return null;

  const date = getPostModifiedDate(latestPost);
  const displayDate = new Date(date).toLocaleDateString("en-GB", {
    year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Kolkata"
  });

  return (
    <section aria-labelledby="featured-article-title" className="relative bg-transparent">
      <div className="grid items-center gap-6 py-4 sm:gap-8 sm:py-6 lg:grid-cols-[1.15fr_1fr] lg:py-8">
        <div className="order-last flex min-w-0 flex-col justify-center gap-4 pb-2 sm:gap-5 lg:py-2">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
            <span className="text-xs font-bold text-slate-500">Featured article</span>
            <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-slate-600">{latestPost.category}</span>
          </div>
          <h1 id="featured-article-title" className="font-[family-name:var(--font-heading)] text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl lg:text-[2rem]">
            <Link href={`/post/${latestPost.slug}`} className="!text-black transition-colors hover:!text-slate-700">{latestPost.title}</Link>
          </h1>
          <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">{latestPost.description}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 sm:text-sm">
            <span>By {latestPost.author}</span>
            <span>{hasPostUpdate(latestPost) ? "Updated" : "Published"} <time dateTime={date}>{displayDate}</time></span>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Link href={`/post/${latestPost.slug}`} className="inline-flex items-center gap-3 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
              Read the guide <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="/blogs" className="text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900">Explore all articles <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </div>
        <Link href={`/post/${latestPost.slug}`} aria-label={`Read ${latestPost.title}`} className="order-first relative block aspect-video w-full overflow-hidden rounded-xl bg-slate-900 ring-1 ring-white/10">
          <Image src={latestPost.image} alt={latestPost.imageAlt ?? latestPost.title} {...getImageDimensions(latestPost.image)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} loading="lazy" sizes="(max-width: 640px) calc(100vw - 66px), (max-width: 1023px) calc(100vw - 98px), (max-width: 1280px) 52vw, 600px" className="object-cover" />
        </Link>
      </div>
    </section>
  );
}
