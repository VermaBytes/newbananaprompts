import type { Metadata } from "next";
import Link from "next/link";
import { PromptGenerator } from "@/components/prompt-generator";

const title = "Free AI Prompt Generator – Create Better AI Prompts";
const description = "Create detailed prompts for ChatGPT, Gemini, Midjourney, coding, SEO, YouTube thumbnails, and more with the free NB Prompts AI Prompt Generator.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/tools/ai-prompt-generator" },
  openGraph: { title, description, url: "/tools/ai-prompt-generator", type: "website" },
  twitter: { card: "summary_large_image", title, description }
};

const faqs = [
  ["Does this tool use an AI model?", "No. It uses category-specific templates in your browser to structure your idea. It does not call ChatGPT, Gemini, Midjourney, or another AI model, and no API key is needed."],
  ["How do I use the generated prompt?", "Copy the result into your chosen assistant or image generator. Add any missing context, review the instructions, and check the model's output for accuracy."],
  ["What changes between detail levels?", "Simple covers the essentials. Detailed adds structure, examples, and constraints. Expert adds edge cases, acceptance criteria, and validation guidance. Visual Midjourney prompts use composition and visual detail instead."],
  ["Can I use Midjourney for writing or coding?", "Midjourney is an image tool. Visual categories produce scene descriptions; writing and coding categories produce a text-assistant brief with a compatibility note. Choose ChatGPT, Gemini, or Universal for those tasks."],
  ["Why does regenerate sometimes give a similar prompt?", "Generation is deterministic. Regenerate cycles through three final emphasis variations while keeping your task and category guidance. Edit the idea, category, or detail level for more substantial changes."],
  ["Does it translate my idea into English?", "The template instructions are in English, and your idea is preserved as entered. This version does not translate text or infer unstated facts. For a fully English prompt, enter your idea in English."]
];

export default function AiPromptGeneratorPage() {
  return <div className="space-y-10">
    <nav aria-label="Breadcrumb" className="theme-text-secondary text-sm"><ol className="flex flex-wrap gap-2"><li><Link href="/" className="underline">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/tools" className="underline">Tools</Link></li><li aria-hidden="true">/</li><li aria-current="page">AI Prompt Generator</li></ol></nav>
    <header className="max-w-3xl space-y-4">
      <p className="theme-kicker text-sm font-semibold uppercase tracking-widest">Free creator tool</p>
      <h1 className="text-3xl font-bold sm:text-4xl">Free AI Prompt Generator</h1>
      <p className="theme-text-secondary leading-7">Turn your idea into a structured, copy-ready prompt. Choose a category, target platform, and detail level to add relevant requirements, output format, and quality checks. This is template-based prompt generation, with no AI model call or API key.</p>
    </header>
    <PromptGenerator />
    <section className="max-w-4xl space-y-4" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold">Frequently asked questions</h2>
      {faqs.map(([question, answer]) => <details key={question} className="site-panel p-5"><summary className="cursor-pointer font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-700">{question}</summary><p className="theme-text-secondary mt-3 leading-7">{answer}</p></details>)}
    </section>
    <section className="space-y-3">
      <h2 className="text-2xl font-bold">Explore more NB Prompts resources</h2>
      <div className="theme-kicker flex flex-wrap gap-5 underline"><Link href="/tools">All tools</Link><Link href="/tools/color-palette-generator">Color Palette &amp; HEX Generator</Link><Link href="/category/ai-prompts">AI prompt ideas</Link><Link href="/category/ai-tools">AI tools guides</Link><Link href="/blogs">Blogging and creator guides</Link></div>
    </section>
  </div>;
}
