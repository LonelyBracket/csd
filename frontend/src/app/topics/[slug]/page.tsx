import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EpisodeCard from '@/components/EpisodeCard';
import ArticleCard from '@/components/ArticleCard';
import GuestCard from '@/components/GuestCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTopicBySlug, getRelatedEpisodes, getRelatedArticles } from '@/lib/api';
import { mockTopics } from '@/lib/mockData';

export default async function TopicPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Fetch topic data
  const topic = await getTopicBySlug(slug);

  // Handle not found
  if (!topic) {
    notFound();
  }

  // Fetch related content
  const [episodes, articles] = await Promise.all([
    getRelatedEpisodes(slug),
    getRelatedArticles(slug)
  ]);

  // Extract unique guests from episodes
  const guestsMap = new Map();
  episodes.forEach(episode => {
    if (episode.guest && episode.guest.name) {
      guestsMap.set(episode.guest.name, {
        slug: episode.guest.name.toLowerCase().replace(/\s+/g, '-'),
        name: episode.guest.name,
        title: episode.guest.title,
        company: episode.guest.company,
        photo: episode.guest.photo,
      });
    }
  });
  const guests = Array.from(guestsMap.values());

  // Calculate stats
  const episodeCount = topic.count?.episodes || episodes.length;
  const articleCount = topic.count?.articles || articles.length;
  const guestCount = guests.length;
  const totalResults = episodes.length + articles.length;

  // Get topic description - fallback to a default if not available
  const topicDescription = topic.name === 'DevOps'
    ? 'Bridging the gap between development and operations. CI/CD pipelines, infrastructure as code, deployment strategies, and the culture that makes it all work.'
    : `Explore our collection of episodes and articles about ${topic.name}.`;

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Topic Header */}
        <section className="px-4 lg:px-6 py-12 lg:py-16 border-b border-surface-border">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-accent transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                All Topics
              </Link>
            </div>

            <div className="lg:flex lg:items-end lg:justify-between">
              <div>
                {/* Topic Icon/Badge */}
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{topic.name}</h1>
                <p className="text-xl text-zinc-400 max-w-2xl">{topicDescription}</p>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-8 lg:mt-0">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">{episodeCount}</p>
                  <p className="text-sm text-zinc-500">Episodes</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">{articleCount}</p>
                  <p className="text-sm text-zinc-500">Articles</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">{guestCount}</p>
                  <p className="text-sm text-zinc-500">Guests</p>
                </div>
              </div>
            </div>

            {/* Related Topics */}
            <div className="mt-10">
              <p className="text-sm text-zinc-500 mb-3">Related topics</p>
              <div className="flex flex-wrap gap-2">
                {mockTopics.slice(0, 5).map((relatedTopic) => (
                  <Link
                    key={relatedTopic.slug}
                    href={`/topics/${relatedTopic.slug}`}
                    className="px-4 py-2 bg-surface-raised border border-surface-border text-zinc-300 text-sm font-medium rounded-full hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    {relatedTopic.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="px-4 lg:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm text-zinc-500 mb-8">Showing {totalResults} results</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Featured Episode */}
              {episodes.length > 0 && (
                <div className="md:col-span-2">
                  <EpisodeCard {...episodes[0]} featured />
                </div>
              )}

              {/* Articles */}
              {articles.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}

              {/* More Episodes */}
              {episodes.slice(1).map((episode) => (
                <div key={episode.slug}>
                  <EpisodeCard {...episode} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guests in This Topic */}
        <section className="px-4 lg:px-6 py-12 border-t border-surface-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">Guests on {topic.name}</h2>
              <Link href="/guests" className="text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                View All Guests →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {guests.map((guest) => (
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
