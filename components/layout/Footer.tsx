import Link from 'next/link'
import { Mail, Phone, Globe } from 'lucide-react'
import { getServices, servicePath } from '@/content/services'
import { navigation, type NavKey } from '@/content/site'
import { siteConfig, telLink } from '@/lib/site-config'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/types'
import { Logo } from '@/components/ui/Logo'
import { TerritoryLayers } from '@/components/decor/TerritoryLayers'
import { ContourLines } from '@/components/decor/ContourLines'

export function Footer({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: Dictionary
}) {
  const year = new Date().getFullYear()

  const navLabels: Record<NavKey, string> = {
    paraIfis: dictionary.nav.paraIfis,
    actores: dictionary.nav.actores,
    sostenibilidad: dictionary.nav.sostenibilidad,
    nosotros: dictionary.nav.nosotros,
  }

  return (
    <footer
      data-surface="dark"
      className="relative isolate overflow-hidden bg-tinta text-menta"
    >
      <ContourLines tone="dark" className="-top-1/2 right-[-20%] h-[160%] w-[80%]" />
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-14 pb-10 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1.2fr_0.8fr_1fr]">
          <div>
            <Logo variant="negativo" height={40} alt="InteliCrop" />
            <p className="mt-6 text-xl font-bold text-white">
              <span className="text-ocre-sol">AI</span> {dictionary.footer.brandLineRest}
            </p>
            <p className="mt-1 text-teal-luz">{dictionary.footer.tagline}</p>
            <p className="mt-6 max-w-sm text-sm">{dictionary.about.cropin}</p>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-ocre-sol uppercase">
              {dictionary.nav.soluciones}
            </p>
            <ul className="mt-3 flex flex-col">
              {getServices(locale).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={servicePath(locale, service.slug)}
                    className="inline-flex min-h-10 items-center hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label={dictionary.a11y.footerNav}>
            <p className="text-xs font-bold tracking-[0.3em] text-ocre-sol uppercase">
              InteliCrop
            </p>
            <ul className="mt-3 flex flex-col">
              {navigation.map((item) => (
                <li key={item.key}>
                  <a
                    href={`/${locale}${item.href}`}
                    className="inline-flex min-h-11 items-center hover:text-white"
                  >
                    {navLabels[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex min-h-11 items-center gap-3 font-semibold text-white hover:text-teal-luz"
              >
                <Mail aria-hidden="true" size={18} className="text-teal-luz" />
                {siteConfig.contactEmail}
              </a>
            </li>
            {siteConfig.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={telLink(phone)}
                  className="inline-flex min-h-11 items-center gap-3 tabular-nums hover:text-white"
                >
                  <Phone aria-hidden="true" size={18} className="text-teal-luz" />
                  {phone}
                </a>
              </li>
            ))}
            <li className="inline-flex min-h-11 items-center gap-3">
              <Globe aria-hidden="true" size={18} className="text-teal-luz" />
              {siteConfig.displayUrl}
            </li>
          </ul>
        </div>

        <div className="mx-auto mt-12 max-w-[1280px] border-t border-white/10 pt-6 text-sm">
          <p>
            © {year} {siteConfig.legalName}. {dictionary.footer.rights}
          </p>
        </div>
      </div>
      <TerritoryLayers />
    </footer>
  )
}
