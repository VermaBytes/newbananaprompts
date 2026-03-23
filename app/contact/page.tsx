import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact NB Prompts for partnerships, tool requests, editorial queries, or collaboration opportunities.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="surface-card rounded-[2rem] px-6 py-10 sm:px-10">
        <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.24em]">Contact</p>
        <h1 className="theme-text-primary mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight">
          Start a conversation.
        </h1>
        <div className="theme-text-secondary mt-6 space-y-4 text-base leading-8">
          <p>Email: hello@newbananaprompts.in</p>
          <p>Editorial partnerships: partnerships@newbananaprompts.in</p>
          <p>General response time: within 2 business days</p>
        </div>
      </div>
      <div className="surface-card rounded-[2rem] px-6 py-10">
        <h2 className="theme-text-primary font-[family-name:var(--font-heading)] text-2xl font-bold">What to include</h2>
        <ul className="theme-text-secondary mt-4 space-y-3 text-sm leading-7">
          <li>Your name and company</li>
          <li>Reason for reaching out</li>
          <li>Relevant article or topic</li>
          <li>Any project timeline or publishing deadline</li>
        </ul>
      </div>
    </section>
  );
}
