# Component: EpisodeCard

## Purpose
Displays a podcast episode in a card format. Used on homepage, episode listings, and search results.

## Variants
- **Default** - Standard card for episode lists
- **Featured** - Larger hero card for latest episode on homepage
- **Compact** - Smaller card for sidebar or related episodes

---

## Props/Inputs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | required | Episode title |
| `description` | string | required | Episode summary (truncated) |
| `publishedAt` | string | required | ISO date string |
| `duration` | number | required | Duration in seconds |
| `coverImage` | object | optional | Episode artwork |
| `guests` | Guest[] | [] | Featured guests |
| `topics` | Topic[] | [] | Related topics |
| `featured` | boolean | false | Show as featured variant |
| `href` | string | required | Link to episode detail |

---

## Layout (Mobile-First)

### Default Variant

#### Mobile (320px+)

```
┌─────────────────────────────────┐
│  ┌─────────┐                    │
│  │  Cover  │  Topic Tag         │
│  │  Image  │                    │
│  │  80x80  │                    │
│  └─────────┘                    │
│                                 │
│  Episode Title (max 2 lines)    │
│                                 │
│  Description text truncated     │
│  to 2-3 lines on mobile...      │
│                                 │
│  👤 Guest Name  ·  42 min       │
│  📅 Nov 15, 2024                │
└─────────────────────────────────┘
```

- Card: `bg-white border border-zinc-200 rounded-xl p-4`
- Cover: `w-20 h-20 rounded-lg object-cover`
- Title: `text-lg font-semibold text-zinc-900 line-clamp-2`
- Description: `text-sm text-zinc-600 line-clamp-3 mt-2`
- Meta: `text-xs text-zinc-500 mt-3 flex items-center gap-2`
- Topic tag: `absolute top-4 right-4`

#### Tablet (768px+)

```
┌────────────────────────────────────────────────────┐
│  ┌─────────────┐                                   │
│  │   Cover     │  Topic Tag  Topic Tag             │
│  │   Image     │                                   │
│  │   120x120   │  Episode Title Here               │
│  │             │                                   │
│  └─────────────┘  Description text can be longer   │
│                   on tablet, 2-3 lines max...      │
│                                                    │
│                   👤 Guest  ·  42 min  ·  Nov 15   │
└────────────────────────────────────────────────────┘
```

- Horizontal layout with image on left
- Cover: `w-30 h-30` (120px)
- Padding: `p-5`

#### Desktop (1024px+)

- Same as tablet, slightly more padding: `p-6`
- Cover: `w-32 h-32` (128px)

---

### Featured Variant (Hero)

#### Mobile (320px+)

```
┌─────────────────────────────────┐
│                                 │
│  🎙️ LATEST EPISODE             │
│                                 │
│  ┌─────────────────────────┐   │
│  │                         │   │
│  │     Cover Image         │   │
│  │     Full Width          │   │
│  │     aspect-video        │   │
│  │                         │   │
│  └─────────────────────────┘   │
│                                 │
│  Episode Title Goes Here        │
│  (larger, bolder)               │
│                                 │
│  Full description, not          │
│  truncated on featured...       │
│                                 │
│  Topic  Topic  Topic            │
│                                 │
│  👤 Guest Name                  │
│  📅 Nov 15, 2024  ·  42 min     │
│                                 │
│  [ ▶️  Listen Now ]             │
│                                 │
└─────────────────────────────────┘
```

- Card: `bg-white border border-zinc-200 rounded-2xl p-5`
- Label: `text-xs font-medium text-indigo-500 uppercase tracking-wide`
- Cover: `w-full aspect-video rounded-xl mt-3`
- Title: `text-2xl font-bold text-zinc-900 mt-4`
- Description: `text-base text-zinc-600 mt-2` (no truncation)
- CTA Button: Primary button style

#### Desktop (1024px+)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  🎙️ LATEST EPISODE                                         │
│                                                             │
│  ┌──────────────────┐  Episode Title Goes Here             │
│  │                  │  (much larger on desktop)             │
│  │   Cover Image    │                                       │
│  │   400x225        │  Full description text that can       │
│  │   aspect-video   │  span multiple lines on desktop...    │
│  │                  │                                       │
│  └──────────────────┘  Topic  Topic  Topic                 │
│                                                             │
│                        👤 Guest Name  ·  42 min  ·  Nov 15  │
│                                                             │
│                        [ ▶️  Listen Now ]                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

- Horizontal layout with image on left (40% width)
- Title: `text-4xl`
- Padding: `p-8`

---

### Compact Variant

```
┌─────────────────────────────────┐
│  ┌─────┐  Episode Title         │
│  │ 48  │  42 min · Nov 15       │
│  └─────┘                        │
└─────────────────────────────────┘
```

- Card: `bg-zinc-50 rounded-lg p-3`
- Cover: `w-12 h-12 rounded`
- Title: `text-sm font-medium line-clamp-1`
- Meta: `text-xs text-zinc-500`

---

## States

### Default
- `border-zinc-200`

### Hover
- `border-zinc-300 shadow-md`
- Smooth transition

### Focus (keyboard)
- `ring-2 ring-indigo-500 ring-offset-2`
- Entire card is focusable link

### Loading
- Skeleton placeholders for image, title, description
- `animate-pulse bg-zinc-200`

---

## Accessibility

- Card is wrapped in `<article>` element
- Title uses appropriate heading level (h2 or h3)
- Image has descriptive `alt` text
- Entire card is a clickable link (card pattern)
- Focus ring visible on keyboard navigation
- Duration formatted accessibly: "42 minutes"

---

## Interactions

- **Click/Tap**: Navigate to episode detail page
- **Hover**: Subtle shadow and border change
- **Transition**: `transition-all duration-200 ease-in-out`
