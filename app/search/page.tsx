import { SearchResults } from "@/components/search-results";

type SearchPageProps = {
  searchParams?: { query?: string | string[] };
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolved = searchParams;
  const rawQuery = resolved?.query;
  const query = Array.isArray(rawQuery) ? rawQuery.join(" ") : rawQuery ?? "";

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.22em]">Our Blogs</p>
      </div>
      <SearchResults query={query} />
    </section>
  );
}
