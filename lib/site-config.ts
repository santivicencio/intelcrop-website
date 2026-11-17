// `||` (not `??`) so a var that's set-but-empty in a deploy platform's dashboard
// falls back safely too, instead of producing an unparseable empty URL at build time.
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'http://localhost:3000'

/** Strip a trailing slash so every consumer can safely append a leading-slash path. */
export const siteUrl = rawSiteUrl.replace(/\/$/, '')

/**
 * Where the contact form POSTs. Any endpoint that accepts a JSON POST and answers
 * 2xx works (Formspree, FormSubmit, Getform, Basin, a webhook) — configure it to
 * deliver to `contactEmail`. Unset = the form opens the visitor's email app with a
 * message pre-addressed to `contactEmail` instead, so a lead is never silently lost.
 */
export const contactFormEndpoint =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim() || ''

export const siteConfig = {
  name: 'InteliCrop',
  legalName: 'InteliCrop',
  tagline: 'AI para el agro.',
  url: siteUrl,
  displayUrl: 'www.intelicrop.com',
  /** Every inbound message (form, mailto links) goes here. */
  contactEmail: 'comercial@intelicrop.com',
  phones: ['+593 99 988 7111', '+593 99 841 5959'],
  whatsappNumber: '', // TODO: confirm which number (if any) is the WhatsApp line
  linkedinUrl: '', // TODO: confirm company page — manual suggests @intelicrop
  themeColor: '#0B3B45',
} as const

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export function telLink(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}
