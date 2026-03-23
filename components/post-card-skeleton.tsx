export function PostCardSkeleton() {
  return (
    <article className="prompt-card overflow-hidden rounded-[1.6rem]">
      <div className="card-skeleton aspect-[16/9]" />
      <div className="flex flex-col gap-3 px-5 py-5 sm:px-6">
        <div className="card-skeleton h-4 w-24 rounded-full" />
        <div className="card-skeleton h-6 w-full rounded-lg" />
        <div className="card-skeleton h-6 w-4/5 rounded-lg" />
        <div className="card-skeleton h-4 w-full rounded-lg" />
        <div className="card-skeleton h-4 w-2/3 rounded-lg" />
        <div className="card-skeleton mt-1 h-10 w-28 rounded-full" />
      </div>
    </article>
  );
}
