// Pages held out of search and site discovery until a human editorial review
// removes duplicated, off-topic, or substantially thin material.
export const REVIEW_REQUIRED_POSTS = new Set([
  "best-ai-tools-for-ibps-aspirants-2026",
  "15-best-ai-tools-for-ibps-aspirants-2026",
  "how-to-earn-money-by-creating-ai-thumbnails-for-youtube-in-2026",
  "how-to-start-an-ai-thumbnail-design-business-in-2026",
  "best-ai-tools-for-small-businesses-in-2026",
  "best-ai-marketing-tools-for-small-businesses-in-2026",
  "best-ai-payroll-software-for-small-businesses-in-2026",
  "best-ai-hris-software-for-small-businesses-in-2026",
  "rippling-vs-bamboohr-vs-deel-2026",
  "best-ai-tools-for-content-creators-in-2026",
  "best-ai-tools-for-content-creators-2026",
  "best-ai-marketing-tools-in-2026",
  "how-to-use-ai-for-ssc-preparation-2026",
  "how-to-use-ai-for-sbi-clerk-preparation-2026",
  "best-free-claude-gpt-4o-alternatives-ai-writing-coding-tools",
  "best-free-ai-tools-for-bloggers-2026",
  "best-ai-automation-tools-small-businesses-2026",
  "best-ai-productivity-tools-for-professionals-2026",
  "best-ai-meeting-assistants-in-2026",
  "best-ai-automation-tools-in-2026",
  "best-ai-sales-tools-in-2026",
  "best-ai-tools-for-designers-in-2026",
  "25-best-ai-tools-for-graphic-designers-2026"
]);

export function isPostReadyForIndexing(slug: string) {
  return !REVIEW_REQUIRED_POSTS.has(slug);
}
