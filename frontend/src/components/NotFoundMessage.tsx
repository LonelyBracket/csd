import Link from 'next/link';

interface NotFoundMessageProps {
  type: 'episode' | 'article' | 'guest' | 'topic';
  backUrl: string;
}

const contentTypeLabels: Record<NotFoundMessageProps['type'], string> = {
  episode: 'Episode',
  article: 'Article',
  guest: 'Guest',
  topic: 'Topic',
};

export default function NotFoundMessage({ type, backUrl }: NotFoundMessageProps) {
  const label = contentTypeLabels[type];

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-surface-raised border border-surface-border rounded-xl p-8 text-center">
        {/* 404 Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m0 0h3"
            />
          </svg>
        </div>

        {/* Not Found Message */}
        <h1 className="text-3xl font-bold text-white mb-3">
          {label} Not Found
        </h1>
        <p className="text-zinc-400 mb-8">
          We couldn&apos;t find the {type} you&apos;re looking for. It may have been removed or the link is incorrect.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={backUrl}
            className="px-6 py-3 bg-accent text-surface font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200 inline-block"
          >
            Back to {label === 'Episode' ? 'Episodes' : label === 'Article' ? 'Articles' : label === 'Guest' ? 'Guests' : 'Topics'}
          </Link>
          <Link
            href="/"
            className="px-6 py-3 bg-transparent border border-surface-border text-zinc-300 font-medium rounded-lg hover:bg-surface-overlay hover:border-accent/50 hover:text-accent transition-all duration-200 inline-block"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
