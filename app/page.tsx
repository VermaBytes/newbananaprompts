import type { Metadata } from "next";
import Link from "next/link";
import { PromptCard } from "@/components/prompt-card";
import { promptCards } from "@/data/prompt-cards";

export const metadata: Metadata = {
  title: "NB Prompts | AI Blog, Free Online Tools & Image Tips",
  description:
    "NB Prompts is a creator-first website with AI prompt ideas, free online image tools, blogging guides, and SEO-friendly content for smarter online workflows.",
  keywords: [
    "NB Prompts",
    "AI prompts",
    "free online tools",
    "blogging tips",
    "image converter",
    "image compressor",
    "background remover",
    "SEO blog",
    "content ideas",
    "AI image tools",
    "JPG to PNG",
    "online image editor",
    "blogging ideas",
    "creator resources"
  ],
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  },
  openGraph: {
    title: "NB Prompts | AI Blog, Free Online Tools & Image Tips",
    description:
      "Discover AI prompt ideas, free image tools, and blogging guides on NB Prompts — made for creators, bloggers, and marketers.",
    url: "https://newbananaprompts.in",
    siteName: "NB Prompts",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "NB Prompts | AI Blog, Free Online Tools & Image Tips",
    description:
      "Discover AI prompt ideas, free image tools, and blogging guides on NB Prompts — made for creators, bloggers, and marketers."
  }
};

export default function HomePage() {
  const featuredPrompts = promptCards.slice(0, 3);
  const latestPrompts = promptCards.slice(0, 6);

  return (
    <div className="space-y-14">
      <section className="space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Featured Blog Posts</p>
            <h2 className="theme-text-primary font-(family-name:--font-heading) text-3xl font-bold sm:text-4xl">
              Smart articles for tools, prompts, and blogging.
            </h2>
          </div>
          <Link href="/blogs" className="theme-button rounded-xl px-5 py-3 text-sm font-semibold">
            All Posts
          </Link>
        </div>
        <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
          {featuredPrompts.map((card) => (
            <PromptCard key={card.slug} {...card} />
          ))}
        </div>
      </section>

      <section id="courses" className="space-y-5">
        <div className="space-y-2">
          <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Courses</p>
          <h2 className="theme-text-primary font-(family-name:--font-heading) text-3xl font-bold sm:text-4xl">
            Lecture-based learning with AI.
          </h2>
          <p className="theme-text-secondary max-w-2xl text-sm leading-7 sm:text-base">
            Structured lessons to build real skills with AI assistance.
          </p>
        </div>
        <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
          <div className="tool-card rounded-[1.5rem] p-5">
            <p className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">Course</p>
            <h3 className="theme-text-primary mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold">
              Web Development with AI
            </h3>
            <p className="theme-text-secondary mt-3 text-sm leading-7">
              Learn modern front‑end and full‑stack workflows using AI for speed, quality, and debugging.
            </p>
          </div>
          <div className="tool-card rounded-[1.5rem] p-5">
            <p className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">Course</p>
            <h3 className="theme-text-primary mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold">
              Python Learning with AI
            </h3>
            <p className="theme-text-secondary mt-3 text-sm leading-7">
              Master Python fundamentals and projects with AI‑guided explanations and practice.
            </p>
          </div>
          <div className="tool-card rounded-[1.5rem] p-5">
            <p className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">Course</p>
            <h3 className="theme-text-primary mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold">
              Learn Prompt Engineering with AI
            </h3>
            <p className="theme-text-secondary mt-3 text-sm leading-7">
              Build strong prompt skills for image, writing, and productivity workflows with real examples.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Latest Posts</p>
            <h2 className="theme-text-primary font-(family-name:--font-heading) text-3xl font-bold sm:text-4xl">
              Fresh blog posts and tool guides.
            </h2>
          </div>
          <Link href="/blogs" className="theme-button rounded-xl px-5 py-3 text-sm font-semibold">
            Browse Blog
          </Link>
        </div>
        <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
          {latestPrompts.map((card) => (
            <PromptCard key={card.slug} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}
