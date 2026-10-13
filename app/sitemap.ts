import { getPostModifiedDate } from "@/lib/post-dates";
import type { MetadataRoute } from "next";
import { getIndexablePosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";
import pageDates from "@/data/page-dates.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const publicPosts = getIndexablePosts();
  const postEntries = publicPosts.map((post) => ({
    url: `${SITE_URL}/post/${post.slug}`,
    lastModified: getPostModifiedDate(post),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  const categoryEntries = ["ai-tools", "ai-prompts", "earn-money"].map((cat) => ({
    url: `${SITE_URL}/category/${cat}`,
    changeFrequency: "weekly" as const,
    priority: 0.85
  }));

  const entries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "daily",
      priority: 1.0
    },
    {
      url: `${SITE_URL}/blogs`,
      changeFrequency: "daily",
      priority: 0.9
    },
    ...categoryEntries,
    {
      url: `${SITE_URL}/courses/web-development-with-ai`,
      changeFrequency: "weekly",
      priority: 0.7
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-01`,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-02`,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-03`,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-04`,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-05`,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-06`,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-07`,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/courses/web-development-with-ai/lecture-08`,
      changeFrequency: "monthly",
      priority: 0.65
    },
    {
      url: `${SITE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${SITE_URL}/author`,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${SITE_URL}/terms-and-conditions`,
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${SITE_URL}/disclaimer`,
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${SITE_URL}/cookie-policy`,
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${SITE_URL}/editorial-policy`,
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.5
    },
    ...postEntries
  ];
  return entries.map((entry) => {
    if (entry.lastModified) return entry;
    const pathname = new URL(entry.url).pathname;
    const key = pathname.startsWith("/category/") ? "/category/[slug]" : pathname;
    const date = (pageDates as Record<string, string>)[key];
    return date ? { ...entry, lastModified: date } : entry;
  });
}
