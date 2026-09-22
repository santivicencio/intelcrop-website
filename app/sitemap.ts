import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n/config'
import { absoluteUrl } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, absoluteUrl(`/${locale}`)])
  )

  return locales.map((locale) => ({
    url: absoluteUrl(`/${locale}`),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
    alternates: { languages },
  }))
}
