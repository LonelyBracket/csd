import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  slug: string;
  title: string;
  description?: string;
  topic: string;
  readTime: string;
  date: string;
  image: string;
}

export default function ArticleCard({
  slug,
  title,
  description,
  topic,
  readTime,
  date,
  image,
}: ArticleCardProps) {
  return (
    <Link href={`/articles/${slug}`}>
      <article className="group bg-surface-raised border border-surface-border rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-200 cursor-pointer">
        <div className="aspect-[2/1] relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Gradient overlay matching hero style */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-raised via-surface-raised/60 to-transparent"></div>
          {/* Subtle cyan tint overlay */}
          <div className="absolute inset-0 bg-accent/10 mix-blend-overlay"></div>
        </div>
        <div className="p-4">
          <span className="text-xs font-medium text-accent">{topic}</span>
          <h3 className="text-base font-semibold text-white line-clamp-2 mt-2 mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-zinc-400 mb-3 line-clamp-2">{description}</p>
          )}
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>{readTime}</span>
            <span>·</span>
            <span>{date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
