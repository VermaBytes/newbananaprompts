import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const lectureTitle = "Lecture 08 – JavaScript Basics: Variables, Data Types, Functions & Conditions";
const lectureDescription =
  "Day 08 lecture: JavaScript fundamentals including variables, data types, functions, conditions, and building basic calculator logic.";

export const metadata: Metadata = {
  title: lectureTitle,
  description: lectureDescription,
  keywords: [
    "JavaScript basics",
    "variables",
    "data types",
    "functions",
    "conditions",
    "calculator logic",
    "web development with AI",
    "frontend development"
  ],
  alternates: {
    canonical: "/courses/web-development-with-ai/lecture-08"
  },
  openGraph: {
    title: lectureTitle,
    description: lectureDescription,
    url: `${SITE_URL}/courses/web-development-with-ai/lecture-08`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/posts/lecture-08.png`,
        width: 1200,
        height: 630,
        alt: "Lecture 08 thumbnail"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: lectureTitle,
    description: lectureDescription,
    images: [`${SITE_URL}/posts/lecture-08.png`]
  }
};

export default function Lecture08Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lectureTitle,
    description: lectureDescription,
    url: `${SITE_URL}/courses/web-development-with-ai/lecture-08`,
    image: `${SITE_URL}/posts/lecture-08.png`,
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
        name: "What are the prerequisites for this lecture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Completion of Lectures 01-07 covering HTML, CSS, and basic web development concepts."
        }
      },
      {
        "@type": "Question",
        name: "What should I practice after this lecture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Build a simple calculator with addition, subtraction, multiplication, and division operations."
        }
      },
      {
        "@type": "Question",
        name: "How important is JavaScript for web development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JavaScript is essential for creating interactive websites and is the foundation of modern frontend development."
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
            src="/posts/lecture-08.png"
            alt="Lecture 08 - JavaScript Basics"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>
        <div className="space-y-6 px-6 py-8 sm:px-10">
          <div className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">Lecture 08</div>
          <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-4xl font-bold sm:text-5xl">
            JavaScript Basics: Variables, Data Types, Functions & Conditions
          </h1>
          <p className="theme-text-secondary text-lg leading-8">
            Welcome to Day 8 of our 30-Day Web Development with AI Course! Congratulations! You have completed Week 1 successfully. Now we are entering the most important part of frontend development: JavaScript.
          </p>
        </div>
      </section>

      <section className="post-content space-y-8">
        <section className="space-y-3">
          <h2>What You Will Learn</h2>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Variables</li>
            <li>Data Types</li>
            <li>Functions</li>
            <li>Conditions</li>
            <li>Basic Logic Building</li>
            <li>Mini Project – Calculator Logic</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>What is JavaScript?</h2>
          <p>JavaScript is a programming language used to make websites interactive.</p>
          <p>Examples:</p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Button Click</li>
            <li>Form Validation</li>
            <li>Login Systems</li>
            <li>Calculator</li>
            <li>Weather App</li>
            <li>Shopping Cart</li>
            <li>Dynamic Content</li>
          </ul>
          <p>Without JavaScript, websites are static. With JavaScript, websites become smart.</p>
        </section>

        <section className="space-y-3">
          <h2>1. Variables</h2>
          <p>Variables are used to store data. Think of variables like containers.</p>
          <p>Example:</p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>your name</li>
            <li>your age</li>
            <li>your marks</li>
          </ul>
          <p>All these can be stored in variables.</p>
        </section>

        <section className="space-y-3">
          <h3>Syntax</h3>
          <pre className="overflow-x-auto text-sm"><code>{`let name = "Shobhit";
let age = 25;
let isStudent = true;`}</code></pre>
        </section>

        <section className="space-y-3">
          <h3>Explanation</h3>
          <p>Here:</p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>name stores text</li>
            <li>age stores number</li>
            <li>isStudent stores true/false value</li>
          </ul>
          <p>Variables help us save and reuse data.</p>
        </section>

        <section className="space-y-3">
          <h2>Types of Variables</h2>
          <p>There are mainly 3 ways:</p>
        </section>

        <section className="space-y-3">
          <h3>1. let</h3>
          <p>Used when value can change.</p>
          <pre className="overflow-x-auto text-sm"><code>{`let city = "Delhi";`}</code></pre>
        </section>

        <section className="space-y-3">
          <h3>2. const</h3>
          <p>Used when value should not change.</p>
          <pre className="overflow-x-auto text-sm"><code>{`const pi = 3.14;`}</code></pre>
        </section>

        <section className="space-y-3">
          <h3>3. var</h3>
          <p>Old method (less recommended now)</p>
          <pre className="overflow-x-auto text-sm"><code>{`var country = "India";`}</code></pre>
          <p>Prefer using:</p>
          <h4>let + const</h4>
          <p>in modern development.</p>
        </section>

        <section className="space-y-3">
          <h2>2. Data Types</h2>
          <p>Data Types define what kind of value is stored.</p>
        </section>

        <section className="space-y-3">
          <h3>Common Data Types</h3>
        </section>

        <section className="space-y-3">
          <h4>String</h4>
          <p>Text values</p>
          <pre className="overflow-x-auto text-sm"><code>{`let username = "Frontend Developer";`}</code></pre>
        </section>

        <section className="space-y-3">
          <h4>Number</h4>
          <p>Numeric values</p>
          <pre className="overflow-x-auto text-sm"><code>{`let marks = 95;`}</code></pre>
        </section>

        <section className="space-y-3">
          <h4>Boolean</h4>
          <p>True or False</p>
          <pre className="overflow-x-auto text-sm"><code>{`let isLoggedIn = true;`}</code></pre>
        </section>

        <section className="space-y-3">
          <h4>Array</h4>
          <p>Multiple values</p>
          <pre className="overflow-x-auto text-sm"><code>{`let skills = ["HTML", "CSS", "JavaScript"];`}</code></pre>
        </section>

        <section className="space-y-3">
          <h4>Object</h4>
          <p>Detailed information</p>
          <pre className="overflow-x-auto text-sm"><code>{`let student = {
    name: "Shobhit",
    age: 25
};`}</code></pre>
        </section>

        <section className="space-y-3">
          <h2>3. Functions</h2>
          <p>Functions are reusable blocks of code. Instead of writing same code again and again, we use functions.</p>
        </section>

        <section className="space-y-3">
          <h3>Example</h3>
          <pre className="overflow-x-auto text-sm"><code>{`function greet() {
    console.log("Welcome to JavaScript!");
}

greet();`}</code></pre>
        </section>

        <section className="space-y-3">
          <h3>Explanation</h3>
          <p>Function created:</p>
          <h4>greet()</h4>
          <p>When called:</p>
          <h4>greet();</h4>
          <p>it runs the code. This saves time and makes code clean.</p>
        </section>

        <section className="space-y-3">
          <h3>Function with Parameters</h3>
          <pre className="overflow-x-auto text-sm"><code>{`function add(a, b) {
    console.log(a + b);
}

add(10, 20);`}</code></pre>
        </section>

        <section className="space-y-3">
          <h3>Result</h3>
          <p>Output: 30</p>
          <p>This is the beginning of calculator logic.</p>
        </section>

        <section className="space-y-3">
          <h2>4. Conditions</h2>
          <p>Conditions help websites make decisions.</p>
          <p>Example:</p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>if user is logged in → show dashboard</li>
            <li>if password is wrong → show error</li>
            <li>if marks &gt; 40 → pass</li>
          </ul>
          <p>This is called conditional logic.</p>
        </section>

        <section className="space-y-3">
          <h3>if Statement Example</h3>
          <pre className="overflow-x-auto text-sm"><code>{`let age = 20;

if (age >= 18) {
    console.log("You can vote");
}`}</code></pre>
        </section>

        <section className="space-y-3">
          <h3>if else Example</h3>
          <pre className="overflow-x-auto text-sm"><code>{`let marks = 35;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}`}</code></pre>
        </section>

        <section className="space-y-3">
          <h2>Why Conditions are Important</h2>
          <p>Used in:</p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Login systems</li>
            <li>Admin panels</li>
            <li>Payment systems</li>
            <li>Forms</li>
            <li>Cart checkout</li>
            <li>Real-world business logic</li>
          </ul>
          <p>Conditions are everywhere.</p>
        </section>

        <section className="space-y-3">
          <h2>Mini Project – Calculator Logic</h2>
          <p>Now let's build the basic calculator logic using JavaScript.</p>
          <p>This helps you understand:</p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>variables</li>
            <li>functions</li>
            <li>input handling</li>
            <li>calculations</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3>HTML Code</h3>
          <pre className="overflow-x-auto text-sm"><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Calculator</title>
</head>
<body>

<h2>Simple Calculator</h2>

<input type="number" id="num1" placeholder="Enter First Number">
<input type="number" id="num2" placeholder="Enter Second Number">

<button onclick="add()">Add</button>

<h3 id="result"></h3>

<script src="script.js"></script>

</body>
</html>`}</code></pre>
        </section>

        <section className="space-y-3">
          <h3>JavaScript Code</h3>
          <pre className="overflow-x-auto text-sm"><code>{`function add() {
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);

    let total = number1 + number2;

    document.getElementById("result").innerText = "Result: " + total;
}`}</code></pre>
        </section>

        <section className="space-y-3">
          <h2>How This Works</h2>
          <p>Step 1: Take input from user</p>
          <p>Step 2: Convert text into number</p>
          <p>Step 3: Add both numbers</p>
          <p>Step 4: Show result on screen</p>
          <p>This is real JavaScript logic.</p>
        </section>

        <section className="space-y-3">
          <h2>Real Industry Usage</h2>
          <p>These concepts are used in:</p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Login forms</li>
            <li>Shopping websites</li>
            <li>Dashboard calculations</li>
            <li>CRM systems</li>
            <li>Expense trackers</li>
            <li>Student portals</li>
            <li>Real estate systems</li>
          </ul>
          <p>JavaScript powers everything.</p>
        </section>

        <section className="space-y-3">
          <h2>AI Prompt for Today</h2>
          <p>Use this prompt in ChatGPT:</p>
          <p><strong>Explain JavaScript variables, functions, and conditions with beginner-friendly real project examples</strong></p>
          <p>This helps improve understanding faster.</p>
        </section>

        <section className="space-y-3">
          <h2>Homework Assignment</h2>
          <p>Create your own:</p>
          <h3>Simple Subtraction Calculator</h3>
          <p>Include:</p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>two inputs</li>
            <li>subtract button</li>
            <li>result output</li>
          </ul>
          <p>This improves logic-building skills.</p>
        </section>

        <section className="space-y-3">
          <h2>Bonus Task</h2>
          <p>Create:</p>
          <h3>Multiplication + Division Buttons</h3>
          <p>This makes your calculator more professional.</p>
          <p>This is your first JavaScript mini project.</p>
        </section>

        <section className="space-y-3">
          <h2>Conclusion</h2>
          <p>Today we learned:</p>
          <ul className="theme-text-secondary list-disc pl-6 text-base leading-7">
            <li>Variables</li>
            <li>Data Types</li>
            <li>Functions</li>
            <li>Conditions</li>
            <li>Basic Calculator Logic</li>
          </ul>
          <p>This is the real beginning of frontend development. JavaScript is where websites become powerful.</p>
          <p>Master these basics carefully because everything ahead depends on this.</p>
          <p>In the next lecture, we will learn:</p>
          <h3>Day 9 – DOM Manipulation</h3>
          <p>Where JavaScript starts controlling HTML directly. That is where frontend becomes exciting.</p>
          <p>Keep coding. Keep building. Keep growing.</p>
          <p>See you in Lecture 09!</p>
        </section>
      </section>
    </article>
  );
}