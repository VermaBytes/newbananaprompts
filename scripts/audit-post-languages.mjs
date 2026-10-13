import fs from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const posts = JSON.parse(fs.readFileSync(`${root}/data/posts.json`, "utf8"));
const reviewSource = fs.readFileSync(`${root}/data/content-quality.ts`, "utf8");
const held = new Set([...reviewSource.matchAll(/^\s+"([^"]+)"/gm)].map((match) => match[1]));
const clean = (text) => text.replace(/<[^>]*>/g, " ").replace(/&[a-z0-9#]+;/gi, " ").replace(/\s+/g, " ").trim();
// Editorial flags, not automatic language decisions. Require recognizable Hindi
// words rather than topic terms such as AI, UPSC, or an author's name.
const hindi = /\b(?:aap|aapko|kaise|kare|karein|karo|hai|hain|nahi|liye|karna|sakte|chahiye|agar|yahan|dekhein|padhein|karke|karega|karen|zaroor|toh|mein|hota|hoti|hote)\b/gi;
const english = /\b(?:the|this|that|with|your|you|for|use|can|should|from|and|is|are|will|before|after|output|prompt)\b/gi;
const flagged = [];
for (const post of posts) {
  if (!["en", "hi"].includes(post.language)) throw new Error(`Invalid stored language: ${post.slug}`);
  const paragraphs = post.sections.flatMap((section) => section.paragraphs).map(clean);
  const hindiParagraphs = paragraphs.filter((text) => (text.match(hindi) ?? []).length > 0);
  const englishParagraphs = paragraphs.filter((text) => (text.match(english) ?? []).length >= 2);
  if (hindiParagraphs.length && englishParagraphs.length) {
    const body = post.sections.flatMap((section) => [section.heading, section.subheading ?? "", ...section.paragraphs]).map(clean).join(" ");
    flagged.push({ slug: post.slug, words: body.split(/\s+/).filter(Boolean).length,
      status: held.has(post.slug) ? "withheld" : "public", language: post.language,
      hinglishParagraphs: hindiParagraphs.length,
      englishParagraphs: englishParagraphs.length,
      excerpt: hindiParagraphs[0].slice(0, 220) });
  }
}
let report = "# Mixed Hinglish / English posts\n\nEditorial review flags; no automatic translation or language choice. All stored languages initially preserve the existing `en` default. Set a post's `language` to `hi` or `en` after your review. Roman-script Hindi can be marked `hi`; script alone does not make it English.\n\nWord counts include headings, subheadings and body text, including prompts; HTML and shared page UI are excluded. Flags require a Roman-Hindi marker and English prose (in the same or a separate paragraph). Prompt examples and related-link text can trigger a flag, so review the context.\n\n| Post slug | Words | Status | Hinglish paragraphs | English paragraphs |\n|---|---:|---|---:|---:|\n";
for (const post of flagged) report += `| ${post.slug} | ${post.words} | ${post.status} | ${post.hinglishParagraphs} | ${post.englishParagraphs} |\n`;
report += "\n## Evidence excerpts\n\n";
for (const post of flagged) report += `- **${post.slug}**: ${post.excerpt.replace(/\n/g, " ")}\n`;
fs.writeFileSync(`${root}/docs/post-language-review.md`, report);
fs.writeFileSync(`${root}/docs/post-language-review.json`, JSON.stringify(flagged, null, 2) + "\n");
console.table(flagged.map(({ slug, words, status }) => ({ slug, words, status })));
console.log(`${flagged.length} mixed-language flags. Review reports written under docs/.`);
