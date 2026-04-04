import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { promptCards } from "@/data/prompt-cards";
import { CopyButton } from "@/components/copy-button";

type PromptPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PromptPage({ params }: PromptPageProps) {
  const { slug } = await params;
  const prompt = promptCards.find((card) => card.slug === slug);

  if (!prompt) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl space-y-6">
      <Link href="/prompt" className="theme-button theme-soft-hover inline-flex items-center rounded-sm px-4 py-2 text-sm font-semibold">
        Back to Gallery
      </Link>
      <div className="site-panel overflow-hidden rounded-2xl">
        <div className="relative aspect-video border-b border-slate-200">
          <Image src={prompt.image} alt={prompt.title} fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" />
        </div>
        <div className="space-y-5 px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-wrap items-center gap-2">
            {prompt.tags.map((tag) => (
              <span key={tag} className="theme-chip rounded-full px-3 py-1 text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
            {prompt.title}
          </h1>
          <div className="rounded-2xl border border-dashed border-[#d6c7b6] px-4 py-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="theme-kicker text-xs font-semibold uppercase tracking-[0.22em]">Prompt</p>
              <CopyButton text={prompt.prompt} />
            </div>
            <p className="theme-text-secondary mt-3 text-sm leading-7">{prompt.prompt}</p>
          </div>
          <a
            href={prompt.tryUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-[#159947] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#159947]/25 transition hover:-translate-y-0.5 hover:bg-[#0d7a38]"
          >
            Try This Prompt
          </a>
        </div>
      </div>
    </article>
  );
}
