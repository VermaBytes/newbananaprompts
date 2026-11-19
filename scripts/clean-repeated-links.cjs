const fs = require("node:fs");
const { linkPlan } = require("./add-internal-links.js");

const filename = "data/posts.json";
const original = fs.readFileSync(filename, "utf8");
const posts = JSON.parse(original);
const changed = new Set();
let removed = 0;

for (const plan of linkPlan) {
  const post = posts.find(post => post.slug === plan.postSlug);
  const section = post?.sections[plan.sectionIdx];
  const paragraph = section?.paragraphs[plan.paraIdx];
  if (!paragraph) continue;
  const seed = "AI image generators have become incredibly powerful";
  const addition = plan.replace(seed).replace(seed, "").trim();
  if (!addition) continue;
  const parts = paragraph.split(addition);
  if (parts.length <= 2) continue;
  // Preserve one recommendation and all text outside the exact injected block.
  section.paragraphs[plan.paraIdx] = (parts[0] + addition + parts.slice(1).join(""))
    .replace(/\.{2,}/g, ".").replace(/ {2,}/g, " ").trim();
  removed += parts.length - 2;
  changed.add(post.slug);
}

if (changed.size) {
  // Replace only changed JSON string literals, preserving the file's formatting.
  const before = JSON.parse(original);
  let result = original;
  for (let p = 0; p < posts.length; p++) {
    for (let s = 0; s < posts[p].sections.length; s++) {
      posts[p].sections[s].paragraphs.forEach((text, i) => {
        const previous = before[p].sections[s].paragraphs[i];
        if (text !== previous) result = result.replace(JSON.stringify(previous), JSON.stringify(text));
      });
    }
  }
  fs.writeFileSync(filename, result);
}
console.log(JSON.stringify({ changedArticles: changed.size, removedRepeatedBlocks: removed }));
