import type { Metadata } from "next";
import Link from "next/link";
import { ToolCard } from "@/components/tool-card";

export const metadata: Metadata = {
  title: "Free Creator Tools",
  description: "Explore free NB Prompts creator tools: generate AI prompts, create color palettes, convert colors, and test clicks per second.",
  alternates: { canonical: "/tools" }
};

export default function ToolsPage() {
  return <div className="space-y-8">
    <header className="space-y-3">
      <p className="theme-kicker text-sm font-semibold uppercase tracking-widest">NB Prompts</p>
      <h1 className="text-3xl font-bold sm:text-4xl">Free Creator Tools</h1>
      <p className="theme-text-secondary max-w-3xl leading-7">Practical tools to help turn your ideas into useful creative briefs. For reviews and tutorials, explore our <Link href="/category/ai-tools" className="theme-kicker underline">AI Tools guides</Link>.</p>
    </header>
    <section className="space-y-4" aria-labelledby="available-tools-heading">
      <h2 id="available-tools-heading" className="text-2xl font-bold">Available tools</h2>
      <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
        <ToolCard title="AI Prompt Generator" description="Build structured prompts for ChatGPT, Gemini, Midjourney, and more using free category-specific templates. No API key needed." href="/tools/ai-prompt-generator" linkLabel="Open Generator" />
        <ToolCard title="Color Palette & HEX Generator" description="Convert HEX, RGB, and HSL colors. Explore complementary, analogous, triadic, and monochromatic palettes, then copy your colors." href="/tools/color-palette-generator" linkLabel="Open Color Tool" />
        <ToolCard title="CPS Checker" description="Test your clicking speed with timed 1, 5, 10, 30, or 60-second challenges and get an instant clicks-per-second score." href="/tools/cps-checker" linkLabel="Start CPS Test" />
      </div>
    </section>
    <Link href="/category/ai-prompts" className="theme-kicker inline-block underline">Browse AI prompt ideas</Link>
  </div>;
}
