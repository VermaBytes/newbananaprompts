import type { Metadata } from "next";
import Link from "next/link";
import { ColorPaletteGenerator } from "@/components/color-palette-generator";

const title = "Free HEX Color & Palette Generator";
const description = "Generate beautiful color palettes and convert HEX, RGB, and HSL colors online for free with the NB Prompts Color Palette Generator.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/tools/color-palette-generator" },
  openGraph: { title, description, url: "/tools/color-palette-generator", type: "website" },
  twitter: { card: "summary_large_image", title, description }
};

const faqs = [
  ["Which HEX formats are supported?", "Enter three or six hexadecimal digits with or without a #, such as #ABC or #AABBCC. Short values expand to six digits. Alpha channels, color names, and invalid characters are not accepted."],
  ["How are HEX, RGB, and HSL related?", "HEX encodes red, green, and blue channels as hexadecimal numbers. RGB shows those channels from 0 to 255. HSL describes hue in degrees and saturation and lightness as percentages. HSL is calculated from RGB using lightness, not HSV brightness. Displayed HSL values are rounded to two decimal places."],
  ["How are the palettes generated?", "Complementary colors use a 180-degree hue rotation. Analogous colors use offsets of -30, 0, and +30 degrees. Triadic colors use 0, 120, and 240 degrees. These rotations preserve HSL saturation and lightness before rounding back to 8-bit RGB."],
  ["What are monochromatic shades and tints?", "Shades mix the active color with black; tints mix it with white. This tool mixes encoded sRGB channels at 30% and 60%, with the original color in the middle. Black, white, and grayscale inputs may produce repeated swatches in some palette types because they have no chromatic hue."],
  ["Are generated palettes automatically accessible?", "No. A color harmony does not guarantee sufficient contrast between colors. Swatch labels use black or white based on relative luminance for readability, but check the contrast of your actual text, backgrounds, and interface states before using a palette."],
  ["Does this tool use an API or store my colors?", "Color calculations and random color generation run locally in your browser, with no color API or account required. This tool does not save your color choices. Copy uses your browser's Clipboard API; if it is unavailable, a manual copy field is provided."]
];

export default function ColorPalettePage() {
  return <div className="space-y-10">
    <nav aria-label="Breadcrumb" className="theme-text-secondary text-sm"><ol className="flex flex-wrap gap-2"><li><Link href="/" className="underline">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/tools" className="underline">Tools</Link></li><li aria-hidden="true">/</li><li aria-current="page">Color Palette &amp; HEX Generator</li></ol></nav>
    <header className="max-w-3xl space-y-4"><p className="theme-kicker text-sm font-semibold uppercase tracking-widest">Free creator tool</p><h1 className="text-3xl font-bold sm:text-4xl">Color Palette &amp; HEX Generator</h1><p className="theme-text-secondary leading-7">Start with a HEX color, a preset, or a random pick. Convert between HEX, RGB, and HSL, then explore complementary, analogous, triadic, and monochromatic palettes. Select any swatch as your next starting point and copy individual colors or the whole palette.</p></header>
    <ColorPaletteGenerator />
    <section className="max-w-3xl space-y-3"><h2 className="text-2xl font-bold">Put your palette to work</h2><p className="theme-text-secondary leading-7">Use a main color to establish your design, a supporting color for contrast, and lighter or darker variants for surfaces and accents. Include the HEX codes in a design brief or image prompt to communicate a consistent color direction. Hue-based harmony is a starting point; review the colors together in your actual layout.</p></section>
    <section className="max-w-4xl space-y-4" aria-labelledby="color-faq-heading"><h2 id="color-faq-heading" className="text-2xl font-bold">Frequently asked questions</h2>{faqs.map(([question, answer]) => <details key={question} className="site-panel p-5"><summary className="cursor-pointer font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-700">{question}</summary><p className="theme-text-secondary mt-3 leading-7">{answer}</p></details>)}</section>
    <section className="space-y-3"><h2 className="text-2xl font-bold">Explore more creator tools</h2><div className="theme-kicker flex flex-wrap gap-5 underline"><Link href="/tools">All tools</Link><Link href="/tools/ai-prompt-generator">AI Prompt Generator</Link><Link href="/category/ai-prompts">AI prompt ideas</Link></div></section>
  </div>;
}
