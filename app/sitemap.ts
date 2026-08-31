import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const publicPosts = getAllPosts();
  const siteUpdatedAt = publicPosts.reduce(
    (latest, post) => {
      const candidate = new Date(post.updatedAt ?? post.publishedAt);
      return candidate > latest ? candidate : latest;
    },
    new Date("2026-01-01T00:00:00.000Z")
  );
  const postEntries = publicPosts.map((post) => ({
    url: `${SITE_URL}/post/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  const categoryEntries = ["ai-tools", "ai-prompts", "earn-money"].map((cat) => ({
    url: `${SITE_URL}/category/${cat}`,
    lastModified: siteUpdatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.85
  }));

  return [
    {
      url: SITE_URL,
      lastModified: siteUpdatedAt,
      changeFrequency: "daily",
      priority: 1.0
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: siteUpdatedAt,
      changeFrequency: "daily",
      priority: 0.9
    },
    ...categoryEntries,
    {
      url: `${SITE_URL}/courses/web-development-with-ai`,
      lastModified: siteUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.7
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-01`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-02`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-03`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-04`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-05`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-06`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-07`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-08`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${SITE_URL}/author`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${SITE_URL}/terms-and-conditions`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${SITE_URL}/disclaimer`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${SITE_URL}/cookie-policy`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${SITE_URL}/editorial-policy`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.5
    },
    ...postEntries
  ];
}
