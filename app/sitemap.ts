import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const postEntries = getAllPosts().map((post) => ({
    url: `${SITE_URL}/post/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-01`,
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
      url: `${SITE_URL}/testimonials`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.5
    },
    ...postEntries
  ];
}
