# IntelCrop — Design System

Source of truth for tokens and components is `app/globals.css` (tokens) and
`components/` (implementation). This document explains the _why_ behind them,
especially the contrast rule — which had to be derived from scratch for this
palette, unlike a brief that hands you a ready-made table.

## Color

Defined in `app/globals.css` under `@theme`, generating Tailwind utilities
(`bg-canopy`, `text-teal-deep`, etc.) directly from the CSS custom properties.

| Token                 | Hex       | Use                                                     |
| --------------------- | --------- | ------------------------------------------------------- |
| `--color-canopy`      | `#0B3B2E` | Primary. Dark section backgrounds                       |
| `--color-canopy-soft` | `#123F32` | Elevated surfaces on canopy (rules, dividers)           |
| `--color-field`       | `#F5F3EC` | Editorial light background                              |
| `--color-field-warm`  | `#EAE7DC` | Dividers/surfaces on field                              |
| `--color-teal`        | `#12938A` | Brand signal — non-text/large-text use only (see below) |
| `--color-teal-deep`   | `#0A5F58` | Derived — text/links/labels, **field only**             |
| `--color-teal-bright` | `#2FAFA3` | Derived — text/links/labels, **canopy only**            |
| `--color-gold`        | `#C99A2E` | Accent — key figures/value, **canopy only**             |
| `--color-slate`       | `#5B6660` | Secondary text, **field only**                          |
| `--color-mist`        | `#A9B3AC` | Secondary text, **canopy only**                         |

### The contrast rule (derived, non-negotiable)

The brand brief specifies the palette but not contrast ratios, so these were
computed (WCAG 2.2 relative-luminance formula; see the git history of this
file for the one-off Node script used). The results are stricter than they
look at first glance:

| Pair                  | Ratio      | Verdict                         |
| --------------------- | ---------- | ------------------------------- |
| field on canopy       | 11.26:1    | ✓ primary text                  |
| canopy on field       | 11.26:1    | ✓ primary text                  |
| slate on field        | 5.38:1     | ✓ secondary text, field only    |
| mist on canopy        | 5.79:1     | ✓ secondary text, canopy only   |
| slate on canopy       | **2.09:1** | ✗ forbidden                     |
| teal-deep on field    | 6.78:1     | ✓ small text/links, field only  |
| teal-bright on canopy | 4.63:1     | ✓ small text/links, canopy only |
| gold on canopy        | 4.85:1     | ✓ text/key figures, canopy only |
| **teal on canopy**    | **3.31:1** | non-text / large-text only      |
| **teal on field**     | **3.40:1** | non-text / large-text only      |
| **gold on field**     | **2.32:1** | **forbidden, any size**         |

The brand teal and brand gold **do not clear 4.5:1 (normal-text AA) on
either surface.** Gold additionally fails even the 3:1 large-text/UI minimum
on field. So:

- `--color-teal` / `--color-gold` are for non-text or large-text use only:
  rules, data lines, borders, hover fills, headline-sized accents.
- `--color-gold` never appears on field, at any size — it only works on
  canopy.
- Two derived, same-hue tokens exist for small text that must read as
  "teal": `--color-teal-deep` (field only) and `--color-teal-bright`
  (canopy only). `components/ui/Eyebrow.tsx` encodes this as a required
  `surface: 'canopy' | 'field'` prop.
- Secondary body text: `--color-slate` on field, `--color-mist` on canopy —
  never swapped.
- The primary `Button` component's hover fill uses gold with canopy text
  (4.85:1) rather than teal, and is documented as canopy/dark-surface only.

**Vigor data scale** (`--color-vigor-stress` → `--color-vigor-high`,
terracotta → amber → light green → green) is for maps and charts only, per
the brief's own instruction — never decorative.

## Typography

Two families, both self-hosted via `next/font/google` in
`app/[locale]/layout.tsx`:

- **Manrope** (`--font-manrope`) — the default `font-sans`, used for
  headlines and body copy.
- **IBM Plex Mono** (`--font-plex-mono`) — `font-mono`, used specifically
  for data labels, eyebrows, coordinates and metrics, per the brief's
  "IBM Plex Mono... for data labels, coordinates, hectares and metrics."
  `components/ui/Label.tsx` and `NumberMark.tsx` both default to it.

Scale (all `clamp()`-based `--text-*` tokens in `@theme`, generating
`text-display`, `text-h1`, `text-h2`, `text-h3`, `text-body-lg` and
`text-number-mark` utilities directly):

| Token         | Size                                         | Use                                |
| ------------- | -------------------------------------------- | ---------------------------------- |
| `display`     | `clamp(3rem, 7vw, 6.5rem)`                   | Hero headline                      |
| `h1`          | `clamp(2.5rem, 5vw, 4.5rem)`                 | Section headline                   |
| `h2`          | `clamp(1.75rem, 3vw, 2.75rem)`               | Subsection                         |
| `h3`          | `clamp(1.25rem, 2vw, 1.5rem)`                | Module title                       |
| `body-lg`     | `clamp(1.125rem, 1.4vw, 1.375rem)`           | Hero support copy                  |
| body          | `1rem` / `1.65` (`text-base leading-[1.65]`) | General copy                       |
| label         | `0.75rem` mono, `0.14em` tracking            | Eyebrows, tags, data labels        |
| `number-mark` | `clamp(3rem, 7vw, 6rem)`                     | Big stat figures, question numbers |

Numeric typography uses `tabular-nums` throughout (see `.tabular-nums` and
`NumberMark`), matching the brief's "numbers... function as graphic
elements."

## Grid, spacing, breakpoints

- `1320px` max content width (`Container`), same margin scale as a
  12-column editorial grid: `20px` mobile / `48px` tablet / `80px` desktop /
  `120px` above `1600px` (`px-5 md:px-12 lg:px-20 2xl:px-[120px]`).
- Section vertical rhythm: `py-[clamp(96px,12vh,200px)]`
  (`components/layout/Section.tsx`).
- Breakpoints: Tailwind defaults except `2xl`, overridden to `1600px`.

## Motion

- UI transitions: `180ms`. Scroll reveals: `600ms`. Ambient systems (hero
  field grid, satellite background grid): long, slow cycles.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-entry`) for entrances.
- `components/motion/RevealOnScroll.tsx`: the same pattern used across
  every section — opacity `0→1` + `translateY(16px→0)`, once per element,
  staggered via a `delay` prop.
- `components/motion/HeroFieldGrid.tsx`: the hero's signature system. An
  80-cell grid (10×8) from a seeded PRNG (`mulberry32`, fixed seed),
  scattered "aerial plot" start positions settling into an ordered pixel
  grid via pure CSS keyframes (animates with JavaScript disabled). A subset
  of cells is picked out in teal to form a simple pixel-sprout silhouette —
  a nod to the brief's own suggested symbol evolution (§9.4), not a logo
  change. Pauses via `IntersectionObserver` off-screen; renders the settled
  grid directly, no animation, under `prefers-reduced-motion`.
- `components/sections/EcosystemMap.tsx`: the "El productor al centro"
  signature diagram. Desktop/tablet renders a radial layout (SVG
  connector lines + absolutely-positioned HTML buttons, positions computed
  by trigonometry); a shared caption below updates with the active actor's
  benefit line. Below `md`, it becomes the vertical tap-to-expand list the
  brief asks for (§13), sharing the same active-actor state. Hover/focus
  and click are handled the same way `RevealOnScroll`'s past bugs taught
  the pattern to avoid (see "Bugs found and fixed" below).
- `components/motion/DecisionChainAnimation.tsx`: per-row connector line
  draws once (viewport-triggered, once) and then runs an infinite
  traveling pulse gated by `whileInView` (no `once`), so the pulse itself
  pauses when the section leaves the viewport.
- `prefers-reduced-motion: reduce` is enforced twice: a global CSS override
  in `globals.css` for anything CSS-driven, and `framer-motion`'s
  `useReducedMotion()` / the shared `usePrefersReducedMotion()` hook
  (`lib/hooks/`) for JS-driven motion.
- **No-JS fallback:** every `RevealOnScroll`-wrapped element carries a
  stable `reveal-on-scroll` class, neutralized by a `<noscript>` style
  block in the root layout (`opacity: 1 !important`) — otherwise the
  framer-motion `initial` state (`opacity: 0`) would persist forever
  without JavaScript.
- Bundle size: `framer-motion`'s `LazyMotion` + `m` components (not the
  full `motion` API) are used throughout, keeping the homepage's JS under
  the 180KB-gzip budget.

## Bugs found and fixed during build

Worth recording so they aren't reintroduced:

1. **Absolutely-positioned `<svg>` doesn't stretch via `inset-0` alone** —
   `<svg>` is a CSS replaced element, so `position: absolute; inset: 0`
   without explicit `w-full h-full` falls back to the intrinsic 300×150
   default size. Every full-bleed decorative SVG in this project
   (`EcosystemMap`'s connector-line overlay, etc.) sets `w-full h-full`
   explicitly.
2. **Toggle-on-click after focus-to-activate causes an immediate
   self-deactivation** — if a button's `onFocus` sets `active = id` and its
   `onClick` toggles (`active === id ? null : id`), a mouse/touch click
   fires `focus` then `click` on the same element, so the toggle
   immediately reverses the focus-driven activation. `EcosystemMap`'s
   `onClick` sets the same value idempotently instead of toggling; only the
   mobile accordion (which has no competing `onFocus` handler) toggles.

## i18n architecture

- `lib/i18n/config.ts` — `locales`, `defaultLocale` (`es`), `isLocale()`
  guard.
- `lib/i18n/dictionaries/{es,en}.json` — all translatable copy, typed by
  `lib/i18n/types.ts`. Unlike Concilium, IntelCrop's brief has no
  "keep this in English in both locales" nomenclature rule — the whole
  site is a genuine ES/EN translation pair, so `content/site.ts` holds only
  structural data (ids, ordering, non-textual values), never display text.
- `proxy.ts` redirects `/` → `/es` (308). `app/[locale]/layout.tsx` is the
  de facto root layout (no `app/layout.tsx` exists).

## What was deliberately not built this phase

Per the brief's own framing (§0 of the CONCILIUM precedent this project
follows, and by direct analogy here), internal pages — per-solution pages,
per-audience pages, Observatory article pages, `/legal`, `/privacy` — are
linked (`content/site.ts`, `SolutionsSection`, `AudienceSection`) but not
built. See `docs/CONTENT_TODO.md`.
