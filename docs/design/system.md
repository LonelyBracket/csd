# Control-Shift-Deliver Design System

A modern, dark-mode design system for B2B tech professionals. Inspired by Linear, Raycast, and Vercel aesthetics.

---

## Design Principles

1. **Content First** - Guest photos and content take center stage
2. **Subtle Depth** - Layered surfaces with soft borders create hierarchy
3. **Electric Accent** - Cyan pops against the dark background for actions and highlights
4. **Fluid Motion** - Smooth hover states and transitions feel premium

---

## Colors

### Background Surfaces

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `surface` | `#0A0A0B` | Custom | Page background |
| `surface-raised` | `#141415` | Custom | Cards, elevated elements |
| `surface-overlay` | `#1C1C1E` | Custom | Hover states, overlays |
| `surface-border` | `#2A2A2D` | Custom | Borders, dividers |

### Accent (Electric Cyan)

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `accent` | `#06B6D4` | `cyan-500` | Primary actions, links, highlights |
| `accent-hover` | `#22D3EE` | `cyan-400` | Hover state (lighter on dark) |
| `accent-dim` | `#0E7490` | `cyan-700` | Subtle accent backgrounds |
| `accent-glow` | `rgba(6, 182, 212, 0.15)` | Custom | Glow effects |

### Text

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `text-primary` | `#FFFFFF` | `white` | Headlines, primary text |
| `text-secondary` | `#A1A1AA` | `zinc-400` | Body text, descriptions |
| `text-muted` | `#71717A` | `zinc-500` | Metadata, timestamps |
| `text-faint` | `#52525B` | `zinc-600` | Disabled, hints |

### Semantic

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `success` | `#10B981` | `emerald-500` | Success states |
| `warning` | `#F59E0B` | `amber-500` | Warnings |
| `error` | `#EF4444` | `red-500` | Errors |

---

## Typography

### Font Stack

```css
--font-sans: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
```

Use Google Fonts: `Inter:wght@400;500;600;700;800`

### Type Scale

| Name | Size | Line Height | Weight | Usage |
|------|------|-------------|--------|-------|
| `xs` | 12px | 16px | 400-500 | Labels, tags, metadata |
| `sm` | 14px | 20px | 400 | Secondary text, captions |
| `base` | 16px | 24px | 400 | Body text |
| `lg` | 18px | 28px | 400-600 | Lead paragraphs, card titles |
| `xl` | 20px | 28px | 600 | Section subtitles |
| `2xl` | 24px | 32px | 700 | Section headers |
| `3xl` | 30px | 36px | 700 | Page titles (mobile) |
| `4xl` | 36px | 40px | 700 | Page titles (desktop) |
| `5xl` | 48px | 48px | 800 | Hero titles |

---

## Spacing

Based on 4px grid. Use Tailwind defaults.

| Scale | Value | Common Use |
|-------|-------|------------|
| `4` | 16px | Card padding (mobile) |
| `5` | 20px | Card padding (tablet) |
| `6` | 24px | Card padding (desktop) |
| `8` | 32px | Section gaps |
| `12` | 48px | Section padding |
| `16` | 64px | Large section padding |

### Content Width

| Name | Max Width | Tailwind | Usage |
|------|-----------|----------|-------|
| `prose` | 65ch | `max-w-prose` | Article content |
| `container` | 1280px | `max-w-7xl` | Page container |

---

## Effects

### Border Radius

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `sm` | 4px | `rounded` | Tags, small elements |
| `lg` | 8px | `rounded-lg` | Buttons, inputs |
| `xl` | 12px | `rounded-xl` | Cards |
| `2xl` | 16px | `rounded-2xl` | Featured cards, modals |
| `full` | 9999px | `rounded-full` | Avatars, pills |

### Shadows & Glows

```css
/* Glow for featured elements */
.glow-box {
  box-shadow: 0 0 60px rgba(6, 182, 212, 0.15),
              0 0 100px rgba(6, 182, 212, 0.05);
}

/* Standard card shadow (on hover) */
.shadow-card {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}
```

### Glassmorphism (Navigation)

```css
.glass {
  background: rgba(20, 20, 21, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
```

### Background Patterns

```css
/* Subtle dot pattern for hero sections */
.dot-pattern {
  background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

### Gradient Text

```css
.gradient-text {
  background: linear-gradient(135deg, #06B6D4 0%, #22D3EE 50%, #67E8F9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Transitions

| Name | Duration | Easing | Usage |
|------|----------|--------|-------|
| `fast` | 150ms | ease-out | Color changes |
| `default` | 200ms | ease-in-out | Most interactions |
| `slow` | 300ms | ease-in-out | Scale, complex animations |

Standard: `transition-all duration-200 ease-in-out`

---

## Component Patterns

### Cards

```
Background: surface-raised (#141415)
Border: 1px solid surface-border (#2A2A2D)
Border radius: rounded-xl (12px)
Padding: p-4 (mobile), p-5 (tablet), p-6 (desktop)

Hover:
- Border: accent/30 (cyan with 30% opacity)
- Background: surface-overlay (optional)
- Transform: subtle scale on thumbnails
```

### Episode Cards

- **Thumbnail**: Guest headshot (square, rounded-lg)
- **Hover**: Play icon overlay, cyan ring, image scale
- **Layout**: Horizontal (image left, content right)

### Article Cards

- **Thumbnail**: AI-generated topic image
- **Overlay**: Gradient from bottom (surface-raised) + cyan tint
- **Hover**: Image scale, cyan border

### Buttons

**Primary:**
```
Background: accent (#06B6D4)
Text: surface (#0A0A0B)
Padding: px-6 py-3
Border radius: rounded-lg
Hover: accent-hover (#22D3EE)
```

**Secondary/Ghost:**
```
Background: transparent
Border: 1px solid surface-border
Text: zinc-300
Hover: bg-surface-overlay, border-accent/50, text-accent
```

### Tags/Pills

```
Background: surface-overlay or accent/10
Text: zinc-400 or accent
Padding: px-2.5 py-0.5 (sm) or px-3 py-1 (md)
Border radius: rounded-full
Border: 1px solid surface-border or accent/20
```

### Navigation

```
Position: fixed top-0
Background: glass (rgba(20, 20, 21, 0.8) + blur)
Border bottom: 1px solid surface-border
Height: 64px (h-16)
```

---

## Image Treatment

### Guest Photos (Episodes)

- Square aspect ratio
- `object-cover` with `crop=face`
- Rounded corners (rounded-lg for cards, rounded-full for avatars)
- Hover: Play overlay + cyan ring

### Article Images

- AI-generated per article topic
- Aspect ratio: 2:1
- Gradient overlay: `bg-gradient-to-t from-surface-raised via-surface-raised/60 to-transparent`
- Cyan tint: `bg-accent/10 mix-blend-overlay`
- Hover: Scale effect

### Avatar Fallback

When no image available, use initials:
```
Background: gradient (varies per guest)
Text: surface color, bold
```

---

## Breakpoints

| Name | Min Width | Prefix | Target |
|------|-----------|--------|--------|
| Mobile | 0px | (default) | Phones |
| `sm` | 640px | `sm:` | Large phones |
| `md` | 768px | `md:` | Tablets |
| `lg` | 1024px | `lg:` | Laptops |
| `xl` | 1280px | `xl:` | Desktops |

**Mobile-first**: Default styles are mobile, add prefixes to scale up.

---

## Accessibility

### Color Contrast
- White on surface: 18.1:1 ✓
- zinc-400 on surface: 6.1:1 ✓
- accent on surface: 7.2:1 ✓

### Focus States
```
focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface
```

### Touch Targets
- Minimum 44x44px for tappable elements
- Use `min-h-[44px]` when needed

### Motion
- Respect `prefers-reduced-motion`
- Use `motion-reduce:transition-none`

---

## Tailwind Config

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#06B6D4',
          hover: '#22D3EE',
          dim: '#0E7490',
          glow: 'rgba(6, 182, 212, 0.15)',
        },
        surface: {
          DEFAULT: '#0A0A0B',
          raised: '#141415',
          overlay: '#1C1C1E',
          border: '#2A2A2D',
        },
      },
    },
  },
  plugins: [],
}

export default config
```
