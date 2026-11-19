export const categories = ["YouTube Thumbnail", "AI Image Generation", "Blog Writing", "SEO Content", "Coding & Development", "Product Photography", "Logo Design", "Social Media Marketing", "Business", "Custom"] as const;
export const platforms = ["ChatGPT", "Gemini", "Midjourney", "Universal"] as const;
export const detailLevels = ["Simple", "Detailed", "Expert"] as const;
export type PromptOptions = {
  idea: string;
  category: typeof categories[number];
  platform: typeof platforms[number];
  detail: typeof detailLevels[number];
};

type Template = { role: string; requirements: string; output: string; visual?: string };
const templates: Record<PromptOptions["category"], Template> = {
  "YouTube Thumbnail": {
    role: "YouTube thumbnail art director",
    requirements: "Build a clear visual hierarchy around one dominant subject and the requested topic. Use strong subject-background contrast and an uncluttered background. If text is requested, use a short, readable headline with generous safe margins; otherwise omit text. Avoid misleading imagery.",
    output: "A thumbnail concept covering subject, layout, background, colors, and optional headline placement.",
    visual: "Bold editorial composition, expressive focal subject, directional lighting, crisp visual detail, readable at mobile size, landscape 16:9 composition."
  },
  "AI Image Generation": {
    role: "visual concept artist",
    requirements: "Define the subject, setting, composition, palette, lighting, and visual style. Preserve all supplied subject details and avoid conflicting styles or unwanted text.",
    output: "One cohesive image description ready for an image generator.",
    visual: "Balanced composition, clear focal point, intentional lighting, coherent style, detailed textures, square 1:1 framing unless the brief requests another ratio."
  },
  "Blog Writing": {
    role: "editor and subject-matter writer",
    requirements: "Address the intended reader's problem with an engaging introduction, useful headings, concrete examples, and a practical conclusion. Avoid filler, plagiarism, and invented facts or sources.",
    output: "A title, short outline, and complete draft with descriptive headings."
  },
  "SEO Content": {
    role: "search-focused content editor",
    requirements: "Identify search intent and answer the reader's main question early. Add original value and useful examples. Use relevant keywords naturally without keyword stuffing. Prioritize factual accuracy; do not fabricate statistics, claims, citations, or firsthand experience.",
    output: "Search intent, suggested title and meta description, heading outline, and original content draft."
  },
  "Coding & Development": {
    role: "senior software engineer",
    requirements: "Inspect the existing architecture and conventions before proposing changes. Keep code maintainable and scope changes to the task. Address security, input validation, accessibility, and error handling. Avoid unrelated code changes or unnecessary dependencies. Include meaningful tests and distinguish executed checks from suggested checks.",
    output: "A short implementation plan, focused code changes with file paths, verification steps, and remaining limitations."
  },
  "Product Photography": {
    role: "commercial product photographer",
    requirements: "Keep product geometry, materials, color, and supplied branding accurate. Choose a suitable background, lens perspective, lighting setup, and realistic shadows. Do not invent labels or product claims.",
    output: "A production-ready product image brief describing framing, surface, lighting, and retouching constraints.",
    visual: "Clean commercial composition, soft studio key light and controlled reflections, accurate textures, sharp product focus, square 1:1 framing unless specified otherwise."
  },
  "Logo Design": {
    role: "brand identity designer",
    requirements: "Reflect the supplied brand values and audience with a simple, distinctive silhouette, restrained palette, and legible typography. Ensure the concept works at small sizes and in monochrome. Avoid copying existing logos; do not claim trademark clearance.",
    output: "A logo concept with symbol, palette, typography direction, and monochrome application notes.",
    visual: "Flat vector-style identity concept, centered on a plain background, clean edges, even lighting, no mockup effects, square 1:1 composition."
  },
  "Social Media Marketing": {
    role: "social media content strategist",
    requirements: "Match the supplied audience, channel, brand voice, and campaign goal. Lead with a relevant hook, offer concrete value, and use one clear call to action. Avoid unsupported promises and fabricated engagement metrics.",
    output: "A campaign angle, three post drafts with hooks and calls to action, and suggested success metrics."
  },
  "Business": {
    role: "business planning analyst",
    requirements: "Clarify the business objective, customer, constraints, and resources. Separate evidence from assumptions, consider alternatives and risks, and propose practical next steps. Do not invent market data or financial projections.",
    output: "An executive summary, options with tradeoffs, recommended actions, and measurable next steps."
  },
  "Custom": {
    role: "task-focused specialist",
    requirements: "Identify the desired deliverable and constraints from the brief. Preserve the user's intent, make instructions actionable, and flag missing information rather than inventing facts.",
    output: "A clearly organized deliverable matching the requested task, followed by any necessary assumptions."
  }
};

// Pure, local provider boundary: a future provider can accept the same options.
// Variation cycles deterministically; no model, network, randomness, or API key.
export function buildPrompt(options: PromptOptions, variation = 0): string {
  const idea = options.idea.trim();
  if (!idea) throw new Error("Describe your idea or task before generating a prompt.");
  if (idea.length > 4000) throw new Error("Keep your idea within 4,000 characters.");
  const template = templates[options.category];
  const visual = options.platform === "Midjourney" && template.visual;
  if (visual) {
    return [idea, template.visual, template.requirements,
      options.detail !== "Simple" ? "Preserve the brief's audience, intended use, mood, and specific visual constraints. Prefer supplied aspect ratio, lighting, and style over defaults." : "",
      options.detail === "Expert" ? "Resolve composition, foreground-background separation, material detail, color harmony, and exclusions into one coherent scene. Avoid unnecessary decorative elements." : "",
      ["Emphasize a strong focal point.", "Emphasize clean visual storytelling.", "Emphasize intentional negative space."][variation % 3]
    ].filter(Boolean).join("\n\n");
  }
  const platform = {
    ChatGPT: "For ChatGPT: follow the requested output structure and ask a concise clarifying question only if essential information is missing.",
    Gemini: "For Gemini: use supplied context and references where available; distinguish verified information from assumptions and do not claim access to unavailable sources.",
    Midjourney: "This is a writing or planning task, which Midjourney cannot execute. Use this brief in a text assistant; no image parameters apply.",
    Universal: "Use model-neutral instructions. Do not assume access to browsing, files, tools, or external services."
  }[options.platform];
  return [
    `Role: You are a ${template.role}.`,
    `Task brief:\n${idea}`,
    "Context and audience: Use the audience, purpose, and constraints supplied in the brief. If missing, state reasonable assumptions; ask before proceeding when a missing detail would materially change the result.",
    `Requirements: ${template.requirements}`,
    `Output format: ${template.output} Write in English unless the brief explicitly requests another output language.`,
    "Quality: Be specific, useful, internally consistent, and faithful to the brief. Flag uncertainty and avoid unsupported claims.",
    platform,
    options.detail !== "Simple" ? "Detail: Break the deliverable into useful sections. Include concrete examples where relevant and explain important tradeoffs concisely. Respect any length, tone, or format constraints in the brief." : "Detail: Keep the response concise and focus on the essential deliverable.",
    options.detail === "Expert" ? "Expert review: Identify edge cases, dependencies, and failure modes. Provide acceptance criteria and a practical validation checklist. State limitations and any information needed to improve the result." : "",
    ["Final check: prioritize clarity and direct usefulness.", "Final check: prioritize completeness against the brief's constraints.", "Final check: prioritize practical execution and remove filler."][variation % 3]
  ].filter(Boolean).join("\n\n");
}
