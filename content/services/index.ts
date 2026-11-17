import type { Locale } from '@/lib/i18n/config'
import { servicesEn } from './en'
import { servicesEs } from './es'
import type { Service, ServiceSlug } from './types'

export * from './types'

const servicesByLocale: Record<Locale, Service[]> = { es: servicesEs, en: servicesEn }

export function getServices(locale: Locale): Service[] {
  return servicesByLocale[locale]
}

export function getService(locale: Locale, slug: ServiceSlug): Service | undefined {
  return servicesByLocale[locale].find((service) => service.slug === slug)
}

export function servicePath(locale: Locale, slug: ServiceSlug): string {
  return `/${locale}/soluciones/${slug}`
}
