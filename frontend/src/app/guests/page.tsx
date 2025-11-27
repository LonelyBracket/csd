import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuestCard from '@/components/GuestCard';
import Link from 'next/link';
import Image from 'next/image';
import { getGuests } from '@/lib/api';

export default async function GuestsPage() {
  const guests = await getGuests();
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Page Header */}
        <section className="px-4 lg:px-6 py-12 lg:py-16 border-b border-surface-border">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Guests</h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Tech leaders, engineers, and innovators sharing their insights on building great software and teams.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-8">
              <div>
                <p className="text-3xl font-bold text-white">42</p>
                <p className="text-sm text-zinc-500">Total Guests</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">28</p>
                <p className="text-sm text-zinc-500">Companies</p>
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
                  placeholder="Search guests..."
                  className="w-full pl-10 pr-4 py-2.5 bg-surface-raised border border-surface-border rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              {/* Filter by Topic */}
              <select className="bg-surface-raised border border-surface-border rounded-lg px-4 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-accent/50">
                <option>All Topics</option>
                <option>DevOps</option>
                <option>Platform Engineering</option>
                <option>Leadership</option>
              </select>

              {/* Sort */}
              <select className="bg-surface-raised border border-surface-border rounded-lg px-4 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-accent/50">
                <option>Most Episodes</option>
                <option>Recently Featured</option>
                <option>A-Z</option>
              </select>
            </div>
          </div>
        </section>

        {/* Featured Guests */}
        <section className="px-4 lg:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-6">Featured Guests</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {guests.slice(0, 3).map((guest) => (
                <Link
                  key={guest.slug}
                  href={`/guests/${guest.slug}`}
                  className="group bg-surface-raised border border-surface-border rounded-xl p-6 hover:border-accent/30 hover:glow-box transition-all duration-200"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden ring-2 ring-accent/30 flex-shrink-0 group-hover:ring-accent/50 transition-all relative">
                      <Image src={guest.photo} alt={guest.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-lg group-hover:text-accent transition-colors">{guest.name}</h3>
                      <p className="text-sm text-accent">{guest.title}</p>
                      <p className="text-sm text-zinc-500">{guest.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400 mb-4 line-clamp-2">{guest.bio}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 text-xs text-zinc-500">
                      <span>{guest.episodeCount} episodes</span>
                    </div>
                    <span className="text-accent text-sm font-medium group-hover:translate-x-1 transition-transform">View →</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* All Guests Grid */}
            <h2 className="text-xl font-bold text-white mb-6">All Guests</h2>
            <p className="text-sm text-zinc-500 mb-6">Showing 42 guests</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
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
