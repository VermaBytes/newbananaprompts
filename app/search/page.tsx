import type { Metadata } from "next";
import { SearchResults } from "@/components/search-results";
import { getPostPreviews } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Search Results | NB Prompts",
  description: "Search NB Prompts articles by topic, tool, or prompt to find relevant AI guides and tutorials.",
  alternates: {
    canonical: "/search"
  },
  robots: {
    index: false,
    follow: true,
    nocache: true
  }
};

type SearchPageProps = {
  searchParams?: { query?: string | string[] };
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const posts = getPostPreviews();
  const resolved = searchParams;
  const rawQuery = resolved?.query;
  const query = Array.isArray(rawQuery) ? rawQuery.join(" ") : rawQuery ?? "";

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Search Results</h1>
      </div>
      <SearchResults posts={posts} query={query} />
    </section>
  );
}
