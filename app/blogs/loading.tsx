import { PostCardSkeleton } from "@/components/post-card-skeleton";

export default function BlogsLoading() {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <div className="card-skeleton h-4 w-28 rounded-full" />
        <div className="card-skeleton h-10 w-full max-w-lg rounded-2xl" />
        <div className="card-skeleton h-5 w-full max-w-2xl rounded-xl" />
      </div>
      <div className="site-panel rounded-2xl p-5">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <div className="card-skeleton h-12 w-full rounded-xl" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="card-skeleton h-10 w-28 rounded-full" />
            ))}
          </div>
        </div>
      </div>
      <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <PostCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
