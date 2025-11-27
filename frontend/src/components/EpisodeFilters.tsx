'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Episode, Topic } from '@/lib/api';
import EpisodeCard from './EpisodeCard';

interface EpisodeFiltersProps {
  episodes: Episode[];
  topics: Topic[];
}

type SortOption = 'newest' | 'oldest' | 'popular';

export default function EpisodeFilters({ episodes, topics }: EpisodeFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get initial values from URL or use defaults
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedTopic, setSelectedTopic] = useState(searchParams.get('topic') || '');
  const [sortBy, setSortBy] = useState<SortOption>((searchParams.get('sort') as SortOption) || 'newest');

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (searchQuery) params.set('q', searchQuery);
    if (selectedTopic) params.set('topic', selectedTopic);
    if (sortBy !== 'newest') params.set('sort', sortBy);

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.replace(newUrl, { scroll: false });
  }, [searchQuery, selectedTopic, sortBy, pathname, router]);

  // Filter and sort episodes
  const filteredEpisodes = useMemo(() => {
    let filtered = [...episodes];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(episode =>
        episode.title.toLowerCase().includes(query) ||
        episode.description.toLowerCase().includes(query) ||
        episode.guest.name.toLowerCase().includes(query)
      );
    }

    // Filter by topic
    if (selectedTopic) {
      filtered = filtered.filter(episode =>
        episode.topics.some(topic => topic === selectedTopic)
      );
    }

    // Sort episodes
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'popular':
          return (b.plays || 0) - (a.plays || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [episodes, searchQuery, selectedTopic, sortBy]);

  return (
    <>
      {/* Search & Filter */}
      <section className="px-4 lg:px-6 py-6 border-b border-surface-border sticky top-16 glass z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search episodes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-surface-raised border border-surface-border rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-accent/50 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Filter by Topic */}
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="bg-surface-raised border border-surface-border rounded-lg px-4 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-accent/50 transition-colors cursor-pointer"
            >
              <option value="">All Topics</option>
              {topics.map((topic) => (
                <option key={topic.slug} value={topic.name}>
                  {topic.name}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-surface-raised border border-surface-border rounded-lg px-4 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-accent/50 transition-colors cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Plays</option>
            </select>
          </div>
        </div>
      </section>

      {/* Episodes List */}
      <section className="px-4 lg:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-zinc-500">
              Showing {filteredEpisodes.length} {filteredEpisodes.length === 1 ? 'episode' : 'episodes'}
            </p>

            {/* Active Filters */}
            {(searchQuery || selectedTopic) && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500">Active filters:</span>
                <div className="flex gap-2">
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      <span>"{searchQuery}"</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                  {selectedTopic && (
                    <button
                      onClick={() => setSelectedTopic('')}
                      className="flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      <span>{selectedTopic}</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {filteredEpisodes.length > 0 ? (
            <div className="space-y-4">
              {filteredEpisodes.map((episode) => (
                <EpisodeCard key={episode.slug} {...episode} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg
                className="w-16 h-16 text-zinc-700 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2">No episodes found</h3>
              <p className="text-zinc-500 mb-6">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTopic('');
                  setSortBy('newest');
                }}
                className="px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-lg hover:bg-accent/20 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
