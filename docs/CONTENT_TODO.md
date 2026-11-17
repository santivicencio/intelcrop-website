# Content TODO

Content now comes from the **InteliCrop Summary (Nov 2026)** and the **Manual de
marca 2026**. Every figure on the site carries the source given in the summary.
What is still open:

## Pending inputs

1. **Contact form endpoint** — set `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` in Vercel so
   messages arrive at comercial@intelicrop.com without depending on the visitor's
   email app (see README → "Contact form"). Confirm the mailbox exists and is monitored.
2. **WhatsApp** (`lib/site-config.ts` → `whatsappNumber`) — the manual's site
   architecture lists WhatsApp under Contacto. Confirm whether +593 99 988 7111 or
   +593 99 841 5959 is a WhatsApp line before adding a button.
3. **LinkedIn / social URLs** (`lib/site-config.ts` → `linkedinUrl`) — the manual
   suggests the handle @intelicrop; add the confirmed URLs and the footer will need
   the links added.
4. **Official logo kit (SVG)** — the logos in `public/brand/` were extracted as PNG
   from the manual PDF. Swap in the `02_Logo` SVGs when available (same file names).
5. **Photography** — the manual (§2.6) calls for real Ecuadorian producers and
   technology in context, ≥ 1.600px wide, WebP < 300 KB. None was supplied, so the
   site uses the flat landscape illustration. Add photos with written consent.
6. **Client and partner logos** — the manual's home includes client logos; only add
   them with written authorization (co-branding rules in manual §2.1).
7. **"Ingresar" (platform login)** — shown in the manual's header mockup; add it when
   there is a login URL.
8. **Legal / privacy pages** — not built. The form shows a one-line privacy note.

## Figures to keep current

- Ecuador agri portfolio and delinquency (SB/SEPS, jul. 2026) — refresh monthly or
  quarterly in `lib/i18n/dictionaries/{es,en}.json` → `ecuador.stats` and
  `actors.items[1].pain`.
- Crop hectares (MAG) — `ecuador.crops`.
- El Niño 2026–27 band copy — revisit once the event ends.
