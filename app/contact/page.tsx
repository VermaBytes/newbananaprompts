import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact NB Prompts for partnerships, tool requests, editorial queries, or collaboration opportunities.",
  alternates: {
    canonical: "/contact"
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  }
};

export default function ContactPage() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="surface-card rounded-none px-5 py-6 sm:px-8 sm:py-8">
        <p className="theme-kicker text-[11px] font-semibold uppercase tracking-[0.24em]">Contact</p>
        <h1 className="theme-text-primary mt-2.5 font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-3xl tracking-tight">
          Start a conversation.
        </h1>
        <div className="theme-text-secondary mt-5 space-y-3.5 text-sm leading-7">
          <p>Email: hello@newbananaprompts.in</p>
          <p>Editorial partnerships: partnerships@newbananaprompts.in</p>
          <p>General response time: within 2 business days</p>
        </div>
      </div>
      <div className="surface-card rounded-none px-5 py-6 sm:px-8 sm:py-8">
        <h2 className="theme-text-primary font-[family-name:var(--font-heading)] text-xl font-bold">What to include</h2>
        <ul className="theme-text-secondary mt-3.5 space-y-2.5 text-xs leading-6">
          <li>Your name and company</li>
          <li>Reason for reaching out</li>
          <li>Relevant article or topic</li>
          <li>Any project timeline or publishing deadline</li>
        </ul>
      </div>
    </section>
  );
}
