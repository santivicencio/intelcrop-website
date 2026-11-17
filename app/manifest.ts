import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.tagline,
    start_url: '/es',
    display: 'standalone',
    background_color: '#F8F5EE',
    theme_color: siteConfig.themeColor,
    icons: [
      { src: '/icon.png', type: 'image/png', sizes: '192x192' },
      { src: '/brand/intelicrop-app-icon.png', type: 'image/png', sizes: '512x512' },
    ],
  }
}
