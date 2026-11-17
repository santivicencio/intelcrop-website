import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/types'
import type { Locale } from '@/lib/i18n/config'
import { getServices, servicePath } from '@/content/services'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { HexIcon } from '@/components/ui/HexIcon'
import { icons } from '@/components/ui/icons'
import { ContourLines } from '@/components/decor/ContourLines'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

/**
 * Apple-style product grid: one large tile per solution, alternating dark and
 * light in a checkerboard, each leading to its own page.
 */
export function SolutionsSection({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: Dictionary
}) {
  const { solutions } = dictionary
  const services = getServices(locale)

  return (
    <Section id="soluciones" surface="crema" ariaLabelledBy="solutions-heading">
      <SectionHeading
        id="solutions-heading"
        kicker={solutions.kicker}
        subcopy={solutions.subcopy}
      >
        {solutions.headingStart}{' '}
        <span className="text-teal-titulo">{solutions.headingAccent}</span>
      </SectionHeading>

      <ul className="mt-14 grid gap-4 md:grid-cols-2">
        {services.map((service, index) => {
          const mobileDark = index % 2 === 0
          const desktopDark =
            Math.floor(index / 2) % 2 === 0 ? index % 2 === 0 : index % 2 === 1
          const Icon = icons[service.icon]
          return (
            <RevealOnScroll as="li" key={service.slug} delay={(index % 2) * 0.06}>
              <div
                data-tile
                data-mobile={mobileDark ? 'dark' : 'light'}
                data-desktop={desktopDark ? 'dark' : 'light'}
                className="group relative isolate flex h-full min-h-[380px] flex-col items-center overflow-hidden rounded-[var(--radius-card)] bg-[var(--tile-bg)] px-8 pt-12 pb-10 text-center shadow-[var(--tile-shadow)] md:min-h-[440px]"
              >
                <div className="absolute inset-0 -z-10 opacity-[var(--tile-decor)]">
                  <ContourLines tone="dark" className="inset-0 h-full w-full" />
                </div>
                <p className="font-mono text-sm font-bold text-[var(--tile-num)]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] leading-tight font-extrabold tracking-[-0.02em]">
                  {service.name}
                </h3>
                <p className="mt-3 max-w-md text-lg text-[var(--tile-muted)]">
                  {service.short}
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[15px] font-bold">
                  <Link
                    href={servicePath(locale, service.slug)}
                    className="inline-flex min-h-11 items-center gap-1 text-[var(--tile-link)] hover:underline"
                  >
                    {solutions.learnMore}
                    <span className="sr-only">: {service.name}</span>
                    <ChevronRight aria-hidden="true" size={18} />
                  </Link>
                  <Link
                    href={`${servicePath(locale, service.slug)}#contacto`}
                    className="inline-flex min-h-11 items-center gap-1 text-[var(--tile-link-2)] hover:underline"
                  >
                    {solutions.requestDemo}
                    <span className="sr-only">: {service.name}</span>
                    <ChevronRight aria-hidden="true" size={18} />
                  </Link>
                </div>
                <div className="mt-auto pt-10 transition-transform duration-500 ease-[var(--ease-entry)] group-hover:-translate-y-1">
                  <HexIcon icon={Icon} tone="tile" size={112} />
                </div>
              </div>
            </RevealOnScroll>
          )
        })}
      </ul>
    </Section>
  )
}
