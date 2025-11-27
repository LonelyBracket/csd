import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EpisodeCard from '@/components/EpisodeCard';
import { mockEpisodes, mockTopics } from '@/lib/mockData';

export default function EpisodesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Page Header */}
        <section className="px-4 lg:px-6 py-12 lg:py-16 border-b border-surface-border">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Episodes</h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Conversations with tech leaders about DevOps, platform engineering, and building teams that deliver.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-8">
              <div>
                <p className="text-3xl font-bold text-white">{mockEpisodes.length}</p>
                <p className="text-sm text-zinc-500">Episodes</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">42</p>
                <p className="text-sm text-zinc-500">Guests</p>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="px-4 lg:px-6 py-6 border-b border-surface-border sticky top-16 glass z-40">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search episodes..."
                  className="w-full pl-10 pr-4 py-2.5 bg-surface-raised border border-surface-border rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              {/* Filter by Topic */}
              <select className="bg-surface-raised border border-surface-border rounded-lg px-4 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-accent/50">
                <option>All Topics</option>
                {mockTopics.map((topic) => (
                  <option key={topic.slug}>{topic.name}</option>
                ))}
              </select>

              {/* Sort */}
              <select className="bg-surface-raised border border-surface-border rounded-lg px-4 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-accent/50">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
        </section>

        {/* Episodes List */}
        <section className="px-4 lg:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm text-zinc-500 mb-6">Showing {mockEpisodes.length} episodes</p>

            <div className="space-y-4">
              {mockEpisodes.map((episode) => (
                <EpisodeCard key={episode.slug} {...episode} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
