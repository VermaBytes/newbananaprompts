import { getAllPosts } from "@/lib/posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = getAllPosts()
    .map((post) => {
      const url = `${SITE_URL}/post/${post.slug}`;

      return [
        "<item>",
        `<title>${escapeXml(post.title)}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink="true">${url}</guid>`,
        `<description>${escapeXml(post.description)}</description>`,
        `<category>${escapeXml(post.category)}</category>`,
        `<pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>`,
        `<enclosure url="${SITE_URL}${post.image}" type="image/${post.image.endsWith(".png") ? "png" : "jpeg"}" />`,
        "</item>"
      ].join("");
    })
    .join("");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0"><channel>',
    `<title>${escapeXml(SITE_NAME)}</title>`,
    `<link>${SITE_URL}</link>`,
    `<description>Latest AI tools, prompts, and practical guides from ${escapeXml(SITE_NAME)}.</description>`,
    `<language>en-IN</language>`,
    `<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
    items,
    "</channel></rss>"
  ].join("");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
