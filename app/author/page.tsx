import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Founder | Shobhit Verma",
  description: `Meet Shobhit Verma, the founder of ${SITE_NAME}. Learn about his background in AI prompt engineering, educational blogging, and software development.`,
  alternates: {
    canonical: "/author"
  }
};

export default function AuthorPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-6">
      <Link href="/" className="theme-button theme-soft-hover inline-flex items-center rounded-sm px-4 py-2 text-sm font-semibold">
        Back to Home
      </Link>
      
      {/* Bio Main Section */}
      <div className="site-panel rounded-2xl px-6 py-8 sm:px-10 sm:py-10 space-y-8">
        
        {/* Header Block */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-cyan-400/20 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
            <img
              src="/main-logo.png"
              alt="Shobhit Verma Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Founder & Author</p>
            <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-3xl">
              Shobhit Verma
            </h1>
            <p className="theme-text-secondary text-sm">
              Founder of NB Prompts & VermaBytes • Digital Creator & Educator
            </p>
          </div>
        </div>

        {/* Story Content */}
        <div className="space-y-4 theme-text-secondary text-sm leading-7">
          <p>
            Welcome to {SITE_NAME}! My name is <strong>Shobhit Verma</strong>, and I am a digital creator and educator passionate about technology, educational accessibility, and AI tools. I founded this platform to serve as a comprehensive hub for AI tools, prompts, career advice, and productivity guides.
          </p>
          <p>
            My goal is to provide simple, actionable, and structured advice. I aim to show readers how AI can complement established study methods without replacing official sources, teachers, or independent judgment.
          </p>
          <p>
            I believe responsible AI use requires clear instructions, source checking, and human judgment. That is why I publish free learning tracks alongside guides on prompt engineering, technology, and creator workflows.
          </p>
        </div>

        {/* Social Platforms Row */}
        <div className="space-y-4 pt-4 border-t border-cyan-400/10">
          <h2 className="theme-text-primary text-base font-bold">Connect With Me</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.youtube.com/@ShobhitManar"
              target="_blank"
              rel="noreferrer"
              className="theme-button theme-soft-hover rounded-none px-4 py-2 text-xs font-semibold flex items-center gap-2"
            >
              YouTube (@ShobhitManar)
            </a>
            <a
              href="https://www.instagram.com/vermabanker?igsh=bWN4cGcyYXhkMW8x"
              target="_blank"
              rel="noreferrer"
              className="theme-button theme-soft-hover rounded-none px-4 py-2 text-xs font-semibold flex items-center gap-2"
            >
              Instagram (@vermabanker)
            </a>
            <a
              href="https://www.linkedin.com/in/shobhitverma838190/"
              target="_blank"
              rel="noreferrer"
              className="theme-button theme-soft-hover rounded-none px-4 py-2 text-xs font-semibold flex items-center gap-2"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/VermaBytes"
              target="_blank"
              rel="noreferrer"
              className="theme-button theme-soft-hover rounded-none px-4 py-2 text-xs font-semibold flex items-center gap-2"
            >
              GitHub (VermaBytes)
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
