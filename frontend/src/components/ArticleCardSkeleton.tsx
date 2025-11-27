export default function ArticleCardSkeleton() {
  return (
    <article className="bg-surface-raised border border-surface-border rounded-xl overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="aspect-[2/1] relative bg-zinc-800"></div>

      <div className="p-4">
        {/* Topic skeleton */}
        <div className="h-4 w-20 bg-zinc-800 rounded mb-2"></div>

        {/* Title skeleton */}
        <div className="space-y-2 mt-2 mb-2">
          <div className="h-5 bg-zinc-800 rounded w-full"></div>
          <div className="h-5 bg-zinc-800 rounded w-4/5"></div>
        </div>

        {/* Description skeleton */}
        <div className="space-y-2 mb-3">
          <div className="h-4 bg-zinc-800 rounded w-full"></div>
          <div className="h-4 bg-zinc-800 rounded w-3/4"></div>
        </div>

        {/* Meta info skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-3 w-16 bg-zinc-800 rounded"></div>
          <div className="h-3 w-16 bg-zinc-800 rounded"></div>
        </div>
      </div>
    </article>
  );
}
