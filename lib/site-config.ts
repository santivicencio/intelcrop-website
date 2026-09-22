const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

/** Strip a trailing slash so every consumer can safely append a leading-slash path. */
export const siteUrl = rawSiteUrl.replace(/\/$/, '')

/**
 * NOTE: no production domain was specified in the brand brief (unlike Concilium's
 * conciliumsavc.com). `intelcrop.com` here is a placeholder — confirm the real
 * domain and update NEXT_PUBLIC_SITE_URL before launch. See docs/CONTENT_TODO.md.
 */
export const siteConfig = {
  name: 'IntelCrop',
  legalName: 'IntelCrop',
  descriptor: 'Digitalización | Inteligencia Agrícola | Agrofinanzas',
  url: siteUrl,
  contactEmail: 'contacto@intelcrop.com',
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
