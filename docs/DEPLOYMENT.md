# Deployment

## What's ready

- `next build` passes with no errors or warnings.
- Every absolute URL is centralized in `lib/site-config.ts`, driven by
  `NEXT_PUBLIC_SITE_URL`. Nothing in components hardcodes a domain.
- `next.config.ts` sets security headers (HSTS, `X-Content-Type-Options`,
  `Referrer-Policy`, `X-Frame-Options`, a CSP with no third-party origins).
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `app/icon.svg`,
  `app/apple-icon.tsx` and `app/[locale]/opengraph-image.tsx` are all wired
  up and verified working.

## What's still open

**No production domain has been confirmed** (see `docs/CONTENT_TODO.md`
item 5) — the brand brief didn't specify one, unlike a project with a named
domain from day one. `.env.example` ships with a placeholder
(`https://www.intelcrop.com`). Once the real domain is chosen:

1. Update `NEXT_PUBLIC_SITE_URL` (in Vercel's environment variables, and in
   `.env.example` for future contributors).
2. Add a canonical-host redirect to `next.config.ts` — there's a `TODO`
   comment marking exactly where, with the pattern to copy.
3. Follow the domain-connection steps below once you know whether the
   registrar is GoDaddy, Namecheap, Cloudflare, etc. — the Vercel-side steps
   are the same regardless; only the DNS panel differs.

## Deploying to Vercel

1. Push this repository to GitHub, import it into Vercel, and confirm it
   builds and runs on its `*.vercel.app` URL before touching any domain.
2. **Framework detection**: Vercel should auto-detect Next.js from
   `package.json` / `next.config.ts`. If a deploy ever fails with
   `No Output Directory named "public" found`, the project's **Framework
   Preset** got set to something other than "Next.js" (Settings → General)
   — fix that first, and check **Build & Development Settings** for any
   manual "Output Directory" override left on `public`; turn overrides off
   so Vercel uses the framework defaults.
3. **Production Branch**: if you're deploying from a feature branch rather
   than `main`, set it explicitly under Settings → Git → Production Branch,
   then trigger a redeploy — the custom domain always serves whatever
   deployment is marked "Production," not just the latest one.
4. Set `NEXT_PUBLIC_SITE_URL` under Settings → Environment Variables to the
   real deployed URL (the `.vercel.app` one for now, the final domain once
   confirmed) and redeploy, so sitemap/robots/OG images use the right host.

## Connecting a custom domain (once confirmed)

1. Settings → Domains → add `www.<domain>`, mark it primary; add the apex
   too (`<domain>`), which Vercel will auto-configure as a 308 redirect to
   `www`.
2. Copy the exact DNS values Vercel's own Domains card shows for your
   project — not from generic documentation, since Vercel assigns
   project-specific anycast IPs and CNAME targets.
3. In your registrar's DNS panel: a `CNAME` on `www` and an `A` record on
   `@` with those exact values; remove the registrar's default parking-page
   records; disable any "Domain Forwarding" feature, which silently
   overrides DNS records.
4. Check for a CAA record that might block Let's Encrypt from issuing the
   certificate.
5. Wait for propagation (10 min–2 hrs), then verify `https://www.<domain>`
   loads with a valid certificate, the apex redirects to `www` with 308,
   and `/` redirects to `/es`.
