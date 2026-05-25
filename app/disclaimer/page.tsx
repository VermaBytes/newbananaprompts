import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Read the Disclaimer for ${SITE_NAME}. Learn about content limitations, external links, and liability policies.`,
  alternates: {
    canonical: "/disclaimer"
  }
};

export default function DisclaimerPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-6">
      <Link href="/" className="theme-button theme-soft-hover inline-flex items-center rounded-sm px-4 py-2 text-sm font-semibold">
        Back to Home
      </Link>
      <div className="site-panel rounded-2xl px-6 py-8 sm:px-10 sm:py-10 space-y-6">
        <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-3xl">
          Disclaimer
        </h1>
        <p className="theme-text-muted text-sm">Last Updated: May 2026</p>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">1. General Information Only</h2>
          <p className="theme-text-secondary text-sm leading-7">
            The content provided on {SITE_NAME} (located at <a href={SITE_URL} className="theme-kicker hover:underline">{SITE_URL}</a>) is for general informational, educational, and inspirational purposes only. While we endeavor to keep all information up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, reliability, suitability, or availability of the website or the information, products, or AI tools mentioned.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">2. AI Prompts and Output Disclaimer</h2>
          <p className="theme-text-secondary text-sm leading-7">
            The AI prompts listed on this website are designed to be used in third-party artificial intelligence engines (like Midjourney, ChatGPT, Claude, Bing Image Creator, etc.). Because AI generation algorithms are highly dynamic and constantly changing, {SITE_NAME} cannot guarantee that these prompts will produce the identical style, quality, or visual outputs shown on our blog. All prompt outputs are subject to the respective platform's policies and algorithms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">3. External Links Disclaimer</h2>
          <p className="theme-text-secondary text-sm leading-7">
            Through this website, you are able to link to other websites which are not under the control of {SITE_NAME}. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">4. Advertising and Affiliate Disclosure</h2>
          <p className="theme-text-secondary text-sm leading-7">
            {SITE_NAME} may display advertisements from third-party networks, including Google AdSense, to support the operation of this site. Additionally, we may include affiliate links in some of our review guides. Clicking on or purchasing products through these links may earn us a small commission at no additional cost to you.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">5. Limitation of Liability</h2>
          <p className="theme-text-secondary text-sm leading-7">
            In no event will {SITE_NAME} or its author Shobhit Verma be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">6. Consent</h2>
          <p className="theme-text-secondary text-sm leading-7">
            By using our website, you hereby consent to our disclaimer and agree to its terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">7. Contact Us</h2>
          <p className="theme-text-secondary text-sm leading-7">
            Should you require any more information or have any questions about our site's disclaimer, please feel free to contact us via our <Link href="/contact" className="theme-kicker hover:underline">Contact Page</Link>.
          </p>
        </section>
      </div>
    </article>
  );
}
