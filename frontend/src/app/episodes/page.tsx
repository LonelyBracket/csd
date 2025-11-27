import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EpisodeFilters from '@/components/EpisodeFilters';
import { getEpisodes, getTopics } from '@/lib/api';

export default async function EpisodesPage() {
  const episodes = await getEpisodes();
  const topics = await getTopics();

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
                <p className="text-3xl font-bold text-white">{episodes.length}</p>
                <p className="text-sm text-zinc-500">Episodes</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">42</p>
                <p className="text-sm text-zinc-500">Guests</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client-side Filters and Episodes List */}
        <EpisodeFilters episodes={episodes} topics={topics} />
      </main>
      <Footer />
    </>
  );
}
