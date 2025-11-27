import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EpisodeCard from '@/components/EpisodeCard';
import ArticleCard from '@/components/ArticleCard';
import GuestCard from '@/components/GuestCard';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getGuestBySlug } from '@/lib/api';
import { mockGuests, mockEpisodes, mockArticles } from '@/lib/mockData';

export default async function GuestPage({
  params,
}: {
  params: { slug: string };
}) {
  const guest = await getGuestBySlug(params.slug);

  if (!guest) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Guest Header */}
        <section className="px-4 lg:px-6 py-12 lg:py-16 border-b border-surface-border">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link href="/guests" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-accent transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                All Guests
              </Link>
            </div>

            <div className="lg:flex lg:gap-12">
              {/* Guest Photo */}
              <div className="flex-shrink-0 mb-8 lg:mb-0">
                <div className="w-40 h-40 lg:w-56 lg:h-56 rounded-2xl overflow-hidden ring-4 ring-accent/20 glow-box relative">
                  <Image src={guest.photo} alt={guest.name} fill className="object-cover" />
                </div>
              </div>

              {/* Guest Info */}
              <div className="flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">{guest.name}</h1>
                <p className="text-xl text-accent mb-1">{guest.title}</p>
                <p className="text-lg text-zinc-500 mb-6">{guest.company}</p>

                <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">{guest.bio}</p>

                {/* Social Links */}
                {guest.social && (
                  <div className="flex gap-3 mb-8">
                    {guest.social.twitter && (
                      <a href="#" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 bg-surface-raised border border-surface-border rounded-lg hover:border-accent/50 hover:text-accent transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        {guest.social.twitter}
                      </a>
                    )}
                    {guest.social.linkedin && (
                      <a href="#" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 bg-surface-raised border border-surface-border rounded-lg hover:border-accent/50 hover:text-accent transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    )}
                    {guest.social.website && (
                      <a href="#" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 bg-surface-raised border border-surface-border rounded-lg hover:border-accent/50 hover:text-accent transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Website
                      </a>
                    )}
                  </div>
                )}

                {/* Topics */}
                <div>
                  <p className="text-sm text-zinc-500 mb-3">Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {guest.topics.map((topic) => (
                      <Link
                        key={topic}
                        href="/topics/devops"
                        className="px-3 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {topic}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="hidden lg:block">
                <div className="bg-surface-raised border border-surface-border rounded-xl p-6 w-48">
                  <div className="text-center mb-6">
                    <p className="text-4xl font-bold text-white">{guest.episodeCount}</p>
                    <p className="text-sm text-zinc-500">Episodes</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">12.5k</p>
                    <p className="text-sm text-zinc-500">Total Plays</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Stats */}
            <div className="lg:hidden mt-8 flex justify-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">{guest.episodeCount}</p>
                <p className="text-sm text-zinc-500">Episodes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-accent">12.5k</p>
                <p className="text-sm text-zinc-500">Total Plays</p>
              </div>
            </div>
          </div>
        </section>

        {/* Episodes Section */}
        <section className="px-4 lg:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Episodes with {guest.name}</h2>

            <div className="space-y-4">
              {mockEpisodes.slice(0, 3).map((episode, index) => (
                <div key={episode.slug}>
                  {index === 0 ? (
                    <EpisodeCard {...episode} featured />
                  ) : (
                    <EpisodeCard {...episode} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Section */}
        {mockArticles.length > 0 && (
          <section className="px-4 lg:px-6 py-12 border-t border-surface-border">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Articles by {guest.name}</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {mockArticles.map((article) => (
                  <ArticleCard key={article.slug} {...article} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* More Guests Section */}
        <section className="px-4 lg:px-6 py-12 border-t border-surface-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">More Guests</h2>
              <Link href="/guests" className="text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {mockGuests.slice(1).map((otherGuest) => (
                <GuestCard key={otherGuest.slug} {...otherGuest} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
