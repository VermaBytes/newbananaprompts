"use client";

import { useRef, useState, type FormEvent } from "react";
import { buildPrompt, categories, platforms, detailLevels, type PromptOptions } from "@/lib/prompt-generator";

const defaults: PromptOptions = { idea: "", category: "YouTube Thumbnail", platform: "ChatGPT", detail: "Detailed" };
const examples: { label: string; category: PromptOptions["category"]; idea: string }[] = [
  { label: "YouTube thumbnail", category: "YouTube Thumbnail", idea: "A thumbnail for a beginner video about growing tomatoes on a small balcony. Show a healthy tomato plant as the main subject, with space for the headline: Small Space, Big Harvest." },
  { label: "SEO article", category: "SEO Content", idea: "Write a beginner-friendly guide to choosing a laptop for college students on a budget. Explain tradeoffs without inventing prices or product specifications." },
  { label: "Accessible coding", category: "Coding & Development", idea: "Add an accessible contact form to my existing Next.js website with email validation, clear error messages, and keyboard-friendly controls. Follow the repository's architecture." },
  { label: "Product photo", category: "Product Photography", idea: "Create a premium product photo of a matte green reusable water bottle on a light stone surface, with soft morning light and realistic shadows. No added text." }
];
const control = "theme-input w-full rounded-none p-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700";
const button = "theme-button px-4 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:cursor-not-allowed disabled:opacity-50";

export function PromptGenerator() {
  const [options, setOptions] = useState<PromptOptions>(defaults);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");
  const [copying, setCopying] = useState(false);
  const variation = useRef(0);
  const resultRef = useRef<HTMLTextAreaElement>(null);
  const ideaRef = useRef<HTMLTextAreaElement>(null);
  const copyAttempt = useRef(0);

  function update(next: PromptOptions) {
    copyAttempt.current++;
    setOptions(next);
    setResult("");
    setError("");
    setFeedback("");
    setCopying(false);
    variation.current = 0;
  }
  function generate(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    copyAttempt.current++;
    setCopying(false);
    setFeedback("");
    try {
      const prompt = buildPrompt(options, variation.current);
      variation.current++;
      setResult(prompt);
      setError("");
      setFeedback("Prompt generated. Ready to copy.");
      resultRef.current?.focus();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please check your idea.");
      ideaRef.current?.focus();
    }
  }
  async function copy() {
    const attempt = ++copyAttempt.current;
    setCopying(true);
    try {
      await navigator.clipboard.writeText(result);
      if (attempt === copyAttempt.current) setFeedback("Prompt copied to clipboard.");
    } catch {
      if (attempt === copyAttempt.current) {
        resultRef.current?.focus();
        resultRef.current?.select();
        setFeedback("Clipboard access is unavailable. The prompt is selected; use your device's Copy command.");
      }
    } finally {
      if (attempt === copyAttempt.current) setCopying(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="grid items-start gap-6 lg:grid-cols-2">
        <form onSubmit={generate} noValidate className="site-panel min-w-0 space-y-5 p-5 sm:p-7" aria-labelledby="generator-heading">
          <h2 id="generator-heading" className="text-xl font-bold">Describe what you want to create</h2>
          <div className="space-y-2">
            <label htmlFor="prompt-idea" className="theme-text-primary block font-semibold">Your idea or task <span className="text-sm font-normal">(required)</span></label>
            <textarea ref={ideaRef} id="prompt-idea" required maxLength={4000} rows={7} value={options.idea} onChange={(e) => update({ ...options, idea: e.target.value })} className={control} placeholder="For example: Write a practical blog post for first-time gardeners about growing herbs indoors. Use a friendly tone and include a checklist." aria-invalid={Boolean(error)} aria-describedby={`idea-help${error ? " idea-error" : ""}`} />
            <p id="idea-help" className="theme-text-secondary text-sm">Include your audience, goal, style, and constraints. {options.idea.length}/4,000 characters. This tool builds prompts locally; no AI model is called.</p>
            {error && <p id="idea-error" role="alert" className="theme-accent-text text-sm font-semibold">{error}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="prompt-category" className="block font-semibold">Category</label>
            <select id="prompt-category" value={options.category} onChange={(e) => update({ ...options, category: e.target.value as PromptOptions["category"] })} className={control}>{categories.map((value) => <option key={value}>{value}</option>)}</select>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="prompt-platform" className="block font-semibold">Target platform</label>
              <select id="prompt-platform" value={options.platform} onChange={(e) => update({ ...options, platform: e.target.value as PromptOptions["platform"] })} className={control}>{platforms.map((value) => <option key={value}>{value}</option>)}</select>
            </div>
            <div className="space-y-2">
              <label htmlFor="prompt-detail" className="block font-semibold">Prompt detail</label>
              <select id="prompt-detail" value={options.detail} onChange={(e) => update({ ...options, detail: e.target.value as PromptOptions["detail"] })} className={control}>{detailLevels.map((value) => <option key={value}>{value}</option>)}</select>
            </div>
          </div>
          {options.platform === "Midjourney" && <p className="theme-text-secondary text-sm">Midjourney is for images. For writing, coding, or business tasks, choose a text assistant; those categories produce a text brief without image parameters.</p>}
          <div className="flex flex-wrap gap-3">
            <button type="submit" className={`${button} hero-cta text-white`}>Generate Prompt</button>
            <button type="button" className={button} onClick={() => { update({ ...defaults }); ideaRef.current?.focus(); }}>Clear / Reset</button>
          </div>
        </form>
        <section className="theme-card min-w-0 space-y-4 border-t-4 border-t-teal-700 p-5 sm:p-7" aria-labelledby="result-heading">
          <p className="theme-kicker text-xs font-semibold uppercase tracking-widest">Template-based generation</p>
          <h2 id="result-heading" className="text-xl font-bold">Your generated prompt</h2>
          <label htmlFor="generated-prompt" className="sr-only">Generated prompt</label>
          <textarea ref={resultRef} id="generated-prompt" readOnly value={result} rows={16} className={`${control} min-h-64 resize-y leading-7`} placeholder="Your structured prompt will appear here. Choose an example or describe your task to get started." />
          <div className="flex flex-wrap gap-3">
            <button type="button" disabled={!result || copying} onClick={copy} className={button}>{copying ? "Copying…" : "Copy Prompt"}</button>
            <button type="button" disabled={!result} onClick={() => generate()} className={button}>Regenerate</button>
          </div>
          <p className="theme-text-secondary text-sm">Regenerate cycles through three template variations. Changing a field clears the previous result.</p>
          <p role="status" aria-live="polite" className="theme-kicker min-h-6 text-sm font-semibold">{feedback}</p>
        </section>
      </div>
      <section className="space-y-4" aria-labelledby="examples-heading">
        <h2 id="examples-heading" className="text-2xl font-bold">Try a prompt example</h2>
        <p className="theme-text-secondary">Choose a starting point, edit it for your needs, then generate.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {examples.map((example) => <button key={example.label} type="button" className={`${button} text-left`} onClick={() => { update({ ...options, category: example.category, idea: example.idea }); ideaRef.current?.focus(); }}><span className="theme-kicker block font-bold">{example.label}</span><span className="theme-text-secondary mt-2 block font-normal leading-6">{example.idea}</span></button>)}
        </div>
      </section>
      <noscript><p>This generator needs JavaScript enabled to build and copy prompts.</p></noscript>
    </div>
  );
}
