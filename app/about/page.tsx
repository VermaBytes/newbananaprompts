import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const CONTACT_EMAIL = "newbananaprompts.in@gmail.com";

export const metadata: Metadata = {
  title: "About Shobhit Verma - Founder of NewBananaPrompts",
  description: "Meet Shobhit Verma, the software developer and founder behind NewBananaPrompts, and learn how the site researches and publishes practical AI resources.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-8">
      <header className="site-panel grid gap-7 rounded-2xl px-6 py-8 sm:px-10 md:grid-cols-[160px_1fr] md:items-center">
        <div className="group relative mx-auto flex h-40 w-40 items-center justify-center md:mx-0">
          <span className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl transition duration-500 group-hover:bg-cyan-400/35 motion-safe:animate-pulse" aria-hidden="true" />
          <span className="absolute inset-0 rounded-full border border-cyan-400/30 motion-safe:animate-ping motion-reduce:hidden" aria-hidden="true" />
          <span className="absolute inset-1 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-500 p-[3px] shadow-[0_0_32px_rgba(34,211,238,0.35)] motion-safe:animate-[spin_8s_linear_infinite]" aria-hidden="true">
            <span className="block h-full w-full rounded-full bg-white dark:bg-slate-950" />
          </span>
          <Image
            src="/shobhit-verma.webp"
            alt="Shobhit Verma, founder of NewBananaPrompts"
            width={144}
            height={144}
            priority
            className="relative z-10 h-36 w-36 rounded-full border-4 border-white object-cover object-top shadow-2xl transition duration-500 group-hover:scale-105 dark:border-slate-950 motion-reduce:transition-none"
          />
          <span className="absolute bottom-3 right-3 z-20 h-4 w-4 rounded-full border-2 border-white bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] dark:border-slate-950" aria-hidden="true" />
        </div>
        <div className="space-y-3">
          <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">About the founder</p>
          <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-2xl">About Shobhit Verma - Founder of NewBananaPrompts</h1>
          <p className="theme-text-secondary text-sm leading-7 sm:text-base">I&apos;m Shobhit Verma, a software developer based in Sakethu, Lakhimpur Kheri, Uttar Pradesh. I work remotely and publish {SITE_NAME} as an independent educational website.</p>
        </div>
      </header>
      <section className="theme-surface space-y-4 rounded-none p-6 sm:p-8">
        <h2 className="theme-text-primary text-xl font-bold">Why I created this website</h2>
        <p className="theme-text-secondary text-sm leading-7">I started NewBananaPrompts to make AI tools easier to understand for creators, students, developers, and small businesses. New products appear quickly, while feature lists, free-plan limits, and pricing can change just as fast. That makes it difficult for a reader to decide which tool is relevant, what limitations to expect, and when a traditional workflow may be safer. My aim is to organize that information into practical guides written in clear language.</p>
        <p className="theme-text-secondary text-sm leading-7">My software-development background shapes how I approach these topics. I look at what a tool is designed to do, the workflow it supports, its documented features, its constraints, and the type of user it may suit. I have explored and compared more than 30 AI tools while developing content and workflows for this site. This is not a claim that every tool has undergone formal laboratory testing. Where an article depends on changing product information, readers are directed to verify important details on the provider&apos;s official website.</p>
        <p className="theme-text-secondary text-sm leading-7">The site also covers responsible AI use in study and exam preparation. AI can help explain a concept, organize revision, generate practice questions, or identify gaps in a draft, but it can also provide incorrect or outdated answers. Official notices, textbooks, teachers, and independent judgment remain essential. Our guides therefore encourage verification instead of presenting AI output as an authoritative source.</p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <div className="theme-surface space-y-3 rounded-none p-6">
          <h2 className="theme-text-primary text-lg font-bold">How content is prepared</h2>
          <p className="theme-text-secondary text-sm leading-7">Generative AI may assist with brainstorming, organization, or language editing. I remain responsible for topic selection, review, context, corrections, and the final publishing decision. Unsupported ratings, fake reviews, guaranteed outcomes, and invented personal experience are not part of our editorial standard.</p>
          <Link href="/editorial-policy" className="theme-kicker text-sm font-semibold hover:underline">Read the Editorial Policy</Link>
        </div>
        <div className="theme-surface space-y-3 rounded-none p-6">
          <h2 className="theme-text-primary text-lg font-bold">Contact details</h2>
          <ul className="theme-text-secondary space-y-2 text-sm leading-7">
            <li><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="theme-kicker hover:underline">{CONTACT_EMAIL}</a></li>
            <li><strong>Location:</strong> Sakethu, Lakhimpur Kheri, Uttar Pradesh 262728, India</li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact" className="theme-button inline-flex min-h-10 items-center px-4 text-xs font-semibold">Contact</Link>
            <Link href="/privacy-policy" className="theme-button theme-soft-hover inline-flex min-h-10 items-center px-4 text-xs font-semibold">Privacy Policy</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
