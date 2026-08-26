import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const categoryMap: Record<string, { name: string; description: string; metaTitle: string }> = {
  "ai-tools": {
    name: "AI Tools",
    metaTitle: "Best AI Tools Guides & Reviews | NB Prompts",
    description: "Discover curated reviews, step-by-step tutorials, and actionable workflows for top AI tools in writing, coding, marketing, and productivity."
  },
  "ai-prompts": {
    name: "AI Prompts",
    metaTitle: "Best AI Prompts for Midjourney, ChatGPT & Bing | NB Prompts",
    description: "Explore copyable, cinematic AI prompt ideas for Midjourney, ChatGPT, Claude, and Bing Image Creator."
  },
  "earn-money": {
    name: "Earn Money",
    metaTitle: "Legit Ways to Earn Money with AI & Blogging | NB Prompts",
    description: "Learn actionable strategies, freelancing guides, and side hustle workflows to earn online using AI tools and content creation."
  },
  "courses": {
    name: "Courses",
    metaTitle: "Structured AI Academy & Web Dev Courses | NB Prompts",
    description: "Syllabus-based structured courses to master web development, prompt engineering, and AI automation."
  }
};

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = params;
  const categoryInfo = categoryMap[slug];

  if (!categoryInfo) {
    return {
      title: "Category Not Found"
    };
  }

  const canonicalUrl = `${SITE_URL}/category/${slug}`;

  return {
    title: categoryInfo.metaTitle,
    description: categoryInfo.description,
    alternates: {
      canonical: canonicalUrl
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: categoryInfo.metaTitle,
      description: categoryInfo.description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "website"
    }
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  const categoryInfo = categoryMap[slug];

  if (!categoryInfo) {
    notFound();
  }

  const allPosts = getAllPosts();
  
  // Filter posts matching category name (flexible match for AI Prompts / Image Prompts / ChatGPT Prompts)
  const posts = allPosts.filter((post) => {
    if (slug === "ai-prompts") {
      return (
        post.category === "AI Prompts" ||
        (post.category as string) === "Image Prompts" ||
        (post.category as string) === "ChatGPT Prompts"
      );
    }
    if (slug === "ai-tools") {
      return post.category === "AI Tools";
    }
    if (slug === "earn-money") {
      return post.category === "Earn Money";
    }
    if (slug === "courses") {
      return post.category === "Courses";
    }
    return false;
  });

  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Category Hub</p>
        <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-4xl">
          {categoryInfo.name}
        </h1>
        <p className="theme-text-secondary max-w-3xl text-sm leading-7 sm:text-base">
          {categoryInfo.description}
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="site-panel rounded-none p-8 text-center space-y-3">
          <p className="theme-text-primary font-bold text-lg">No articles found in this category yet.</p>
          <p className="theme-text-secondary text-sm">Check back soon for new guides and tutorials.</p>
        </div>
      )}
    </section>
  );
}
