import Link from 'next/link';
import Image from 'next/image';
import NewBadge from './NewBadge';

interface EpisodeCardProps {
  slug: string;
  title: string;
  description: string;
  guest: {
    name: string;
    photo: string;
  };
  topics: string[];
  duration: string;
  date: string;
  plays?: number;
  featured?: boolean;
}

export default function EpisodeCard({
  slug,
  title,
  description,
  guest,
  topics,
  duration,
  date,
  plays,
  featured = false,
}: EpisodeCardProps) {
  if (featured) {
    return (
      <Link href={`/episodes/${slug}`}>
        <article className="group bg-surface-raised border border-surface-border rounded-2xl overflow-hidden hover:border-accent/30 glow-box transition-all duration-300 cursor-pointer">
          <div className="lg:flex">
            {/* Guest Photo */}
            <div className="lg:w-2/5 relative">
              <div className="aspect-video lg:aspect-auto lg:h-full bg-surface-overlay relative overflow-hidden">
                <Image
                  src={guest.photo}
                  alt={guest.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-raised via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-surface-raised"></div>
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200 shadow-lg shadow-accent/25">
                    <svg className="w-8 h-8 text-surface ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-10 lg:w-3/5 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-accent transition-colors flex items-center gap-3 flex-wrap">
                <span>{title}</span>
                <NewBadge date={date} />
              </h2>

              <p className="text-zinc-400 mb-6 lg:text-lg leading-relaxed">{description}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                <span className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-accent/30 relative">
                    <Image
                      src={guest.photo}
                      alt={guest.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-zinc-300">{guest.name}</span>
                </span>
                <span className="text-zinc-600">·</span>
                <span>{duration}</span>
                <span className="text-zinc-600">·</span>
                <span>{date}</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  // Regular episode card
  return (
    <Link href={`/episodes/${slug}`}>
      <article className="group bg-surface-raised border border-surface-border rounded-xl p-4 lg:p-5 hover:border-accent/30 hover:bg-surface-overlay transition-all duration-200 cursor-pointer">
        <div className="flex gap-4">
          <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden flex-shrink-0 relative group-hover:ring-2 group-hover:ring-accent/30 transition-all duration-200">
            <Image
              src={guest.photo}
              alt={guest.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
            {/* Small play indicator */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-2 mb-2">
              {topics.slice(0, 1).map((topic) => (
                <span
                  key={topic}
                  className="px-2 py-0.5 bg-surface-overlay text-zinc-400 text-xs font-medium rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-white line-clamp-2 mb-2 group-hover:text-accent transition-colors flex items-center gap-2 flex-wrap">
              <span>{title}</span>
              <NewBadge date={date} />
            </h3>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="text-zinc-400">{guest.name}</span>
              <span>·</span>
              <span>{duration}</span>
              <span>·</span>
              <span>{date}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
