import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const lectureTitle = "Day 05 - Advanced CSS, Animations, Hover Effects & Modern UI Design";
const lectureDescription =
  "Learn advanced CSS hover effects, transitions, transform, animations, keyframes, modern product card UI design, and build a professional product card project.";

export const metadata: Metadata = {
  title: lectureTitle,
  description: lectureDescription,
  keywords: [
    "advanced css",
    "css hover effects",
    "css animations",
    "css transitions",
    "modern ui design",
    "product card ui",
    "keyframes",
    "product card project"
  ],
  alternates: {
    canonical: "/courses/web-development-with-ai/lecture-05"
  },
  openGraph: {
    title: lectureTitle,
    description: lectureDescription,
    url: `${SITE_URL}/courses/web-development-with-ai/lecture-05`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/posts/lecture-05.png`,
        width: 1200,
        height: 630,
        alt: "Day 05 Advanced CSS product card UI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: lectureTitle,
    description: lectureDescription,
    images: [`${SITE_URL}/posts/lecture-05.png`]
  }
};

export default function Lecture05Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lectureTitle,
    description: lectureDescription,
    url: `${SITE_URL}/courses/web-development-with-ai/lecture-05`,
    image: `${SITE_URL}/posts/lecture-05.png`,
    inLanguage: "en",
    educationalLevel: "Beginner",
    learningResourceType: "Lecture",
    author: {
      "@type": "Person",
      name: "Shobhit Verma"
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What will I learn in Day 05?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You will learn CSS hover effects, transitions, transforms, animations, keyframes, and a modern product card UI design project."
        }
      },
      {
        "@type": "Question",
        name: "How do CSS transitions help hover effects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Transitions make hover effects smooth and polished by animating the change between CSS states."
        }
      },
      {
        "@type": "Question",
        name: "What is the mini project for this lecture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The mini project is a modern animated product card UI with hover effects and professional styling."
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
            src="/posts/lecture-05.png"
            alt="Day 05 Advanced CSS"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="space-y-6 px-6 py-8 sm:px-10">
          <div className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">
            Lecture 05
          </div>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Advanced CSS, Animations, Hover Effects & Modern UI Design
          </h1>

          <p className="text-lg leading-8">
            Welcome to Day 5! आज हम सीखेंगे कैसे professional UI बनाएं using advanced hover effects, transitions,
            transforms, animations, और modern product card design.
          </p>
        </div>
      </section>

      <section className="post-content space-y-8">
        <section className="space-y-3">
          <h2>Introduction</h2>
          <p>
            In this lecture we move from basic styling to advanced CSS techniques that make websites look modern,
            engaging, and professional.
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Hover Effects</li>
            <li>CSS Transitions</li>
            <li>CSS Transform</li>
            <li>Box Shadow & Border Radius</li>
            <li>Animations and @keyframes</li>
            <li>Modern Product Card UI Project</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>1. CSS Hover Effects</h2>
          <p>
            Hover effects change the style when the user moves the mouse over an element. यह interaction को बेहतर बनाते हैं और website को feel देते हैं.
          </p>
          <pre className="overflow-x-auto text-sm">
            {`button:hover {
  background-color: blue;
  color: white;
}`}
          </pre>
        </section>

        <section className="space-y-3">
          <h2>2. CSS Transition</h2>
          <p>
            Transition smooth बनाता है changes को. जब style बदलती है, animation instant नहीं होता; यह ऊबर-नीचे smoothly change होता है.
          </p>
          <pre className="overflow-x-auto text-sm">
            {`button {
  background: black;
  color: white;
  padding: 10px 20px;
  transition: 0.3s;
}

button:hover {
  background: blue;
}`}
          </pre>
        </section>

        <section className="space-y-3">
          <h2>3. CSS Transform</h2>
          <p>
            Transform का use करके elements को scale, rotate, या translate किया जाता है. यह modern hover effects के लिए बहुत common होता है.
          </p>
          <pre className="overflow-x-auto text-sm">
            {`.card:hover {
  transform: scale(1.05);
}`}
          </pre>
        </section>

        <section className="space-y-3">
          <h2>4. Box Shadow & Border Radius</h2>
          <p>
            Box shadow depth देता है और border radius design को soft बनाता है. यह modern UI का basic style है.
          </p>
          <pre className="overflow-x-auto text-sm">
            {`.card {
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  border-radius: 15px;
}`}
          </pre>
        </section>

        <section className="space-y-3">
          <h2>5. CSS Animation & @keyframes</h2>
          <p>
            Animation movement देता है. @keyframes से हम steps define करते हैं जैसे fade-in या slide-up.
          </p>
          <pre className="overflow-x-auto text-sm">
            {`@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.box {
  animation: fadeIn 2s ease;
}`}
          </pre>
        </section>

        <section className="space-y-3">
          <h2>Mini Project – Modern Product Card UI</h2>
          <p>
            अब हम एक professional product card बनायेंगे जो eCommerce, portfolio, और SaaS websites में use हो सकता है.
          </p>
          <div className="theme-surface rounded-2xl border border-[#eadfce] p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{`<div class="card">
  <img src="product.jpg" alt="Product">
  <h2>Smart Watch</h2>
  <p>Modern stylish smartwatch with premium features.</p>
  <button>Buy Now</button>
</div>`}</code>
            </pre>
            <pre className="overflow-x-auto text-sm mt-4">
              <code>{`body {
  font-family: Arial;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.card {
  width: 300px;
  background: white;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-10px);
}

.card img {
  width: 100%;
  border-radius: 10px;
}

button {
  background: black;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: blue;
}`}</code>
            </pre>
          </div>
        </section>

        <section className="space-y-3">
          <h2>Homework Assignment</h2>
          <p>
            Create your own service card section with icon, title, short description, hover animation, and modern design.
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Icon</li>
            <li>Title</li>
            <li>Short description</li>
            <li>Hover animation</li>
            <li>Modern design with border radius, shadow, and transitions</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>Conclusion</h2>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Hover Effects</li>
            <li>Transitions</li>
            <li>Transform</li>
            <li>Animations</li>
            <li>Keyframes</li>
            <li>Modern Product Card UI</li>
          </ul>
          <p>
            आज आपने frontend design को और professional बनाया है. Next lecture में हम portfolio website बनाएंगे।
          </p>
        </section>
      </section>
    </article>
  );
}
