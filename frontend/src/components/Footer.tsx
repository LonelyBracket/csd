import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-4 lg:px-6 py-12 border-t border-surface-border bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-white font-semibold mb-4">Content</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-accent transition-colors">
                  Episodes
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-zinc-400 hover:text-accent transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/guests" className="text-zinc-400 hover:text-accent transition-colors">
                  Guests
                </Link>
              </li>
              <li>
                <Link href="/topics" className="text-zinc-400 hover:text-accent transition-colors">
                  Topics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Subscribe</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-zinc-400 hover:text-accent transition-colors">
                  Apple Podcasts
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-accent transition-colors">
                  Spotify
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-accent transition-colors">
                  RSS Feed
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-accent transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-zinc-400 hover:text-accent transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-accent transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-zinc-400 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-accent transition-colors">
                  Sponsor
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">© 2024 Control+Shift+Deliver. All rights reserved.</p>
          <p className="text-sm font-semibold">
            Control+Shift+<span className="gradient-text">Deliver</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
