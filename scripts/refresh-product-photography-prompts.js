const fs = require("fs");
const path = require("path");

const postsPath = path.join(process.cwd(), "data", "posts.json");
const posts = JSON.parse(fs.readFileSync(postsPath, "utf8"));
const slug = "ai-image-prompts-for-product-photography";
const post = posts.find((entry) => entry.slug === slug);

if (!post) throw new Error(`Post not found: ${slug}`);

post.title = "30 AI Image Prompts for Product Photography in 2026";
post.seoTitle = "30 AI Image Prompts for Product Photography in 2026";
post.metaTitle = "30 AI Product Photography Prompts for 2026";
post.description = "Use 30 adaptable AI product photography prompts plus a reference-first workflow for accurate ecommerce, lifestyle and campaign visuals in 2026.";
post.updatedAt = "2026-09-02T06:30:00.000Z";
post.imageAlt = "AI image prompts for realistic ecommerce product photography and advertising visuals";

post.sections[0] = {
  heading: "Introduction: Use AI Without Misrepresenting the Product",
  paragraphs: [
    "<p>AI image tools can help ecommerce teams explore backgrounds, lighting, camera angles and campaign concepts before committing to a full production shoot. They are also useful for extending an approved product photograph into lifestyle compositions or social formats. The safest starting point is a clear photograph of the real item—not a text-only request that asks a model to invent the product.</p>",
    "<p>This guide provides 30 adaptable prompts for marketplace, studio, lifestyle and advertising use cases. Each prompt is a creative brief, not a guarantee of an accurate output. Results depend on the image model, version, reference-image controls, aspect ratio and the quality of your source photograph.</p>",
    "<div class='border-l-4 border-orange-500 bg-orange-500/10 p-4 my-4'><strong>Accuracy rule:</strong> A generated visual must not change the real product's size, shape, color, material, included accessories, safety information, label or performance. If an output could make a reasonable buyer expect something they will not receive, do not publish it.</div>",
    "<div class='overflow-x-auto my-4'><table><thead><tr><th>Asset</th><th>Recommended starting point</th><th>Main review risk</th></tr></thead><tbody><tr><td>Main listing image</td><td>Real product photograph edited only where the marketplace permits</td><td>Incorrect product geometry, label or background rules</td></tr><tr><td>Secondary listing image</td><td>Approved product cutout placed into a relevant scene</td><td>Invented accessories, scale or use claims</td></tr><tr><td>Lifestyle creative</td><td>Reference product plus a clearly described environment</td><td>Misleading size, material or functionality</td></tr><tr><td>Concept or moodboard</td><td>Text prompt or rough reference</td><td>Mistaking a concept for customer-facing evidence</td></tr><tr><td>Sale advertisement</td><td>Approved product image; add offer text in a design tool</td><td>Wrong price, dates, disclaimers or distorted text</td></tr></tbody></table></div>"
  ]
};

const rulesIndex = post.sections.findIndex((section) => section.heading === "Important Rules Before Using AI Product Images");
post.sections[rulesIndex] = {
  heading: "Important Rules Before Publishing AI Product Images",
  paragraphs: [
    "<p>Marketplace policies and advertising rules vary by country, category and placement. Verify the current requirements on the platform where the image will appear; do not rely on a generic dimension or background rule copied from another marketplace.</p>",
    "<ul><li><strong>Preserve product truth:</strong> compare the output with the physical item or an approved reference image.</li><li><strong>Protect labels:</strong> generate the scene first and composite the real label afterward when the model cannot reproduce it reliably.</li><li><strong>Separate concepts from listings:</strong> a moodboard may explore ideas, but a listing must represent what the buyer receives.</li><li><strong>Avoid unsupported claims:</strong> do not generate badges, certifications, reviews, before-and-after results or performance demonstrations without evidence and permission.</li><li><strong>Check intellectual-property rights:</strong> use product images, logos, fonts and props you are authorized to use.</li><li><strong>Inspect at full size:</strong> look for duplicated parts, warped packaging, unreadable text, impossible reflections, inconsistent shadows and incorrect quantities.</li><li><strong>Keep an audit trail:</strong> retain the source photograph, prompt, generated output and final edited file for important commercial assets.</li></ul>"
  ]
};

post.sections.splice(rulesIndex + 1, 0,
  {
    heading: "Reference-First Workflow for More Accurate Results",
    paragraphs: [
      "<ol><li><strong>Capture the real product:</strong> photograph the front, back, side, label and included accessories in neutral light.</li><li><strong>Create an approved cutout:</strong> remove the background while preserving edges, transparency, reflections and proportions.</li><li><strong>Lock invariants:</strong> state what must not change, such as packaging geometry, cap color, logo placement and number of items.</li><li><strong>Generate one variable at a time:</strong> begin with the background, then adjust lighting or props. This makes errors easier to diagnose.</li><li><strong>Composite exact text afterward:</strong> use the real packaging artwork or add marketing copy in a layout tool instead of trusting generated typography.</li><li><strong>Run visual QA:</strong> compare the final asset beside the reference at 100% zoom and on a mobile-size preview.</li><li><strong>Check destination rules:</strong> review the marketplace or ad platform policy immediately before publishing.</li></ol>",
      "<p><strong>Reusable instruction block:</strong> Add this after any prompt when your tool accepts reference images: “Use the attached product image as the identity reference. Preserve the exact silhouette, dimensions, color, material, label position, logo, cap and included parts. Change only the background, lighting and permitted props. Do not invent text, features, accessories or quantities.”</p>"
    ]
  },
  {
    heading: "How to Evaluate a Generated Product Image",
    paragraphs: [
      "<div class='overflow-x-auto my-4'><table><thead><tr><th>Check</th><th>Pass condition</th><th>If it fails</th></tr></thead><tbody><tr><td>Identity</td><td>Shape, color and construction match the reference</td><td>Regenerate with stronger reference controls or composite the real cutout</td></tr><tr><td>Label</td><td>All visible text and symbols are exact</td><td>Remove generated text and apply approved artwork manually</td></tr><tr><td>Scale</td><td>Product size is believable beside props or people</td><td>Use fewer props and specify real dimensions</td></tr><tr><td>Lighting</td><td>Highlights and shadows share one plausible direction</td><td>Simplify the scene and state key-light direction</td></tr><tr><td>Quantity</td><td>Only the items included with purchase are shown</td><td>Remove duplicates and invented accessories</td></tr><tr><td>Claims</td><td>Every badge, result or feature is documented</td><td>Delete unsupported visual or text claims</td></tr><tr><td>Mobile crop</td><td>Product remains clear at feed or listing size</td><td>Reduce empty space and export the destination ratio</td></tr></tbody></table></div>",
      "<p>Do not publish an image merely because it looks polished. Commercial quality is a combination of visual clarity, product accuracy, rights clearance and suitability for the exact placement.</p>"
    ]
  }
);

const toolsIndex = post.sections.findIndex((section) => section.heading === "Best AI Tools for Product Photography Prompts");
post.sections[toolsIndex] = {
  heading: "Choosing an AI Image Workflow for Product Photography",
  paragraphs: [
    "<p>Choose a tool by the control you need rather than by a universal ranking. For an existing product, prioritize strong reference-image preservation, selective editing, masking and repeatable aspect-ratio controls. For early campaign concepts, broad text-to-image exploration may be sufficient. For final packaging and offer text, use a conventional design editor so every character remains exact.</p>",
    "<div class='overflow-x-auto my-4'><table><thead><tr><th>Workflow need</th><th>Capability to look for</th><th>Question to test</th></tr></thead><tbody><tr><td>Keep the same product</td><td>High-fidelity image reference or product-preservation control</td><td>Does a second generation keep the silhouette and label position?</td></tr><tr><td>Replace only a background</td><td>Masking or targeted edit</td><td>Are product edges and reflections unchanged?</td></tr><tr><td>Create many campaign ratios</td><td>Canvas extension and reliable cropping</td><td>Can it add space without stretching the product?</td></tr><tr><td>Accurate label and price</td><td>Layer-based design editing</td><td>Can approved artwork be placed without regeneration?</td></tr><tr><td>Team approval</td><td>Version history and shared review</td><td>Can reviewers trace the source and final changes?</td></tr></tbody></table></div>",
    "<p>Popular general image generators and editing suites can support parts of this workflow, but their features, plans and commercial terms change. Test with a non-confidential sample, read the current provider terms and select the option that preserves your product most reliably.</p>"
  ]
};

const mistakesIndex = post.sections.findIndex((section) => section.heading === "Common Mistakes to Avoid");
post.sections[mistakesIndex].paragraphs = [
  "<ul><li><strong>Starting without a reference:</strong> text-only generation often invents a product rather than reproducing yours.</li><li><strong>Changing several variables together:</strong> altering scene, angle, lighting and packaging at once makes quality control difficult.</li><li><strong>Trusting generated typography:</strong> labels, prices and offer dates should be applied from approved source files.</li><li><strong>Using decorative props that imply inclusion:</strong> customers may believe pictured accessories come in the package.</li><li><strong>Ignoring scale:</strong> a bottle, watch or piece of furniture can appear larger or smaller than the real item.</li><li><strong>Publishing unsupported before-and-after visuals:</strong> outcome imagery needs appropriate evidence and must comply with category-specific rules.</li><li><strong>Using one crop everywhere:</strong> create deliberate versions for square listings, vertical feeds and wide banners.</li><li><strong>Skipping a mobile review:</strong> important label or product detail may disappear at the size customers actually see.</li></ul>"
];

const conclusionIndex = post.sections.findIndex((section) => section.heading === "Conclusion");
post.sections[conclusionIndex] = {
  heading: "Conclusion: Accuracy Comes Before Visual Polish",
  paragraphs: [
    "<p>These 30 prompts are starting briefs for different product categories and placements. Adapt the product details, environment, lighting and output ratio, but keep the real item's identity fixed. A reference-first edit will usually be safer for customer-facing work than generating a product entirely from text.</p>",
    "<p>Before publishing, compare the output with the real product, replace generated label text with approved artwork, remove anything not included with purchase and verify the current destination-platform rules. The best result is not simply attractive—it is accurate, reviewable and appropriate for the buyer's context.</p>",
    "<p>For an end-to-end workflow covering images, product copy and campaign assets, read <a href='/post/how-to-use-ai-for-product-photography-and-marketing-in-2026' class='text-cyan-400 font-bold hover:underline'>How to Use AI for Product Photography and Marketing</a>.</p>"
  ]
};

fs.writeFileSync(postsPath, `${JSON.stringify(posts, null, 2)}\n`);
console.log(`Refreshed ${slug} for ${post.updatedAt}`);
