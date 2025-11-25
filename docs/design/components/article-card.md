# Component: ArticleCard

## Purpose
Displays an article in a card format. Used on homepage, article listings, and related content sections.

## Variants
- **Default** - Standard card for article lists
- **Featured** - Highlighted card for featured articles
- **Compact** - Minimal card for sidebars or lists

---

## Props/Inputs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | required | Article title |
| `excerpt` | string | required | Article summary |
| `publishedAt` | string | required | ISO date string |
| `readingTime` | number | required | Minutes to read |
| `coverImage` | object | optional | Article hero image |
| `author` | Author | required | Author info |
| `topics` | Topic[] | [] | Related topics |
| `relatedEpisode` | Episode | optional | Linked episode |
| `featured` | boolean | false | Featured styling |
| `href` | string | required | Link to article |

---

## Layout (Mobile-First)

### Default Variant

#### Mobile (320px+)

```
┌─────────────────────────────────┐
│  ┌─────────────────────────┐   │
│  │                         │   │
│  │     Cover Image         │   │
│  │     aspect-[3/2]        │   │
│  │                         │   │
│  └─────────────────────────┘   │
│                                 │
│  Topic Tag                      │
│                                 │
│  Article Title Here That        │
│  Can Span Two Lines             │
│                                 │
│  Excerpt text truncated to      │
│  about 2-3 lines on mobile...   │
│                                 │
│  📖 5 min read  ·  Nov 15       │
└─────────────────────────────────┘
```

- Card: `bg-white border border-zinc-200 rounded-xl overflow-hidden`
- Cover: `w-full aspect-[3/2] object-cover`
- Content padding: `p-4`
- Topic: `text-xs font-medium text-indigo-500`
- Title: `text-lg font-semibold text-zinc-900 mt-2 line-clamp-2`
- Excerpt: `text-sm text-zinc-600 mt-2 line-clamp-3`
- Meta: `text-xs text-zinc-500 mt-3`

#### Tablet (768px+)

```
┌────────────────────────────────────────────────────┐
│  ┌─────────────┐                                   │
│  │   Cover     │  Topic Tag                        │
│  │   Image     │                                   │
│  │   160x107   │  Article Title Here               │
│  │   (3:2)     │                                   │
│  └─────────────┘  Excerpt text goes here and       │
│                   can be a bit longer...           │
│                                                    │
│                   📖 5 min  ·  Nov 15, 2024        │
└────────────────────────────────────────────────────┘
```

- Horizontal layout
- Image: `w-40 h-auto aspect-[3/2]`
- Content padding: `p-5`

#### Desktop (1024px+)

- Same as tablet with `p-6`
- Image: `w-48`

---

### Featured Variant

#### Mobile (320px+)

```
┌─────────────────────────────────┐
│  ┌─────────────────────────┐   │
│  │                         │   │
│  │     Cover Image         │   │
│  │     aspect-video        │   │
│  │     (larger)            │   │
│  │                         │   │
│  └─────────────────────────┘   │
│                                 │
│  📄 FEATURED ARTICLE           │
│                                 │
│  Article Title Here             │
│  (larger text)                  │
│                                 │
│  Full excerpt without           │
│  truncation for featured        │
│  articles...                    │
│                                 │
│  Topic  Topic                   │
│                                 │
│  📖 5 min read  ·  Nov 15       │
│                                 │
│  [ Read Article → ]             │
│                                 │
└─────────────────────────────────┘
```

- Card: `bg-white border border-zinc-200 rounded-2xl overflow-hidden`
- Label: `text-xs font-medium text-indigo-500 uppercase tracking-wide`
- Title: `text-2xl font-bold`
- Excerpt: No truncation
- CTA: Secondary button

#### Desktop (1024px+)

- Side-by-side layout (image left, content right)
- Image takes 45% width
- Title: `text-3xl`

---

### Compact Variant

```
┌─────────────────────────────────┐
│  Article Title Here             │
│  📖 5 min  ·  Nov 15, 2024      │
└─────────────────────────────────┘
```

- No image
- Card: `bg-transparent hover:bg-zinc-50 rounded-lg p-3`
- Title: `text-sm font-medium text-zinc-900 line-clamp-1`
- Meta: `text-xs text-zinc-500 mt-1`

---

## States

### Default
- `border-zinc-200`

### Hover
- `border-zinc-300 shadow-md`
- Image slight scale: `hover:scale-[1.02]` with overflow hidden

### Focus
- `ring-2 ring-indigo-500 ring-offset-2`

### Loading
- Skeleton with `animate-pulse`
- Gray placeholders for image, title, excerpt

---

## Related Episode Badge

When `relatedEpisode` is provided, show a small badge:

```
┌─────────────────────────────────┐
│  ...card content...             │
│                                 │
│  🎙️ From Episode: Title        │
└─────────────────────────────────┘
```

- Badge: `bg-indigo-50 text-indigo-700 text-xs rounded-lg p-2 mt-3`
- Clickable, links to episode

---

## Accessibility

- Card wrapped in `<article>`
- Title uses `<h2>` or `<h3>` depending on context
- Image has descriptive `alt` or `alt=""` if decorative
- Reading time formatted: "5 minute read"
- Entire card is clickable (card link pattern)
- Focus visible on keyboard navigation

---

## Interactions

- **Click/Tap**: Navigate to article page
- **Hover**: Shadow lift, subtle image zoom
- **Transition**: `transition-all duration-200`
