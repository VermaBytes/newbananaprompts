import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const lectureTitle = "Day 03 - CSS Basics (Flexbox, Grid, Responsive Design) + Landing Page Project";
const lectureDescription =
  "Day 03 lecture: CSS basics, Flexbox, Grid, responsive design, and a landing page project with tasks and pro tips.";

export const metadata: Metadata = {
  title: lectureTitle,
  description: lectureDescription,
  keywords: [
    "Day 03 CSS",
    "CSS basics",
    "Flexbox",
    "CSS Grid",
    "responsive design",
    "landing page project"
  ],
  alternates: {
    canonical: "/courses/web-development-with-ai/lecture-03"
  },
  openGraph: {
    title: lectureTitle,
    description: lectureDescription,
    url: `${SITE_URL}/courses/web-development-with-ai/lecture-03`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/posts/lecture-03.png`,
        width: 1200,
        height: 630,
        alt: "Day 03 lecture thumbnail"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: lectureTitle,
    description: lectureDescription,
    images: [`${SITE_URL}/posts/lecture-03.png`]
  }
};

export default function Lecture03Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lectureTitle,
    description: lectureDescription,
    url: `${SITE_URL}/courses/web-development-with-ai/lecture-03`,
    image: `${SITE_URL}/posts/lecture-03.png`,
    inLanguage: "en",
    educationalLevel: "Beginner",
    learningResourceType: "Lecture",
    author: {
      "@type": "Person",
      name: "Shobhit Verma"
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`
      }
    }
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What will I learn in Day 03?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You will learn CSS basics, Flexbox, Grid, responsive design, and build a landing page."
        }
      },
      {
        "@type": "Question",
        name: "Is Flexbox or Grid more important for beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with Flexbox for simple layouts, then use Grid for complex page structures."
        }
      },
      {
        "@type": "Question",
        name: "How do I make the landing page mobile friendly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use media queries to adjust spacing, font size, and layout under 768px width."
        }
      }
    ]
  };

  return (
    <article className="mx-auto max-w-4xl space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Link
        href="/courses/web-development-with-ai"
        className="theme-button theme-soft-hover inline-flex items-center rounded-sm px-4 py-2 text-sm font-semibold"
      >
        Back to Course
      </Link>

      <section className="site-panel overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/9]">
          <Image
            src="/posts/lecture-03.png"
            alt="Day 03 - CSS Basics"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>
        <div className="space-y-6 px-6 py-8 sm:px-10">
          <div className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">Lecture 03</div>
          <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-4xl font-bold sm:text-5xl">
            CSS Basics: Flexbox, Grid, Responsive Design + Landing Page
          </h1>
          <p className="theme-text-secondary text-lg leading-8">
            Welcome back! अब तक आपने HTML सीख लिया है, और आज हम उसे beautiful और modern design में बदलेंगे
            using CSS. इस lecture में CSS basics, Flexbox, Grid, responsive design, और एक landing page project रहेगा।
          </p>
        </div>
      </section>

      <section className="post-content space-y-8">
        <section className="space-y-3">
          <h2>आज आप क्या सीखेंगे?</h2>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>CSS क्या है?</li>
            <li>Colors, Fonts, Styling</li>
            <li>Flexbox (Layout control)</li>
            <li>Grid (Advanced layout)</li>
            <li>Responsive Design (Mobile friendly)</li>
            <li>Landing Page बनाना</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>CSS क्या है?</h2>
          <p>CSS = Cascading Style Sheets. यह HTML को style और design देता है।</p>
        </section>

        <section className="space-y-3">
          <h2>Example (Without vs With CSS)</h2>
          <h3>Without CSS</h3>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`<h1>Hello World</h1>`}</code>
            </pre>
          </div>
          <h3>With CSS</h3>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`<h1 style="color: blue; font-size: 40px;">Hello World</h1>`}</code>
            </pre>
          </div>
        </section>

        <section className="space-y-3">
          <h2>CSS Types</h2>
          <h3>Inline CSS</h3>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`<p style="color:red;">Hello</p>`}</code>
            </pre>
          </div>
          <h3>Internal CSS</h3>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`<style>
  p { color: green; }
</style>`}</code>
            </pre>
          </div>
          <h3>External CSS (Best Practice)</h3>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`<link rel="stylesheet" href="style.css">`}</code>
            </pre>
          </div>
        </section>

        <section className="space-y-3">
          <h2>CSS Basics (Must Know)</h2>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`body {
  background-color: #f4f4f4;
  font-family: Arial;
}

h1 {
  color: blue;
}

button {
  background: orange;
  color: white;
  padding: 10px;
  border: none;
}`}</code>
            </pre>
          </div>
        </section>

        <section className="space-y-3">
          <h2>Flexbox (Important Layout Tool)</h2>
          <p>Flexbox items को row या column में align करना आसान बनाता है।</p>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}</code>
            </pre>
          </div>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Navbar</li>
            <li>Cards</li>
            <li>Layout alignment</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>CSS Grid (Advanced Layout)</h2>
          <p>Grid एक 2D layout system है (rows + columns)।</p>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}`}</code>
            </pre>
          </div>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Dashboard</li>
            <li>Gallery</li>
            <li>Complex layouts</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>Responsive Design (Very Important)</h2>
          <p>Website हर device पर सही दिखनी चाहिए।</p>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}`}</code>
            </pre>
          </div>
        </section>

        <section className="space-y-3">
          <h2>Project: Landing Page बनाओ</h2>
          <h3>HTML Code</h3>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`<!DOCTYPE html>
<html>
<head>
  <title>Landing Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="header">
    <h1>My Website</h1>
    <button>Get Started</button>
  </header>

  <section class="hero">
    <h2>Learn Web Development with AI 🚀</h2>
    <p>Build websites faster using smart tools</p>
  </section>

</body>
</html>`}</code>
            </pre>
          </div>
          <h3>CSS Code (style.css)</h3>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`body {
  margin: 0;
  font-family: Arial;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #222;
  color: white;
}

.hero {
  text-align: center;
  padding: 50px;
}

button {
  background: orange;
  border: none;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
}`}</code>
            </pre>
          </div>
        </section>

        <section className="space-y-3">
          <h2>Mini Task</h2>
          <p>इस landing page को improve करो:</p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Background image add करो</li>
            <li>Button hover effect add करो</li>
            <li>Mobile responsive बनाओ</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>Pro Tips</h2>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>CSS = design power</li>
            <li>Flexbox = easy layout</li>
            <li>Grid = advanced layout</li>
            <li>Responsive = must skill</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>Day 03 Summary</h2>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>CSS basics</li>
            <li>Flexbox & Grid</li>
            <li>Responsive design</li>
            <li>Landing page बनाना</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>Next (Day 04)</h2>
          <p>Advanced CSS, animations, hover effects, और modern UI design सीखेंगे।</p>
        </section>

        <section className="theme-surface rounded-2xl border border-[#eadfce] p-5 text-center">
          <h2 className="theme-text-primary text-2xl font-bold">Call to Action</h2>
          <p className="theme-text-secondary mt-2 text-base leading-7">
            Comment / note करो: <strong>\"Day 03 Done ✅\"</strong>
          </p>
          <p className="theme-text-muted mt-3 text-sm">Next lecture चाहिए? Type: \"Day 04\"</p>
        </section>
      </section>
    </article>
  );
}
