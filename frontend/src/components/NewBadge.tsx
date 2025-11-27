interface NewBadgeProps {
  date: string;
}

export default function NewBadge({ date }: NewBadgeProps) {
  // Calculate if content is within the last 7 days
  const publishDate = new Date(date);
  const now = new Date();
  const daysDifference = Math.floor((now.getTime() - publishDate.getTime()) / (1000 * 60 * 60 * 24));

  // Return null if content is older than 7 days
  if (daysDifference > 7) {
    return null;
  }

  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/30 uppercase tracking-wide">
      New
    </span>
  );
}
