import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | NB Prompts",
  description:
    "Learn about NB Prompts — a professional prompt library focused on high-quality AI image prompts, clean UI, and practical creator resources."
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-3">
        <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">About Us</p>
        <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
          We build premium AI prompt resources for creators.
        </h1>
        <p className="theme-text-secondary text-base leading-7">
          NB Prompts is a focused library of high‑quality AI image prompts, crafted for creators who want clean results,
          faster workflows, and modern visuals. We combine prompt engineering, design principles, and SEO‑ready content to
          make each prompt publish‑ready.
        </p>
      </div>

      <div className="content-grid md:grid-cols-2">
        <div className="theme-surface rounded-2xl p-6">
          <h2 className="theme-text-primary text-xl font-bold">Our Mission</h2>
          <p className="theme-text-secondary mt-3 text-sm leading-7">
            Make prompt‑to‑image creation simple, professional, and reliable. We believe creators should spend less time
            experimenting and more time publishing.
          </p>
        </div>
        <div className="theme-surface rounded-2xl p-6">
          <h2 className="theme-text-primary text-xl font-bold">What We Offer</h2>
          <ul className="theme-text-secondary mt-3 text-sm leading-7">
            <li>Curated prompt packs for cinematic, devotional, and professional visuals.</li>
            <li>Clean UI with fast browsing and copy‑ready prompts.</li>
            <li>Actionable tips for better AI image results.</li>
          </ul>
        </div>
      </div>

      <div className="theme-surface rounded-2xl p-6">
        <h2 className="theme-text-primary text-xl font-bold">Why Creators Trust Us</h2>
        <p className="theme-text-secondary mt-3 text-sm leading-7">
          We test prompts across popular generators, keep layouts clean, and prioritize clarity. The goal is simple:
          deliver results that look professional and perform well on YouTube, blogs, and social media.
        </p>
      </div>

      <div className="theme-surface rounded-2xl p-6">
        <h2 className="theme-text-primary text-xl font-bold">Contact</h2>
        <p className="theme-text-secondary mt-3 text-sm leading-7">
          For collaborations, prompt requests, or feedback, reach out at
          <span className="theme-text-primary font-semibold"> support@newbananaprompts.in</span>.
        </p>
      </div>
    </section>
  );
}
