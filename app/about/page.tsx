import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about NB Prompts and how it helps readers with AI prompts, image tools, blogging, and online creator resources.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <section className="surface-card rounded-[2rem] px-6 py-10 sm:px-10">
      <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.24em]">About NB Prompts</p>
      <h1 className="theme-text-primary mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight">
        A modern platform for AI prompts, image tools, and blogging resources.
      </h1>
      <div className="theme-text-secondary mt-6 space-y-4 text-base leading-8">
        <p>
          NB Prompts publishes practical prompt ideas, online image tools, and creator-friendly blog content for people who
          want faster workflows and smarter AI-assisted output.
        </p>
        <p>
          The editorial goal is simple: keep the platform clean, useful, and SEO-friendly while helping readers find tools,
          prompts, and publishing ideas that are easy to apply immediately.
        </p>
      </div>
    </section>
  );
}
