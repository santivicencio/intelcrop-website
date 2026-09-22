# IntelCrop — Website

Bilingual (ES/EN) homepage and design system for IntelCrop, an agri-intelligence
platform that digitizes agricultural producers and connects them — via satellite
data and AI — to the ecosystem that finances, supplies, buys from and supports
them.

Built with Next.js (App Router, TypeScript strict) and Tailwind CSS v4. See
`docs/DESIGN_SYSTEM.md` for the design system (including the derived color-contrast
rule — the brief specifies the palette but not contrast ratios), `docs/CONTENT_TODO.md`
for what's still pending real content or confirmation, and `docs/DEPLOYMENT.md` for
getting it onto Vercel and a custom domain.

## Getting started

```bash
npm install
cp .env.example .env.local   # already set to localhost for dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/es`
(Spanish is the default locale; `/en` is the other).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build (must pass with no warnings)
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run format` — Prettier, writes in place

## Scope

This phase ships the complete homepage and design system, bilingual, with the
motion system described in the brand brief — including the signature
"El productor al centro" interactive ecosystem map. Internal pages (per-solution
pages, per-audience pages, Observatory articles, legal/privacy) are linked but
intentionally not built yet — see `docs/CONTENT_TODO.md`. No production domain
has been confirmed; see the same file.
