# Deployment

## What's ready

- `next build` passes with no errors or warnings.
- Every absolute URL is centralized in `lib/site-config.ts`, driven by
  `NEXT_PUBLIC_SITE_URL`. Nothing in components hardcodes a domain.
- **Domain confirmed: `intelicrop.com`**, canonical host `www.intelicrop.com`.
  `.env.example`, `lib/site-config.ts` and `next.config.ts`'s redirect
  (apex → `www`, 308) all use it already.
- `next.config.ts` sets security headers (HSTS, `X-Content-Type-Options`,
  `Referrer-Policy`, `X-Frame-Options`, a CSP with no third-party origins)
  and the canonical-host redirect.
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `app/icon.svg`,
  `app/apple-icon.tsx` and `app/[locale]/opengraph-image.tsx` are all wired
  up and verified working.

## Deploying to Vercel

1. Push this repository to GitHub, import it into Vercel, and confirm it
   builds and runs on its `*.vercel.app` URL before touching the domain.
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
4. Set `NEXT_PUBLIC_SITE_URL` under Settings → Environment Variables to
   `https://www.intelicrop.com` and redeploy, so sitemap/robots/OG images
   use the right host from the start.

## Connecting `intelicrop.com`

1. **Vercel side.** Settings → Domains → add `www.intelicrop.com`, mark it
   primary; add the apex too (`intelicrop.com`), which Vercel auto-configures
   as a 308 redirect to `www`.
2. **Read the DNS values from Vercel's own Domains card** — not from this
   document. Vercel assigns project-specific anycast IPs and CNAME targets;
   a value copied from anywhere else is the most common cause of an
   "Invalid Configuration" state.
3. **Registrar side** (wherever `intelicrop.com` is registered — GoDaddy,
   Namecheap, Cloudflare, etc.; the panel differs, the records don't): add a
   `CNAME` on `www` and an `A` record on `@` with the exact values from step
   2, TTL 600s during cutover. Remove the registrar's default parking-page
   records. Disable any "Domain Forwarding" feature — it silently overrides
   DNS records underneath it.
4. Check for a CAA record that might block Let's Encrypt from issuing the
   certificate; adjust or remove it if present.
5. If corporate email on `@intelicrop.com` is set up later, its MX/SPF/DKIM/DMARC
   records live in this same DNS zone and are independent of the website —
   changing the web records doesn't affect mail, as long as the MX records
   survive.
6. Wait for propagation (10 min–2 hrs), then verify:
   - `https://www.intelicrop.com` loads with a valid certificate
   - `http://intelicrop.com` redirects to `https://www.intelicrop.com` with 308
   - `https://www.intelicrop.com/` redirects to `/es`
   - `/sitemap.xml` and `/robots.txt` respond correctly
   - The link preview renders correctly on LinkedIn and WhatsApp
