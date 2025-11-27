export default function GuestCardSkeleton() {
  return (
    <article className="bg-surface-raised border border-surface-border rounded-xl p-5 text-center animate-pulse">
      {/* Photo skeleton */}
      <div className="w-20 h-20 mx-auto rounded-full bg-zinc-800 mb-4"></div>

      {/* Name skeleton */}
      <div className="h-5 bg-zinc-800 rounded w-32 mx-auto mb-2"></div>

      {/* Title skeleton */}
      <div className="h-4 bg-zinc-800 rounded w-40 mx-auto mt-1 mb-1"></div>

      {/* Company skeleton */}
      <div className="h-4 bg-zinc-800 rounded w-36 mx-auto mb-3"></div>

      {/* Episode count skeleton */}
      <div className="h-3 bg-zinc-800 rounded w-24 mx-auto mt-3"></div>
    </article>
  );
}
