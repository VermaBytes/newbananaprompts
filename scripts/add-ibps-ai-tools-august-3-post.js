const fs = require("fs");
const path = require("path");

const postsPath = path.join(process.cwd(), "data", "posts.json");
const posts = JSON.parse(fs.readFileSync(postsPath, "utf8"));
const slug = "15-best-ai-tools-for-ibps-aspirants-2026";
const existingIndex = posts.findIndex((post) => post.slug === slug);
if (existingIndex >= 0) posts.splice(existingIndex, 1);

const source = posts.find((post) => post.slug === "best-ai-tools-for-ibps-aspirants-2026");
if (!source) throw new Error("Source IBPS pillar guide not found");
const post = JSON.parse(JSON.stringify(source));

Object.assign(post, {
  slug,
  title: "15 Best AI Tools for IBPS Aspirants in 2026 (Free & Paid)",
  seoTitle: "15 Best AI Tools for IBPS Aspirants in 2026 (Free & Paid)",
  metaTitle: "15 Best AI Tools for IBPS Aspirants 2026 | Free & Paid",
  description: "Compare 15 of the best AI tools for IBPS PO, Clerk and RRB preparation in 2026, covering Quant, Reasoning, English, current affairs, mocks and interviews.",
  author: "Shobhit Verma",
  publishedAt: "2026-08-03T06:30:00.000Z",
  updatedAt: "2026-08-03T06:30:00.000Z",
  dateLabel: "August 3, 2026",
  image: "/posts/15-best-ai-tools-for-ibps-aspirants-2026.png",
  imageAlt: "15 best AI tools for IBPS PO, Clerk and RRB aspirants in 2026, including free and paid study tools",
  tags: ["Best AI Tools for IBPS Aspirants","AI Tools for IBPS","IBPS PO","IBPS Clerk","IBPS RRB","Bank Exams","Competitive Exams","Students","Study Tools","AI Study","AI for Quant","AI for English","AI for Reasoning","AI for Current Affairs","Free AI Tools for Students"]
});

const introduction = post.sections[0];
introduction.heading = "What are the 15 best AI tools for IBPS aspirants in 2026?";
introduction.subheading = "Updated August 3, 2026 • Expert Reviewed • 2026 Edition • Free & Paid Tools • 40–50 minute guide";
introduction.paragraphs = [
  "<p><strong>Direct answer:</strong> The best AI tools for IBPS aspirants in 2026 are ChatGPT, Google Gemini, Claude, Microsoft Copilot, NotebookLM, Perplexity, Canva AI, Gamma, Notion AI, Quizlet AI, Grammarly, Khanmigo, Otter AI, Fireflies AI and ElevenLabs.</p>",
  "<p><a href='#overall-comparison-of-ai-tools-for-ibps' class='inline-flex bg-cyan-500 text-slate-950 px-5 py-3 mr-3 font-bold hover:bg-cyan-400'>Compare AI Tools</a><a href='#best-free-ai-tools-for-ibps-aspirants' class='inline-flex border border-cyan-400 px-5 py-3 font-bold text-cyan-400 hover:bg-cyan-500/10'>Start Using Free Tools</a></p>",
  "<figure><figcaption><strong>Image title:</strong> 15 Best AI Tools for IBPS Aspirants 2026. <strong>Caption:</strong> Free and paid AI study tools for IBPS PO, Clerk and RRB preparation. <strong>Description:</strong> A bank-exam aspirant studying with AI tools for Quantitative Aptitude, Reasoning Ability, English Language, General Awareness and Computer Knowledge.</figcaption></figure>",
  ...introduction.paragraphs.slice(3)
];

// Replace the source guide's Elicit review with the requested Otter AI review.
const elicitIndex = post.sections.findIndex((section) => /elicit/i.test(section.heading));
if (elicitIndex >= 0) {
  post.sections[elicitIndex] = {
    heading: "13. Is Otter AI useful for IBPS interview and lecture revision?",
    subheading: "Best for: transcribing permitted study discussions, spoken answers and interview practice",
    paragraphs: [
      "<p><strong>Direct answer:</strong> Otter AI is useful when an aspirant learns through spoken explanations or wants to review mock-interview answers. It converts permitted audio into searchable text, summaries and action points, but it should never record a class, interview or person without authorization.</p>",
      "<p><strong>Overview and AI features:</strong> Otter provides live transcription, speaker separation, searchable notes, summaries and collaboration features. Its free plan is suitable for testing short workflows, while paid plans expand minutes, imports and team features. Limits and pricing change, so confirm them on the <a href='https://otter.ai/' target='_blank' rel='noopener noreferrer' class='text-cyan-500 font-bold hover:underline'>official Otter AI website</a>.</p>",
      "<p><strong>How IBPS students can use it:</strong> Record your own two-minute answer to “Why banking?” or a permitted peer mock interview. Read the transcript and mark filler words, unsupported claims, long sentences and missed follow-ups. Turn the final summary into a concise improvement checklist before the next practice session.</p>",
      "<p><strong>Example prompt:</strong> Review this transcript of my IBPS interview answer. Identify the direct answer, evidence, banking awareness, clarity, filler phrases and likely follow-up questions. Do not invent achievements. Give a 60-second structure I can reproduce naturally.</p>",
      "<div class='overflow-x-auto'><table><thead><tr><th>Performance</th><th>Ease of use</th><th>Value</th><th>Pricing</th></tr></thead><tbody><tr><td>8.1/10</td><td>9/10</td><td>7.8/10</td><td>Free tier + paid plans</td></tr></tbody></table></div>",
      "<p><strong>Pros:</strong> Searchable spoken practice, quick summaries and visible communication habits. <strong>Cons:</strong> Transcription errors occur with noise, accents or mixed languages; privacy and consent are essential. <strong>Expert verdict:</strong> A useful specialist tool for interview and lecture revision, not a core Quant or Reasoning tutor.</p>"
    ]
  };
}

const faqSection = post.sections.find((section) => /faq/i.test(section.heading));
if (!faqSection) throw new Error("FAQ section not found");
const extraFaqs = [
  ["Is Otter AI useful for IBPS interview preparation?","Yes. Otter can transcribe your own permitted mock-interview answers so you can identify filler words, weak structure and missed evidence. Always obtain consent before recording another person."],
  ["Which AI tool is best for IBPS daily practice?","ChatGPT is the most flexible daily practice tool because it can create targeted drills and explain errors. Pair it with a verified question source and timed mock platform."],
  ["What is the best paid AI tool for IBPS preparation?","A paid ChatGPT, Gemini or Claude plan can be valuable for heavier document and tutoring use, but no subscription is essential. Buy only after the free tier solves a measured study problem."],
  ["Can ElevenLabs help with banking awareness revision?","Yes. It can turn your own verified notes into natural audio for revision during travel. Listen actively and follow each segment with recall questions."],
  ["How should I verify AI-generated banking facts?","Check RBI, IBPS, SBI, government and other primary sources for rates, rules, dates, eligibility and notifications. AI summaries should never override an official document."]
];
faqSection.paragraphs.push(...extraFaqs.map(([q,a]) => `<strong>Q: ${q}</strong>\nA: ${a}`));

// Keep every ranking, comparison and FAQ aligned with the requested tool list.
for (const section of post.sections) {
  section.paragraphs = section.paragraphs.map((paragraph) => paragraph.replace(/Elicit/g, "Otter AI"));
}

const canonical = `https://newbananaprompts.in/post/${slug}`;
const strip = (value) => value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const faqs = faqSection.paragraphs.map((paragraph) => {
  const text = strip(paragraph.replace(/<br\s*\/?>/gi, " A: "));
  const match = text.match(/^Q\d*:\s*(.*?)\s+A:\s*(.*)$/i);
  return match ? {"@type":"Question",name:match[1],acceptedAnswer:{"@type":"Answer",text:match[2]}} : null;
}).filter(Boolean).slice(0,35);
const tools = ["ChatGPT","Google Gemini","Claude AI","Microsoft Copilot","NotebookLM","Perplexity AI","Canva AI","Gamma AI","Notion AI","Quizlet AI","Grammarly","Khanmigo","Otter AI","Fireflies AI","ElevenLabs"];
post.schemas = [
  {"@context":"https://schema.org","@type":"Article",headline:post.title,description:post.description,image:`https://newbananaprompts.in${post.image}`,datePublished:post.publishedAt,dateModified:post.updatedAt,mainEntityOfPage:canonical,articleSection:"AI Tools / Education / Competitive Exams / Bank Exams",keywords:post.tags.join(", "),author:{"@type":"Person",name:post.author,url:"https://newbananaprompts.in/author"},publisher:{"@type":"Organization",name:"New Banana Prompts",url:"https://newbananaprompts.in",logo:{"@type":"ImageObject",url:"https://newbananaprompts.in/main-logo.png"}}},
  {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs},
  {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://newbananaprompts.in"},{"@type":"ListItem",position:2,name:"AI Tools",item:"https://newbananaprompts.in/blogs?category=AI%20Tools"},{"@type":"ListItem",position:3,name:post.title,item:canonical}]},
  {"@context":"https://schema.org","@type":"ItemList",name:"15 Best AI Tools for IBPS Aspirants",numberOfItems:15,itemListElement:tools.map((name,index)=>({"@type":"ListItem",position:index+1,name}))},
  {"@context":"https://schema.org","@type":"Organization",name:"New Banana Prompts",url:"https://newbananaprompts.in",logo:"https://newbananaprompts.in/main-logo.png"},
  {"@context":"https://schema.org","@type":"WebSite",name:"New Banana Prompts",url:"https://newbananaprompts.in",potentialAction:{"@type":"SearchAction",target:"https://newbananaprompts.in/search?q={search_term_string}","query-input":"required name=search_term_string"}},
  {"@context":"https://schema.org","@type":"Person",name:post.author,url:"https://newbananaprompts.in/author",worksFor:{"@type":"Organization",name:"New Banana Prompts"}},
  {"@context":"https://schema.org","@type":"ImageObject",name:"15 Best AI Tools for IBPS Aspirants 2026",caption:"Free and paid AI study tools for IBPS PO, Clerk and RRB preparation.",description:post.imageAlt,contentUrl:`https://newbananaprompts.in${post.image}`,url:`https://newbananaprompts.in${post.image}`,width:1672,height:941}
];

posts.push(post);
fs.writeFileSync(postsPath, `${JSON.stringify(posts, null, 2)}\n`);
console.log(`Added ${slug} with ${post.sections.length} sections and ${faqs.length} structured FAQs.`);
