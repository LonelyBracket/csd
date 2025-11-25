# Component: GuestCard

## Purpose
Displays a podcast guest with their avatar, name, title, and episode count. Used on guests listing page and as linked mentions.

## Variants
- **Default** - Standard card for guest listings
- **Featured** - Larger card highlighting a guest
- **Inline** - Small inline mention within content

---

## Props/Inputs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | string | required | Guest's full name |
| `title` | string | required | Job title |
| `company` | string | required | Company name |
| `avatar` | object | optional | Profile image |
| `episodeCount` | number | 0 | Number of appearances |
| `href` | string | required | Link to guest profile |

---

## Layout (Mobile-First)

### Default Variant

#### Mobile (320px+)

```
┌─────────────────────────────────┐
│                                 │
│         ┌───────────┐           │
│         │           │           │
│         │  Avatar   │           │
│         │   80x80   │           │
│         │           │           │
│         └───────────┘           │
│                                 │
│        Guest Full Name          │
│        Title at Company         │
│                                 │
│        🎙️ 3 episodes           │
│                                 │
└─────────────────────────────────┘
```

- Card: `bg-white border border-zinc-200 rounded-xl p-6 text-center`
- Avatar: `w-20 h-20 rounded-full mx-auto object-cover`
- Fallback avatar: `bg-zinc-200 flex items-center justify-center text-zinc-500 text-2xl font-bold` (initials)
- Name: `text-lg font-semibold text-zinc-900 mt-4`
- Title: `text-sm text-zinc-600 mt-1`
- Episodes: `text-xs text-zinc-500 mt-3`

#### Tablet+ (768px+)

Grid layout with multiple cards:
```
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Avatar  │ │ Avatar  │ │ Avatar  │
│  Name   │ │  Name   │ │  Name   │
│  Title  │ │  Title  │ │  Title  │
└─────────┘ └─────────┘ └─────────┘
```

- Grid: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`

---

### Featured Variant

```
┌────────────────────────────────────────────────────┐
│                                                    │
│  ┌───────────┐  Guest Full Name                   │
│  │           │  Senior Title at Company           │
│  │  Avatar   │                                    │
│  │  120x120  │  Bio text can go here for a bit    │
│  │           │  of context about the guest...     │
│  └───────────┘                                    │
│                🎙️ 3 episodes  🔗 Twitter LinkedIn │
│                                                    │
└────────────────────────────────────────────────────┘
```

- Card: `bg-white border border-zinc-200 rounded-2xl p-6`
- Layout: Horizontal with avatar left
- Avatar: `w-30 h-30 rounded-full`
- Name: `text-2xl font-bold`
- Social links: Icon buttons

---

### Inline Variant

For mentions within episode descriptions:

```
┌─────────────────────────────────────────┐
│  [Avatar 24px] Guest Name               │
└─────────────────────────────────────────┘
```

- Container: `inline-flex items-center gap-2 bg-zinc-100 rounded-full pl-1 pr-3 py-1`
- Avatar: `w-6 h-6 rounded-full`
- Name: `text-sm font-medium text-zinc-700`
- Hover: `bg-zinc-200`
- Clickable link to guest page

---

## States

### Default
- `border-zinc-200`

### Hover
- `border-zinc-300 shadow-md`
- Avatar: Subtle scale `scale-105`

### Focus
- `ring-2 ring-indigo-500 ring-offset-2`

### Loading
- `animate-pulse`
- Circle placeholder for avatar
- Text bars for name/title

---

## Avatar Fallback

When no avatar is provided:
```
┌───────────┐
│           │
│    JD     │
│           │
└───────────┘
```

- Circle: `bg-indigo-100`
- Initials: `text-indigo-600 font-bold`
- Use first letter of first and last name

---

## Accessibility

- Card wrapped in `<article>` or just `<a>`
- Avatar: `alt="Photo of [Guest Name]"` or empty if decorative
- Episode count: "Appeared in 3 episodes"
- Entire card is clickable
- Focus ring visible

---

## Interactions

- **Click/Tap**: Navigate to guest profile
- **Hover**: Shadow lift, subtle avatar zoom
- **Transition**: `transition-all duration-200`
