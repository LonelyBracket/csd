import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/AudioPlayer';
import ArticleCard from '@/components/ArticleCard';
import Link from 'next/link';
import Image from 'next/image';
import { mockEpisodes, mockArticles } from '@/lib/mockData';

export default function EpisodePage() {
  const episode = mockEpisodes[0]; // Use first episode as example

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Back Link */}
        <div className="px-4 lg:px-6 pt-6">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-accent transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Episodes
            </Link>
          </div>
        </div>

        {/* Episode Hero */}
        <section className="px-4 lg:px-6 py-8 lg:py-12">
          <div className="max-w-7xl mx-auto">
            <article className="bg-surface-raised border border-surface-border rounded-2xl overflow-hidden glow-box">
              <div className="lg:flex">
                {/* Guest Photo */}
                <div className="lg:w-2/5 relative">
                  <div className="aspect-video lg:aspect-auto lg:h-full bg-surface-overlay relative overflow-hidden">
                    <Image
                      src={episode.guest.photo}
                      alt={episode.guest.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-raised via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-surface-raised"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer shadow-lg shadow-accent/25">
                        <svg className="w-8 h-8 text-surface ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {episode.episodeNumber && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-surface/80 backdrop-blur-sm text-white text-xs font-semibold rounded-lg">
                          Episode {episode.episodeNumber}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-10 lg:w-3/5 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {episode.topics.map((topic) => (
                      <Link
                        key={topic}
                        href={`/topics/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {topic}
                      </Link>
                    ))}
                  </div>

                  <h1 className="text-2xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    {episode.title}
                  </h1>

                  <p className="text-zinc-400 mb-6 lg:text-lg leading-relaxed">{episode.description}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-8">
                    <span className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-accent/30 relative">
                        <Image
                          src={episode.guest.photo}
                          alt={episode.guest.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-zinc-300">{episode.guest.name}</span>
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span>{episode.duration}</span>
                    <span className="text-zinc-600">·</span>
                    <span>{episode.date}</span>
                    {episode.plays && (
                      <>
                        <span className="text-zinc-600">·</span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          {episode.plays.toLocaleString()} plays
                        </span>
                      </>
                    )}
                  </div>

                  {/* Subscribe buttons */}
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 bg-surface-overlay rounded-lg hover:text-white hover:bg-surface-border transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                      </svg>
                      Apple Podcasts
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 bg-surface-overlay rounded-lg hover:text-white hover:bg-surface-border transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                      Spotify
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 bg-surface-overlay rounded-lg hover:text-white hover:bg-surface-border transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                      RSS Feed
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Audio Player + Content */}
        <section className="px-4 lg:px-6 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-3 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Audio Player */}
                <div className="mb-8">
                  <AudioPlayer duration={episode.duration.replace(' min', ':24')} />
                </div>

                {/* Episode Description / Show Notes */}
                <div className="prose-dark max-w-none mb-12">
                  <p className="text-lg text-zinc-300 mb-6">
                    Sarah Chen from Spotify joins us to discuss how they built Backstage, the open-source developer
                    portal that now used by hundreds of companies worldwide. We dive deep into the lessons learned
                    about creating developer experiences that teams actually want to use.
                  </p>

                  <h2>What We Cover</h2>
                  <ul>
                    <li>The origin story of Backstage at Spotify and why they decided to open source it</li>
                    <li>Common pitfalls when building internal developer platforms</li>
                    <li>How to measure developer experience and platform adoption</li>
                    <li>The golden path approach to developer productivity</li>
                    <li>Building a plugin ecosystem that scales</li>
                  </ul>

                  <h2>Key Takeaways</h2>
                  <p>
                    One of the most important insights Sarah shared was about the importance of treating your internal
                    developers as customers. If you build it, they will not necessarily come, she explains. You need to
                    understand their pain points, iterate based on feedback, and make adoption as frictionless as
                    possible.
                  </p>

                  <blockquote>
                    The best platform teams I have seen are the ones that spend 50% of their time talking to developers
                    and understanding their workflows before writing any code.
                  </blockquote>
                </div>

                {/* Share Section */}
                <div className="border-t border-surface-border pt-8">
                  <p className="text-sm text-zinc-500 mb-4">Share this episode</p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 bg-surface-raised border border-surface-border rounded-lg hover:border-accent/50 hover:text-accent transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 bg-surface-raised border border-surface-border rounded-lg hover:border-accent/50 hover:text-accent transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                    <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 bg-surface-raised border border-surface-border rounded-lg hover:border-accent/50 hover:text-accent transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="mt-12 lg:mt-0 space-y-8">
                {/* Featured Guest */}
                <div className="bg-surface-raised border border-surface-border rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                    Featured Guest
                  </h3>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-accent/30 flex-shrink-0 relative">
                      <Image
                        src={episode.guest.photo}
                        alt={episode.guest.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{episode.guest.name}</h4>
                      <p className="text-sm text-zinc-400">{episode.guest.title}</p>
                      <p className="text-sm text-zinc-500">{episode.guest.company}</p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 mb-4">
                    Sarah is a Staff Engineer at Spotify where she leads the Backstage core team. Previously at Google
                    and Netflix.
                  </p>

                  <Link
                    href="/guests/sarah-chen"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                  >
                    View all episodes
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Related Article */}
                <div className="bg-surface-raised border border-surface-border rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                    Related Article
                  </h3>
                  <ArticleCard {...mockArticles[0]} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
