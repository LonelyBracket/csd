interface EpisodeCardSkeletonProps {
  featured?: boolean;
}

export default function EpisodeCardSkeleton({ featured = false }: EpisodeCardSkeletonProps) {
  if (featured) {
    return (
      <article className="bg-surface-raised border border-surface-border rounded-2xl overflow-hidden animate-pulse">
        <div className="lg:flex">
          {/* Guest Photo Skeleton */}
          <div className="lg:w-2/5 relative">
            <div className="aspect-video lg:aspect-auto lg:h-full bg-zinc-800"></div>
          </div>

          {/* Content Skeleton */}
          <div className="p-6 lg:p-10 lg:w-3/5 flex flex-col justify-center">
            {/* Topics skeleton */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="h-6 w-20 bg-zinc-800 rounded-full"></div>
              <div className="h-6 w-24 bg-zinc-800 rounded-full"></div>
            </div>

            {/* Title skeleton */}
            <div className="space-y-3 mb-4">
              <div className="h-8 lg:h-10 bg-zinc-800 rounded-lg w-full"></div>
              <div className="h-8 lg:h-10 bg-zinc-800 rounded-lg w-4/5"></div>
            </div>

            {/* Description skeleton */}
            <div className="space-y-2 mb-6">
              <div className="h-4 lg:h-5 bg-zinc-800 rounded w-full"></div>
              <div className="h-4 lg:h-5 bg-zinc-800 rounded w-full"></div>
              <div className="h-4 lg:h-5 bg-zinc-800 rounded w-3/4"></div>
            </div>

            {/* Meta info skeleton */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-zinc-800"></div>
                <div className="h-4 w-24 bg-zinc-800 rounded"></div>
              </div>
              <div className="h-4 w-16 bg-zinc-800 rounded"></div>
              <div className="h-4 w-20 bg-zinc-800 rounded"></div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Regular episode card skeleton
  return (
    <article className="bg-surface-raised border border-surface-border rounded-xl p-4 lg:p-5 animate-pulse">
      <div className="flex gap-4">
        {/* Guest photo skeleton */}
        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg bg-zinc-800 flex-shrink-0"></div>

        <div className="flex-1 min-w-0">
          {/* Topic skeleton */}
          <div className="h-5 w-16 bg-zinc-800 rounded-full mb-2"></div>

          {/* Title skeleton */}
          <div className="space-y-2 mb-2">
            <div className="h-5 bg-zinc-800 rounded w-full"></div>
            <div className="h-5 bg-zinc-800 rounded w-3/4"></div>
          </div>

          {/* Meta info skeleton */}
          <div className="flex items-center gap-2">
            <div className="h-3 w-20 bg-zinc-800 rounded"></div>
            <div className="h-3 w-12 bg-zinc-800 rounded"></div>
            <div className="h-3 w-16 bg-zinc-800 rounded"></div>
          </div>
        </div>
      </div>
    </article>
  );
}
