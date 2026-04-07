import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const courseTitle = "Web Development with AI - 30 Day Beginner Course";
const courseDescription =
  "30 days ka beginner friendly Web Development with AI course. Daily lectures, practical tasks, aur step-by-step learning for fast growth.";

export const metadata: Metadata = {
  title: courseTitle,
  description: courseDescription,
  keywords: [
  "30 days web development with AI course",
  "learn web development with AI step by step",
  "AI web development roadmap 2026",
  "beginner to advanced web development with AI",
  "how to become web developer using AI",
  "complete web development course with AI free",
  "AI powered full stack development course",
  "learn coding using ChatGPT step by step",
  "build websites using AI tools course",
  "web development roadmap for beginners with AI",
  "learn HTML with AI prompts beginner",
  "CSS flexbox grid tutorial with AI",
  "javascript basics with chatgpt",
  "how to use AI for coding beginners",
  "build website using AI step by step",
  "learn javascript ES6 with AI",
  "react js for beginners with AI prompts",
  "tailwind css tutorial with AI",
  "convert figma to code using AI",
  "AI UI design to code tutorial",
  "learn javascript ES6 with AI",
  "react js for beginners with AI prompts",
  "tailwind css tutorial with AI",
  "convert figma to code using AI",
  "AI UI design to code tutorial",
  "AI tech deals website tutorial",
  "build ai blog generator step by step",
  "AI resume builder project tutorial",
  "full stack AI project ideas 2026",
  "real world web development projects with AI",
  "build ecommerce website using AI",
  "deploy website using vercel netlify",
  "seo blogging with AI tools",
  "earn money with web development skills",
  "freelancing with web development beginner"
],
  alternates: {
    canonical: "/courses/web-development-with-ai"
  },
  openGraph: {
    title: courseTitle,
    description: courseDescription,
    url: `${SITE_URL}/courses/web-development-with-ai`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/posts/30dayweb-development.png`,
        width: 1200,
        height: 630,
        alt: "Web Development with AI course banner"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: courseTitle,
    description: courseDescription,
    images: [`${SITE_URL}/posts/30dayweb-development.png`]
  }
};

export default function WebDevelopmentWithAiCoursePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10">
      <Link
        href="/#courses"
        className="theme-button theme-soft-hover inline-flex items-center rounded-sm px-4 py-2 text-sm font-semibold"
      >
        Back to Courses
      </Link>

      <section className="site-panel overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/9]">
          <Image
            src="/posts/30dayweb-development.png"
            alt="Web Development with AI 30 Days course thumbnail"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="object-cover"
          />
        </div>
        <div className="space-y-5 px-6 py-8 sm:px-10">
          <div className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">Course Series</div>
          <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-4xl font-bold sm:text-5xl">
            Web Development with AI (30 Days)
          </h1>
          <p className="theme-text-secondary max-w-3xl text-base leading-7 sm:text-lg">
            Beginner se लेकर practical project तक - हर दिन एक नई skill. AI ka use karke fast learning, clean code,
            aur real-world web pages banana सीखें।
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="theme-surface theme-text-muted rounded-full px-4 py-2 text-xs font-semibold">
              Beginner Friendly
            </span>
            <span className="theme-surface theme-text-muted rounded-full px-4 py-2 text-xs font-semibold">
              Daily Lectures
            </span>
            <span className="theme-surface theme-text-muted rounded-full px-4 py-2 text-xs font-semibold">
              Project Based
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="theme-text-primary font-[family-name:var(--font-heading)] text-3xl font-bold">
          Lectures
        </h2>
        <div className="content-grid md:grid-cols-2">
          <Link href="/courses/web-development-with-ai/lecture-01" className="tool-card group rounded-2xl p-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/posts/lecture-01.png"
                alt="Day 01 lecture thumbnail"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-4 space-y-2">
              <p className="theme-text-primary text-lg font-bold text-center">HTML Basics: Structure, tags, forms</p>
            </div>
          </Link>
          <Link href="/courses/web-development-with-ai/lecture-02" className="tool-card group rounded-2xl p-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/posts/lecture-02.png"
                alt="Day 02 lecture thumbnail"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-4 space-y-2">
              <p className="theme-text-primary text-lg font-bold text-center">HTML Basics: Build Simple webpage</p>
            </div>
          </Link>
          <Link href="/courses/web-development-with-ai/lecture-03" className="tool-card group rounded-2xl p-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/posts/lecture-03.png"
                alt="Day 03 lecture thumbnail"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-4 space-y-2">
              <p className="theme-text-primary text-lg font-bold text-center">
                CSS Basics: Flexbox, Grid, Responsive
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
