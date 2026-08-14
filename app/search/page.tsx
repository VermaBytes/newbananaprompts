import type { Metadata } from "next";
import { SearchResults } from "@/components/search-results";
import { getPostPreviews } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Search Results | NB Prompts",
  robots: {
    index: false,
    follow: false,
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
        <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Search Results</p>
      </div>
      <SearchResults posts={posts} query={query} />
    </section>
  );
}
