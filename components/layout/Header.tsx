'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { contactHref, navigation, type NavKey } from '@/content/site'
import { servicePath, type Service } from '@/content/services'
import { locales, type Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/types'
import { cn } from '@/lib/utils/cn'
import { Logo } from '@/components/ui/Logo'
import { ButtonLink } from '@/components/ui/Button'
import { HexIcon } from '@/components/ui/HexIcon'
import { icons } from '@/components/ui/icons'

export type MenuService = Pick<Service, 'slug' | 'name' | 'short' | 'icon'>

export function Header({
  locale,
  dictionary,
  services,
}: {
  locale: Locale
  dictionary: Dictionary
  services: MenuService[]
}) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const pathname = usePathname()
  const [lastPathname, setLastPathname] = useState(pathname)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Close menus when the route changes (state adjusted during render, per React docs).
  if (pathname !== lastPathname) {
    setLastPathname(pathname)
    setMenuOpen(false)
    setSolutionsOpen(false)
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSolutionsOpen(false)
        setMenuOpen(false)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  function openSolutions() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setSolutionsOpen(true)
  }

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), 150)
  }

  const navLabels: Record<NavKey, string> = {
    paraIfis: dictionary.nav.paraIfis,
    actores: dictionary.nav.actores,
    sostenibilidad: dictionary.nav.sostenibilidad,
    nosotros: dictionary.nav.nosotros,
  }
  const home = `/${locale}`
  const solid = scrolled || menuOpen || solutionsOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200 ease-[var(--ease-entry)]',
        solid
          ? 'border-borde/60 bg-crema/95 shadow-[0_4px_20px_rgba(11,59,69,0.06)] backdrop-blur'
          : 'border-transparent bg-crema/0'
      )}
      onMouseLeave={scheduleClose}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-5 py-3.5 md:px-10 lg:px-20">
        <Link href={home} aria-label={dictionary.a11y.homeLink} className="shrink-0">
          <Logo height={34} preload alt="" />
        </Link>

        <nav aria-label={dictionary.a11y.primaryNav} className="hidden lg:block">
          <ul className="flex items-center gap-7">
            <li onMouseEnter={openSolutions}>
              <button
                type="button"
                aria-expanded={solutionsOpen}
                aria-controls="solutions-menu"
                onClick={() => setSolutionsOpen((open) => !open)}
                className={cn(
                  'inline-flex items-center gap-1 text-[15px] font-semibold transition-colors hover:text-teal-accesible',
                  solutionsOpen ? 'text-teal-accesible' : 'text-tinta'
                )}
              >
                {dictionary.nav.soluciones}
                <ChevronDown
                  aria-hidden="true"
                  size={16}
                  className={cn('transition-transform', solutionsOpen && 'rotate-180')}
                />
              </button>
            </li>
            {navigation.map((item) => (
              <li key={item.key} onMouseEnter={scheduleClose}>
                <a
                  href={`${home}${item.href}`}
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

      {/* Desktop solutions mega-menu (Apple-style). */}
      <div
        id="solutions-menu"
        role="region"
        aria-label={dictionary.nav.solutionsMenuLabel}
        hidden={!solutionsOpen}
        onMouseEnter={openSolutions}
        className="border-t border-borde/60 bg-crema max-lg:!hidden"
      >
        <div className="mx-auto w-full max-w-[1440px] px-20 pt-8 pb-10">
          <ul className="mx-auto grid max-w-[1280px] grid-cols-4 gap-x-6 gap-y-4">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={servicePath(locale, service.slug)}
                  onClick={() => setSolutionsOpen(false)}
                  className="group flex gap-4 rounded-2xl p-3 transition-colors hover:bg-white"
                >
                  <HexIcon icon={icons[service.icon]} size={40} />
                  <span>
                    <span className="block font-bold text-tinta group-hover:text-teal-accesible">
                      {service.name}
                    </span>
                    <span className="mt-1 block text-sm leading-snug text-gris-texto">
                      {service.short}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-6 max-w-[1280px] border-t border-borde/60 pt-5">
            <a
              href={`${home}#soluciones`}
              onClick={() => setSolutionsOpen(false)}
              className="inline-flex items-center gap-1 text-[15px] font-bold text-teal-accesible hover:underline"
            >
              {dictionary.nav.allSolutions}
              <ChevronRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label={dictionary.a11y.primaryNav}
          className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-borde/60 bg-crema px-5 pt-4 pb-8 md:px-10 lg:hidden"
        >
          <ul className="flex flex-col">
            <li>
              <button
                type="button"
                aria-expanded={mobileSolutionsOpen}
                aria-controls="mobile-solutions"
                onClick={() => setMobileSolutionsOpen((open) => !open)}
                className="flex w-full items-center justify-between py-3 text-lg font-semibold text-tinta"
              >
                {dictionary.nav.soluciones}
                <ChevronDown
                  aria-hidden="true"
                  size={20}
                  className={cn(
                    'transition-transform',
                    mobileSolutionsOpen && 'rotate-180'
                  )}
                />
              </button>
              {mobileSolutionsOpen && (
                <ul
                  id="mobile-solutions"
                  className="mb-2 flex flex-col border-l-2 border-teal pl-4"
                >
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={servicePath(locale, service.slug)}
                        className="block py-2.5 font-semibold text-teal-accesible"
                        onClick={() => setMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {navigation.map((item) => (
              <li key={item.key}>
                <a
                  href={`${home}${item.href}`}
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
