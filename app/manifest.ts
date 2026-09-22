import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.descriptor,
    start_url: '/es',
    display: 'standalone',
    background_color: siteConfig.themeColor,
    theme_color: siteConfig.themeColor,
    icons: [{ src: '/icon.svg', type: 'image/svg+xml', sizes: 'any' }],
  }
}
