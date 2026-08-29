import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const posts = JSON.parse(fs.readFileSync(path.join(root, "data", "posts.json"), "utf8"));
const qualitySource = fs.readFileSync(path.join(root, "data", "content-quality.ts"), "utf8");
const reviewRequired = new Set(
  [...qualitySource.matchAll(/^\s+"([^"]+)",?$/gm)].map((match) => match[1])
);
const stripHtml = (value = "") => value
  .replace(/<script[\s\S]*?<\/script>/gi, " ")
  .replace(/<style[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&[a-z0-9#]+;/gi, " ")
  .replace(/\s+/g, " ")
  .trim();
const normalize = (value = "") => stripHtml(value).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const titleCounts = new Map();
const descriptionCounts = new Map();
const paragraphOwners = new Map();
const slugs = new Set(posts.map((post) => post.slug));
const issues = [];

for (const post of posts) {
  const body = post.sections.flatMap((section) => [section.heading, section.subheading ?? "", ...section.paragraphs]).join(" ");
  const words = stripHtml(body).split(/\s+/).filter(Boolean).length;
  const internalLinks = [...body.matchAll(/href=['"]\/post\/([^'"#?]+)[^'"]*['"]/gi)].map((match) => match[1]);
  const brokenInternalLinks = internalLinks.filter((slug) => !slugs.has(slug));
  const imagePath = path.join(root, "public", post.image.replace(/^\//, ""));

  titleCounts.set(normalize(post.title), [...(titleCounts.get(normalize(post.title)) ?? []), post.slug]);
  descriptionCounts.set(normalize(post.description), [...(descriptionCounts.get(normalize(post.description)) ?? []), post.slug]);

  for (const paragraph of post.sections.flatMap((section) => section.paragraphs)) {
    const text = normalize(paragraph);
    if (text.split(" ").length >= 35) {
      paragraphOwners.set(text, [...(paragraphOwners.get(text) ?? []), post.slug]);
    }
  }

  const addIssue = (severity, issue) => issues.push({ severity, slug: post.slug, indexable: !reviewRequired.has(post.slug), issue });
  if (words < 700) addIssue("high", `thin article (${words} words)`);
  else if (words < 1000) addIssue("medium", `limited depth (${words} words)`);
  if (!post.description || post.description.length < 90) addIssue("medium", `meta description length ${post.description?.length ?? 0}`);
  if (!post.sections.length) addIssue("high", "no article sections");
  if (!fs.existsSync(imagePath)) addIssue("high", `missing image ${post.image}`);
  for (const brokenSlug of new Set(brokenInternalLinks)) addIssue("high", `broken internal link /post/${brokenSlug}`);
}

for (const [title, owners] of titleCounts) {
  if (title && owners.length > 1) issues.push({ severity: "high", slug: owners.join(", "), issue: "duplicate title" });
}
for (const [description, owners] of descriptionCounts) {
  if (description && owners.length > 1) issues.push({ severity: "medium", slug: owners.join(", "), issue: "duplicate meta description" });
}

const repeatedParagraphs = [...paragraphOwners.entries()]
  .filter(([, owners]) => new Set(owners).size > 1)
  .map(([text, owners]) => ({ excerpt: text.slice(0, 140), posts: [...new Set(owners)] }))
  .sort((a, b) => b.posts.length - a.posts.length);

const publicIssues = issues.filter((item) => item.indexable !== false);
const publicRepeatedParagraphs = repeatedParagraphs.filter((item) =>
  item.posts.filter((slug) => !reviewRequired.has(slug)).length > 1
);

const summary = {
  articles: posts.length,
  indexableArticles: posts.length - reviewRequired.size,
  quarantinedArticles: reviewRequired.size,
  issues: {
    high: publicIssues.filter((item) => item.severity === "high").length,
    medium: publicIssues.filter((item) => item.severity === "medium").length
  },
  repeatedLongParagraphs: publicRepeatedParagraphs.length
};

console.log(JSON.stringify({ summary, issues: publicIssues, repeatedParagraphs: publicRepeatedParagraphs.slice(0, 30) }, null, 2));
process.exitCode = publicIssues.some((item) => item.severity === "high") ? 1 : 0;
