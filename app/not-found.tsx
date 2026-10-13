import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested NB Prompts page is unavailable. Browse published AI articles and tutorials instead.",
  alternates: { canonical: "/404" },
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <section className="site-panel mx-auto max-w-3xl space-y-5 p-8">
      <h1 className="theme-text-primary text-3xl font-bold">Page not found</h1>
      <p className="theme-text-secondary">This page is unavailable. Browse the blog to find a published guide.</p>
      <Link href="/blogs" className="theme-button inline-block px-4 py-2">Browse articles</Link>
    </section>
  );
}
