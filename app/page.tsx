import type { Metadata } from "next";
import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { PostCard } from "@/components/post-card";
import { ToolCard } from "@/components/tool-card";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "NB Prompts | AI Blog, Free Online Tools & Image Tips",
  description:
    "NB Prompts is a creator-first website with AI prompt ideas, free online image tools, blogging guides, and SEO-friendly content for smarter online workflows.",
  keywords: [
    "NB Prompts",
    "AI prompts",
    "free online tools",
    "blogging tips",
    "image converter",
    "image compressor",
    "background remover",
    "SEO blog",
    "content ideas",
    "AI image tools",
    "JPG to PNG",
    "online image editor",
    "blogging ideas",
    "creator resources"
  ],
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  },
  openGraph: {
    title: "NB Prompts | AI Blog, Free Online Tools & Image Tips",
    description:
      "Discover AI prompt ideas, free image tools, and blogging guides on NB Prompts — made for creators, bloggers, and marketers.",
    url: "https://newbananaprompts.in",
    siteName: "NB Prompts",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "NB Prompts | AI Blog, Free Online Tools & Image Tips",
    description:
      "Discover AI prompt ideas, free image tools, and blogging guides on NB Prompts — made for creators, bloggers, and marketers."
  }
};

export default function HomePage() {
  const posts = getAllPosts();
  const featuredPosts = posts.slice(0, 3);
  const latestPosts = posts.slice(0, 6);

  return (
    <div className="space-y-14">
      <section className="space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Featured Blog Posts</p>
            <h2 className="theme-text-primary font-(family-name:--font-heading) text-3xl font-bold sm:text-4xl">
              Smart articles for tools, prompts, and blogging.
            </h2>
          </div>
          <Link href="/blogs" className="theme-button rounded-xl px-5 py-3 text-sm font-semibold">
            All Posts
          </Link>
        </div>
        <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section id="prompt-tools" className="space-y-5">
        <div className="space-y-2">
          <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Popular Tools</p>
          <h2 className="theme-text-primary font-(family-name:--font-heading) text-3xl font-bold sm:text-4xl">
            Tools that turn prompts into images.
          </h2>
        </div>
        <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
          <ToolCard
            title="Bing Image Creator"
            description="Free prompt-based image generator with fast results and multiple variations."
            href="https://www.bing.com/images/create"
          />
          <ToolCard
            title="Adobe Firefly"
            description="High-quality generative images with strong text rendering and style control."
            href="https://firefly.adobe.com"
          />
          <ToolCard
            title="Gemini AI"
            description="Popular prompt tool for cinematic and stylized image generation."
            href="https://gemini.google.com"
          />
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Latest Posts</p>
            <h2 className="theme-text-primary font-(family-name:--font-heading) text-3xl font-bold sm:text-4xl">
              Fresh blog posts and tool guides.
            </h2>
          </div>
          <Link href="/blogs" className="theme-button rounded-xl px-5 py-3 text-sm font-semibold">
            Browse Blog
          </Link>
        </div>
        <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
