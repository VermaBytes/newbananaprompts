const fs = require("fs");
const path = require("path");

const POSTS_PATH = path.join(process.cwd(), "data/posts.json");
const posts = JSON.parse(fs.readFileSync(POSTS_PATH, "utf8"));

// Helper: wrap a keyword in a link if it exists in the paragraph text
function insertLink(text, keyword, slug, linkText) {
  if (text.includes("href=")) return text; // already has a link in this para
  const idx = text.indexOf(keyword);
  if (idx === -1) return text;
  const anchor = `<a href='/post/${slug}' class='text-cyan-500 font-bold hover:underline'>${linkText}</a>`;
  return text.slice(0, idx) + anchor + text.slice(idx + keyword.length);
}

// Internal link map: for each post slug, which links to inject where
// Format: { targetSlug, injectInto: [{ postSlug, sectionIndex, paraIndex, keyword, linkText }] }
const linkPlan = [

  // === AI PROMPTS POST (index 0) ===
  {
    postSlug: "25-best-nano-banana-prompts-for-realistic-ai-images-2026",
    sectionIdx: 0, paraIdx: 1,
    keyword: "AI image generators",
    replace: (t) => t.replace(
      "AI image generators have become incredibly powerful",
      `AI image generators have become incredibly powerful. Agar aap consistent characters banana chahte hain toh hamara <a href='/post/midjourney-consistent-characters-generate-same-character-different-poses' class='text-cyan-500 font-bold hover:underline'>Midjourney Consistent Characters Guide</a> bhi padhein.`
    )
  },

  // === SSC CGL PROMPTS (index 1) ===
  {
    postSlug: "top-15-chatgpt-prompts-every-ssc-cgl-aspirant-should-save-in-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` SSC CGL ke saath dusre competitive exams ke liye bhi AI tools bahut kaam aate hain — hamara <a href='/post/top-10-ai-tools-every-ssc-cgl-aspirant-should-use-in-2026' class='text-cyan-500 font-bold hover:underline'>Top 10 AI Tools for SSC CGL</a> guide zaroor padhein aur <a href='/post/how-to-use-chatgpt-for-daily-current-affairs-preparation-in-2026' class='text-cyan-500 font-bold hover:underline'>ChatGPT for Current Affairs</a> article bhi helpful rahega.`
  },

  // === CURRENT AFFAIRS (index 2) ===
  {
    postSlug: "how-to-use-chatgpt-for-daily-current-affairs-preparation-in-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` Current Affairs ke saath saath proper AI tools ka knowledge bhi zaroori hai — iske liye <a href='/post/top-10-ai-tools-every-ssc-cgl-aspirant-should-use-in-2026' class='text-cyan-500 font-bold hover:underline'>Top 10 AI Tools for SSC CGL</a> aur <a href='/post/top-10-free-ai-tools-upsc-aspirant-2026' class='text-cyan-500 font-bold hover:underline'>Top 10 Free AI Tools for UPSC Aspirants</a> guide zaroor check karein.`
  },

  // === TOP 10 AI TOOLS SSC CGL (index 3) ===
  {
    postSlug: "top-10-ai-tools-every-ssc-cgl-aspirant-should-use-in-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` Aur agar aap ChatGPT prompts specifically SSC ke liye dhundh rahe hain, toh hamara <a href='/post/top-15-chatgpt-prompts-every-ssc-cgl-aspirant-should-save-in-2026' class='text-cyan-500 font-bold hover:underline'>Top 15 ChatGPT Prompts for SSC CGL</a> guide copy-paste ready prompts ke saath available hai. Current Affairs preparation ke liye <a href='/post/how-to-use-chatgpt-for-daily-current-affairs-preparation-in-2026' class='text-cyan-500 font-bold hover:underline'>ChatGPT for Daily Current Affairs</a> bhi padhein.`
  },

  // === RESUME BUILDERS (index 4) ===
  {
    postSlug: "best-free-ai-resume-builders-for-freshers-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` Resume banana ke baad aapko apni productivity aur skills bhi AI se boost karni chahiye — iske liye hamara <a href='/post/how-students-job-seekers-use-ai-grow-faster' class='text-cyan-500 font-bold hover:underline'>Students aur Job Seekers ke liye AI Guide</a> bahut helpful rahega. Aur AI tools ke aur bhi free options ke liye <a href='/post/best-free-ai-tools-for-students-2026' class='text-cyan-500 font-bold hover:underline'>Best Free AI Tools for Students</a> padhein.`
  },

  // === SBI CLERK PROMPTS (index 5) ===
  {
    postSlug: "10-chatgpt-prompts-every-sbi-clerk-aspirant-should-use-in-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` Banking exams ke saath government exam AI preparation ke liye hamara <a href='/post/how-to-use-ai-for-sbi-clerk-preparation-2026' class='text-cyan-500 font-bold hover:underline'>AI se SBI Clerk Preparation Guide</a> aur <a href='/post/how-to-use-ai-to-prepare-for-government-exams-in-2026' class='text-cyan-500 font-bold hover:underline'>AI se Government Exams Preparation</a> guide bhi zaroor check karein.`
  },

  // === BEST FREE AI TOOLS FOR STUDENTS (index 7) ===
  {
    postSlug: "best-free-ai-tools-for-students-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` Agar aap competitive exam aspirant hain toh <a href='/post/top-10-free-ai-tools-upsc-aspirant-2026' class='text-cyan-500 font-bold hover:underline'>Top 10 Free AI Tools for UPSC Aspirants</a> aur <a href='/post/top-10-ai-tools-every-ssc-cgl-aspirant-should-use-in-2026' class='text-cyan-500 font-bold hover:underline'>Top 10 AI Tools for SSC CGL</a> guide specially helpful rahenge. Students ke liye AI se career growth ke tips ke liye <a href='/post/how-students-job-seekers-use-ai-grow-faster' class='text-cyan-500 font-bold hover:underline'>Students aur Job Seekers ke liye AI Roadmap</a> bhi padhein.`
  },

  // === IMAGE 20KB CONVERT (index 8) ===
  {
    postSlug: "image-ko-20kb-me-convert-kaise-kare-free-easy-tarika",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` Agar aap AI image generation seekhna chahte hain toh hamara <a href='/post/25-best-nano-banana-prompts-for-realistic-ai-images-2026' class='text-cyan-500 font-bold hover:underline'>25 Best AI Image Prompts Guide</a> aur viral avatars banane ke liye <a href='/post/viral-3d-social-media-neon-avatar-prompts-bing-creator' class='text-cyan-500 font-bold hover:underline'>Viral 3D Neon Avatar Prompts</a> guide bhi useful rahega.`
  },

  // === ME WITH GOD TEMPLE PROMPT (index 9) ===
  {
    postSlug: "me-with-god-temple-prompt",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` Agar aur bhi devotional AI art prompts chahiye toh hamara <a href='/post/devotional-krishna-temple-prompt' class='text-cyan-500 font-bold hover:underline'>Devotional Krishna Temple Prompt</a> guide bhi dekhein. Aur realistic AI images ke liye <a href='/post/25-best-nano-banana-prompts-for-realistic-ai-images-2026' class='text-cyan-500 font-bold hover:underline'>25 Best Nano Banana Prompts</a> collection useful rahegi.`
  },

  // === MIDJOURNEY CONSISTENT CHARACTERS (index 25) ===
  {
    postSlug: "midjourney-consistent-characters-generate-same-character-different-poses",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` Agar aap AI image prompts ke baare mein aur seekhna chahte hain, toh hamara <a href='/post/25-best-nano-banana-prompts-for-realistic-ai-images-2026' class='text-cyan-500 font-bold hover:underline'>25 Best Nano Banana Prompts for Realistic AI Images</a> guide zaroor padhein. Viral social media avatars banane ke liye <a href='/post/viral-3d-social-media-neon-avatar-prompts-bing-creator' class='text-cyan-500 font-bold hover:underline'>Viral 3D Neon Avatar Prompts</a> bhi helpful rahega.`
  },

  // === VIRAL AI REEL VIDEOS (index 26) ===
  {
    postSlug: "how-to-create-viral-ai-reel-videos-luma-runway",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` AI video creation ke saath AI tools se paise kamane ke liye hamara <a href='/post/best-ai-tools-to-make-money-online-2026' class='text-cyan-500 font-bold hover:underline'>Best AI Tools to Make Money Online 2026</a> guide bhi dekhein. YouTubers ke liye free AI tools ki list ke liye <a href='/post/best-free-ai-tools-for-youtubers-in-2026' class='text-cyan-500 font-bold hover:underline'>Best Free AI Tools for YouTubers</a> article helpful rahega.`
  },

  // === HOW STUDENTS JOB SEEKERS USE AI (index 27) ===
  {
    postSlug: "how-students-job-seekers-use-ai-grow-faster",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` Resume banane ke liye <a href='/post/best-free-ai-resume-builders-for-freshers-2026' class='text-cyan-500 font-bold hover:underline'>Best Free AI Resume Builders for Freshers</a> guide padhein. Aur students ke liye sabse best free AI tools ki list ke liye <a href='/post/best-free-ai-tools-for-students-2026' class='text-cyan-500 font-bold hover:underline'>Best Free AI Tools for Students 2026</a> zaroor check karein.`
  },

  // === VIRAL 3D NEON AVATAR (index 29) ===
  {
    postSlug: "viral-3d-social-media-neon-avatar-prompts-bing-creator",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` Iske alawa realistic AI portraits ke liye hamara <a href='/post/25-best-nano-banana-prompts-for-realistic-ai-images-2026' class='text-cyan-500 font-bold hover:underline'>25 Best Nano Banana AI Image Prompts</a> aur dark moody style ke liye <a href='/post/dark-moody-cyberpunk-portrait-prompt' class='text-cyan-500 font-bold hover:underline'>Dark Moody Cyberpunk Portrait Prompt</a> guide bhi useful rahega.`
  },

  // === DIGITAL NOMAD THUMBNAIL PROMPT (index 30) ===
  {
    postSlug: "digital-nomad-challenge-thumbnail-prompt-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` YouTube thumbnail banane ke baad AI se paise kamane ke aur tarike seekhne ke liye <a href='/post/best-ai-tools-to-make-money-online-2026' class='text-cyan-500 font-bold hover:underline'>Best AI Tools to Make Money Online 2026</a> guide padhein. AI reel videos banana seekhne ke liye <a href='/post/how-to-create-viral-ai-reel-videos-luma-runway' class='text-cyan-500 font-bold hover:underline'>Viral AI Reel Videos Guide</a> bhi dekhein.`
  },

  // === DARK MOODY CYBERPUNK (index 31) ===
  {
    postSlug: "dark-moody-cyberpunk-portrait-prompt",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` Agar aap Midjourney mein consistent characters banana chahte hain toh <a href='/post/midjourney-consistent-characters-generate-same-character-different-poses' class='text-cyan-500 font-bold hover:underline'>Midjourney Consistent Characters Guide</a> zaroor padhein. Aur 3D social media avatars ke liye <a href='/post/viral-3d-social-media-neon-avatar-prompts-bing-creator' class='text-cyan-500 font-bold hover:underline'>Viral 3D Neon Avatar Prompts</a> guide bhi helpful rahega.`
  },

  // === GOLDEN HOUR CAMPING (index 32) ===
  {
    postSlug: "golden-hour-riverside-camping-portrait",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` Agar aur bhi nature-based AI portrait prompts chahiye toh <a href='/post/studio-side-profile-portrait-ai-prompt' class='text-cyan-500 font-bold hover:underline'>Studio Side Profile Portrait Prompt</a> aur <a href='/post/25-best-nano-banana-prompts-for-realistic-ai-images-2026' class='text-cyan-500 font-bold hover:underline'>25 Best Nano Banana AI Image Prompts</a> guide bhi dekhein.`
  },

  // === DEVOTIONAL KRISHNA TEMPLE (index 33) ===
  {
    postSlug: "devotional-krishna-temple-prompt",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` Agar aap apne devotional photos bhi create karna chahte hain toh <a href='/post/me-with-god-temple-prompt' class='text-cyan-500 font-bold hover:underline'>Me With God Temple Prompt</a> guide bhi padhein. Realistic AI art ke liye <a href='/post/25-best-nano-banana-prompts-for-realistic-ai-images-2026' class='text-cyan-500 font-bold hover:underline'>25 Best Nano Banana Prompts</a> bhi check karein.`
  },

  // === STUDENT STUDY DESK PROMPT (index 34) ===
  {
    postSlug: "student-study-desk-prompt",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` Agar aap students ke liye AI tools explore karna chahte hain toh <a href='/post/best-free-ai-tools-for-students-2026' class='text-cyan-500 font-bold hover:underline'>Best Free AI Tools for Students 2026</a> guide zaroor padhein. UPSC aspirants ke liye specially <a href='/post/top-10-free-ai-tools-upsc-aspirant-2026' class='text-cyan-500 font-bold hover:underline'>Top 10 Free AI Tools for UPSC</a> bhi helpful rahega.`
  },

  // === STUDIO SIDE PROFILE PORTRAIT (index 35) ===
  {
    postSlug: "studio-side-profile-portrait-ai-prompt",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` Agar aap aur bhi AI portrait styles explore karna chahte hain toh <a href='/post/dark-moody-cyberpunk-portrait-prompt' class='text-cyan-500 font-bold hover:underline'>Dark Moody Cyberpunk Portrait Prompt</a> aur <a href='/post/golden-hour-riverside-camping-portrait' class='text-cyan-500 font-bold hover:underline'>Golden Hour Riverside Camping Portrait</a> guide bhi dekhein.`
  },

  // === CRICKET PLAYER SELFIE (index 36) ===
  {
    postSlug: "cricket-player-selfie-fan-ai-prompt",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + ` Agar aur bhi realistic AI image prompts chahiye toh <a href='/post/25-best-nano-banana-prompts-for-realistic-ai-images-2026' class='text-cyan-500 font-bold hover:underline'>25 Best Nano Banana Prompts</a> aur social media ke liye <a href='/post/viral-3d-social-media-neon-avatar-prompts-bing-creator' class='text-cyan-500 font-bold hover:underline'>Viral 3D Neon Avatar Prompts</a> guide zaroor dekhein.`
  },

  // === LINK TO NEW SEO POST FROM LATEST 5 POSTS ===
  {
    postSlug: "best-ai-tools-for-content-creators-in-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + " Additionally, if you want to rank your content and drive search traffic to your creations, check out our comprehensive guide on the <a href='/post/best-ai-seo-tools-in-2026' class='text-cyan-500 font-bold hover:underline'>Best AI SEO Tools in 2026 (Tested & Compared)</a>."
  },
  {
    postSlug: "best-ai-tools-for-developers-in-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + " If you are building search-optimized web apps or need to automate technical audits, explore our detailed list of the <a href='/post/best-ai-seo-tools-in-2026' class='text-cyan-500 font-bold hover:underline'>Best AI SEO Tools in 2026 (Tested & Compared)</a>."
  },
  {
    postSlug: "best-ai-marketing-tools-in-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + " To focus specifically on driving search rankings and organic customer acquisition, be sure to read our review of the <a href='/post/best-ai-seo-tools-in-2026' class='text-cyan-500 font-bold hover:underline'>Best AI SEO Tools in 2026 (Tested & Compared)</a>."
  },
  {
    postSlug: "best-ai-tools-for-designers-in-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + " To drive search traffic to your portfolio and visual layouts, optimize your site using the platforms listed in our <a href='/post/best-ai-seo-tools-in-2026' class='text-cyan-500 font-bold hover:underline'>Best AI SEO Tools in 2026 (Tested & Compared)</a> guide."
  },
  {
    postSlug: "best-ai-productivity-tools-in-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + " For teams looking to scale their search visibility and optimize operational content, check out our detailed guide on the <a href='/post/best-ai-seo-tools-in-2026' class='text-cyan-500 font-bold hover:underline'>Best AI SEO Tools in 2026 (Tested & Compared)</a>."
  },

  // === LINK TO NEW CRM POST FROM LATEST 5 POSTS ===
  {
    postSlug: "best-ai-seo-tools-in-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + " To automate sales tracking and manage customer pipeline operations, read our extensive evaluation of the <a href='/post/best-ai-crm-software-in-2026' class='text-cyan-500 font-bold hover:underline'>Best AI CRM Software in 2026 (Tested & Compared)</a>."
  },
  {
    postSlug: "best-ai-tools-for-content-creators-in-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + " To manage sponsorships, brand deals, and creator pipelines, check out our detailed guide on the <a href='/post/best-ai-crm-software-in-2026' class='text-cyan-500 font-bold hover:underline'>Best AI CRM Software in 2026 (Tested & Compared)</a>."
  },
  {
    postSlug: "best-ai-tools-for-developers-in-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + " If you are building custom database models or syncing client projects, read our list of the <a href='/post/best-ai-crm-software-in-2026' class='text-cyan-500 font-bold hover:underline'>Best AI CRM Software in 2026 (Tested & Compared)</a>."
  },
  {
    postSlug: "best-ai-marketing-tools-in-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + " To coordinate campaigns with your sales team and optimize customer retention, check out our guide on the <a href='/post/best-ai-crm-software-in-2026' class='text-cyan-500 font-bold hover:underline'>Best AI CRM Software in 2026 (Tested & Compared)</a>."
  },
  {
    postSlug: "best-ai-tools-for-designers-in-2026",
    sectionIdx: 0, paraIdx: 0,
    replace: (t) => t + " To track freelance design requests and manage client pipelines, organize your workflow using the platforms in our <a href='/post/best-ai-crm-software-in-2026' class='text-cyan-500 font-bold hover:underline'>Best AI CRM Software in 2026 (Tested & Compared)</a> guide."
  }
];

// Apply all link injections
let updatedCount = 0;
for (const plan of linkPlan) {
  const postIdx = posts.findIndex(p => p.slug === plan.postSlug);
  if (postIdx === -1) { console.log("NOT FOUND:", plan.postSlug); continue; }
  const post = posts[postIdx];
  if (!post.sections || !post.sections[plan.sectionIdx]) { console.log("NO SECTION:", plan.postSlug, plan.sectionIdx); continue; }
  const section = post.sections[plan.sectionIdx];
  if (!section.paragraphs || !section.paragraphs[plan.paraIdx]) { console.log("NO PARA:", plan.postSlug, plan.sectionIdx, plan.paraIdx); continue; }
  const original = section.paragraphs[plan.paraIdx];
  const updated = plan.replace(original);
  if (updated !== original) {
    section.paragraphs[plan.paraIdx] = updated;
    updatedCount++;
    console.log("✅ Updated:", plan.postSlug);
  } else {
    console.log("⚠️ No change:", plan.postSlug);
  }
}

fs.writeFileSync(POSTS_PATH, JSON.stringify(posts, null, 2));
console.log(`\nDone! Updated ${updatedCount}/${linkPlan.length} posts with internal links.`);
