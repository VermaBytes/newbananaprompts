import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const lectureTitle = "Lecture 07 – Revision + GitHub Upload + Deployment + LinkedIn Post";
const lectureDescription =
  "Day 07 lecture: Project revision, GitHub upload process, Netlify and Vercel deployment, creating professional LinkedIn posts, and building developer presence.";

export const metadata: Metadata = {
  title: lectureTitle,
  description: lectureDescription,
  keywords: [
    "Day 07 web development",
    "GitHub upload",
    "Netlify deployment",
    "Vercel deployment",
    "LinkedIn post",
    "Developer portfolio",
    "Web development with AI lecture"
  ],
  alternates: {
    canonical: "/courses/web-development-with-ai/lecture-07"
  },
  openGraph: {
    title: lectureTitle,
    description: lectureDescription,
    url: `${SITE_URL}/courses/web-development-with-ai/lecture-07`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/posts/lecture-07.png`,
        width: 1200,
        height: 630,
        alt: "Lecture 07 thumbnail"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: lectureTitle,
    description: lectureDescription,
    images: [`${SITE_URL}/posts/lecture-07.png`]
  }
};

export default function Lecture07Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lectureTitle,
    description: lectureDescription,
    url: `${SITE_URL}/courses/web-development-with-ai/lecture-07`,
    image: `${SITE_URL}/posts/lecture-07.png`,
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
        name: "What is the main focus of Lecture 07?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Revision of projects, uploading to GitHub, deploying on Netlify/Vercel, and creating professional LinkedIn posts."
        }
      },
      {
        "@type": "Question",
        name: "Do I need a GitHub account to follow this lecture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, creating a GitHub account is the first step for uploading and sharing your projects professionally."
        }
      },
      {
        "@type": "Question",
        name: "Why is LinkedIn posting important for developers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LinkedIn helps recruiters discover your work and improves visibility, networking, and internship/job opportunities."
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
            src="/posts/lecture-07.png"
            alt="Lecture 07 - Revision + GitHub Upload + Deployment + LinkedIn Post"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>
        <div className="space-y-6 px-6 py-8 sm:px-10">
          <div className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">Lecture 07</div>
          <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-4xl font-bold sm:text-5xl">
            Revision + GitHub Upload + Deployment + LinkedIn Post
          </h1>
          <p className="theme-text-secondary text-lg leading-8">
            Welcome to Day 7 of our 30-Day Web Development with AI Course! Today we learn how to upload your code to GitHub, deploy your website live, and showcase your work professionally.
          </p>
        </div>
      </section>

      <section className="post-content space-y-8">
        <section className="space-y-3">
          <h2>Introduction</h2>
          <p>
            Welcome to Day 7 of our 30-Day Web Development with AI Course!
          </p>
          <p>
            Congratulations! You have completed your first week of web development learning.
          </p>
          <p>
            In this week, we learned:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>HTML Basics</li>
            <li>Forms, Tables, Semantic HTML</li>
            <li>CSS Fundamentals</li>
            <li>Flexbox and Grid</li>
            <li>Responsive Design</li>
            <li>Advanced CSS and Animations</li>
            <li>Mini Project 1 – Portfolio Website</li>
          </ul>
          <p>
            Now it is time to organize your work professionally.
          </p>
          <p>
            Learning alone is not enough.
          </p>
          <p>
            You must also know how to:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>upload your code to GitHub</li>
            <li>deploy your website live</li>
            <li>showcase your work on LinkedIn</li>
          </ul>
          <p>
            This is how real developers grow professionally.
          </p>
          <p>
            Today's lecture is extremely important because this step helps you move from "learning" to "showing your work publicly."
          </p>
        </section>

        <section className="space-y-3">
          <h2>What You Will Learn</h2>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Project Revision</li>
            <li>GitHub Upload Process</li>
            <li>Netlify Deployment</li>
            <li>Vercel Deployment</li>
            <li>Creating a Professional LinkedIn Post</li>
            <li>Building Your Developer Presence</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>Why This Step is Important</h2>
          <p>
            Many students learn coding but never upload their work.
          </p>
          <p>
            Because of this:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>recruiters cannot see their projects</li>
            <li>clients cannot trust their skills</li>
            <li>internship opportunities are missed</li>
          </ul>
          <p>
            Your project must be:
          </p>
          <h3>Built + Uploaded + Deployed + Shared</h3>
          <p>
            Only then it becomes valuable.
          </p>
          <p>
            This is how professionals work.
          </p>
        </section>

        <section className="space-y-3">
          <h2>Step 1 – Project Revision</h2>
          <p>
            Before uploading, revise your project carefully.
          </p>
          <p>
            Check:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>spelling mistakes</li>
            <li>broken links</li>
            <li>image issues</li>
            <li>responsive design</li>
            <li>button functionality</li>
            <li>clean folder structure</li>
          </ul>
          <p>
            Make sure your code looks professional.
          </p>
          <p>
            A clean project creates a strong first impression.
          </p>
        </section>

        <section className="space-y-3">
          <h2>Step 2 – GitHub Upload</h2>
          <h3>What is GitHub?</h3>
          <p>
            GitHub is a platform where developers store and manage code.
          </p>
          <p>
            Companies often ask for your GitHub profile during interviews.
          </p>
          <p>
            This is your coding portfolio.
          </p>
        </section>

        <section className="space-y-3">
          <h2>Basic GitHub Upload Steps</h2>
          <h3>1. Create GitHub Account</h3>
          <p>
            Visit GitHub and create your account.
          </p>
          <p>
            Use a professional username.
          </p>
          <p>
            Example:
          </p>
          <p><strong>yourname-dev</strong></p>

          <h3>2. Create New Repository</h3>
          <p>
            Click:
          </p>
          <h3>New Repository</h3>
          <p>
            Repository Name Example:
          </p>
          <p><strong>portfolio-website</strong></p>
          <p>
            Make it Public.
          </p>
          <p>
            Click:
          </p>
          <h3>Create Repository</h3>

          <h3>3. Upload Project Files</h3>
          <p>
            Click:
          </p>
          <h3>Upload Files</h3>
          <p>
            Drag and drop:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>index.html</li>
            <li>style.css</li>
            <li>images folder</li>
          </ul>
          <p>
            Commit changes.
          </p>
          <p>
            Done.
          </p>
          <p>
            Your project is now online.
          </p>
        </section>

        <section className="space-y-3">
          <h2>Step 3 – Deploy Website Using Netlify</h2>
          <h3>What is Netlify?</h3>
          <p>
            Netlify helps you make your website live for free.
          </p>
          <p>
            It gives you a public website link.
          </p>
          <p>
            Example:
          </p>
          <p><strong>yourportfolio.netlify.app</strong></p>
        </section>

        <section className="space-y-3">
          <h2>Netlify Deployment Steps</h2>
          <h3>1. Open Netlify</h3>
          <p>
            Login using GitHub.
          </p>
          <h3>2. Click Add New Site</h3>
          <p>
            Choose:
          </p>
          <h3>Deploy manually</h3>
          <h3>3. Drag and Drop Project Folder</h3>
          <p>
            Done.
          </p>
          <p>
            Your website becomes live instantly.
          </p>
          <p>
            Very easy.
          </p>
        </section>

        <section className="space-y-3">
          <h2>Step 4 – Deploy Using Vercel</h2>
          <h3>What is Vercel?</h3>
          <p>
            Vercel is another popular deployment platform.
          </p>
          <p>
            React developers use it heavily.
          </p>
          <p>
            It also provides free hosting.
          </p>
        </section>

        <section className="space-y-3">
          <h2>Vercel Deployment Steps</h2>
          <h3>1. Login with GitHub</h3>
          <h3>2. Import Project</h3>
          <h3>3. Click Deploy</h3>
          <p>
            Done.
          </p>
          <p>
            Your live project is ready.
          </p>
        </section>

        <section className="space-y-3">
          <h2>Step 5 – Create LinkedIn Post</h2>
          <h3>Why LinkedIn?</h3>
          <p>
            LinkedIn helps recruiters discover your work.
          </p>
          <p>
            Posting your project improves:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>visibility</li>
            <li>opportunities</li>
            <li>networking</li>
            <li>internship chances</li>
          </ul>
          <p>
            Never skip this step.
          </p>
        </section>

        <section className="space-y-3">
          <h2>Example LinkedIn Post</h2>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code>{`🚀 Completed My First Portfolio Website Project!

As part of my 30-Day Web Development with AI journey,
I built and deployed my basic Portfolio Website using HTML and CSS.

What I learned:
✅ HTML Structure
✅ CSS Styling
✅ Responsive Design
✅ GitHub Upload
✅ Live Deployment using Netlify/Vercel

This is just the beginning of my frontend development journey.

GitHub Project Link:
[Your GitHub Link]

Live Website Link:
[Your Live Link]

#webdevelopment #frontenddeveloper #html #css #github #portfolio #learning #developer`}</code>
          </pre>
        </section>

        <section className="space-y-3">
          <h2>Real Industry Importance</h2>
          <p>
            Companies check:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>GitHub profile</li>
            <li>live projects</li>
            <li>LinkedIn activity</li>
          </ul>
          <p>
            before interviews.
          </p>
          <p>
            Sometimes your portfolio gets you shortlisted before your resume.
          </p>
          <p>
            That is how powerful this step is.
          </p>
        </section>

        <section className="space-y-3">
          <h2>AI Prompt for Today</h2>
          <p>
            Use this prompt in ChatGPT:
          </p>
          <p><strong>Create a professional LinkedIn post for my portfolio website project with GitHub and deployment highlights</strong></p>
          <p>
            This helps you write better professional posts.
          </p>
        </section>

        <section className="space-y-3">
          <h2>Homework Assignment</h2>
          <p>
            Complete all tasks:
          </p>
          <h3>Must Finish Today</h3>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Upload Portfolio Project to GitHub</li>
            <li>Deploy on Netlify or Vercel</li>
            <li>Create LinkedIn Post</li>
            <li>Share Project Publicly</li>
          </ul>
          <p>
            This is mandatory.
          </p>
          <p>
            This makes you a real developer.
          </p>
        </section>

        <section className="space-y-3">
          <h2>Bonus Task</h2>
          <p>
            Create:
          </p>
          <h3>GitHub Profile README</h3>
          <p>
            This makes your GitHub profile look professional and attractive.
          </p>
          <p>
            Recruiters love this.
          </p>
        </section>

        <section className="space-y-3">
          <h2>Conclusion</h2>
          <p>
            Today we learned:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Project Revision</li>
            <li>GitHub Upload</li>
            <li>Netlify Deployment</li>
            <li>Vercel Deployment</li>
            <li>LinkedIn Post Creation</li>
          </ul>
          <p>
            This is one of the most important career-building lectures.
          </p>
          <p>
            Projects are powerful only when people can see them.
          </p>
          <p>
            Build → Upload → Deploy → Share
          </p>
          <p>
            This is the developer workflow.
          </p>
          <p>
            In the next lecture, we will start:
          </p>
          <h3>Week 2 – JavaScript Mastery</h3>
          <p>
            Starting with:
          </p>
          <h3>Day 8 – JavaScript Basics</h3>
          <p>
            This is where real frontend development begins.
          </p>
          <p>
            Keep building. Keep uploading. Keep growing.
          </p>
          <p>
            See you in Lecture 08!
          </p>
        </section>
      </section>
    </article>
  );
}
