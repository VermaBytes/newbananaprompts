import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy for NB Prompts, detailing information collection, cookies, Google Analytics, third-party advertising, and user rights.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-6">
      <Link href="/" className="theme-button theme-soft-hover inline-flex items-center rounded-sm px-4 py-2 text-sm font-semibold">
        Back to Home
      </Link>
      <div className="site-panel rounded-2xl px-6 py-8 sm:px-10 sm:py-10 space-y-6">
        <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-3xl">
          Privacy Policy
        </h1>
        <p className="theme-text-muted text-sm">Last Updated: September 1, 2026</p>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">1. Introduction</h2>
          <p className="theme-text-secondary text-sm leading-7">
            At {SITE_NAME}, accessible from <a href="https://newbananaprompts.in" className="theme-kicker hover:underline">https://newbananaprompts.in</a>, the privacy of our visitors is one of our main priorities. This Privacy Policy document contains types of information that is collected and recorded by {SITE_NAME} and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">2. Log Files</h2>
          <p className="theme-text-secondary text-sm leading-7">
            {SITE_NAME} follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and are part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">3. Cookies and Web Beacons</h2>
          <p className="theme-text-secondary text-sm leading-7">
            Like any other website, {SITE_NAME} uses cookies. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information. For more detailed information on cookies, please read our <Link href="/cookie-policy" className="theme-kicker hover:underline">Cookie Policy</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">4. Analytics & Push Notifications</h2>
          <p className="theme-text-secondary text-sm leading-7">
            We use third-party tools to improve the functional experience of our site:
          </p>
          <ul className="list-disc pl-6 theme-text-secondary text-sm leading-7 space-y-1.5">
            <li><strong>Google Analytics:</strong> We use Google Analytics (G-CFRHNCTG1G) to understand user engagement, bounce rates, and traffic sources. Google Analytics uses cookies to collect anonymous metadata.</li>
            <li><strong>OneSignal Push Notifications:</strong> Users who opt-in to receive updates will have a push notification token processed by OneSignal. No personal identifiers are stored unless volunteered.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">5. Advertising Partner Privacy Policies (Google AdSense)</h2>
          <p className="theme-text-secondary text-sm leading-7">
            Third-party ad servers or ad networks may use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on {SITE_NAME}, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their campaigns and/or to personalize the advertising content.
          </p>
          <p className="theme-text-secondary text-sm leading-7">
            <strong>Google AdSense:</strong> Our site loads Google AdSense advertising technology. Google and its partners may use cookies or similar technologies to serve, measure, and personalize ads, or to serve non-personalized ads where applicable. You can manage personalized advertising through <a href="https://adssettings.google.com/" target="_blank" rel="noreferrer" className="theme-kicker hover:underline">Google Ads Settings</a> and learn more in <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer" className="theme-kicker hover:underline">Google&apos;s advertising policies</a>.
          </p>
          <p className="theme-text-secondary text-sm leading-7">
            The AdSense publisher identifier associated with newbananaprompts.in is <strong>pub-7598958516745914</strong>. Advertising cookies and the AdSense script are treated as optional technologies by our application and are loaded after the visitor accepts optional cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">6. Third-Party Privacy Policies</h2>
          <p className="theme-text-secondary text-sm leading-7">
            {SITE_NAME}'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">7. CCPA Privacy Rights & GDPR Data Protection Rights</h2>
          <p className="theme-text-secondary text-sm leading-7">
            We want to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
          </p>
          <ul className="list-disc pl-6 theme-text-secondary text-sm leading-7 space-y-1.5">
            <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
            <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
            <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
            <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">8. Children's Information</h2>
          <p className="theme-text-secondary text-sm leading-7">
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. {SITE_NAME} does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="theme-text-primary text-xl font-bold">9. Policy Updates and Contact</h2>
          <p className="theme-text-secondary text-sm leading-7">
            We may update this policy when our practices or services change. The date above indicates the latest revision. For questions or privacy requests, email <a href="mailto:contact@newbananaprompts.in" className="theme-kicker font-semibold hover:underline">contact@newbananaprompts.in</a>.
          </p>
        </section>
      </div>
    </article>
  );
}
