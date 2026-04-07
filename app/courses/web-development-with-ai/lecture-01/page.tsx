import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const lectureTitle = "Day 01 - Introduction to Web Development with AI";
const lectureDescription =
  "Day 01 lecture: Web development basics, frontend vs backend, AI use in coding, HTML intro, and first practical webpage.";

export const metadata: Metadata = {
  title: lectureTitle,
  description: lectureDescription,
  keywords: [
    "Day 01 web development",
    "Introduction to web development",
    "Frontend vs backend",
    "HTML basics",
    "AI for coding",
    "Beginner web development lecture"
  ],
  alternates: {
    canonical: "/courses/web-development-with-ai/lecture-01"
  },
  openGraph: {
    title: lectureTitle,
    description: lectureDescription,
    url: `${SITE_URL}/courses/web-development-with-ai/lecture-01`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/posts/lecture-01.png`,
        width: 1200,
        height: 630,
        alt: "Day 01 lecture thumbnail"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: lectureTitle,
    description: lectureDescription,
    images: [`${SITE_URL}/posts/lecture-01.png`]
  }
};

export default function Lecture01Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lectureTitle,
    description: lectureDescription,
    url: `${SITE_URL}/courses/web-development-with-ai/lecture-01`,
    image: `${SITE_URL}/posts/lecture-01.png`,
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
        name: "Is Day 01 suitable for absolute beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Day 01 starts with basics like frontend vs backend and simple HTML structure."
        }
      },
      {
        "@type": "Question",
        name: "What should I practice after this lecture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Build a simple HTML page with heading, paragraph, image, and a button."
        }
      },
      {
        "@type": "Question",
        name: "Do I need any tools to begin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A basic text editor like VS Code and any modern browser are enough."
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
            src="/posts/lecture-01.png"
            alt="Day 01 - Web Development with AI"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>
        <div className="space-y-6 px-6 py-8 sm:px-10">
          <div className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">Lecture 01</div>
          <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-4xl font-bold sm:text-5xl">
            Introduction to Web Development with AI
          </h1>
          <p className="theme-text-secondary text-lg leading-8">
            अगर आप Web Development सीखना चाहते हो और AI का use करके fast growth करना चाहते हो, तो ये 30 day course आपके
            लिए perfect है। आज Day 01 में हम basic understanding + पहला practical project करेंगे।
          </p>
        </div>
      </section>

      <section className="post-content space-y-8">
        <section className="space-y-3">
          <h2>आज आप क्या सीखेंगे?</h2>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Web Development क्या होता है?</li>
            <li>Frontend vs Backend</li>
            <li>AI कैसे help करता है coding में</li>
            <li>HTML का introduction</li>
            <li>पहला webpage बनाना</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>Web Development क्या है?</h2>
          <p>
            Web Development का मतलब होता है <strong>websites और web applications बनाना</strong>। Example:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Amazon → eCommerce website</li>
            <li>YouTube → Video platform</li>
            <li>आपका Tech Deals Blog → Web Project</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>Web Development के 3 Parts</h2>
          <h3>1. Frontend (UI / Design)</h3>
          <p>जो user देखता है: Colors, Buttons, Layout</p>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`<h1>Hello World</h1>`}</code>
            </pre>
          </div>
          <h3>2. Backend (Logic / Server)</h3>
          <p>जो user नहीं देखता: Data processing, Login system, API</p>
          <h3>3. Database</h3>
          <p>Data store होता है: Users, Products, Orders</p>
        </section>

        <section className="space-y-3">
          <h2>AI Web Development में कैसे मदद करता है?</h2>
          <p>AI आपकी speed 10x बढ़ा सकता है। आप AI से ये सब कर सकते हो:</p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Code generate</li>
            <li>Error fix</li>
            <li>UI design</li>
            <li>Content writing</li>
          </ul>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <p className="theme-kicker text-xs font-semibold uppercase tracking-[0.22em]">Example Prompt</p>
            <pre className="mt-2 overflow-x-auto text-sm">
              <code>{`Create a simple HTML page with header, paragraph and button.`}</code>
            </pre>
          </div>
        </section>

        <section className="space-y-3">
          <h2>HTML क्या है?</h2>
          <p>HTML = <strong>HyperText Markup Language</strong>. यह website का structure बनाता है।</p>
        </section>

        <section className="space-y-3">
          <h2>Basic HTML Structure</h2>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>

  <h1>Hello World</h1>
  <p>This is my first website</p>

</body>
</html>`}</code>
            </pre>
          </div>
        </section>

        <section className="space-y-3">
          <h2>Important HTML Tags</h2>
          <div className="overflow-hidden rounded-2xl border border-[#eadfce]">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="theme-surface">
                <tr>
                  <th className="px-4 py-3">Tag</th>
                  <th className="px-4 py-3">Use</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["<h1>", "Heading"],
                  ["<p>", "Paragraph"],
                  ["<a>", "Link"],
                  ["<img>", "Image"],
                  ["<button>", "Button"]
                ].map(([tag, use]) => (
                  <tr key={tag} className="border-t border-[#eadfce]">
                    <td className="px-4 py-3 font-semibold">{tag}</td>
                    <td className="px-4 py-3">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2>Practical: आपका पहला Webpage</h2>
          <ol className="theme-text-secondary list-decimal pl-6 text-base leading-7">
            <li>Notepad / VS Code खोलो</li>
            <li>File बनाओ: <code className="font-semibold">index.html</code></li>
            <li>यह code paste करो:</li>
          </ol>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`<!DOCTYPE html>
<html>
<head>
  <title>My First Website</title>
</head>
<body>

  <h1>👋 Hello, I am Shobhit</h1>
  <p>I am learning Web Development with AI 🚀</p>

  <button>Start Now</button>

</body>
</html>`}</code>
            </pre>
          </div>
          <p>File open करो browser में — 🎉 आपका पहला webpage ready है।</p>
        </section>

        <section className="space-y-3">
          <h2>Mini Task (Important)</h2>
          <p>इस page को modify करो:</p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>अपना नाम डालो</li>
            <li>एक image add करो</li>
            <li>एक link add करो</li>
          </ul>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`<img src="image.jpg" width="200">
<a href="https://google.com">Go to Google</a>`}</code>
            </pre>
          </div>
        </section>

        <section className="space-y-3">
          <h2>Pro Tips (Day 01)</h2>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>रोज practice करो (1–2 घंटे)</li>
            <li>AI से पूछने में शर्म मत करो</li>
            <li>Copy मत करो → समझो</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>Day 01 Summary</h2>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Web Development basics</li>
            <li>HTML structure</li>
            <li>AI का use</li>
            <li>First webpage बनाना</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>Next (Day 02)</h2>
          <p>Advanced HTML (Forms, Lists, Tables) और real-world layout सीखेंगे।</p>
        </section>

        <section className="theme-surface rounded-2xl border border-[#eadfce] p-5 text-center">
          <h2 className="theme-text-primary text-2xl font-bold">Call to Action</h2>
          <p className="theme-text-secondary mt-2 text-base leading-7">
            अगर आप serious हो: Comment / note करो <strong>\"Day 01 Done ✅\"</strong>
          </p>
          <p className="theme-text-secondary mt-1 text-base">और ready हो जाओ next level के लिए 🔥</p>
          <p className="theme-text-muted mt-3 text-sm">Want next lecture? Type: \"Day 02\"</p>
        </section>
      </section>
    </article>
  );
}
