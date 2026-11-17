import type { NextConfig } from 'next'

// No third-party scripts, styles, fonts or embeds are loaded (next/font self-hosts
// Manrope and JetBrains Mono; ImageResponse renders OG images server-side), so the
// CSP stays tight. The one exception is the contact form's optional endpoint
// (NEXT_PUBLIC_CONTACT_FORM_ENDPOINT, inlined at build time): its origin is added
// to connect-src so the browser may POST to it. 'unsafe-inline' on script/style
// is required by Next's own hydration and inlined critical CSS.
function contactFormOrigin(): string {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim()
  if (!endpoint) return ''
  try {
    return new URL(endpoint).origin
  } catch {
    return ''
  }
}

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self' ${contactFormOrigin()}`.trim(),
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
].join('; ')

const APEX_HOST = 'intelicrop.com'
const CANONICAL_HOST = 'www.intelicrop.com'

const nextConfig: NextConfig = {
  trailingSlash: false,

  images: {
    qualities: [75],
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: APEX_HOST }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      },
    ]
  },

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
