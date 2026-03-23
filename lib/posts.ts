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
  description: string;
  category: "Image Prompts" | "Video Prompts" | "AI Tools" | "Earn Money";
  author: string;
  publishedAt: string;
  image: string;
  tags: string[];
  sections: PostSection[];
  dateLabel: string;
};

const allPosts = (posts as BlogPost[]).sort(
  (left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
);

export function getAllPosts() {
  return allPosts;
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
