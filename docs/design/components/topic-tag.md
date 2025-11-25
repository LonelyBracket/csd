# Component: TopicTag

## Purpose
Displays a topic/category as a clickable tag. Used for filtering content and showing content categorization.

## Variants
- **Default** - Standard pill tag
- **Selected** - Currently active filter
- **Large** - Bigger tag for topic pages

---

## Props/Inputs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | string | required | Topic name |
| `href` | string | optional | Link to topic page |
| `count` | number | optional | Number of items |
| `selected` | boolean | false | Active state |
| `size` | 'sm' \| 'md' \| 'lg' | 'md' | Size variant |
| `onClick` | function | optional | Click handler (for filters) |

---

## Layout

### Default (size: 'md')

```
┌───────────────┐
│  DevOps       │
└───────────────┘
```

- Tag: `inline-flex items-center px-3 py-1 rounded-full text-sm font-medium`
- Background: `bg-zinc-100`
- Text: `text-zinc-700`
- Transition: `transition-colors duration-150`

### Small (size: 'sm')

```
┌───────────┐
│  DevOps   │
└───────────┘
```

- Tag: `px-2.5 py-0.5 text-xs`
- Used in cards and compact spaces

### Large (size: 'lg')

```
┌───────────────────┐
│  DevOps  (24)     │
└───────────────────┘
```

- Tag: `px-4 py-2 text-base`
- Shows count badge
- Used on topic listing pages

---

## With Count

```
┌───────────────────┐
│  DevOps  ·  24    │
└───────────────────┘
```

- Count: `text-zinc-500 ml-1.5`
- Separator: Middle dot or just spacing

---

## States

### Default
- Background: `bg-zinc-100`
- Text: `text-zinc-700`

### Hover
- Background: `bg-zinc-200`
- Text: `text-zinc-900`

### Selected/Active
- Background: `bg-indigo-100`
- Text: `text-indigo-700`
- Optional border: `ring-1 ring-indigo-200`

### Selected + Hover
- Background: `bg-indigo-200`

### Focus
- `ring-2 ring-indigo-500 ring-offset-2`

### Disabled (if needed)
- Background: `bg-zinc-50`
- Text: `text-zinc-400`
- `cursor-not-allowed`

---

## Topic List Layout

For displaying multiple topics:

```
┌─────────────────────────────────────────┐
│  [DevOps] [Cloud] [Leadership]          │
│  [Kubernetes] [Culture] [Engineering]   │
└─────────────────────────────────────────┘
```

- Container: `flex flex-wrap gap-2`
- On mobile, tags wrap naturally
- On topic pages, use larger size with counts

---

## Filter Bar Usage

When used as filters on episode/article pages:

```
┌─────────────────────────────────────────────────┐
│  Filter by topic:                               │
│  [All] [DevOps✓] [Cloud] [Leadership] [More ▾] │
└─────────────────────────────────────────────────┘
```

- "All" is default selected
- Selected shows checkmark or filled style
- "More" dropdown if too many topics

---

## Accessibility

- Use `<a>` if navigating, `<button>` if filtering
- If button: `role="checkbox"` or `aria-pressed` for selection
- `aria-label` if count not visible: "DevOps, 24 items"
- Focus ring visible
- Color not only indicator of state (use background change)

---

## Interactions

- **Click/Tap**: Navigate to topic page OR toggle filter
- **Hover**: Background color change
- **Transition**: `transition-colors duration-150`

---

## Color Variations (Optional Enhancement)

For visual distinction, topics could have assigned colors:

```typescript
const topicColors = {
  'devops': 'bg-blue-100 text-blue-700',
  'cloud': 'bg-sky-100 text-sky-700',
  'leadership': 'bg-purple-100 text-purple-700',
  'engineering': 'bg-green-100 text-green-700',
  // default
  'default': 'bg-zinc-100 text-zinc-700'
}
```

This is optional - can start with uniform zinc styling.
