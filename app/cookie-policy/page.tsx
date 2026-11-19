import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Read the Cookie Policy for ${SITE_NAME}. Learn about how we use cookies and how you can manage your preferences.`,
  alternates: {
    canonical: "/cookie-policy"
  }
};

export default function CookiePolicyPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-6">
      <Link href="/" className="theme-button theme-soft-hover inline-flex items-center rounded-sm px-4 py-2 text-sm font-semibold">
        Back to Home
      </Link>
      <div className="site-panel rounded-2xl px-6 py-8 sm:px-10 sm:py-10 space-y-6">
        <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-3xl">
          Cookie Policy
        </h1>
        <p className="theme-text-muted text-sm">Last updated: August 29, 2026</p>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">1. What Are Cookies?</h2>
          <p className="theme-text-secondary text-sm leading-7">
            Cookies are small text files placed on your device (computer, smartphone, or tablet) by websites you visit. They are widely used to make websites work more efficiently, improve user experience, and provide web analytics to the site owners.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">2. How We Use Cookies</h2>
          <p className="theme-text-secondary text-sm leading-7">
            At {SITE_NAME}, we use cookies to understand how our visitors interact with our content, remember user settings (such as dark mode preferences), and ensure the security and speed of the website. We categorize our cookie usage as follows:
          </p>
          <ul className="list-disc pl-6 theme-text-secondary text-sm leading-7 space-y-1.5">
            <li><strong>Essential Cookies:</strong> Necessary for core site functionality, such as maintaining user preferences and security controls.</li>
            <li><strong>Analytical Cookies:</strong> Help us measure traffic, popular articles, and user behavior using tools like Google Analytics.</li>
            <li><strong>Functional Cookies:</strong> Used to enable features like push notifications (via OneSignal) or embedded media.</li>
            <li><strong>Advertising Cookies:</strong> May be used by advertising partners such as Google AdSense to serve, limit, and measure personalized or non-personalized ads.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">3. Third-Party Cookies on Our Website</h2>
          <p className="theme-text-secondary text-sm leading-7">
            Some cookies are placed by third-party services that appear on our pages. We do not control these cookies directly. Third-party vendors on our site include:
          </p>
          <ul className="list-disc pl-6 theme-text-secondary text-sm leading-7 space-y-1.5">
            <li><strong>Google Analytics:</strong> Collects anonymous usage data to help us optimize page load times and content layout. (Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="theme-kicker hover:underline">Google Privacy & Terms</a>)</li>
            <li><strong>OneSignal:</strong> Used to send push notifications to users who opt-in to receive prompt updates and new blog posts.</li>
            <li><strong>Google AdSense:</strong> Google and its partners may use cookies or similar technologies to serve and measure ads. You can manage personalized ads in <a href="https://adssettings.google.com/" target="_blank" rel="noreferrer" className="theme-kicker hover:underline">Google Ads Settings</a>.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">4. How to Manage and Disable Cookies</h2>
          <p className="theme-text-secondary text-sm leading-7">
            On your first visit, our consent panel lets you accept optional technologies or continue with essential storage only. Essential storage remembers site preferences and your consent choice. Optional analytics, advertising, and push-notification scripts are not loaded unless you select “Accept optional.” You can clear this site&apos;s stored data in your browser to reset the choice.
          </p>
          <p className="theme-text-secondary text-sm leading-7">
            To learn how to manage cookies on popular browsers, visit:
          </p>
          <ul className="list-disc pl-6 theme-text-secondary text-sm leading-7 space-y-1.5">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="theme-kicker hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noreferrer" className="theme-kicker hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noreferrer" className="theme-kicker hover:underline">Apple Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noreferrer" className="theme-kicker hover:underline">Microsoft Edge</a></li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">5. Consent</h2>
          <p className="theme-text-secondary text-sm leading-7">
            Continuing to browse does not count as consent for optional technologies. We record your explicit choice in local storage. If you choose essential only, the site remains available without Google Analytics, AdSense, or OneSignal scripts being loaded by our application.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">6. Contact Us</h2>
          <p className="theme-text-secondary text-sm leading-7">
            If you have any questions about our use of cookies, please contact us via our <Link href="/contact" className="theme-kicker hover:underline">Contact Page</Link> or email us at <span className="theme-text-primary font-semibold">shoverashop@gmail.com</span>.
          </p>
        </section>
      </div>
    </article>
  );
}
