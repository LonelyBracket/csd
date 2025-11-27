import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EpisodeCard from '@/components/EpisodeCard';
import ArticleCard from '@/components/ArticleCard';
import GuestCard from '@/components/GuestCard';
import Link from 'next/link';
import { getFeaturedEpisode, getEpisodes, getArticles, getGuests, getTopics } from '@/lib/api';

export default async function Home() {
  // Fetch data from API (with fallback to mock data)
  const featuredEpisode = await getFeaturedEpisode();
  const allEpisodes = await getEpisodes();
  const recentEpisodes = allEpisodes.slice(0, 3);
  const articles = await getArticles();
  const recentArticles = articles.slice(0, 2);
  const allGuests = await getGuests();
  const featuredGuests = allGuests.slice(0, 4);
  const allTopics = await getTopics();
  const topics = allTopics.slice(0, 10);

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero / Featured Episode */}
        <section className="px-4 lg:px-6 py-16 lg:py-28 dot-pattern min-h-[500px]">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-6">Latest Episode</p>
            {featuredEpisode && <EpisodeCard {...featuredEpisode} featured />}
          </div>
        </section>

        {/* Recent Episodes + Latest Articles */}
        <section className="px-4 lg:px-6 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-5 lg:gap-12">
              {/* Recent Episodes */}
              <div className="lg:col-span-3 mb-12 lg:mb-0">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-white">Recent Episodes</h2>
                  <Link href="/episodes" className="text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                    View All →
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentEpisodes.map((episode) => (
                    <EpisodeCard key={episode.slug} {...episode} />
                  ))}
                </div>
              </div>

              {/* Latest Articles */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
                  <Link href="/articles" className="text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                    View All →
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentArticles.map((article) => (
                    <ArticleCard key={article.slug} {...article} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Browse by Topic */}
        <section className="px-4 lg:px-6 py-12 lg:py-16 border-t border-surface-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Browse by Topic</h2>
            <div className="flex flex-wrap gap-3">
              {topics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/topics/${topic.slug}`}
                  className="px-4 py-2 bg-surface-raised border border-surface-border text-zinc-300 text-sm font-medium rounded-full hover:border-accent/50 hover:text-accent hover:bg-accent/5 transition-all duration-200"
                >
                  {topic.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guests */}
        <section className="px-4 lg:px-6 py-12 lg:py-16 border-t border-surface-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">Featured Guests</h2>
              <Link href="/guests" className="text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {featuredGuests.map((guest) => (
                <GuestCard key={guest.slug} {...guest} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
