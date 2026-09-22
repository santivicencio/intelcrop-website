import type { NextConfig } from 'next'

// No third-party scripts, styles, fonts or embeds are loaded anywhere on this site
// (next/font self-hosts Manrope and IBM Plex Mono, ImageResponse renders OG/icons
// server-side), so the CSP can stay this tight. 'unsafe-inline' on script/style is
// required by Next's own hydration and inlined critical CSS.
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')

// TODO: no production domain has been confirmed yet (see docs/CONTENT_TODO.md).
// Once it is, add a `redirects()` entry here forcing the canonical host, the same
// way Concilium's next.config.ts does it — a `has: [{ type: 'host', value: '<apex>' }]`
// rule redirecting to `https://www.<domain>/:path*`.

const nextConfig: NextConfig = {
  trailingSlash: false,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Content-Security-Policy', value: CONTENT_SECURITY_POLICY },
        ],
      },
    ]
  },
}

export default nextConfig
