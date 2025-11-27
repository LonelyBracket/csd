'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full glass border-b border-surface-border z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-surface-overlay transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-lg font-bold text-white">
              Control+Shift+<span className="text-accent">Deliver</span>
            </span>
            <span className="text-[10px] text-zinc-500 hidden sm:block -mt-0.5">
              Tech leaders who deliver
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/episodes"
              className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-surface-overlay rounded-lg transition-colors"
            >
              Episodes
            </Link>
            <Link
              href="/articles"
              className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-surface-overlay rounded-lg transition-colors"
            >
              Articles
            </Link>
            <Link
              href="/guests"
              className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-surface-overlay rounded-lg transition-colors"
            >
              Guests
            </Link>
            <Link
              href="/topics"
              className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-surface-overlay rounded-lg transition-colors"
            >
              Topics
            </Link>
          </nav>

          {/* Search button */}
          <button
            className="p-2 -mr-2 rounded-lg hover:bg-surface-overlay transition-colors"
            aria-label="Search"
          >
            <svg
              className="w-5 h-5 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            <Link
              href="/episodes"
              className="block px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-surface-overlay rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Episodes
            </Link>
            <Link
              href="/articles"
              className="block px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-surface-overlay rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/guests"
              className="block px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-surface-overlay rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Guests
            </Link>
            <Link
              href="/topics"
              className="block px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-surface-overlay rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Topics
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
