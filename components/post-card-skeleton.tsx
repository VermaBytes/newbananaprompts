export function PostCardSkeleton() {
  return (
    <article className="prompt-card overflow-hidden rounded-none">
      <div className="card-skeleton aspect-[1000/630]" />
      <div className="flex flex-col gap-3 px-4 py-4">
        <div className="card-skeleton h-4 w-24 rounded-none" />
        <div className="card-skeleton h-6 w-full rounded-none" />
        <div className="card-skeleton h-6 w-4/5 rounded-none" />
        <div className="card-skeleton h-4 w-full rounded-none" />
        <div className="card-skeleton h-4 w-2/3 rounded-none" />
        <div className="card-skeleton mt-1 h-8 w-24 rounded-none" />
      </div>
    </article>
  );
}
