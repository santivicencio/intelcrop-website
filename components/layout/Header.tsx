'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation, type NavKey } from '@/content/site'
import { locales, type Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/types'
import { cn } from '@/lib/utils/cn'
import { TextLink } from '@/components/ui/Button'

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
      setScrolled(window.scrollY > 80)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLabels: Record<NavKey, string> = {
    comoFunciona: dictionary.nav.comoFunciona,
    soluciones: dictionary.nav.soluciones,
    paraQuien: dictionary.nav.paraQuien,
    observatorio: dictionary.nav.observatorio,
    nosotros: dictionary.nav.nosotros,
  }

  return (
    <header
      data-surface="dark"
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-200 ease-[var(--ease-entry)]',
        scrolled || menuOpen ? 'bg-canopy' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-5 py-5 md:px-12 lg:px-20 2xl:px-[120px]">
        <Link
          href={`/${locale}`}
          className="text-sm font-semibold tracking-[0.04em] text-field"
        >
          IntelCrop
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm text-mist transition-colors duration-[180ms] hover:text-field"
            >
              {navLabels[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <LocaleSwitch locale={locale} dictionary={dictionary} />
          <TextLink
            href="#final-cta"
            className="hidden text-field decoration-teal-bright md:inline-flex"
          >
            {dictionary.nav.hablemos}
          </TextLink>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-field md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  d="M4 4L16 16M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2 5H18M2 10H18M2 15H18"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-canopy-soft bg-canopy px-5 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-5">
            {navigation.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="block min-h-11 text-base text-field"
                  onClick={() => setMenuOpen(false)}
                >
                  {navLabels[item.key]}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#final-cta"
                className="block min-h-11 text-base text-teal-bright"
                onClick={() => setMenuOpen(false)}
              >
                {dictionary.nav.hablemos}
              </a>
            </li>
          </ul>
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
      className="flex items-center gap-1 text-sm"
    >
      {locales.map((candidate, index) => {
        const targetSegments = [...segments]
        targetSegments[1] = candidate
        const href = targetSegments.join('/') || `/${candidate}`
        const active = candidate === locale

        return (
          <span key={candidate} className="flex items-center">
            {index > 0 && <span className="mx-1 text-mist">/</span>}
            <Link
              href={href}
              aria-current={active ? 'true' : undefined}
              className={cn(
                'min-h-11 px-1 py-2 transition-colors duration-[180ms]',
                active ? 'text-teal-bright' : 'text-mist hover:text-field'
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
