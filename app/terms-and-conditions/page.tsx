import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Read the Terms and Conditions for using ${SITE_NAME}. Learn about user rights, intellectual property, and terms of service.`,
  alternates: {
    canonical: "/terms-and-conditions"
  }
};

export default function TermsAndConditionsPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-6">
      <Link href="/" className="theme-button theme-soft-hover inline-flex items-center rounded-sm px-4 py-2 text-sm font-semibold">
        Back to Home
      </Link>
      <div className="site-panel rounded-2xl px-6 py-8 sm:px-10 sm:py-10 space-y-6">
        <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
          Terms and Conditions
        </h1>
        <p className="theme-text-muted text-sm">Last Updated: May 2026</p>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">1. Agreement to Terms</h2>
          <p className="theme-text-secondary text-sm leading-7">
            Welcome to {SITE_NAME} (accessible via <a href={SITE_URL} className="theme-kicker hover:underline">{SITE_URL}</a>). By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">2. Use of Content & AI Prompts</h2>
          <p className="theme-text-secondary text-sm leading-7">
            All AI prompts, image prompts, articles, tutorials, and guides published on {SITE_NAME} are provided for educational, inspirational, and informational purposes. You are permitted to copy and use the AI prompts for generating personal or commercial artwork. However, bulk copying, redistributing, or re-selling our compiled database of prompts or articles on other websites without explicit permission is strictly prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">3. Intellectual Property Rights</h2>
          <p className="theme-text-secondary text-sm leading-7">
            Except for the copyable AI prompt strings, all original content, branding, logos, graphics, and layout structures on {SITE_NAME} are the intellectual property of Shobhit Verma and {SITE_NAME}. You may not copy, reproduce, or replicate the site's designs or proprietary content.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">4. Disclaimer of Liability</h2>
          <p className="theme-text-secondary text-sm leading-7">
            Our tutorials, courses, and tools are provided "as is" without warranties of any kind. {SITE_NAME} does not guarantee that the AI tools described will remain free, accessible, or produce specific results. We are not liable for any direct or indirect damages arising from the use of our guides or AI prompts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">5. Third-Party Links</h2>
          <p className="theme-text-secondary text-sm leading-7">
            Our articles and guides may contain links to external third-party websites (such as Midjourney, Bing Image Creator, Leonardo AI, or various affiliate tools). We have no control over the privacy policies, terms, or content of these external sites and bear no responsibility for their operations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">6. Changes to Terms</h2>
          <p className="theme-text-secondary text-sm leading-7">
            We reserve the right to modify these Terms and Conditions at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of the revised terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">7. Contact Information</h2>
          <p className="theme-text-secondary text-sm leading-7">
            If you have any questions or feedback regarding these Terms and Conditions, please contact us via our <Link href="/contact" className="theme-kicker hover:underline">Contact Page</Link>.
          </p>
        </section>
      </div>
    </article>
  );
}
