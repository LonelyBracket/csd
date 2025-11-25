# Mock API Schema

This document defines the data structures for the Control-Shift-Deliver website. These types will be used by the mock API during development and should be compatible with any future headless CMS.

## Core Types

### Episode

```typescript
interface Episode {
  id: string;
  slug: string;
  title: string;
  description: string;
  summary: string;           // Short excerpt for cards
  publishedAt: string;       // ISO 8601 date
  duration: number;          // Duration in seconds
  audioUrl: string;          // URL to audio file
  coverImage?: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  guests: Guest[];
  topics: Topic[];
  featured: boolean;
  status: 'draft' | 'published';
}
```

### Article

```typescript
interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;           // Short summary for cards
  content: string;           // Full article content (markdown or HTML)
  publishedAt: string;       // ISO 8601 date
  readingTime: number;       // Estimated minutes to read
  coverImage?: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  author: Author;
  topics: Topic[];
  relatedEpisode?: Episode;  // If article accompanies an episode
  featured: boolean;
  status: 'draft' | 'published';
}
```

### Guest

```typescript
interface Guest {
  id: string;
  slug: string;
  name: string;
  title: string;             // Job title
  company: string;
  bio: string;
  avatar?: {
    url: string;
    alt: string;
  };
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  episodes: Episode[];       // Episodes featuring this guest
}
```

### Topic

```typescript
interface Topic {
  id: string;
  slug: string;
  name: string;
  description: string;
  episodeCount: number;
  articleCount: number;
}
```

### Author

```typescript
interface Author {
  id: string;
  name: string;
  avatar?: {
    url: string;
    alt: string;
  };
}
```

## API Endpoints (Mock)

These are the data fetching functions the frontend will use:

### Episodes

```typescript
// Get all published episodes
getEpisodes(options?: {
  limit?: number;
  offset?: number;
  topicSlug?: string;
  guestSlug?: string;
  featured?: boolean;
}): Promise<{ episodes: Episode[]; total: number }>

// Get single episode by slug
getEpisodeBySlug(slug: string): Promise<Episode | null>

// Get latest episode
getLatestEpisode(): Promise<Episode | null>
```

### Articles

```typescript
// Get all published articles
getArticles(options?: {
  limit?: number;
  offset?: number;
  topicSlug?: string;
  featured?: boolean;
}): Promise<{ articles: Article[]; total: number }>

// Get single article by slug
getArticleBySlug(slug: string): Promise<Article | null>
```

### Guests

```typescript
// Get all guests
getGuests(options?: {
  limit?: number;
  offset?: number;
}): Promise<{ guests: Guest[]; total: number }>

// Get single guest by slug
getGuestBySlug(slug: string): Promise<Guest | null>
```

### Topics

```typescript
// Get all topics
getTopics(): Promise<Topic[]>

// Get single topic by slug
getTopicBySlug(slug: string): Promise<Topic | null>
```

### Search / Filter

```typescript
// Search across all content
search(query: string, options?: {
  type?: 'episode' | 'article' | 'guest';
  limit?: number;
}): Promise<{
  episodes: Episode[];
  articles: Article[];
  guests: Guest[];
}>
```

## Sample Data Structure

For development, we'll create mock data files:

```
src/lib/api/
├── mock-data/
│   ├── episodes.ts
│   ├── articles.ts
│   ├── guests.ts
│   └── topics.ts
├── episodes.ts      # Episode API functions
├── articles.ts      # Article API functions
├── guests.ts        # Guest API functions
├── topics.ts        # Topic API functions
└── index.ts         # Re-exports all API functions
```

## Notes

- All dates in ISO 8601 format
- Slugs are URL-safe, lowercase, hyphenated
- Images include dimensions for layout optimization
- Pagination uses offset/limit pattern
- Mock data should include 5-10 episodes, 3-5 articles, 5-8 guests, 6-10 topics
