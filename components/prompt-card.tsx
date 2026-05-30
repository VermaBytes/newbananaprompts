"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type PromptCardProps = {
  slug: string;
  title: string;
  image: string;
  prompt: string;
  tags?: string[];
  tryUrl: string;
};

export function PromptCard({ slug, title, image, prompt, tags = [], tryUrl }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="group overflow-hidden rounded-none border border-slate-200/60 bg-white shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-[#1c1511]">
      <Link href={`/prompt/${slug}`} className="relative block aspect-[1000/630] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
      </Link>
      <div className="space-y-3 px-4 py-4">
        <div className="space-y-1.5">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
          {tags.length ? (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-none bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="relative rounded-none border border-dashed border-slate-200 bg-slate-50 px-3 py-3 dark:border-white/15 dark:bg-white/5">
          <button
            type="button"
            onClick={handleCopy}
            className="absolute right-2 top-2 rounded-none bg-orange-300 px-2 py-0.5 text-[10px] font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 dark:bg-white/10 dark:text-white"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <p className="line-clamp-3 text-xs leading-5 text-slate-600 dark:text-slate-200">{prompt}</p>
        </div>
        <div className="flex items-center justify-between pt-0.5">
          <Link href={`/prompt/${slug}`} className="text-xs font-bold text-slate-700 hover:text-orange-500 hover:text-underline">
            Read More →
          </Link>
          <a
            href={tryUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-none bg-green-600 px-3 py-1.5 text-[11px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-yellow-200 hover:text-black"
          >
            Try It
          </a>
        </div>
      </div>
    </article>
  );
}
