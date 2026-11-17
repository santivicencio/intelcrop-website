# InteliCrop — Website

Bilingual (ES/EN) homepage for InteliCrop — _AI para el agro_. An agro-fintech
that combines satellite imagery, climate and field data with AI so banks,
cooperatives, agribusiness and government can finance, insure and support
producers with evidence. Official CROPIN representative in Ecuador and LATAM.

Design follows the **Manual de marca 2026**; content follows the **InteliCrop
Summary (Nov 2026)**. Contact: comercial@intelicrop.com.

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

## Contact form → comercial@intelicrop.com

Every message is addressed to **comercial@intelicrop.com** (`lib/site-config.ts`):

- **Recommended:** set `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` in Vercel to a form
  service that delivers to that inbox, then redeploy (the value is inlined at
  build time and added to the CSP automatically). Two options:
  - Formspree: create a form whose notification email is comercial@intelicrop.com
    and use its URL (`https://formspree.io/f/xxxxxxx`).
  - FormSubmit, no account: `https://formsubmit.co/ajax/comercial@intelicrop.com`.
    The first submission sends an activation email to that inbox; click it once.
- **Without the variable** the form still works: it opens the visitor's email app
  with the message pre-filled and addressed to comercial@intelicrop.com.

## Scope

Apple-style structure: a homepage that presents the eight solutions as large
tiles, and one page per solution under `/[locale]/soluciones/[slug]` (content in
`content/services/{es,en}.ts`, template in `components/service/`). The header's
"Soluciones" menu lists every solution. Homepage: hero, key figures, solutions,
context, interactive value-chain map (actors and pain points), how it works,
credit process, sustainability, about, contact. Legal/privacy pages are not built
yet — see `docs/CONTENT_TODO.md`.

### Adding or editing a solution

Edit the entry in both `content/services/es.ts` and `content/services/en.ts`. To
add one, append its slug to `serviceSlugs` in `content/services/types.ts`; the
page, sitemap, menu, footer and contact-form options pick it up automatically.
