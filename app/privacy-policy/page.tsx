import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the privacy policy for NB Prompts, including data usage, cookies, and contact details."
};

export default function PrivacyPolicyPage() {
  return (
    <section className="surface-card mx-auto max-w-4xl rounded-[2rem] px-6 py-10 sm:px-10">
      <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.24em]">Privacy Policy</p>
      <h1 className="legal-title mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight">
        Your privacy matters.
      </h1>
      <div className="legal-copy mt-6 space-y-5 text-base leading-8">
        <p>
          NB Prompts may collect basic analytics, cookies, and contact form information to improve the site experience,
          understand performance, and reply to user messages.
        </p>
        <p>
          We do not sell personal data. Any third-party tools such as analytics, embedded platforms, or ad systems may
          process data according to their own privacy policies.
        </p>
        <p>
          If you have questions about data usage, cookies, or removal requests, contact us at hello@newbananaprompts.in.
        </p>
      </div>
    </section>
  );
}
