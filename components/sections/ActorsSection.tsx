import {
  Sprout,
  Tractor,
  Bug,
  Bell,
  CalendarDays,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/types'
import { contactHref } from '@/content/site'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { HexIcon } from '@/components/ui/HexIcon'
import { Kicker } from '@/components/ui/Kicker'
import { ButtonLink } from '@/components/ui/Button'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

const FRONT_ICONS: LucideIcon[] = [
  Sprout,
  Tractor,
  Bug,
  Bell,
  CalendarDays,
  GraduationCap,
]

export function ActorsSection({ dictionary }: { dictionary: Dictionary }) {
  const { actors } = dictionary
  return (
    <Section id="agroindustria" surface="crema" ariaLabelledBy="actors-heading">
      <SectionHeading id="actors-heading" kicker={actors.kicker} subcopy={actors.subcopy}>
        {actors.heading}
      </SectionHeading>

      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {actors.items.map((item, index) => (
          <RevealOnScroll
            as="li"
            key={item.name}
            delay={index * 0.06}
            className="flex flex-col rounded-[var(--radius-card)] border border-borde bg-white p-7"
          >
            <h3 className="text-h4 leading-snug font-bold lg:min-h-[3.2em]">
              {item.name}
            </h3>
            <p className="mt-5 text-xs font-bold tracking-[0.25em] text-ocre-accesible uppercase">
              {actors.painLabel}
            </p>
            <p className="mt-2 text-tinta">{item.pain}</p>
            <p className="mt-6 text-xs font-bold tracking-[0.25em] text-teal-accesible uppercase">
              {actors.deliverLabel}
            </p>
            <p className="mt-2 text-[15px] text-gris-texto">{item.deliver}</p>
            <div className="mt-auto pt-6">
              <div className="border-t border-borde pt-5">
                <p className="font-mono text-3xl font-bold text-teal-accesible">
                  {item.metric}
                </p>
                <p className="mt-1 text-sm text-gris-texto">{item.metricLabel}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </ul>

      <div className="mt-20">
        <Kicker>{actors.fronts.kicker}</Kicker>
        <h3 className="mt-4 text-h3 leading-tight font-extrabold">
          {actors.fronts.heading}
        </h3>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {actors.fronts.items.map((item, index) => (
            <li
              key={item.name}
              className="flex gap-5 rounded-[var(--radius-card)] border-t-4 border-teal-accesible bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <HexIcon icon={FRONT_ICONS[index]} tone="solid" size={48} />
              <div>
                <p className="text-h4 font-bold text-teal-accesible">{item.name}</p>
                <p className="mt-2 text-[15px] text-gris-texto">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <ButtonLink href={contactHref} variant="secondary" className="mt-10">
          {actors.cta}
        </ButtonLink>
      </div>
    </Section>
  )
}
