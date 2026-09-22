import { navigation, type NavKey } from '@/content/site'
import { siteConfig } from '@/lib/site-config'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/types'

export function Footer({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: Dictionary
}) {
  const year = new Date().getFullYear()

  const navLabels: Record<NavKey, string> = {
    comoFunciona: dictionary.nav.comoFunciona,
    soluciones: dictionary.nav.soluciones,
    paraQuien: dictionary.nav.paraQuien,
    observatorio: dictionary.nav.observatorio,
    nosotros: dictionary.nav.nosotros,
  }

  return (
    <footer data-surface="dark" className="bg-canopy text-field">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 px-5 py-16 md:px-12 lg:px-20 2xl:px-[120px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.04em] text-field">
              IntelCrop
            </p>
            <p className="mt-1 text-xs text-mist">{siteConfig.descriptor}</p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-mist"
          >
            {navigation.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="min-h-11 py-2 hover:text-field"
              >
                {navLabels[item.key]}
              </a>
            ))}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="min-h-11 py-2 hover:text-field"
            >
              {siteConfig.contactEmail}
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="min-h-11 py-2 hover:text-field"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-canopy-soft pt-6 text-xs text-mist md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.legalName}. {dictionary.footer.copyrightSuffix}
          </p>
          <div className="flex gap-6">
            <a href={`/${locale}/legal`} className="min-h-11 py-2 hover:text-field">
              {dictionary.footer.legalLabel}
            </a>
            <a href={`/${locale}/privacy`} className="min-h-11 py-2 hover:text-field">
              {dictionary.footer.privacyLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
