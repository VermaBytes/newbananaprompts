const fs = require("fs");
const path = require("path");

const file = path.join(process.cwd(), "data", "posts.json");
const posts = JSON.parse(fs.readFileSync(file, "utf8"));
const bySlug = new Map(posts.map((post) => [post.slug, post]));

function requirePost(slug) {
  const post = bySlug.get(slug);
  if (!post) throw new Error(`Missing post: ${slug}`);
  return post;
}

function addSectionOnce(post, section) {
  if (!post.sections.some((item) => item.heading === section.heading)) post.sections.push(section);
}

function replaceLinks(post, replacements) {
  post.sections.forEach((section) => {
    section.paragraphs = section.paragraphs.map((paragraph) => {
      let next = paragraph;
      Object.entries(replacements).forEach(([from, to]) => {
        next = next.split(`/post/${from}`).join(`/post/${to}`);
      });
      return next;
    });
  });
}

// Day 2: preserve the known-performing URL while strengthening its introduction and cluster role.
const pillar = requirePost("chatgpt-prompts-for-upsc-aspirants-2026");
pillar.updatedAt = "2026-08-14T04:30:00.000Z";
pillar.description = "Use 100+ practical ChatGPT prompts for UPSC preparation, including Prelims, Mains answers, essays, current affairs, ethics, revision and interviews.";
pillar.sections[0].paragraphs = [
  "<p>UPSC preparation requires more than collecting information. Aspirants must connect the official syllabus with standard sources, revise repeatedly, solve Prelims questions, write analytical Mains answers and make balanced judgments under time pressure. Well-designed ChatGPT prompts can support those activities by turning verified notes into active-recall questions, exposing missing dimensions in an answer or organizing a realistic study plan.</p>",
  "<p>This guide contains <strong>100+ practical ChatGPT prompts for UPSC aspirants</strong> across planning, Prelims, Mains, essay, current affairs, GS4 ethics, optional subjects, revision and the Personality Test. Each prompt is a starting framework: replace the bracketed fields, keep the official syllabus and PYQs in view, and write or solve the final task yourself.</p>",
  "<div class='border-l-4 border-orange-500 bg-orange-500/10 p-4 my-4'><strong>Use AI as an assistant, not a source of record.</strong> ChatGPT can produce incorrect dates, constitutional Articles, judgments, committee recommendations, statistics or current-affairs details. Verify important claims through the <a href='https://upsc.gov.in/' target='_blank' rel='noreferrer' class='text-cyan-400 font-bold hover:underline'>official UPSC website</a>, original government documents, standard books and other authoritative sources.</div>",
  "<p>If you are deciding where to begin, use the planning and revision prompts first. For specialized practice, continue to our <a href='/post/chatgpt-prompts-for-upsc-mains-answer-writing-2026' class='text-cyan-400 font-bold hover:underline'>UPSC Mains answer-writing prompts</a> or the structured collection of <a href='/post/best-ai-prompts-for-upsc-preparation-2026' class='text-cyan-400 font-bold hover:underline'>best AI prompts for UPSC preparation</a>.</p>"
];
addSectionOnce(pillar, {
  heading: "Worked Example: From a Generic Request to a Verifiable UPSC Prompt",
  paragraphs: [
    "<p>A generic request such as <em>Explain parliamentary committees</em> gives the model no paper, purpose, depth or evidence boundary. The result may be readable but difficult to revise or use in an answer.</p>",
    "<pre><code>Act as a UPSC GS Paper 2 mentor. Using only the verified notes pasted below, compare financial, departmental and accountability roles of parliamentary committees. Link each role to the exact syllabus demand, flag every constitutional or procedural claim that needs verification, and create: (1) a one-page revision table, (2) five active-recall questions, and (3) a 150-word answer framework for the question [paste question]. Do not invent committee reports, membership numbers or current office-holders. Notes: [paste notes]</code></pre>",
    "<p>This version works because it supplies the paper, source boundary, outputs and accuracy rules. After receiving the framework, close the model and write the answer independently. Reopen it only to check relevance, structure and missing counterarguments.</p>"
  ]
});

// Day 3: strengthen the existing Mains page without creating a competing URL.
const mains = requirePost("chatgpt-prompts-for-upsc-mains-answer-writing-2026");
mains.updatedAt = "2026-08-14T04:30:00.000Z";
addSectionOnce(mains, {
  heading: "How to Customize Every UPSC Mains Prompt in This Guide",
  paragraphs: [
    "<p>Before copying any prompt, add five pieces of context: the exact GS paper or essay area, the full question, its directive, the expected word limit and the verified source material you have already studied. For evaluation prompts, also paste your own timed answer and state how many minutes you used.</p>",
    "<p><strong>Example customization:</strong> Instead of asking for multi-dimensional points on federalism, paste the exact GS2 question and request only constitutional, fiscal and administrative dimensions that directly answer it. Ask the model to rank those dimensions, flag Articles and judgments for verification, and fit the final selection to 250 words.</p>",
    "<p><strong>Expected output:</strong> A useful response should explain the demand, prioritize content and distinguish verified facts from suggestions. Reject an output that merely lists generic advantages, repeats the question or supplies unsourced numbers. The final answer must remain your own.</p>",
    "<p><strong>Mock-practice routine:</strong> Select one PYQ, spend two minutes planning, write under a self-imposed limit, then use the relevant evaluation prompt. Record only two recurring weaknesses in an error log and repeat the same directive with a new topic. This creates deliberate practice instead of endless model-answer collection.</p>"
  ]
});

// Day 4: improve selected pages where more depth clearly serves search intent.
const upscTools = requirePost("best-ai-tools-for-upsc-aspirants-in-2026");
upscTools.updatedAt = "2026-08-14T04:30:00.000Z";
upscTools.description = "Compare practical AI tools for UPSC preparation in 2026, with workflows for verified research, Prelims, Mains answers, revision and interview practice.";
upscTools.sections[0].paragraphs.unshift("<p><strong>Quick answer:</strong> No single AI tool covers the whole UPSC cycle. Use a conversational assistant for questioning and feedback, a source-grounded notebook tool for your own PDFs, and a planning or flashcard tool only where it reduces friction. Standard books, official sources, PYQs and independent tests remain the foundation.</p>");
addSectionOnce(upscTools, {
  heading: "Choose an AI Tool by UPSC Task, Not by Hype",
  paragraphs: [
    "<table><thead><tr><th>Task</th><th>Useful capability</th><th>Verification rule</th></tr></thead><tbody><tr><td>Understand a concept</td><td>Follow-up explanations and comparisons</td><td>Return to the standard source for precise facts</td></tr><tr><td>Revise PDFs</td><td>Answers grounded in uploaded notes with citations</td><td>Open the cited page before accepting the claim</td></tr><tr><td>Prelims practice</td><td>Source-bound quizzes and error classification</td><td>Validate every key against verified notes</td></tr><tr><td>Mains writing</td><td>Directive analysis and rubric-based feedback</td><td>Write the first timed draft independently</td></tr><tr><td>Current affairs</td><td>Issue mapping and stakeholder analysis</td><td>Check the original dated government/report source</td></tr></tbody></table>",
    "<p>Avoid uploading copyrighted commercial material or personal information. For interview practice, use an anonymized DAF summary rather than addresses, contact details or identifiers. Check each provider's current privacy, retention and pricing terms before relying on it.</p>"
  ]
});
addSectionOnce(upscTools, {
  heading: "A Safe Weekly AI Workflow for UPSC Aspirants",
  paragraphs: [
    "<ol><li><strong>Study:</strong> Learn from NCERTs, standard books, class material or original official sources.</li><li><strong>Question:</strong> Use AI to identify misconceptions and ask follow-ups, not to replace the chapter.</li><li><strong>Practise:</strong> Generate questions only from verified notes and attempt them before seeing explanations.</li><li><strong>Write:</strong> Complete at least one timed answer without AI, then request line-specific feedback.</li><li><strong>Verify:</strong> Check every dynamic, constitutional, legal or numerical claim at the original source.</li><li><strong>Revise:</strong> Add only verified corrections to a compact error log.</li></ol>",
    "<p>For ready-to-use instructions, see our <a href='/post/best-ai-prompts-for-upsc-preparation-2026' class='text-cyan-400 font-bold hover:underline'>30+ UPSC AI prompts</a>. For deeper writing drills, use the <a href='/post/chatgpt-prompts-for-upsc-mains-answer-writing-2026' class='text-cyan-400 font-bold hover:underline'>Mains answer-writing prompt guide</a>.</p>"
  ]
});
addSectionOnce(upscTools, {
  heading: "Questions to Ask Before Depending on Any AI Tool",
  paragraphs: [
    "<ul><li>Can it show the exact source passage behind an answer?</li><li>Does it clearly separate uploaded sources from general model knowledge?</li><li>Can you export notes and error logs in a reusable format?</li><li>Does the free plan support your actual document size and study frequency?</li><li>What happens to uploaded notes and personal data?</li><li>Can you reproduce the learning task without the tool during a test?</li></ul>",
    "<p>Features and pricing change frequently. Verify current limits on the provider's official page instead of relying on a static comparison, and do not interpret a paid plan as proof that the content is accurate.</p>"
  ]
});

const bloggers = requirePost("best-free-ai-tools-for-bloggers-2026");
bloggers.updatedAt = "2026-08-14T04:30:00.000Z";
bloggers.description = "A practical workflow for choosing free AI tools for blogging, research, drafting, images and SEO while preserving accuracy, originality and editorial control.";
addSectionOnce(bloggers, {
  heading: "A Responsible AI Blogging Workflow",
  paragraphs: [
    "<ol><li><strong>Define search intent:</strong> Write the reader's problem and the useful outcome before opening a tool.</li><li><strong>Research primary sources:</strong> Collect original documentation, datasets and firsthand material. AI search summaries are leads, not citations.</li><li><strong>Build an outline:</strong> Ask the tool to identify missing questions, then decide the structure yourself.</li><li><strong>Draft with evidence:</strong> Write from verified notes and your experience. Never invent testing, quotations or results.</li><li><strong>Edit critically:</strong> Remove repetition, vague claims and generic advice; verify names, prices and features.</li><li><strong>Publish transparently:</strong> Add descriptive images, useful internal links and a correction path.</li></ol>",
    "<p>Free plans and product features change. Confirm current limits on each provider's official page before choosing a workflow or recommending a tool to readers.</p>"
  ]
});
addSectionOnce(bloggers, {
  heading: "How to Evaluate a Free AI Tool Before Adding It to Your Workflow",
  paragraphs: [
    "<ul><li><strong>Output quality:</strong> Does it follow constraints and preserve facts from your source material?</li><li><strong>Privacy:</strong> Are you comfortable with how drafts and uploads may be handled?</li><li><strong>Export:</strong> Can you move your work without lock-in?</li><li><strong>Editorial control:</strong> Can you review sources and make substantial human edits?</li><li><strong>Performance:</strong> Does the tool save enough time to justify another account and workflow?</li></ul>",
    "<p>Use AI to reduce repetitive work, not to publish mass-produced pages. Original reporting, useful examples and clear editorial judgment remain the differentiators that readers and search engines can recognize.</p>"
  ]
});
addSectionOnce(bloggers, {
  heading: "Frequently Asked Questions About Free AI Blogging Tools",
  paragraphs: [
    "<strong>Q1: Can a free AI tool write a complete publishable article?</strong><br/>A: It can draft text, but publication still requires source verification, original value, editing, accurate claims and a clear reader purpose.",
    "<strong>Q2: Should bloggers publish AI-generated images without review?</strong><br/>A: No. Check visual accuracy, text, rights, representation and whether the image could mislead the reader.",
    "<strong>Q3: Are AI SEO scores a guarantee of ranking?</strong><br/>A: No. A score reflects a tool's own model and cannot guarantee search visibility, traffic or rankings.",
    "<strong>Q4: What information should not be uploaded?</strong><br/>A: Avoid confidential client material, personal data, unpublished credentials or anything you lack permission to process."
  ]
});

const searchSeo = requirePost("chatgpt-search-seo-rank-blog-in-ai-search");
searchSeo.updatedAt = "2026-08-14T04:30:00.000Z";
searchSeo.description = "Learn practical AI-search SEO fundamentals: crawlable pages, clear answers, original evidence, structured content, citations and measurement without ranking guarantees.";
addSectionOnce(searchSeo, {
  heading: "What AI Search Optimization Can and Cannot Do",
  paragraphs: [
    "<p>AI-search systems may retrieve, summarize or cite public web pages, but no markup or prompt can guarantee inclusion. The durable work is familiar: make pages crawlable, answer a clear question, publish original and verifiable information, use descriptive headings, show authorship and update material when facts change.</p>",
    "<p>Avoid creating separate doorway pages for every wording of a query. One strong page should satisfy a distinct intent and link to supporting pages with narrower roles. Measure impressions, clicks, citations and assisted conversions over time rather than claiming that an isolated tactic caused ranking.</p>"
  ]
});
addSectionOnce(searchSeo, {
  heading: "Practical AI Search Content Checklist",
  paragraphs: [
    "<ul><li>State the direct answer near the beginning without hiding the supporting explanation.</li><li>Use one descriptive H1 and logical H2/H3 sections.</li><li>Support claims with original evidence or authoritative sources.</li><li>Use tables or lists only when they improve comparison and scanning.</li><li>Link to relevant supporting articles using descriptive anchors.</li><li>Keep titles, canonicals, Open Graph data and structured data consistent.</li><li>Ensure important content is present in rendered HTML and usable on mobile.</li><li>Provide an author, date and correction/contact route.</li><li>Update or remove claims that are no longer accurate.</li></ul>"
  ]
});
addSectionOnce(searchSeo, {
  heading: "Frequently Asked Questions About AI Search SEO",
  paragraphs: [
    "<strong>Q1: Can I guarantee that ChatGPT or another AI system cites my page?</strong><br/>A: No. You can improve technical access and content usefulness, but retrieval and citation are controlled by each system.",
    "<strong>Q2: Is schema markup enough to rank in AI search?</strong><br/>A: No. Valid structured data can clarify page meaning, but it does not replace original, accurate and useful content.",
    "<strong>Q3: Should I create a page for every keyword variation?</strong><br/>A: Usually not. Consolidate variations with the same intent and create a separate page only when readers need a genuinely different resource.",
    "<strong>Q4: What should I measure?</strong><br/>A: Track search impressions, qualified visits, engagement, citations you can verify and useful outcomes rather than a single tool score."
  ]
});

// Day 6: repair only confirmed broken post targets with the closest real, relevant existing URL.
const globalReplacements = {
  "best-ai-coding-tools-2026": "best-ai-coding-tools-for-developers-2026",
  "best-ai-hr-software-2026": "best-ai-hr-software-in-2026",
  "best-ai-chatbots-in-2026": "best-free-claude-gpt-4o-alternatives-ai-writing-coding-tools",
  "best-ai-writing-tools-2026": "best-free-claude-gpt-4o-alternatives-ai-writing-coding-tools",
  "best-ai-writing-tools-in-2026": "best-free-claude-gpt-4o-alternatives-ai-writing-coding-tools",
  "best-ai-tools-for-small-business-owners-2026": "best-ai-tools-for-small-business-owners",
  "chatgpt-prompts-for-small-business-owners": "best-ai-tools-for-small-business-owners",
  "chatgpt-prompts-for-youtube-creators-2026": "chatgpt-prompts-for-youtube-creators",
  "best-free-ai-tools-for-youtubers-2026": "best-free-ai-tools-for-youtubers-in-2026",
  "prepare-government-exams-ai-2026": "how-to-use-ai-to-prepare-for-government-exams-in-2026",
  "improve-english-speaking-ai": "improve-english-speaking-summer-vacation-ai-2026",
  "student-ai-guide": "how-students-job-seekers-use-ai-grow-faster"
};
posts.forEach((post) => replaceLinks(post, globalReplacements));

fs.writeFileSync(file, `${JSON.stringify(posts, null, 2)}\n`);
console.log("Applied targeted Day 2-Day 10 content and link fixes.");
