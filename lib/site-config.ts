// `||` (not `??`) so a var that's set-but-empty in a deploy platform's dashboard
// falls back safely too, instead of producing an unparseable empty URL at build time.
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'http://localhost:3000'

/** Strip a trailing slash so every consumer can safely append a leading-slash path. */
export const siteUrl = rawSiteUrl.replace(/\/$/, '')

export const siteConfig = {
  name: 'IntelCrop',
  legalName: 'IntelCrop',
  descriptor: 'Digitalización | Inteligencia Agrícola | Agrofinanzas',
  url: siteUrl,
  contactEmail: 'contacto@intelicrop.com',
  whatsappNumber: '', // TODO: confirm producer-facing WhatsApp number
  linkedinUrl: 'https://www.linkedin.com/company/intelcrop',
  themeColor: '#0B3B2E',
} as const

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export function whatsappLink(prefilledMessage: string): string {
  const digits = siteConfig.whatsappNumber.replace(/[^\d]/g, '')
  const text = encodeURIComponent(prefilledMessage)
  return digits ? `https://wa.me/${digits}?text=${text}` : '#'
}
