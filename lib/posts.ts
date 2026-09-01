import posts from "@/data/posts.json";
import { isPostReadyForIndexing } from "@/data/content-quality";

export type PostSection = {
  heading: string;
  subheading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  metaTitle?: string;
  description: string;
  category: "AI Prompts" | "Image Prompts" | "Video Prompts" | "AI Tools" | "Earn Money" | "Courses";
  author: string;
  publishedAt: string;
  updatedAt?: string;
  image: string;
  imageAlt?: string;
  tags: string[];
  sections: PostSection[];
  schemas?: Record<string, unknown>[];
  dateLabel: string;
};

export type PostPreview = Pick<
  BlogPost,
  "slug" | "title" | "seoTitle" | "description" | "category" | "author" | "publishedAt" | "updatedAt" | "image" | "imageAlt" | "tags" | "dateLabel"
>;

const allPosts = (posts as BlogPost[]).sort(
  (left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
);

export function getAllPosts() {
  return allPosts.filter((post) => isPostReadyForIndexing(post.slug));
}

export function getPostPreviews(): PostPreview[] {
  return getAllPosts().map(({ sections, schemas, metaTitle, ...preview }) => preview);
}

export function getPostBySlug(slug: string) {
  // Articles awaiting editorial review are drafts, not merely noindex pages.
  // Keeping them out of the public route prevents low-value or unverified
  // material from remaining accessible to visitors and policy reviewers.
  return allPosts.find(
    (post) => post.slug === slug && isPostReadyForIndexing(post.slug)
  );
}

export function getRelatedPosts(slug: string, category: BlogPost["category"]) {
  const publicPosts = getAllPosts();
  const categoryMatches = publicPosts.filter((post) => post.category === category && post.slug !== slug);
  const fallbackMatches = publicPosts.filter((post) => post.slug !== slug);

  return [...categoryMatches, ...fallbackMatches].filter(
    (post, index, array) => array.findIndex((entry) => entry.slug === post.slug) === index
  );
}
