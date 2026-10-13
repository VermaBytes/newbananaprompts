import fs from "node:fs";
import { fileURLToPath } from "node:url";

const base = process.env.SEO_BASE_URL ?? "http://localhost:3016";
const root = fileURLToPath(new URL("../", import.meta.url));
const failures = [];
const pages = [];
const fail = (route, issue) => failures.push({ route, issue });
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"))?.[1];
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((match) => match[0]);
const response = await fetch(`${base}/sitemap.xml`);
const xml = await response.text();
if (response.status !== 200) fail("/sitemap.xml", `HTTP ${response.status}`);
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => ({
  url: match[1].match(/<loc>(.*?)<\/loc>/)?.[1],
  lastmod: match[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1]
}));
for (const entry of entries) {
  if (!entry.lastmod || !Number.isFinite(Date.parse(entry.lastmod))) fail(entry.url, "Missing/invalid sitemap lastmod");
}
const routes = [...new Set([...entries.map((entry) => new URL(entry.url).pathname), "/search", "/__seo_missing__", "/post/__seo_missing__", "/category/__seo_missing__"] )];
for (let index = 0; index < routes.length; index += 6) {
  await Promise.all(routes.slice(index, index + 6).map(async (route) => {
    const response = await fetch(base + route);
    const html = await response.text();
    const missing = route.includes("__seo_missing__");
    if (response.status !== (missing ? 404 : 200)) fail(route, `HTTP ${response.status}`);
    const visible = html.replace(/<script\b[\s\S]*?<\/script>/gi, "");
    const h1s = tags(visible, "h1");
    if (h1s.length !== 1) fail(route, `${h1s.length} H1 elements`);
    const titles = [...html.matchAll(/<title>([\s\S]*?)<\/title>/gi)].map((match) => match[1]);
    if (titles.length !== 1 || !titles[0]) fail(route, "Missing/multiple title tags");
    const descriptions = tags(html, "meta").filter((tag) => attr(tag, "name") === "description").map((tag) => attr(tag, "content"));
    if (descriptions.length !== 1 || !descriptions[0]) fail(route, "Missing/multiple meta descriptions");
    const canonicals = tags(html, "link").filter((tag) => attr(tag, "rel") === "canonical").map((tag) => attr(tag, "href"));
    if (canonicals.length !== 1 || !/^https:\/\//.test(canonicals[0] ?? "")) fail(route, "Missing/multiple/relative canonical");
    if (!missing && canonicals.length === 1 && new URL(canonicals[0]).pathname !== route) fail(route, "Canonical points to another route");
    const robots = tags(html, "meta").filter((tag) => attr(tag, "name") === "robots").map((tag) => attr(tag, "content"));
    if (entries.some((entry) => new URL(entry.url).pathname === route) && robots.some((value) => /noindex/.test(value))) fail(route, "Noindex page in sitemap");
    for (const image of tags(visible, "img")) {
      if (!Number(attr(image, "width")) || !Number(attr(image, "height"))) fail(route, "Image lacks explicit dimensions");
      if (attr(image, "loading") !== "lazy") fail(route, "Image is not lazy loaded");
    }
    const schemas = [];
    for (const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
      try {
        const schema = JSON.parse(match[1]);
        schemas.push(...(schema["@graph"] ?? [schema]));
      } catch { fail(route, "Invalid JSON-LD"); }
    }
    for (const schema of schemas) {
      if (schema["@type"] === "Article") {
        if (!schema.headline || !schema.author || !schema.publisher || !schema.image || !schema.mainEntityOfPage) fail(route, "Article required properties missing");
        if (!Number.isFinite(Date.parse(schema.datePublished)) || !Number.isFinite(Date.parse(schema.dateModified))) fail(route, "Article dates invalid");
        const entry = entries.find((entry) => new URL(entry.url).pathname === route);
        if (entry && Date.parse(entry.lastmod) !== Date.parse(schema.dateModified)) fail(route, "Article dateModified differs from sitemap lastmod");
      }
      if (schema["@type"] === "BreadcrumbList") {
        if (!Array.isArray(schema.itemListElement) || !schema.itemListElement.length) fail(route, "Breadcrumb list empty");
        else schema.itemListElement.forEach((item, index) => {
          if (item["@type"] !== "ListItem" || item.position !== index + 1 || !item.name || !/^https:\/\//.test(item.item)) fail(route, "Breadcrumb item invalid");
        });
      }
    }
    if (route.startsWith("/post/") && !missing && (!schemas.some((schema) => schema["@type"] === "Article") || !schemas.some((schema) => schema["@type"] === "BreadcrumbList"))) fail(route, "Article or BreadcrumbList missing");
    if (missing && !visible.includes("Page not found")) fail(route, "Custom 404 missing");
    pages.push({ route, status: response.status, title: titles[0], description: descriptions[0], canonical: canonicals[0], h1s: h1s.length });
  }));
}
for (const field of ["title", "description"]) {
  const values = new Map();
  for (const page of pages.filter((page) => page.status === 200)) {
    const owners = values.get(page[field]) ?? [];
    owners.push(page.route);
    values.set(page[field], owners);
  }
  for (const [value, owners] of values) if (owners.length > 1) fail(owners.join(", "), `Duplicate ${field}: ${value}`);
}
for (const route of ["/robots.txt", "/ads.txt"]) {
  const response = await fetch(base + route);
  const text = await response.text();
  if (response.status !== 200) fail(route, `HTTP ${response.status}`);
  if (route === "/ads.txt" && !text.includes("# Placeholder:")) fail(route, "Placeholder comment missing");
  if (route === "/robots.txt") for (const bot of ["Googlebot", "Mediapartners-Google"]) {
    if (!text.includes(`User-Agent: ${bot}`) && !text.includes(`User-agent: ${bot}`)) fail(route, `Explicit allowance missing for ${bot}`);
  }
}
const report = { pagesChecked: pages.length, sitemapEntries: entries.length, failures, pages };
fs.writeFileSync(`${root}/docs/production-seo-check.json`, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({ pagesChecked: pages.length, sitemapEntries: entries.length, failures }, null, 2));
process.exitCode = failures.length ? 1 : 0;
