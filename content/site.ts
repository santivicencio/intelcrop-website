/**
 * Structural data only: anchors and navigation order. All display text lives in
 * the i18n dictionaries. Hrefs are home-page anchors, so they are prefixed with
 * the locale (`/${locale}${href}`) to work from service pages too.
 */

export const navigation = [
  { key: 'paraIfis', href: '#para-ifis' },
  { key: 'actores', href: '#actores' },
  { key: 'sostenibilidad', href: '#sostenibilidad' },
  { key: 'nosotros', href: '#nosotros' },
] as const

export type NavKey = (typeof navigation)[number]['key']

export const contactHref = '#contacto'
