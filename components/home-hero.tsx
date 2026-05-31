import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/posts";

export function HomeHero({ latestPost }: { latestPost: BlogPost }) {
  if (!latestPost) return null;

  return (
    <section className="relative overflow-hidden border-b border-slate-100 dark:border-cyan-950/20 pb-10 pt-1">
      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        
        {/* LEFT SIDE: MASSIVE THUMBNAIL (SHARP, CROP-FREE) */}
        <Link
          href={`/post/${latestPost.slug}`}
          className="group relative block aspect-[1000/630] overflow-hidden w-full rounded-none border border-slate-200/60 dark:border-cyan-500/10 shadow-[0_10px_25px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.25)] transition-all duration-500"
        >
          <Image
            src={latestPost.image}
            alt={latestPost.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 700px"
            className="object-cover transition duration-700 group-hover:scale-[1.015]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        </Link>

        {/* RIGHT SIDE: EDITORIAL CONTENT (COMPACT & SHARP) */}
        <div className="space-y-2.5 lg:pl-2">
          
          {/* CATEGORY BADGE PILL */}
          <div className="inline-flex items-center gap-1.5 rounded-none bg-cyan-500/10 dark:bg-cyan-500/20 px-2 py-0.5 text-[7.5px] font-extrabold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300 border border-cyan-500/10 dark:border-cyan-400/20 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-none bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
            {latestPost.category}
          </div>

          {/* TITLE */}
          <h1 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl lg:text-[1.55rem] lg:leading-[1.25] font-extrabold tracking-tight text-slate-900 dark:text-white">
            <Link 
              href={`/post/${latestPost.slug}`} 
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
            >
              {latestPost.title}
            </Link>
          </h1>

          {/* DATE & AUTHOR WITH HIGH-FIDELITY ICONS */}
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold text-slate-500 dark:text-slate-400 pt-0.5">
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {latestPost.dateLabel}
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              By {latestPost.author}
            </span>
          </div>

          {/* EXCERPT */}
          <p className="theme-text-secondary text-[11px] leading-relaxed max-w-xl font-medium">
            {latestPost.description}
          </p>

          {/* PREMIUM CAPSULE CTA BUTTON */}
          <div className="pt-1.5">
            <Link
              href={`/post/${latestPost.slug}`}
              className="group inline-flex items-center gap-2 rounded-none bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-3.5 py-2 text-[11px] font-bold shadow-[0_4px_15px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_rgba(56,189,248,0.08)] hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-slate-950 transition-all duration-300 hover:scale-105"
            >
              Read Full Article
              <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}