import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/types'
import type { Service } from '@/content/services'

/** Apple-style local nav: sticky bar under the global header, with the product name and a CTA. */
export function ServiceLocalNav({
  locale,
  service,
  dictionary,
}: {
  locale: Locale
  service: Service
  dictionary: Dictionary
}) {
  return (
    <div className="sticky top-[63px] z-40 border-b border-borde/60 bg-crema/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-5 py-2.5 md:px-10 lg:px-20">
        <nav aria-label={dictionary.a11y.breadcrumb} className="min-w-0">
          <ol className="flex items-center gap-1.5 text-sm">
            <li className="hidden sm:block">
              <Link
                href={`/${locale}#soluciones`}
                className="text-gris-texto hover:text-tinta"
              >
                {dictionary.servicePage.solutions}
              </Link>
            </li>
            <li aria-hidden="true" className="hidden text-gris sm:block">
              <ChevronRight size={14} />
            </li>
            <li
              className="truncate text-base font-extrabold text-tinta"
              aria-current="page"
            >
              {service.name}
            </li>
          </ol>
        </nav>
        <a
          href="#contacto"
          className="inline-flex min-h-9 shrink-0 items-center rounded-full bg-teal-accesible px-4 text-sm font-extrabold text-white transition-colors hover:bg-tinta"
        >
          {dictionary.servicePage.requestDemo}
        </a>
      </div>
    </div>
  )
}
