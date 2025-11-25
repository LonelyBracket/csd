# Page: Topics

## Purpose
Browse content by topic/category. Shows all topics and individual topic pages with filtered content.

---

## Topics Listing Page

### URL
`/topics`

### Layout (Mobile-First)

#### Mobile (320px+)

```
┌─────────────────────────────────┐
│         [ Navigation ]          │
├─────────────────────────────────┤
│                                 │
│  Browse by Topic                │
│  Explore our content by         │
│  category                       │
│                                 │
├─────────────────────────────────┤
│                                 │
│  ┌─────────────────────────┐   │
│  │  DevOps                 │   │
│  │  12 episodes · 5 articles│   │
│  │  Description text...    │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │  Cloud                  │   │
│  │  8 episodes · 3 articles │   │
│  │  Description text...    │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │  Leadership             │   │
│  │  6 episodes · 4 articles │   │
│  │  Description text...    │   │
│  └─────────────────────────┘   │
│           ...                   │
│                                 │
├─────────────────────────────────┤
│         [ Footer ]              │
└─────────────────────────────────┘
```

**Specs:**
- Topic card: `bg-white border border-zinc-200 rounded-xl p-5`
- Topic name: `text-xl font-semibold text-zinc-900`
- Counts: `text-sm text-zinc-500 mt-1`
- Description: `text-sm text-zinc-600 mt-2 line-clamp-2`
- Stack: `space-y-4`

#### Desktop (1024px+)

```
┌──────────────────────────────────────────────────────────────────────┐
│                           [ Navigation ]                              │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Browse by Topic                                                     │
│  Explore our content by category                                     │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────────┐  ┌──────────────────────┐                 │
│  │  DevOps              │  │  Cloud               │                 │
│  │  12 eps · 5 articles │  │  8 eps · 3 articles  │                 │
│  │  Description...      │  │  Description...      │                 │
│  └──────────────────────┘  └──────────────────────┘                 │
│  ┌──────────────────────┐  ┌──────────────────────┐                 │
│  │  Leadership          │  │  Kubernetes          │                 │
│  │  6 eps · 4 articles  │  │  10 eps · 2 articles │                 │
│  │  Description...      │  │  Description...      │                 │
│  └──────────────────────┘  └──────────────────────┘                 │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│                              [ Footer ]                              │
└──────────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

---

### Topic Card Component

```
┌─────────────────────────────────┐
│                                 │
│  DevOps                    →    │
│                                 │
│  12 episodes · 5 articles       │
│                                 │
│  Conversations about CI/CD,     │
│  automation, and modern...      │
│                                 │
└─────────────────────────────────┘
```

- Hover: `border-zinc-300 shadow-md`
- Arrow indicates clickable
- Entire card is link

---

## Topic Detail Page

### URL
`/topics/[slug]`

### Layout (Mobile-First)

#### Mobile (320px+)

```
┌─────────────────────────────────┐
│         [ Navigation ]          │
├─────────────────────────────────┤
│                                 │
│  ← Back to Topics               │
│                                 │
│  DevOps                         │
│  12 episodes · 5 articles       │
│                                 │
│  Conversations about CI/CD,     │
│  automation, infrastructure     │
│  as code, and modern DevOps     │
│  practices from industry        │
│  leaders.                       │
│                                 │
├─────────────────────────────────┤
│                                 │
│  Content Type:                  │
│  [All] [Episodes] [Articles]    │
│                                 │
├─────────────────────────────────┤
│                                 │
│  ┌─────────────────────────┐   │
│  │    Episode Card         │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │    Episode Card         │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │    Article Card         │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │    Episode Card         │   │
│  └─────────────────────────┘   │
│           ...                   │
│                                 │
│  [ Load More ]                  │
│                                 │
├─────────────────────────────────┤
│         [ Footer ]              │
└─────────────────────────────────┘
```

**Specs:**
- Topic name: `text-3xl font-bold`
- Counts: `text-sm text-zinc-500 mt-2`
- Description: `text-zinc-600 mt-4 max-w-prose`
- Content type tabs: `flex gap-2`

#### Desktop (1024px+)

```
┌──────────────────────────────────────────────────────────────────────┐
│                           [ Navigation ]                              │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ← Back to Topics                                                    │
│                                                                      │
│  DevOps                                                              │
│  12 episodes · 5 articles                                            │
│                                                                      │
│  Conversations about CI/CD, automation, infrastructure as code,      │
│  and modern DevOps practices from industry leaders.                  │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Content Type: [All] [Episodes (12)] [Articles (5)]                  │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌────────────────────────────────┐  ┌────────────────────────────┐ │
│  │       Episode Card             │  │       Episode Card         │ │
│  └────────────────────────────────┘  └────────────────────────────┘ │
│  ┌────────────────────────────────┐  ┌────────────────────────────┐ │
│  │       Article Card             │  │       Episode Card         │ │
│  └────────────────────────────────┘  └────────────────────────────┘ │
│                                                                      │
│                         [ Load More ]                                │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│                              [ Footer ]                              │
└──────────────────────────────────────────────────────────────────────┘
```

---

### Content Type Tabs

```
┌─────────────────────────────────────────────┐
│  [All (17)] [Episodes (12)] [Articles (5)]  │
└─────────────────────────────────────────────┘
```

**Specs:**
- Container: `flex gap-2`
- Tab: `px-4 py-2 rounded-lg text-sm font-medium`
- Default: `bg-zinc-100 text-zinc-700`
- Active: `bg-indigo-100 text-indigo-700`
- URL: `/topics/devops?type=episodes`

---

### Content Sorting

Mixed content sorted by:
1. Publish date (default, newest first)
2. Or grouped: Episodes first, then Articles

---

### Data Requirements

```typescript
// Listing
interface TopicsPageData {
  topics: Topic[];
}

// Detail
interface TopicDetailData {
  topic: Topic;
  episodes: Episode[];
  articles: Article[];
}
```

---

### Empty States

**Topic with no content:**
```
No content yet for this topic.
Check back soon!
```

**No articles for topic:**
```
┌─────────────────────────────────┐
│  [All (5)] [Episodes (5)] [Articles (0)]  │
└─────────────────────────────────┘

No articles yet for DevOps.
Browse episodes instead.
```

---

### SEO

```typescript
// Listing
metadata = {
  title: 'Topics | Control-Shift-Deliver',
  description: 'Browse Control-Shift-Deliver content by topic: DevOps, Cloud, Leadership, and more.',
}

// Detail
metadata = {
  title: `${topic.name} | Control-Shift-Deliver`,
  description: topic.description,
}
```

---

### Related Topics (Optional)

On topic detail, show related topics:

```
┌─────────────────────────────────┐
│  Related Topics                 │
│  [Cloud] [Kubernetes] [SRE]     │
└─────────────────────────────────┘
```

Can be based on content overlap or manually curated.
