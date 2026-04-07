import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const lectureTitle = "Day 04 - Advanced CSS (Animations, Hover Effects, Modern UI Design)";
const lectureDescription =
    "Learn advanced CSS including animations, hover effects, and modern UI design. Build interactive and premium websites with real examples.";

export const metadata: Metadata = {
    title: lectureTitle,
    description: lectureDescription,
    keywords: [
        "advanced css tutorial",
        "css animations",
        "hover effects css",
        "modern ui design",
        "css transition",
        "frontend design"
    ],
    alternates: {
        canonical: "/courses/web-development-with-ai/lecture-04"
    },
    openGraph: {
        title: lectureTitle,
        description: lectureDescription,
        url: `${SITE_URL}/courses/web-development-with-ai/lecture-04`,
        siteName: SITE_NAME,
        type: "article",
        images: [
            {
                url: `${SITE_URL}/posts/lecture-04.png`,
                width: 1200,
                height: 630,
                alt: "Day 04 Advanced CSS"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: lectureTitle,
        description: lectureDescription,
        images: [`${SITE_URL}/posts/lecture-04.png`]
    }
};

export default function Lecture04Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LearningResource",
        name: lectureTitle,
        description: lectureDescription,
        url: `${SITE_URL}/courses/web-development-with-ai/lecture-04`,
        image: `${SITE_URL}/posts/lecture-04.png`,
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
                name: "What will I learn in Day 04?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You will learn CSS animations, hover effects, and modern UI design techniques."
                }
            },
            {
                "@type": "Question",
                name: "Why are animations important in CSS?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Animations make websites interactive and improve user engagement."
                }
            },
            {
                "@type": "Question",
                name: "How to create modern UI design?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Use clean layout, spacing, gradients, shadows, and smooth transitions."
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
                        src="/posts/lecture-04.png"
                        alt="Day 04 Advanced CSS"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                <div className="space-y-6 px-6 py-8 sm:px-10">
                    <div className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">
                        Lecture 04
                    </div>

                    <h1 className="text-4xl font-bold sm:text-5xl">
                        Advanced CSS: Animations, Hover Effects & Modern UI Design
                    </h1>

                    <p className="text-lg leading-8">
                        Welcome back! 🔥 अब हम CSS को next level पर ले जाएंगे — animations, hover effects और modern UI design सीखेंगे।
                    </p>
                </div>
            </section>

            <section className="post-content space-y-8">

                <section>
                    <h2>CSS Animations</h2>
                    <p>Animations website को dynamic और engaging बनाते हैं।</p>

                    <pre>
                        {`@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.box {
  animation: fadeIn 2s ease-in;
}`}
                    </pre>
                </section>

                <section>
                    <h2>Hover Effects</h2>
                    <p>Hover effects से UI interactive बनता है।</p>

                    <pre>
                        {`button {
  background: orange;
  transition: 0.3s;
}

button:hover {
  background: red;
  transform: scale(1.1);
}`}
                    </pre>
                </section>

                <section>
                    <h2>Modern UI Design</h2>
                    <ul>
                        <li>Soft shadows</li>
                        <li>Rounded corners</li>
                        <li>Spacing</li>
                        <li>Clean layout</li>
                    </ul>
                </section>

                <section>
                    <h2>Card Design Example</h2>

                    <pre>
                        {`.card {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-10px);
}`}
                    </pre>
                </section>

                <section>
                    <h2>Gradient & Glass Effect</h2>

                    <pre>
                        {`body {
  background: linear-gradient(to right, #4facfe, #00f2fe);
}`}
                    </pre>
                </section>

                <section>
                    <h2>Mini Task</h2>
                    <ul>
                        <li>Animation add करो</li>
                        <li>Hover effect add करो</li>
                        <li>Modern UI बनाओ</li>
                    </ul>
                </section>

                <section>
                    <h2>Day 04 Summary</h2>
                    <ul>
                        <li>Animations</li>
                        <li>Hover Effects</li>
                        <li>Modern UI</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2>🔥Next (Day 05)</h2>
                    <p>👉 हम सीखेंगे:</p>
                    <li>JavaScript Basics</li>
                    <li>Variables, Functions</li>
                    <li>DOM Manipulation</li>
                </section>

                <section className="text-center">
                    <h2>Call to Action</h2>
                    <p>Comment: <strong>Day 05 Done ✅</strong></p>
                </section>

            </section>
        </article>
    );
}