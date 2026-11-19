import type { Metadata } from "next";
import Link from "next/link";
import { CpsChecker } from "@/components/cps-checker";

const title = "CPS Checker – Free Clicks Per Second Test Online";
const description = "Test your clicking speed with a free online CPS checker. Choose a 1, 5, 10, 30, or 60-second test and see your clicks per second instantly.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/tools/cps-checker" },
  openGraph: { title, description, url: "/tools/cps-checker", type: "website" },
  twitter: { card: "summary_large_image", title, description }
};

const faqs = [
  ["How is my CPS score calculated?", "Your clicks per second score is your total number of clicks divided by the selected test duration. The result is shown to two decimal places."],
  ["When does the timer start?", "The countdown starts with your first click or tap on the test area. Clicking the duration selector does not start the test."],
  ["Can I use this test on a phone?", "Yes. Tap the test area to count a click. The test handles touch and mouse input without counting the synthesized touch click a second time."],
  ["Are my clicks stored or sent anywhere?", "No. Timing, click counts, and the final score are calculated in your browser. The checker does not require an account, API, or database."]
];

export default function CpsCheckerPage() {
  return (
    <div className="space-y-10">
      <nav aria-label="Breadcrumb" className="theme-text-secondary text-sm">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/" className="underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/tools" className="underline">Tools</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">CPS Checker</li>
        </ol>
      </nav>

      <header className="max-w-3xl space-y-4">
        <p className="theme-kicker text-sm font-semibold uppercase tracking-widest">Free browser tool</p>
        <h1 className="text-3xl font-bold sm:text-4xl">CPS Checker – Free Clicks Per Second Test Online</h1>
        <p className="theme-text-secondary leading-7">
          Measure your clicking speed in a timed test. Choose a duration, click or tap the test area when you are ready, and see your total clicks and CPS score when the countdown ends.
        </p>
      </header>

      <CpsChecker />

      <section className="max-w-3xl space-y-3" aria-labelledby="how-to-use-heading">
        <h2 id="how-to-use-heading" className="text-2xl font-bold">How to use the CPS checker</h2>
        <ol className="theme-text-secondary list-inside list-decimal space-y-2 leading-7">
          <li>Select a test duration: 1, 5, 10, 30, or 60 seconds.</li>
          <li>Click or tap the large test area to start the timer and begin counting.</li>
          <li>Keep clicking until the countdown reaches zero, then review your result.</li>
          <li>Choose <strong className="theme-text-primary">Try Again</strong> to reset the test.</li>
        </ol>
      </section>

      <section className="max-w-4xl space-y-4" aria-labelledby="cps-faq-heading">
        <h2 id="cps-faq-heading" className="text-2xl font-bold">Frequently asked questions</h2>
        {faqs.map(([question, answer]) => (
          <details key={question} className="site-panel p-5">
            <summary className="cursor-pointer font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-700">{question}</summary>
            <p className="theme-text-secondary mt-3 leading-7">{answer}</p>
          </details>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Explore more creator tools</h2>
        <div className="theme-kicker flex flex-wrap gap-5 underline">
          <Link href="/tools">All tools</Link>
          <Link href="/tools/ai-prompt-generator">AI Prompt Generator</Link>
          <Link href="/tools/color-palette-generator">Color Palette &amp; HEX Generator</Link>
        </div>
      </section>
    </div>
  );
}
