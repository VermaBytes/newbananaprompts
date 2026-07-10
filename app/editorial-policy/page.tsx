import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: `Read the Editorial Policy for ${SITE_NAME}. Learn about our content standards, fact-checking, and editorial guidelines.`,
  alternates: {
    canonical: "/editorial-policy"
  }
};

export default function EditorialPolicyPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-6">
      <Link href="/" className="theme-button theme-soft-hover inline-flex items-center rounded-sm px-4 py-2 text-sm font-semibold">
        Back to Home
      </Link>
      <div className="site-panel rounded-2xl px-6 py-8 sm:px-10 sm:py-10 space-y-6">
        <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-3xl">
          Editorial Policy
        </h1>
        <p className="theme-text-muted text-sm">Last Updated: July 2026</p>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">1. Editorial Philosophy & Purpose</h2>
          <p className="theme-text-secondary text-sm leading-7">
            At {SITE_NAME}, our mission is to deliver high-quality, practical, and highly relevant resources for creators, students, and professionals. Our content spans AI prompts, digital workflow guides, developer tutorials, and academic/career exam preparation guidelines. All published materials are intended strictly for educational, informational, and career advancement purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">2. Research & Fact-Checking Standards</h2>
          <p className="theme-text-secondary text-sm leading-7">
            We hold our publications to a high standard of accuracy:
          </p>
          <ul className="list-disc pl-6 theme-text-secondary text-sm leading-7 space-y-1.5">
            <li><strong>AI Prompt Testing:</strong> Every prompt published in our database is tested across multiple AI model variants (such as Midjourney, ChatGPT, Gemini, etc.) to ensure they generate useful and aesthetically pleasing results before listing.</li>
            <li><strong>Exam & Career Information:</strong> Any information relating to public examinations (like SSC, UPSC, Banking, or Railways) is compiled from official government websites. We strive to check syllabus updates, dates, and instructions, but we encourage our users to cross-verify all details on official portals.</li>
            <li><strong>Tool Reviews:</strong> Our software and tool recommendations are based on practical usage, feature testing, and developer feedback to ensure they provide authentic value.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">3. Human-in-the-Loop Content Creation</h2>
          <p className="theme-text-secondary text-sm leading-7">
            We follow a strict <strong>AI-Human Hybrid Model</strong>. While we leverage generative AI tools to assist in outlining, structuring, and brainstorming drafts, we do not publish low-value, automated, or copy-paste AI outputs. Every article is written, reviewed, fact-checked, and expanded by human editors. This process ensures that the voice remains authentic, formatting is clean, and the content provides original value to our readers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">4. Regular Content Audits & Updates</h2>
          <p className="theme-text-secondary text-sm leading-7">
            The tech and academic worlds move fast. We conduct regular reviews of our older articles, updates to prompt syntax, and revisions to exam prep guides to maintain relevance. Major edits or corrections are recorded silently, and article dates may be updated to reflect the latest audit.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">5. Correction & Feedback Policy</h2>
          <p className="theme-text-secondary text-sm leading-7">
            We strive for accuracy but acknowledge that errors can happen. If you notice a typo, an outdated link, an incorrect syllabus reference, or a broken prompt, please reach out to us immediately via our <Link href="/contact" className="theme-kicker hover:underline">Contact Page</Link>. We aim to review and correct verified issues within 48 business hours.
          </p>
        </section>
      </div>
    </article>
  );
}
