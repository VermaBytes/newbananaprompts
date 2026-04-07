import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const lectureTitle = "Day 02 - Advanced HTML (Forms, Lists, Tables) + Real-World Layout";
const lectureDescription =
  "Day 02 lecture: HTML lists, tables, forms, and a real-world page layout with a mini project and pro tips.";

export const metadata: Metadata = {
  title: lectureTitle,
  description: lectureDescription,
  keywords: [
    "Day 02 HTML",
    "HTML forms",
    "HTML lists",
    "HTML tables",
    "real-world layout",
    "web development lecture"
  ],
  alternates: {
    canonical: "/courses/web-development-with-ai/lecture-02"
  },
  openGraph: {
    title: lectureTitle,
    description: lectureDescription,
    url: `${SITE_URL}/courses/web-development-with-ai/lecture-02`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/posts/lecture-02.png`,
        width: 1200,
        height: 630,
        alt: "Day 02 lecture thumbnail"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: lectureTitle,
    description: lectureDescription,
    images: [`${SITE_URL}/posts/lecture-02.png`]
  }
};

export default function Lecture02Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lectureTitle,
    description: lectureDescription,
    url: `${SITE_URL}/courses/web-development-with-ai/lecture-02`,
    image: `${SITE_URL}/posts/lecture-02.png`,
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
        name: "What will I build in Day 02?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You will build lists, tables, forms, and a real-world HTML layout."
        }
      },
      {
        "@type": "Question",
        name: "Are forms and tables important for real projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Forms collect user input and tables display structured data in many web apps."
        }
      },
      {
        "@type": "Question",
        name: "What should I practice after Day 02?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Create a simple page with a navbar, a table, and a contact form."
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
            src="/posts/lecture-02.png"
            alt="Day 02 - Advanced HTML"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>
        <div className="space-y-6 px-6 py-8 sm:px-10">
          <div className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">Lecture 02</div>
          <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-4xl font-bold sm:text-5xl">
            Advanced HTML: Forms, Lists, Tables + Real-World Layout
          </h1>
          <p className="theme-text-secondary text-lg leading-8">
            Welcome back! Day 02 में हम सीखेंगे advanced HTML elements, forms, lists, tables और real‑world layout
            बनाना। यह lecture आपको practical websites बनाने के लिए तैयार करता है।
          </p>
        </div>
      </section>

      <section className="post-content space-y-8">
        <section className="space-y-3">
          <h2>आज आप क्या सीखेंगे?</h2>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Forms कैसे बनाते हैं (Login, Signup)</li>
            <li>Lists कैसे use होते हैं</li>
            <li>Tables में data कैसे दिखाते हैं</li>
            <li>Real वेबसाइट जैसा layout कैसे बनता है</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>HTML Lists</h2>
          <h3>Ordered List (Numbers)</h3>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>`}</code>
            </pre>
          </div>
          <h3>Unordered List (Bullets)</h3>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`<ul>
  <li>Frontend</li>
  <li>Backend</li>
  <li>Database</li>
</ul>`}</code>
            </pre>
          </div>
        </section>

        <section className="space-y-3">
          <h2>HTML Tables</h2>
          <p>Tables का use structured data दिखाने के लिए होता है।</p>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`<table border="1">
  <tr>
    <th>Name</th>
    <th>Course</th>
  </tr>
  <tr>
    <td>Shobhit</td>
    <td>Web Dev</td>
  </tr>
</table>`}</code>
            </pre>
          </div>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Student data</li>
            <li>Product listing</li>
            <li>Reports</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>HTML Forms</h2>
          <p>Forms का use user input लेने के लिए होता है।</p>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`<form>
  <label>Name:</label>
  <input type="text" placeholder="Enter your name"><br><br>

  <label>Email:</label>
  <input type="email" placeholder="Enter email"><br><br>

  <label>Password:</label>
  <input type="password"><br><br>

  <button>Submit</button>
</form>`}</code>
            </pre>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#eadfce]">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="theme-surface">
                <tr>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Use</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["text", "Name"],
                  ["email", "Email"],
                  ["password", "Password"],
                  ["number", "Phone"],
                  ["date", "DOB"]
                ].map(([type, use]) => (
                  <tr key={type} className="border-t border-[#eadfce]">
                    <td className="px-4 py-3 font-semibold">{type}</td>
                    <td className="px-4 py-3">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2>Real-World Layout</h2>
          <p>अब हम basic layout बनाएंगे जैसे real website में होता है।</p>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>

  <!-- Header -->
  <header>
    <h1>My Website</h1>
  </header>

  <!-- Navigation -->
  <nav>
    <a href="#">Home</a> |
    <a href="#">About</a> |
    <a href="#">Contact</a>
  </nav>

  <!-- Main Content -->
  <section>
    <h2>Welcome</h2>
    <p>This is my website layout.</p>
  </section>

  <!-- Form -->
  <section>
    <h2>Contact Form</h2>
    <form>
      <input type="text" placeholder="Name"><br><br>
      <input type="email" placeholder="Email"><br><br>
      <button>Send</button>
    </form>
  </section>

  <!-- Footer -->
  <footer>
    <p>© 2026 My Website</p>
  </footer>

</body>
</html>`}</code>
            </pre>
          </div>
        </section>

        <section className="space-y-3">
          <h2>Mini Project</h2>
          <p>एक simple website बनाओ जिसमें:</p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Navigation menu</li>
            <li>Course list</li>
            <li>Table</li>
            <li>Contact form</li>
          </ul>
          <p className="theme-text-secondary">
            Challenge: Image, links, और extra form fields add करो।
          </p>
        </section>

        <section className="space-y-3">
          <h2>Pro Tips</h2>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Forms = real apps की backbone</li>
            <li>Tables = data display</li>
            <li>Layout = UI structure</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>Day 02 Summary</h2>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Lists</li>
            <li>Tables</li>
            <li>Forms</li>
            <li>Real-world layout</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>Next (Day 03)</h2>
          <p>CSS basics, colors, fonts, और styling सीखेंगे।</p>
        </section>

        <section className="theme-surface rounded-2xl border border-[#eadfce] p-5 text-center">
          <h2 className="theme-text-primary text-2xl font-bold">Call to Action</h2>
          <p className="theme-text-secondary mt-2 text-base leading-7">
            Comment / note करो: <strong>\"Day 02 Done ✅\"</strong>
          </p>
          <p className="theme-text-muted mt-3 text-sm">Next lecture चाहिए? Type: \"Day 03\"</p>
        </section>
      </section>
    </article>
  );
}
