import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getTopics } from '@/lib/api';

export default async function TopicsPage() {
  const topics = await getTopics();
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Page Header */}
        <section className="px-4 lg:px-6 py-12 lg:py-16 border-b border-surface-border">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Topics</h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Explore episodes and articles by topic. From DevOps fundamentals to advanced platform engineering.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-8">
              <div>
                <p className="text-3xl font-bold text-white">{topics.length}</p>
                <p className="text-sm text-zinc-500">Topics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Topics Grid */}
        <section className="px-4 lg:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/topics/${topic.slug}`}
                  className="group bg-surface-raised border border-surface-border rounded-xl p-6 hover:border-accent/30 hover:glow-box transition-all duration-200"
                >
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                    {topic.name}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-4">
                    Explore episodes and articles about {topic.name.toLowerCase()}.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500">12 episodes • 5 articles</span>
                    <span className="text-accent text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Explore →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
