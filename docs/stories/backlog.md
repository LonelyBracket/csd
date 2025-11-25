# Control-Shift-Deliver - Product Backlog

## Story: Site Hub Purpose
**Status:** ready
**Priority:** P0

As a B2B professional interested in Control-Shift-Deliver content,
I want a single, central website that houses all podcast episodes, related articles, and resources,
So that I can easily find and navigate all relevant content in one place without confusion.

### Acceptance Criteria
- [ ] Homepage presents a unified view of latest episodes and articles
- [ ] Users can browse and filter by content type, topic, or guest
- [ ] Site functions as a clear, organized, one-stop hub for all material
- [ ] Navigation is intuitive and consistent across all pages

### Dependencies
- Design system must be established first
- Mock API schema for content types

### Notes
- This is the foundational story that drives overall site architecture

---

## Story: Latest Content Discovery
**Status:** ready
**Priority:** P0

As a returning listener or reader,
I want to see the most recent podcast episodes and articles featured at the top of the homepage,
So that I can quickly find the newest content without searching.

### Acceptance Criteria
- [ ] Homepage highlights newest one or two episodes prominently
- [ ] Recent articles displayed in a secondary featured section
- [ ] Clear "new" or "featured" visual indicators on fresh content
- [ ] Direct navigation from highlights to the full episode or article
- [ ] Content sorted by publish date (newest first)

### Dependencies
- Site Hub Purpose story
- Episode and Article components designed

### Notes
- Consider a "hero" section for the latest episode

---

## Story: Modern Tech-Savvy Design
**Status:** ready
**Priority:** P1

As a tech-savvy B2B professional,
I want the website to have a clean, modern, slightly tech-forward design,
So that it feels professional, credible, and easy to read.

### Acceptance Criteria
- [ ] Uses modern fonts (sans-serif, possibly a mono accent)
- [ ] Contemporary, tech-leaning color palette (not boring corporate blue)
- [ ] Layout is logical, organized, and uses whitespace effectively
- [ ] Fully responsive on desktop, tablet, and mobile
- [ ] Consistent visual language across all pages and components
- [ ] Typography is optimized for readability

### Dependencies
- None - this informs all other design work

### Notes
- Target aesthetic: modern dev tools, not enterprise software
- Think Linear, Vercel, Raycast vibes

---

## Story: Headless API-Driven Architecture
**Status:** ready
**Priority:** P0

As a user who values fast, flexible web experiences,
I want the site built with a headless, API-driven architecture,
So that content loads quickly and can come from any CMS selected in the future.

### Acceptance Criteria
- [ ] Front-end is fully headless and relies on API calls for content
- [ ] CMS is not yet chosen, but architecture is compatible with any API-first CMS
- [ ] Content loads smoothly and efficiently regardless of backend
- [ ] Data fetching layer is abstracted and easily swappable
- [ ] Loading states handled gracefully
- [ ] Error states handled gracefully

### Dependencies
- Mock API schema defined

### Notes
- Use mock data during development
- Structure fetch functions to be CMS-agnostic

---

## Story: Guest and Topic Navigation
**Status:** ready
**Priority:** P1

As a listener interested in specific guests or topics,
I want to browse and filter content by guest name or topic category,
So that I can easily find the material most relevant to me.

### Acceptance Criteria
- [ ] Navigation or filters allow browsing by guest
- [ ] Navigation or filters allow browsing by topic/category
- [ ] Selecting a guest displays all related episodes/articles
- [ ] Selecting a topic displays all related episodes/articles
- [ ] Users can switch between categories without losing place
- [ ] Filter state persists during navigation (URL-based)
- [ ] Clear indication of current filter selection

### Dependencies
- Site Hub Purpose story
- Mock API must include guest and topic data

### Notes
- Consider both dedicated pages (/guests, /topics) and inline filtering

---

## Story: Mobile-First Experience
**Status:** ready
**Priority:** P0

As a B2B professional who primarily uses mobile devices,
I want the site designed mobile-first,
So that I can easily consume content without layout issues or zooming.

### Acceptance Criteria
- [ ] Layout is designed for mobile screens first, then scaled up
- [ ] All navigation is optimized for touch interactions
- [ ] Content is readable without zooming (minimum 16px base font)
- [ ] Full functionality works smoothly on phones and tablets
- [ ] Touch targets are appropriately sized (minimum 44px)
- [ ] No horizontal scrolling on mobile
- [ ] Images and media are responsive

### Dependencies
- Modern Tech-Savvy Design story (design system)

### Notes
- Test on actual mobile devices, not just browser dev tools
- Consider thumb-friendly navigation placement
