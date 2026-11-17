'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { contactHref, navigation, type NavKey } from '@/content/site'
import { locales, type Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/types'
import { cn } from '@/lib/utils/cn'
import { Logo } from '@/components/ui/Logo'
import { ButtonLink } from '@/components/ui/Button'

export function Header({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: Dictionary
}) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLabels: Record<NavKey, string> = {
    soluciones: dictionary.nav.soluciones,
    paraIfis: dictionary.nav.paraIfis,
    agroindustria: dictionary.nav.agroindustria,
    sostenibilidad: dictionary.nav.sostenibilidad,
    nosotros: dictionary.nav.nosotros,
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200 ease-[var(--ease-entry)]',
        scrolled || menuOpen
          ? 'border-borde/60 bg-crema/95 shadow-[0_4px_20px_rgba(11,59,69,0.06)] backdrop-blur'
          : 'border-transparent bg-crema/0'
      )}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-5 py-3.5 md:px-10 lg:px-20">
        <Link
          href={`/${locale}`}
          aria-label={dictionary.a11y.homeLink}
          className="shrink-0"
        >
          <Logo height={34} preload alt="" />
        </Link>

        <nav aria-label={dictionary.a11y.primaryNav} className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="text-[15px] font-semibold text-tinta transition-colors hover:text-teal-accesible"
                >
                  {navLabels[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <LocaleSwitch locale={locale} dictionary={dictionary} />
          <div className="hidden md:block">
            <ButtonLink href={contactHref} className="min-h-11 px-6 py-2.5">
              {dictionary.nav.demo}
            </ButtonLink>
          </div>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-tinta lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {menuOpen ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
            </span>
            {menuOpen ? (
              <X aria-hidden="true" size={24} />
            ) : (
              <Menu aria-hidden="true" size={24} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label={dictionary.a11y.primaryNav}
          className="border-t border-borde/60 bg-crema px-5 pt-4 pb-8 md:px-10 lg:hidden"
        >
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="block py-3 text-lg font-semibold text-tinta"
                  onClick={() => setMenuOpen(false)}
                >
                  {navLabels[item.key]}
                </a>
              </li>
            ))}
          </ul>
          <div onClick={() => setMenuOpen(false)} className="mt-6">
            <ButtonLink href={contactHref} className="w-full">
              {dictionary.nav.demo}
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  )
}

function LocaleSwitch({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: Dictionary
}) {
  const pathname = usePathname() ?? `/${locale}`
  const segments = pathname.split('/')

  return (
    <div
      role="group"
      aria-label={dictionary.a11y.languageSwitcherLabel}
      className="flex items-center text-sm font-bold"
    >
      {locales.map((candidate, index) => {
        const targetSegments = [...segments]
        targetSegments[1] = candidate
        const href = targetSegments.join('/') || `/${candidate}`
        const active = candidate === locale

        return (
          <span key={candidate} className="flex items-center">
            {index > 0 && (
              <span aria-hidden="true" className="text-gris">
                /
              </span>
            )}
            <Link
              href={href}
              hrefLang={candidate}
              aria-current={active ? 'true' : undefined}
              className={cn(
                'inline-flex min-h-11 items-center px-1.5 transition-colors',
                active ? 'text-teal-accesible' : 'text-gris-texto hover:text-tinta'
              )}
            >
              {dictionary.languageSwitch[candidate]}
            </Link>
          </span>
        )
      })}
    </div>
  )
}
