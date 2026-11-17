import {
  Satellite,
  CloudSunRain,
  Tractor,
  Database,
  Sprout,
  Gauge,
  GraduationCap,
  Workflow,
  Landmark,
  ShieldCheck,
  Factory,
  Ship,
  Building2,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/types'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { HexIcon } from '@/components/ui/HexIcon'
import { Kicker } from '@/components/ui/Kicker'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

const SOURCE_ICONS: LucideIcon[] = [Satellite, CloudSunRain, Tractor, Database, Sprout]
const CORE_ICONS: LucideIcon[] = [Gauge, GraduationCap, Workflow]
const ACTOR_ICONS: LucideIcon[] = [
  Landmark,
  ShieldCheck,
  Factory,
  Ship,
  Building2,
  Smartphone,
]

/** Manual §2.5 "Conector de circuito": dotted Teal line joining process steps. */
function Connector() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center py-2 lg:py-0">
      <svg viewBox="0 0 60 24" className="h-6 w-12 rotate-90 lg:rotate-0">
        <path
          d="M2 12 H50"
          stroke="var(--color-teal)"
          strokeWidth="2.5"
          strokeDasharray="2 6"
          strokeLinecap="round"
        />
        <path d="M48 6 L58 12 L48 18 Z" fill="var(--color-teal)" />
      </svg>
    </div>
  )
}

function Item({
  icon,
  name,
  detail,
}: {
  icon: LucideIcon
  name: string
  detail: string
}) {
  return (
    <li className="flex items-center gap-4">
      <HexIcon icon={icon} size={46} />
      <div>
        <p className="font-bold text-tinta">{name}</p>
        <p className="text-sm text-gris-texto">{detail}</p>
      </div>
    </li>
  )
}

export function HowItWorksSection({ dictionary }: { dictionary: Dictionary }) {
  const { how } = dictionary
  return (
    <Section id="como-funciona" surface="white" ariaLabelledBy="how-heading">
      <SectionHeading id="how-heading" kicker={how.kicker}>
        {how.heading}
      </SectionHeading>

      <div className="mt-14 grid items-stretch gap-2 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr] lg:gap-4">
        <RevealOnScroll className="rounded-[var(--radius-card)] border border-borde bg-crema p-7">
          <Kicker>{how.integrateLabel}</Kicker>
          <ul className="mt-6 flex flex-col gap-5">
            {how.sources.map((source, index) => (
              <Item key={source.name} icon={SOURCE_ICONS[index]} {...source} />
            ))}
          </ul>
        </RevealOnScroll>

        <Connector />

        <RevealOnScroll
          delay={0.1}
          className="flex flex-col rounded-[var(--radius-card)] bg-tinta p-8 text-menta"
        >
          <div data-surface="dark" className="flex h-full flex-col">
            <p className="text-3xl font-extrabold text-white">InteliCrop</p>
            <p className="mt-2 font-bold text-ocre-sol">{how.coreTagline}</p>
            <ul className="mt-8 flex flex-1 flex-col gap-6 border-t border-white/10 pt-8">
              {how.core.map((item, index) => (
                <li key={item.name} className="flex items-center gap-4">
                  <HexIcon icon={CORE_ICONS[index]} tone="dark" size={50} />
                  <div>
                    <p className="text-lg font-bold text-white">{item.name}</p>
                    <p className="text-sm">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-xl bg-white/5 px-4 py-3 text-center text-sm font-bold text-teal-luz">
              {how.coreFooter}
            </p>
          </div>
        </RevealOnScroll>

        <Connector />

        <RevealOnScroll
          delay={0.2}
          className="rounded-[var(--radius-card)] border border-borde bg-crema p-7"
        >
          <Kicker>{how.serveLabel}</Kicker>
          <ul className="mt-6 flex flex-col gap-4">
            {how.actors.map((actor, index) => (
              <Item key={actor.name} icon={ACTOR_ICONS[index]} {...actor} />
            ))}
          </ul>
        </RevealOnScroll>
      </div>

      <p className="mt-12 max-w-3xl text-lg font-semibold text-tinta">{how.closing}</p>
    </Section>
  )
}
