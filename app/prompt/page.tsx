import { PromptCard } from "@/components/prompt-card";
import { promptCards } from "@/data/prompt-cards";

export default function PromptGridPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Prompt Gallery</p>
        <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
          Prompt-to-Image Inspiration
        </h1>
        <p className="theme-text-secondary max-w-2xl text-sm leading-7 sm:text-base">
          Explore modern prompts, copy them instantly, and try them in your favorite AI image generator.
        </p>
      </div>
      <div className="content-grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {promptCards.map((card) => (
          <PromptCard key={card.slug} {...card} />
        ))}
      </div>
    </section>
  );
}
