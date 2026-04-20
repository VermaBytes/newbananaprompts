import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const lectureTitle = "Lecture 06 – Mini Project 1: Portfolio Website (Basic)";
const lectureDescription =
  "Day 06 lecture: Building a basic portfolio website using HTML and CSS, including hero section, about, skills, projects, and contact sections with modern UI design.";

export const metadata: Metadata = {
  title: lectureTitle,
  description: lectureDescription,
  keywords: [
    "Day 06 web development",
    "Portfolio website project",
    "HTML CSS portfolio",
    "Frontend mini project",
    "Beginner portfolio website",
    "Web development with AI lecture"
  ],
  alternates: {
    canonical: "/courses/web-development-with-ai/lecture-06"
  },
  openGraph: {
    title: lectureTitle,
    description: lectureDescription,
    url: `${SITE_URL}/courses/web-development-with-ai/lecture-06`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/posts/lecture-06.png`,
        width: 1200,
        height: 630,
        alt: "Lecture 06 thumbnail"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: lectureTitle,
    description: lectureDescription,
    images: [`${SITE_URL}/posts/lecture-06.png`]
  }
};

export default function Lecture06Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lectureTitle,
    description: lectureDescription,
    url: `${SITE_URL}/courses/web-development-with-ai/lecture-06`,
    image: `${SITE_URL}/posts/lecture-06.png`,
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
        name: "What is the main project in Lecture 06?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Building a basic portfolio website using HTML and CSS with sections like hero, about, skills, projects, and contact."
        }
      },
      {
        "@type": "Question",
        name: "Do I need prior experience to build this portfolio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Basic knowledge of HTML and CSS from previous lectures is sufficient."
        }
      },
      {
        "@type": "Question",
        name: "How can I deploy my portfolio website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can deploy it using Netlify or Vercel as mentioned in the bonus task."
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
            src="/posts/lecture-06.png"
            alt="Lecture 06 - Mini Project 1: Portfolio Website (Basic)"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>
        <div className="space-y-6 px-6 py-8 sm:px-10">
          <div className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">Lecture 06</div>
          <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-4xl font-bold sm:text-5xl">
            Mini Project 1: Portfolio Website (Basic)
          </h1>
          <p className="theme-text-secondary text-lg leading-8">
            Welcome to Day 6 of our 30-Day Web Development with AI Course! Today we will build your first professional frontend project: a basic portfolio website using HTML and CSS.
          </p>
        </div>
      </section>

      <section className="post-content space-y-8">
        <section className="space-y-3">
          <h2>Introduction</h2>
          <p>
            In the previous lecture, we learned Advanced CSS, Hover Effects, Transitions, Animations, and Modern UI Design. These concepts help make websites look professional and visually attractive.
          </p>
          <p>
            Now it is time to apply those skills in a real-world mini project.
          </p>
          <p>
            Today we will build your first professional frontend project: a Portfolio Website (Basic).
          </p>
        </section>

        <section className="space-y-3">
          <h2>What You Will Learn</h2>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Structure of a Portfolio Website</li>
            <li>Hero Section</li>
            <li>About Section</li>
            <li>Skills Section</li>
            <li>Projects Section</li>
            <li>Contact Section</li>
            <li>Basic Responsive Layout</li>
            <li>Professional UI Design</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>Why Portfolio Website is Important</h2>
          <p>
            Your portfolio website acts like your digital resume.
          </p>
          <p>
            It helps recruiters and clients understand:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>who you are</li>
            <li>what skills you have</li>
            <li>what projects you built</li>
            <li>how they can contact you</li>
          </ul>
          <p>
            A strong portfolio increases your chances of getting:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>internships</li>
            <li>freelance projects</li>
            <li>jobs</li>
            <li>clients</li>
          </ul>
          <p>
            This is why every frontend developer must build one.
          </p>
        </section>

        <section className="space-y-3">
          <h2>Sections of a Basic Portfolio Website</h2>
          <h3>1. Hero Section</h3>
          <p>
            This is the first section users see.
          </p>
          <p>
            It includes:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>your name</li>
            <li>your role</li>
            <li>short introduction</li>
            <li>call-to-action button</li>
          </ul>
          <p>
            Example:
          </p>
          <p><strong>Hi, I'm Shobhit — Frontend Developer</strong></p>

          <h3>2. About Section</h3>
          <p>
            This section introduces you professionally.
          </p>
          <p>
            It explains:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>your background</li>
            <li>your learning journey</li>
            <li>your goals</li>
            <li>your technical interests</li>
          </ul>

          <h3>3. Skills Section</h3>
          <p>
            This section displays your technical skills.
          </p>
          <p>
            Example:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>GitHub</li>
            <li>Responsive Design</li>
          </ul>

          <h3>4. Projects Section</h3>
          <p>
            This section shows the projects you have created.
          </p>
          <p>
            Example:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Landing Page</li>
            <li>To-Do App</li>
            <li>Calculator</li>
            <li>Weather App</li>
            <li>Portfolio Website</li>
          </ul>

          <h3>5. Contact Section</h3>
          <p>
            This helps people reach you.
          </p>
          <p>
            Include:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>email</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>phone (optional)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>Mini Project – Portfolio Website</h2>
          <p>
            Now let's build the project.
          </p>
        </section>

        <section className="space-y-3">
          <h2>HTML Code</h2>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="hero">
        <h1>Hi, I'm Shobhit</h1>
        <p>Frontend Developer | Web Designer</p>
        <button>Hire Me</button>
    </header>

    <section class="about">
        <h2>About Me</h2>
        <p>
            I am a passionate frontend developer learning modern web development.
            I love creating beautiful and responsive websites.
        </p>
    </section>

    <section class="skills">
        <h2>My Skills</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
        </ul>
    </section>

    <section class="projects">
        <h2>My Projects</h2>
        <p>Portfolio Website, To-Do App, Calculator, Landing Page</p>
    </section>

    <section class="contact">
        <h2>Contact Me</h2>
        <p>Email: yourname@gmail.com</p>
    </section>

</body>
</html>`}</code>
          </pre>
        </section>

        <section className="space-y-3">
          <h2>CSS Code</h2>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code>{`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background: #f8f9fa;
    color: #222;
}

.hero {
    text-align: center;
    padding: 80px 20px;
    background: #111;
    color: white;
}

.hero button {
    margin-top: 20px;
    padding: 12px 24px;
    border: none;
    background: #007bff;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
}

.hero button:hover {
    background: #0056b3;
}

section {
    padding: 50px 20px;
    text-align: center;
}

.skills ul {
    list-style: none;
    margin-top: 20px;
}

.skills li {
    margin: 10px 0;
    font-weight: bold;
}`}</code>
          </pre>
        </section>

        <section className="space-y-3">
          <h2>Project Result</h2>
          <p>
            Your basic portfolio website will have:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>clean hero section</li>
            <li>professional introduction</li>
            <li>skill showcase</li>
            <li>projects overview</li>
            <li>contact section</li>
          </ul>
          <p>
            This becomes your first serious portfolio project.
          </p>
        </section>

        <section className="space-y-3">
          <h2>Real Industry Usage</h2>
          <p>
            Portfolio websites are used by:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>developers</li>
            <li>designers</li>
            <li>freelancers</li>
            <li>agencies</li>
            <li>creators</li>
            <li>marketers</li>
          </ul>
          <p>
            Even big companies check your portfolio before interviews.
          </p>
          <p>
            A strong portfolio creates a strong first impression.
          </p>
        </section>

        <section className="space-y-3">
          <h2>AI Prompt for Today</h2>
          <p>
            Use this prompt in ChatGPT:
          </p>
          <p><strong>Create a professional beginner-friendly portfolio website using HTML and CSS with modern UI design</strong></p>
          <p>
            This helps you generate better layouts and improve faster.
          </p>
        </section>

        <section className="space-y-3">
          <h2>Homework Assignment</h2>
          <p>
            Create your own:
          </p>
          <h3>Personal Portfolio Website</h3>
          <p>
            Include:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>your real name</li>
            <li>your own skills</li>
            <li>your real projects</li>
            <li>GitHub profile link</li>
            <li>LinkedIn profile link</li>
          </ul>
          <p>
            This project should be uploaded to GitHub.
          </p>
        </section>

        <section className="space-y-3">
          <h2>Bonus Task</h2>
          <p>
            Deploy your portfolio website using:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Netlify</li>
            <li>Vercel</li>
          </ul>
          <p>
            This gives you a live website link for sharing with recruiters.
          </p>
        </section>

        <section className="space-y-3">
          <h2>Conclusion</h2>
          <p>
            Today we built:
          </p>
          <h3>Mini Project 1 – Portfolio Website</h3>
          <p>
            We learned:
          </p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Portfolio Structure</li>
            <li>Hero Section</li>
            <li>About Section</li>
            <li>Skills Section</li>
            <li>Projects Section</li>
            <li>Contact Section</li>
            <li>Basic Responsive Layout</li>
          </ul>
          <p>
            This is one of the most important beginner projects in frontend development.
          </p>
          <p>
            Your portfolio is your identity as a developer.
          </p>
          <p>
            Build it well.
          </p>
          <p>
            In the next lecture, we will learn:
          </p>
          <h3>Day 7 – Revision + GitHub Upload + Deployment</h3>
          <p>
            This will help you publish your projects professionally and prepare for internships and jobs.
          </p>
          <p>
            Keep building. Keep improving. Keep growing.
          </p>
          <p>
            See you in Lecture 07!
          </p>
        </section>
      </section>
    </article>
  );
}