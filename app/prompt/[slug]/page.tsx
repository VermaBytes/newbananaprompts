import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { promptCards } from "@/data/prompt-cards";
import { CopyButton } from "@/components/copy-button";

type PromptPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: PromptPageProps): Promise<Metadata> {
  const prompt = promptCards.find((card) => card.slug === params.slug);

  return {
    title: prompt?.title ?? "Prompt not found",
    description: prompt
      ? `Copy the ${prompt.title} AI image prompt and adapt it for your own creative project.`
      : undefined,
    robots: { index: false, follow: true }
  };
}

export default async function PromptPage({ params }: PromptPageProps) {
  const { slug } = params;
  const prompt = promptCards.find((card) => card.slug === slug);

  if (!prompt) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl space-y-5">
      <Link href="/prompt" className="theme-button theme-soft-hover inline-flex items-center rounded-none px-3.5 py-1.5 text-xs font-semibold">
        Back to Gallery
      </Link>
      <div className="site-panel overflow-hidden rounded-none">
        <div className="post-featured-image-frame relative aspect-[1000/630] overflow-hidden border-b border-slate-200">
          <Image
            src={prompt.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="post-featured-image-backdrop object-cover"
            aria-hidden="true"
          />
          <Image
            src={prompt.image}
            alt={prompt.title}
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="post-featured-image-main object-contain"
          />
        </div>
        <div className="space-y-4 px-5 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-wrap items-center gap-1.5">
            {prompt.tags.map((tag) => (
              <span key={tag} className="theme-chip rounded-none px-2.5 py-0.5 text-[10px] font-semibold">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-xl font-bold sm:text-2xl">
            {prompt.title}
          </h1>
          <div className="rounded-none border border-dashed border-[#d6c7b6] px-3.5 py-3.5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="theme-kicker text-[10px] font-semibold uppercase tracking-[0.22em]">Prompt</p>
              <CopyButton text={prompt.prompt} />
            </div>
            <p className="theme-text-secondary mt-2.5 text-xs leading-6">{prompt.prompt}</p>
          </div>
          <a
            href={prompt.tryUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-none bg-[#159947] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#159947]/25 transition hover:-translate-y-0.5 hover:bg-[#0d7a38]"
          >
            Try This Prompt
          </a>
        </div>
      </div>
    </article>
  );
}
