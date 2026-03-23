import { PostCardSkeleton } from "@/components/post-card-skeleton";

export default function Loading() {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <div className="card-skeleton h-4 w-32 rounded-full" />
        <div className="card-skeleton h-10 w-full max-w-xl rounded-2xl" />
        <div className="card-skeleton h-5 w-full max-w-2xl rounded-xl" />
      </div>
      <div className="content-grid md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <PostCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
