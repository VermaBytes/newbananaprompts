const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '../data/posts.json');
let posts = [];

try {
  const data = fs.readFileSync(postsPath, 'utf8');
  posts = JSON.parse(data);
} catch (e) {
  console.error('Error reading posts.json:', e);
  process.exit(1);
}

const postIndex = posts.findIndex(p => p.slug === 'best-ai-hr-software-in-2026');

if (postIndex === -1) {
  console.error('Could not find post with slug best-ai-hr-software-in-2026');
  process.exit(1);
}

// Read markdown files
const artifactDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\b7e52030-adc8-40c2-86a0-a4cbfc5fdf02';
const part1 = fs.readFileSync(path.join(artifactDir, 'article_content_part1.md'), 'utf8');
const part2 = fs.readFileSync(path.join(artifactDir, 'article_content_part2.md'), 'utf8');
const part3 = fs.readFileSync(path.join(artifactDir, 'article_content_part3.md'), 'utf8');
const part4 = fs.readFileSync(path.join(artifactDir, 'article_content_part4.md'), 'utf8');

const fullMarkdown = [part1, part2, part3, part4].join('\n\n');

// A simple parser to convert Markdown to the sections format
const sections = [];
let currentHeading = '';
let currentParagraphs = [];

const lines = fullMarkdown.split('\n');

for (let line of lines) {
  line = line.trim();
  if (!line) continue;

  if (line.startsWith('#')) {
    if (currentHeading || currentParagraphs.length > 0) {
      sections.push({
        heading: currentHeading || 'Overview',
        paragraphs: currentParagraphs
      });
    }
    // Remove all leading #s
    currentHeading = line.replace(/^#+\s*/, '');
    currentParagraphs = [];
  } else {
    // Basic HTML conversion for bold/links could be added here, but Markdown is often fine 
    // depending on the frontend renderer. Assuming frontend handles Markdown or raw text.
    let parsedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    currentParagraphs.push(parsedLine);
  }
}

if (currentHeading || currentParagraphs.length > 0) {
  sections.push({
    heading: currentHeading || 'Overview',
    paragraphs: currentParagraphs
  });
}

// Update the post object
const post = posts[postIndex];

post.title = "Best AI HR Software in 2026: Top 30 AI Recruiting & HR Platforms Compared";
post.seoTitle = "Best AI HR Software in 2026: Top 30 HR & Recruiting Tools";
post.description = "Compare the 30 best AI HR software in 2026. Review top AI recruiting platforms, ATS, payroll, employee engagement, and enterprise HR automation tools with pricing.";
post.dateLabel = "July 27, 2026";
post.updatedAt = new Date().toISOString();
post.sections = sections;

// Add schema markup
const schemaData = fs.readFileSync(path.join(artifactDir, 'schema_markup.json'), 'utf8');
post.schema = JSON.parse(schemaData);

// Write back to posts.json
fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2), 'utf8');

console.log('Successfully updated best-ai-hr-software-in-2026 in posts.json');
