import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import Link from 'next/link';
import Image from 'next/image';
import { mockArticles } from '@/lib/mockData';

export default function ArticlePage() {
  const article = mockArticles[0];

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Back Link */}
        <div className="px-4 lg:px-6 pt-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-accent transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Articles
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <article className="px-4 lg:px-6 py-8 lg:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link href="/topics/devops" className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20 hover:bg-accent/20 transition-colors">
                {article.topic}
              </Link>
              <span className="text-zinc-500 text-sm">{article.readTime}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-500 text-sm">{article.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">{article.title}</h1>

            {/* Subtitle */}
            {article.description && (
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">{article.description}</p>
            )}

            {/* Author */}
            {article.author && (
              <div className="flex items-center gap-4 pb-8 border-b border-surface-border">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-accent/30 relative">
                  <Image src={article.author.photo} alt={article.author.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-white">{article.author.name}</p>
                  <p className="text-sm text-zinc-500">{article.author.title}</p>
                </div>
              </div>
            )}

            {/* Hero Image */}
            <div className="my-10 rounded-2xl overflow-hidden glow-box">
              <div className="aspect-[2/1] relative">
                <Image src={article.image} alt={article.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay"></div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose-dark max-w-none">
              <p>When I started leading the platform team at Spotify, we made a classic mistake: we measured everything we could, then drowned in dashboards nobody looked at. It took us six months to realize we were tracking the wrong things entirely.</p>

              <p>The problem with most platform metrics is they focus on <strong>what the platform does</strong> rather than <strong>what it enables</strong>. Your executives do not care how many deployments your CI/CD pipeline processed. They care whether engineering teams are shipping faster and more reliably.</p>

              <h2>1. Developer Time to First Deployment</h2>
              <p>This is the single most important metric for any platform team. How long does it take a new developer or a developer on a new project to go from zero to their first production deployment?</p>

              <blockquote>If your platform takes more than a day for a competent engineer to deploy something meaningful, you have work to do.</blockquote>

              <h2>2. Platform Adoption Rate</h2>
              <p>The best platform in the world is worthless if nobody uses it. Adoption rate tells you whether your platform is actually solving problems people have.</p>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-surface-border">
              <p className="text-sm text-zinc-500 mb-4">Topics</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/topics/devops" className="px-4 py-2 bg-surface-raised border border-surface-border text-zinc-300 text-sm font-medium rounded-full hover:border-accent/50 hover:text-accent transition-colors">
                  DevOps
                </Link>
                <Link href="/topics/platform-engineering" className="px-4 py-2 bg-surface-raised border border-surface-border text-zinc-300 text-sm font-medium rounded-full hover:border-accent/50 hover:text-accent transition-colors">
                  Platform Engineering
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Content */}
        <section className="px-4 lg:px-6 py-12 border-t border-surface-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Related Content</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.slug} {...relatedArticle} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
