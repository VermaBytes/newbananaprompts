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
      <section className="hero-panel rounded-4xl px-6 py-10 sm:px-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-5">
            <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.28em]">NB Prompts</p>
            <h1 className="theme-text-primary max-w-3xl font-(family-name:--font-heading) text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Best AI Prompts & Free Online Tools
            </h1>
            <p className="theme-text-secondary max-w-2xl text-base leading-8 sm:text-lg">
              Boost your productivity with powerful AI prompts and tools for image editing, blogging, creator workflows,
              and smart online tasks.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/blogs" className="hero-cta rounded-full px-6 py-3 text-sm font-semibold text-white">
                Explore Now
              </Link>
              <Link href="/#popular-tools" className="theme-button rounded-full px-6 py-3 text-sm font-semibold">
                View Tools
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="theme-surface rounded-[1.6rem] p-5">
              <p className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">Focus</p>
              <p className="theme-text-primary mt-3 font-(family-name:--font-heading) text-2xl font-bold">AI Prompts</p>
              <p className="theme-text-secondary mt-2 text-sm leading-7">Prompt ideas for creators, bloggers, marketers, and image workflows.</p>
            </div>
            <div className="theme-surface rounded-[1.6rem] p-5">
              <p className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">Tools</p>
              <p className="theme-text-primary mt-3 font-(family-name:--font-heading) text-2xl font-bold">Image Utilities</p>
              <p className="theme-text-secondary mt-2 text-sm leading-7">Convert, compress, and remove backgrounds using free online tools.</p>
            </div>
            <div className="theme-surface rounded-[1.6rem] p-5 sm:col-span-2">
              <p className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">Why NB Prompts</p>
              <p className="theme-text-secondary mt-3 text-sm leading-7">
                A clean blog + tools platform built for fast reading, SEO-friendly content, and practical creator resources.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      <section id="popular-tools" className="space-y-5">
        <div className="space-y-2">
          <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Popular Tools</p>
          <h2 className="theme-text-primary font-(family-name:--font-heading) text-3xl font-bold sm:text-4xl">
            Free online tools people use the most.
          </h2>
        </div>
        <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
          <ToolCard
            title="JPG to PNG Converter"
            description="Convert JPG images into PNG format online with a clean workflow and beginner-friendly guide."
            href="/post/jpg-to-png-converter-free-online-image-convert-tool-2026-guide"
          />
          <ToolCard
            title="Image Compressor (20KB)"
            description="Reduce image size to 20KB for forms, job portals, and online documents using free tools."
            href="/post/image-ko-20kb-me-convert-kaise-kare-free-easy-tarika"
          />
          <ToolCard
            title="Background Remover"
            description="Remove image background online in one click using AI tools and simple browser-based steps."
            href="/post/remove-background-from-image-online-free-easy-method-2026"
          />
        </div>
      </section>

      <section id="categories" className="space-y-5">
        <div className="space-y-2">
          <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Categories</p>
          <h2 className="theme-text-primary font-(family-name:--font-heading) text-3xl font-bold sm:text-4xl">
            Explore by topic.
          </h2>
        </div>
        <div className="content-grid md:grid-cols-2 xl:grid-cols-4">
          <CategoryCard title="AI Prompts" description="Useful prompts for writing, visuals, and creator workflows." href="/blogs" />
          <CategoryCard title="Image Tools" description="Converters, compressors, and smart editors for images." href="/#popular-tools" />
          <CategoryCard title="Blogging Tips" description="Practical content ideas, SEO direction, and publishing help." href="/blogs" />
          <CategoryCard title="Earn Money" description="Topics for creators exploring online tools and content monetization." href="/blogs" />
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
