type PostDates = { publishedAt: string; updatedAt?: string };

// Stored editorial dates only; never infer freshness from execution time.
export function getPostModifiedDate(post: PostDates) {
  return post.updatedAt ?? post.publishedAt;
}

export function hasPostUpdate(post: PostDates) {
  return Date.parse(getPostModifiedDate(post)) > Date.parse(post.publishedAt);
}

export function formatPostDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Kolkata"
  });
}
