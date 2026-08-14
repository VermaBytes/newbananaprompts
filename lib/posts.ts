import posts from "@/data/posts.json";

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
  category: "Image Prompts" | "Video Prompts" | "AI Tools" | "Earn Money" | "Courses";
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
  return allPosts;
}

export function getPostPreviews(): PostPreview[] {
  return allPosts.map(({ sections, schemas, metaTitle, ...preview }) => preview);
}

export function getPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, category: BlogPost["category"]) {
  const categoryMatches = allPosts.filter((post) => post.category === category && post.slug !== slug);
  const fallbackMatches = allPosts.filter((post) => post.slug !== slug);

  return [...categoryMatches, ...fallbackMatches].filter(
    (post, index, array) => array.findIndex((entry) => entry.slug === post.slug) === index
  );
}
