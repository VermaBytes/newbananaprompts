import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { promptCards } from "@/data/prompt-cards";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const postEntries = getAllPosts().map((post) => ({
    url: `${SITE_URL}/post/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  const promptEntries = promptCards.map((card) => ({
    url: `${SITE_URL}/prompt/${card.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const categoryEntries = ["ai-tools", "ai-prompts", "earn-money", "courses"].map((cat) => ({
    url: `${SITE_URL}/category/${cat}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.85
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.9
    },
    {
      url: `${SITE_URL}/prompt`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    ...categoryEntries,
    {
      url: `${SITE_URL}/courses/web-development-with-ai`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.7
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-01`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-02`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-03`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-04`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-05`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-06`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-07`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-08`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${SITE_URL}/author`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${SITE_URL}/terms-and-conditions`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${SITE_URL}/disclaimer`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${SITE_URL}/cookie-policy`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${SITE_URL}/editorial-policy`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.5
    },
    ...promptEntries,
    ...postEntries
  ];
}
