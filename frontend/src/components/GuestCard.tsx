import Link from 'next/link';
import Image from 'next/image';

interface GuestCardProps {
  slug: string;
  name: string;
  title: string;
  company: string;
  photo: string;
  episodeCount: number;
}

export default function GuestCard({ slug, name, title, company, photo, episodeCount }: GuestCardProps) {
  return (
    <Link href={`/guests/${slug}`}>
      <article className="group bg-surface-raised border border-surface-border rounded-xl p-5 text-center hover:border-accent/30 transition-all duration-200 cursor-pointer">
        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4 ring-2 ring-surface-border group-hover:ring-accent/50 group-hover:scale-110 transition-all duration-200 relative">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="font-semibold text-white group-hover:text-accent transition-colors">{name}</h3>
        <p className="text-sm text-zinc-400 mt-1">{title}</p>
        <p className="text-sm text-zinc-500">{company}</p>
        <p className="text-xs text-zinc-600 mt-3">{episodeCount} episode{episodeCount !== 1 ? 's' : ''}</p>
      </article>
    </Link>
  );
}
