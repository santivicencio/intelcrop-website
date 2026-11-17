import type { Metadata, Viewport } from 'next'
import { Manrope, JetBrains_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { locales, isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { absoluteUrl, siteConfig, siteUrl } from '@/lib/site-config'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import '../globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type LocaleParams = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) return {}
  const locale = rawLocale
  const dictionary = await getDictionary(locale)

  return {
    metadataBase: new URL(siteUrl),
    title: {
      template: `%s | ${siteConfig.name}`,
      default: dictionary.meta.title,
    },
    description: dictionary.meta.description,
    keywords: dictionary.meta.keywords,
    alternates: {
      canonical: absoluteUrl(`/${locale}`),
      languages: {
        'es-EC': absoluteUrl('/es'),
        'en-US': absoluteUrl('/en'),
        'x-default': absoluteUrl('/es'),
      },
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      url: absoluteUrl(`/${locale}`),
      locale: locale === 'es' ? 'es_EC' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.meta.title,
      description: dictionary.meta.description,
    },
    robots: { index: true, follow: true },
  }
}

export default async function RootLayout({
  children,
  params,
}: { children: ReactNode } & LocaleParams) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale = rawLocale
  const dictionary = await getDictionary(locale)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: siteConfig.name,
    description: dictionary.meta.description,
    url: absoluteUrl(`/${locale}`),
    logo: absoluteUrl('/brand/intelicrop-app-icon.png'),
    email: siteConfig.contactEmail,
    telephone: siteConfig.phones[0],
    slogan: siteConfig.tagline,
    areaServed: ['Ecuador', 'Latin America'],
    knowsAbout: dictionary.solutions.items.map((item) => item.name),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: siteConfig.contactEmail,
      telephone: siteConfig.phones[0],
      availableLanguage: ['es', 'en'],
    },
  }

  return (
    <html lang={locale} className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-crema font-sans text-texto antialiased">
        {/* Without JS, framer-motion never runs, so its inline initial (opacity: 0) styles
            would otherwise persist forever — this keeps the site readable per WCAG. */}
        <noscript>
          <style>
            {'.reveal-on-scroll { opacity: 1 !important; transform: none !important; }'}
          </style>
        </noscript>
        <LazyMotion features={domAnimation} strict>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-tinta focus:px-5 focus:py-2.5 focus:text-white"
          >
            {dictionary.a11y.skipToContent}
          </a>
          <Header locale={locale} dictionary={dictionary} />
          <main id="main-content">{children}</main>
          <Footer locale={locale} dictionary={dictionary} />
        </LazyMotion>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
