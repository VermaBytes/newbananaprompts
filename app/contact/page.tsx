import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

const CONTACT_EMAIL = "shoverashop@gmail.com";
export const metadata: Metadata = { title: "Contact Us", description: `Contact ${SITE_NAME} about general inquiries, content corrections, copyright concerns, or advertising.`, alternates: { canonical: "/contact" } };
const inquiries = [
  ["General inquiries", "Questions about the website, AI prompts, courses, or published guides."],
  ["Content corrections", "Report an inaccurate fact, outdated feature, broken link, or other correction."],
  ["Copyright concerns", "Identify the page and material involved so the concern can be reviewed."],
  ["Advertising inquiries", "Share relevant details about a legitimate advertising or partnership request."]
];

export default function ContactPage() {
  return <section className="mx-auto max-w-4xl space-y-8">
    <div className="space-y-3"><p className="theme-kicker text-sm font-semibold uppercase tracking-[0.24em]">Get in touch</p><h1 className="theme-text-primary text-2xl font-bold sm:text-4xl">Contact {SITE_NAME}</h1><p className="theme-text-secondary max-w-2xl text-sm leading-7 sm:text-base">We welcome questions and feedback from readers. Email is the official contact method for this website.</p></div>
    <div className="site-panel space-y-5 rounded-xl px-5 py-6 sm:px-8 sm:py-8"><h2 className="theme-text-primary text-xl font-bold">Email us</h2><p className="theme-text-secondary text-sm leading-7">Send your message to <a className="theme-kicker font-semibold hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Include a clear subject and, for a correction or copyright concern, the URL of the relevant page.</p><a href={`mailto:${CONTACT_EMAIL}?subject=NB%20Prompts%20inquiry`} className="theme-button inline-flex min-h-11 items-center rounded-sm px-5 py-2 text-sm font-semibold">Open your email app</a></div>
    <div className="grid gap-4 sm:grid-cols-2">{inquiries.map(([title, description]) => <div key={title} className="theme-surface space-y-2 rounded-none p-5"><h2 className="theme-text-primary text-base font-bold">{title}</h2><p className="theme-text-secondary text-sm leading-6">{description}</p></div>)}</div>
    <div className="theme-surface space-y-2 rounded-none p-5"><h2 className="theme-text-primary text-base font-bold">Recruitment information</h2><p className="theme-text-secondary text-sm leading-6">{SITE_NAME} is an independent educational website. Always verify exam dates, eligibility, notices, and applications on the responsible organization&apos;s official website.</p></div>
  </section>;
}
