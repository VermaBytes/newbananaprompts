import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const publicRoot = path.join(root, "public");
const dimensions = {};
async function walk(directory) {
  for (const name of fs.readdirSync(directory)) {
    const file = path.join(directory, name);
    if (fs.statSync(file).isDirectory()) await walk(file);
    else if (/\.(png|jpe?g|webp|avif|svg)$/i.test(name)) {
      const { width, height } = await sharp(file).metadata();
      if (width && height) dimensions[`/${path.relative(publicRoot, file).replaceAll("\\", "/")}`] = { width, height };
    }
  }
}
await walk(publicRoot);
fs.writeFileSync(path.join(root, "data/image-dimensions.json"), JSON.stringify(dimensions, null, 2) + "\n");
console.log(`Recorded dimensions for ${Object.keys(dimensions).length} image assets.`);

// Keep the lightweight middleware route manifest in sync with editorial gating.
const posts = JSON.parse(fs.readFileSync(path.join(root, "data/posts.json"), "utf8"));
const quality = fs.readFileSync(path.join(root, "data/content-quality.ts"), "utf8");
const withheld = new Set([...quality.matchAll(/^\s+"([^"]+)"/gm)].map((match) => match[1]));
fs.writeFileSync(path.join(root, "data/public-post-slugs.json"), JSON.stringify(
  posts.filter((post) => !withheld.has(post.slug)).map((post) => post.slug), null, 2
) + "\n");
