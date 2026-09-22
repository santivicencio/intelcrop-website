# Content TODO

Everything below is a placeholder, an unvalidated figure, or a decision the
company still needs to make — per the brand brief's own §16 validation note.
Each is also marked in the code with `{/* TODO: contenido pendiente de
validación */}` or a comment, so it can be found by searching the codebase for
`TODO`. Nothing here is fabricated where a real source was missing — the
brief itself supplied the example figures below as "to be validated before
publishing," and they ship with that caveat visibly attached in the UI
(`statsNote` / `odsNote` fields), not as asserted fact.

## Pending validation (figures given by the brief as examples)

1. **Satellite/technology stats** (`components/sections/SatelliteSection.tsx`,
   `satellite.stats` in the dictionaries) — "200+ satélites", "3×3 m",
   "40 años", "170+ cultivos", "24/7". Rendered with a visible
   "Cifras de referencia, pendientes de validación" note. Confirm each figure
   with its source before removing that note.
2. **Ecuador figures** (`components/sections/EcuadorDataSection.tsx`,
   `ecuadorData.stats`) — "+1,2M hectáreas", "+800 mil productores". Same
   validation note applies.
3. **SDG / ODS alignment** (`sustainability.odsNote`) — the brief suggests
   ODS 1, 2, 8, 13, 15, 17 "to be confirmed." None are asserted in the UI;
   only a pending-confirmation note renders. Decide the real mapping (with
   whoever owns ODS reporting) before publishing specific goal numbers.
4. **"Única plataforma" claim** — the brief's internal positioning statement
   (§3) calls IntelCrop "la única" platform that works the full chain. This
   superlative is NOT used anywhere in the public copy in this build
   (`whyIntelCrop`, `hero`, etc. all avoid it) — confirm that's intentional,
   or provide the evidence needed to support it before adding it back.

## Pending decisions / missing inputs

5. ~~**Production domain**~~ — confirmed: `intelicrop.com`. `lib/site-config.ts`,
   `.env.example` and `next.config.ts`'s canonical-host redirect (apex →
   `www`) all use it now. Still pending: actually registering/connecting it
   in DNS + Vercel — see `docs/DEPLOYMENT.md`.
6. **WhatsApp number** (`lib/site-config.ts` → `whatsappNumber`) — currently
   empty. The final CTA's WhatsApp button (`components/sections/FinalCtaSection.tsx`)
   correctly degrades to a disabled `#` link with a "pendiente de
   confirmación" note when this is unset. Fill it in once the producer-facing
   number exists.
7. **Contact email and LinkedIn URL** (`lib/site-config.ts`) — the contact
   email now uses the confirmed domain (`contacto@intelicrop.com`), but
   confirm that mailbox actually exists before publishing it. LinkedIn URL
   is still a placeholder company URL — confirm before launch.
8. **Leadership and alliance logos** (`components/sections/TeamSection.tsx`)
   — the brief explicitly says "Present leadership selectively (names and
   roles to be confirmed)" and "Show client and partner logos only with
   written authorization." Neither is included in this build. Add names,
   roles and authorized logos once confirmed.
9. **Observatory reports** (`observatory.items` in the dictionaries) — three
   placeholder entries with bracketed titles (`[Título de reporte
pendiente]`) across the topics the brief names (climate risk / El Niño,
   credit and agriculture, sustainability and EUDR). Replace with real,
   published reports.
10. **Contact form endpoint** (`components/ui/ContactForm.tsx`) — the submit
    handler is a documented stub (`// TODO: conectar a endpoint`) that
    simulates a delayed success response. No third-party form service is
    wired up, per the brief's phase scope.
11. **Privacy / legal text** — `/[locale]/legal` and `/[locale]/privacy` are
    linked from the footer but not built in this phase. Draft the copy, then
    build those routes.
12. **Underlying technology providers** — per §16, IntelCrop is always the
    named provider in public materials; underlying technology partners are
    described generically ("tecnología global de agricultura de precisión")
    and never named by brand. This is already how `team.body` is written —
    keep it that way in any future edits.

## Not a TODO, but worth tracking

- Internal pages (per-solution pages under `/[locale]/soluciones/[area]`,
  per-audience pages under `/[locale]/para-quien/[audience]`, Observatory
  article pages) are linked from the homepage
  (`content/site.ts`, `SolutionsSection`, `AudienceSection`) but
  intentionally not built in this phase — the brief's scope for this
  document is the homepage, design system and component templates, not
  every internal template.
