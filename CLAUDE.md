# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Control-Shift-Deliver is a B2B podcast website with a monorepo structure:
- **frontend/**: Next.js 14 (App Router) with Tailwind CSS v4
- **backend/**: Strapi 5 headless CMS with PostgreSQL

## Development Commands

### Frontend (Next.js)
```bash
cd frontend
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

### Backend (Strapi)
```bash
cd backend
npm run develop  # Start with autoReload (localhost:1337)
npm run build    # Build admin panel
npm run start    # Production mode (no autoReload)
```

## Architecture

### Frontend Structure
```
frontend/src/
├── app/                    # Next.js App Router pages
│   ├── episodes/[slug]/    # Episode detail pages
│   ├── articles/[slug]/    # Article detail pages
│   ├── guests/[slug]/      # Guest profile pages
│   └── topics/[slug]/      # Topic pages
├── components/             # React components (EpisodeCard, ArticleCard, etc.)
└── lib/mockData.ts         # Mock API data for development
```

### Backend Structure
```
backend/src/
├── api/                    # Strapi content-type APIs
│   ├── article/
│   ├── author/
│   ├── category/
│   └── ...
└── components/shared/      # Reusable Strapi components
```

### Key Design Patterns
- **Mobile-first**: All styles start at mobile breakpoints, scale up with `sm:`, `md:`, `lg:`, `xl:`
- **API-agnostic data layer**: Mock data in `lib/mockData.ts` simulates CMS responses
- **Dark theme**: Surface colors use custom tokens (#0A0A0B base, #141415 raised, etc.)
- **Accent color**: Electric cyan (#06B6D4) for actions and highlights

## Tailwind v4 Configuration

Uses CSS-based configuration in `globals.css` with `@theme` directive:
```css
@theme {
  --color-accent: #06B6D4;
  --color-surface: #0A0A0B;
  --color-surface-raised: #141415;
  --color-surface-border: #2A2A2D;
}
```

Custom utilities: `.gradient-text`, `.glow-box`, `.dot-pattern`, `.glass`

## Content Types (API Schema)

Defined in `docs/api/schema.md`:
- **Episode**: podcast episodes with guests, topics, audio
- **Article**: written content with author, topics
- **Guest**: podcast guests with bio, social links
- **Topic**: content categories

## Design System

Full design specs in `docs/design/system.md` covering:
- Color tokens (surface, accent, semantic)
- Typography scale (Inter font, xs through 5xl)
- Spacing (4px grid)
- Component patterns (cards, buttons, tags, navigation)

Component specifications in `docs/design/components/`

## Custom Slash Commands

- `/pm` - Product Manager agent for story management and backlog
- `/ux` - UX Designer agent for design specs and system updates
- `/frontend` - Frontend Developer agent for component/page implementation

## Image Configuration

Remote images allowed from:
- `images.unsplash.com`
- `*.railway.app`
