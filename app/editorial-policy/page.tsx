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
        <p className="theme-text-muted text-sm">Last updated: August 29, 2026</p>

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
            <li><strong>AI prompts:</strong> We edit prompts for clarity and label examples as inspiration, not guaranteed outputs. Results vary by model, version, settings, and input image.</li>
            <li><strong>Exam and career information:</strong> Time-sensitive claims should link to the responsible organization where practical. Readers must verify dates, eligibility, syllabus, and applications on the official portal.</li>
            <li><strong>Tool guides:</strong> We distinguish documented features from our own observations. Prices, free plans, limits, and availability must be checked on the provider&apos;s website before purchase or use.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">3. Human-in-the-Loop Content Creation</h2>
          <p className="theme-text-secondary text-sm leading-7">
            Generative AI may assist with brainstorming, outlines, or language editing. The named author remains responsible for selecting the topic, reviewing the draft, checking important claims, adding context, and deciding what is published. We do not treat an AI-generated answer as a source.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">4. Regular Content Audits & Updates</h2>
          <p className="theme-text-secondary text-sm leading-7">
            Technology and examination information changes quickly. An article&apos;s updated date is changed only after a meaningful editorial review. Older pages may still contain outdated details; readers can use the correction channel below to flag them.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">5. Correction & Feedback Policy</h2>
          <p className="theme-text-secondary text-sm leading-7">
            If you notice a typo, outdated link, incorrect claim, or broken prompt, send the page URL and supporting source through our <Link href="/contact" className="theme-kicker hover:underline">Contact Page</Link>. We review specific, verifiable reports and correct confirmed errors as soon as practical.
          </p>
        </section>
      </div>
    </article>
  );
}
