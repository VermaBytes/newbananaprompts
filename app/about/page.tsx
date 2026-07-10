import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | NB Prompts",
  description:
    "Learn about NB Prompts — a comprehensive AI tools, prompt engineering, and educational prep hub designed for creators, students, and competitive exam aspirants."
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-8">
      {/* Hero Header */}
      <div className="space-y-4">
        <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">About NB Prompts</p>
        <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-4xl">
          Empowering creators, students, and professionals with AI tools & educational resources.
        </h1>
        <p className="theme-text-secondary text-base leading-7">
          {SITE_NAME} (NB Prompts) is a professional, unified digital resource hub. We specialize in providing high-quality AI prompts, ChatGPT and Midjourney workflow guides, online learning tracks, and comprehensive preparation guidance for competitive government examinations in India (such as SSC, UPSC, Banking, and Railways).
        </p>
      </div>

      {/* Niche Pillars */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="theme-surface rounded-none p-6 space-y-3">
          <h2 className="theme-text-primary text-lg font-bold">1. AI Prompt Engineering</h2>
          <p className="theme-text-secondary text-sm leading-6">
            We build and catalog copy-ready prompts for Midjourney, ChatGPT, Claude, and Bing Image Creator. Our focus is helping creators, bloggers, and designers achieve professional visuals and text outputs instantly without endless trial and error.
          </p>
        </div>
        <div className="theme-surface rounded-none p-6 space-y-3">
          <h2 className="theme-text-primary text-lg font-bold">2. Government Exam Guidance</h2>
          <p className="theme-text-secondary text-sm leading-6">
            We provide structured guides, syllabus updates, and digital learning strategies for aspirants preparing for SSC, UPSC, Banking (IBPS/SBI), and Railway recruitment exams. We help combine smart tech with traditional study methods for peak efficiency.
          </p>
        </div>
        <div className="theme-surface rounded-none p-6 space-y-3">
          <h2 className="theme-text-primary text-lg font-bold">3. Student Productivity</h2>
          <p className="theme-text-secondary text-sm leading-6">
            From free online converters (JPG to PNG, background removers) to PDF and document tools, we build and recommend productivity software that saves students time, increases focus, and streamlines college or university assignments.
          </p>
        </div>
        <div className="theme-surface rounded-none p-6 space-y-3">
          <h2 className="theme-text-primary text-lg font-bold">4. Online Learning & Careers</h2>
          <p className="theme-text-secondary text-sm leading-6">
            Through our free **AI Academy** tracks (including our 30-Day Web Development course), we teach modern programming and content creation workflows, showing how to leverage AI to code faster, build side hustles, and launch careers.
          </p>
        </div>
      </div>

      {/* Founder & Mission */}
      <div className="theme-surface rounded-none p-6 space-y-4">
        <h2 className="theme-text-primary text-xl font-bold">Our Philosophy & Editorial Standards</h2>
        <p className="theme-text-secondary text-sm leading-7">
          Founded by developer and educator <strong>Shobhit Verma</strong>, {SITE_NAME} follows a strict editorial policy. We believe in the "AI-Human Hybrid Model" — using technology to handle repetitive drafting while maintaining rigorous human research, fact-checking, and personalization. 
        </p>
        <p className="theme-text-secondary text-sm leading-7">
          Our goal is simple: deliver content that is compliant, useful, trustworthy, and actionable. We are committed to maintaining a fast, ad-safe, and highly responsive mobile-friendly portal.
        </p>
        <div className="pt-2">
          <Link href="/author" className="theme-button inline-flex items-center rounded-sm px-4 py-2 text-xs font-semibold">
            Meet the Founder
          </Link>
        </div>
      </div>

      {/* Support & Contact */}
      <div className="theme-surface rounded-none p-6 space-y-3">
        <h2 className="theme-text-primary text-lg font-bold">Get In Touch</h2>
        <p className="theme-text-secondary text-sm leading-7">
          For educational partnerships, tool requests, or support, please check our <Link href="/contact" className="theme-kicker hover:underline">Contact Page</Link> or send a direct inquiry to <span className="theme-text-primary font-semibold">shoverashop@gmail.com</span>.
        </p>
      </div>
    </section>
  );
}
