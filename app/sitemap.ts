import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n/config'
import { absoluteUrl } from '@/lib/site-config'
import { serviceSlugs, servicePath } from '@/content/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const home = locales.map((locale) => ({
    url: absoluteUrl(`/${locale}`),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, absoluteUrl(`/${l}`)])),
    },
  }))

  const services = locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({
      url: absoluteUrl(servicePath(locale, slug)),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, absoluteUrl(servicePath(l, slug))])
        ),
      },
    }))
  )

  return [...home, ...services]
}
