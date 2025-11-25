# Component: Navigation (Header)

## Purpose
Primary site navigation. Provides access to main sections, search, and mobile menu.

---

## Props/Inputs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPath` | string | '/' | Current active route |

---

## Layout (Mobile-First)

### Mobile (320px+)

```
┌─────────────────────────────────────────┐
│  ☰   Control-Shift-Deliver      🔍      │
└─────────────────────────────────────────┘
```

**Specs:**
- Header: `fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200 z-50`
- Height: `h-16` (64px)
- Padding: `px-4`
- Logo: `text-lg font-bold text-zinc-900`
- Menu button (left): `p-2 -ml-2 rounded-lg hover:bg-zinc-100`
- Search button (right): `p-2 -mr-2 rounded-lg hover:bg-zinc-100`

#### Mobile Menu (Slide-in)

```
┌─────────────────────────────────────────┐
│  ✕   Control-Shift-Deliver              │
├─────────────────────────────────────────┤
│                                         │
│  Episodes                               │
│  ─────────────────────────────────      │
│  Articles                               │
│  ─────────────────────────────────      │
│  Guests                                 │
│  ─────────────────────────────────      │
│  Topics                                 │
│  ─────────────────────────────────      │
│                                         │
│  ─────────────────────────────────      │
│                                         │
│  🔍 Search                              │
│                                         │
└─────────────────────────────────────────┘
```

**Specs:**
- Overlay: `fixed inset-0 bg-black/50 z-50`
- Panel: `fixed inset-y-0 left-0 w-[280px] bg-white shadow-xl`
- Animation: Slide in from left, 200ms
- Nav items: `block py-4 px-6 text-lg font-medium text-zinc-900 border-b border-zinc-100`
- Active item: `text-indigo-500 bg-indigo-50`
- Close button: `p-2 rounded-lg hover:bg-zinc-100`

---

### Tablet (768px+)

```
┌────────────────────────────────────────────────────────────┐
│  Control-Shift-Deliver    Episodes  Articles  Guests   🔍  │
└────────────────────────────────────────────────────────────┘
```

**Specs:**
- No hamburger menu
- Nav links visible inline
- Nav item: `px-3 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 rounded-lg hover:bg-zinc-100`
- Active: `text-zinc-900 bg-zinc-100`
- Search: Icon button on right

---

### Desktop (1024px+)

```
┌──────────────────────────────────────────────────────────────────────┐
│  Control-Shift-Deliver    Episodes  Articles  Guests  Topics   🔍    │
└──────────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Logo area: `flex items-center gap-8`
- Nav: `flex items-center gap-1`
- Nav item: `px-4 py-2`
- Container: `max-w-7xl mx-auto`
- Topics visible (hidden on tablet if tight)

---

## Navigation Items

| Label | Route | Description |
|-------|-------|-------------|
| Episodes | `/episodes` | All podcast episodes |
| Articles | `/articles` | All articles |
| Guests | `/guests` | Browse by guest |
| Topics | `/topics` | Browse by topic |

---

## States

### Nav Item - Default
- `text-zinc-600`

### Nav Item - Hover
- `text-zinc-900 bg-zinc-100`

### Nav Item - Active (current page)
- `text-zinc-900 bg-zinc-100` or `text-indigo-500`

### Nav Item - Focus
- `ring-2 ring-indigo-500 ring-offset-2`

---

## Search Behavior

On click/tap of search icon:
1. **Mobile/Tablet**: Full-screen search overlay
2. **Desktop**: Expandable search input or modal

```
┌─────────────────────────────────────────┐
│  🔍  Search episodes, articles, guests  │
│  ───────────────────────────────────    │
│                                         │
│  Recent Searches                        │
│  • kubernetes                           │
│  • devops                               │
│                                         │
│  Popular Topics                         │
│  [Cloud] [DevOps] [Leadership]          │
│                                         │
└─────────────────────────────────────────┘
```

---

## Scroll Behavior

- Header stays fixed on scroll
- Optional: Hide on scroll down, show on scroll up (mobile)
- Background becomes more opaque on scroll: `bg-white/95`

---

## Accessibility

- `<nav>` element with `aria-label="Main navigation"`
- Mobile menu button: `aria-expanded`, `aria-controls`
- Current page: `aria-current="page"`
- Skip link: Hidden link at top "Skip to main content"
- Focus trap in mobile menu when open
- Escape key closes mobile menu
- All links keyboard accessible

---

## Interactions

- **Logo click**: Navigate to homepage
- **Nav item click**: Navigate to section
- **Menu button**: Toggle mobile menu
- **Search button**: Open search
- **Outside click**: Close mobile menu
- **Escape**: Close mobile menu/search

---

## Transitions

- Mobile menu: `transition-transform duration-200`
- Nav item hover: `transition-colors duration-150`
- Header background: `transition-colors duration-200`
