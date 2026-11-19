import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getPromptReferences, isCompleteOutputExample } from "../lib/prompt-examples.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const publicRoot = path.resolve(root, "public");
const posts = JSON.parse(fs.readFileSync(path.join(root, "data/posts.json"), "utf8"));
let warned = 0;
for (const post of posts.filter((post) => post.category === "AI Prompts")) {
  const prompts = getPromptReferences(post.sections);
  const images = new Set();
  const covered = new Set();
  for (const example of post.outputExamples ?? []) {
    if (!isCompleteOutputExample(example)) continue;
    const image = path.resolve(publicRoot, `.${example.image}`);
    if (!image.startsWith(publicRoot + path.sep) || !fs.existsSync(image) || !fs.statSync(image).isFile()) continue;
    if (!prompts.some((prompt) => prompt.promptNumber === example.promptNumber) || images.has(image)) continue;
    images.add(image);
    covered.add(example.promptNumber);
  }
  const missing = prompts.filter((prompt) => !covered.has(prompt.promptNumber));
  if (images.size < prompts.length || missing.length) {
    warned++;
    console.warn(`[output-examples] ${post.slug}: ${images.size} real example images for ${prompts.length} prompts. Missing prompt numbers: ${missing.map((prompt) => prompt.promptNumber).join(", ") || "none"}. Author upload required.`);
  }
  if (!prompts.length) {
    warned++;
    console.warn(`[output-examples] ${post.slug}: no recognizable prompts; author must review prompt numbering.`);
  }
}
console.log(`[output-examples] Audit complete: ${warned} post warnings (non-blocking).`);
