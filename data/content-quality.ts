// Pages held out of search and site discovery until a human editorial review
// removes duplicated, off-topic, or substantially thin material.
export const REVIEW_REQUIRED_POSTS = new Set([
  // Earning-focused pages with unsupported projections or overly certain framing.
  "how-students-can-earn-money-using-ai-2026",
  "10-real-ways-to-make-money-with-ai-in-2026",
  "best-ai-tools-to-make-money-online-2026",
  "100-best-chatgpt-prompts-to-make-money-online-2026",
  "10-ai-side-hustles-you-can-start-with-zero-investment-in-2026",
  "how-to-use-chatgpt-to-start-a-freelancing-business-in-2026",

  // Indexable pages that the content audit found lacked sufficient depth.
  "day-1-best-free-ai-tools-for-government-exam-preparation-in-2026",
  "improve-english-speaking-summer-vacation-ai-2026",
  "chatgpt-search-seo-rank-blog-in-ai-search",
  "studio-side-profile-portrait-ai-prompt",
  "cricket-player-selfie-fan-ai-prompt",
  "golden-hour-riverside-camping-portrait",

  // Template-heavy comparisons containing unsupported testing, expert-review,
  // case-study, or snippet-optimization claims.
  "best-ai-image-generators-for-youtube-thumbnails-in-2026",
  "best-ai-analytics-tools-in-2026",
  "best-ai-project-management-tools-in-2026",
  "best-ai-email-marketing-tools-in-2026",
  "best-ai-crm-software-in-2026",
  "best-ai-customer-support-tools-in-2026",
  "best-ai-seo-tools-in-2026",
  "best-ai-business-tools-2026",

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
