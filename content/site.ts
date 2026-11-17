/**
 * Structural data only: anchors and navigation order. All display text lives in
 * the i18n dictionaries.
 */

export const navigation = [
  { key: 'soluciones', href: '#soluciones' },
  { key: 'paraIfis', href: '#para-ifis' },
  { key: 'agroindustria', href: '#agroindustria' },
  { key: 'sostenibilidad', href: '#sostenibilidad' },
  { key: 'nosotros', href: '#nosotros' },
] as const

export type NavKey = (typeof navigation)[number]['key']

export const contactHref = '#contacto'
