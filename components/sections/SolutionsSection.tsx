import {
  ClipboardCheck,
  Smartphone,
  Activity,
  CloudSun,
  Presentation,
  ChartColumnIncreasing,
  Scan,
  Leaf,
  Droplets,
  Bug,
  TrendingUp,
  Wheat,
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

const SOLUTION_ICONS: LucideIcon[] = [
  ClipboardCheck,
  Smartphone,
  Activity,
  CloudSun,
  Presentation,
  ChartColumnIncreasing,
]
const MODEL_ICONS: LucideIcon[] = [Scan, Leaf, Droplets, Bug, Wheat, TrendingUp]

export function SolutionsSection({ dictionary }: { dictionary: Dictionary }) {
  const { solutions } = dictionary
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

      <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solutions.items.map((item, index) => (
          <RevealOnScroll
            as="li"
            key={item.name}
            delay={(index % 3) * 0.06}
            className="flex flex-col rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-start justify-between">
              <HexIcon icon={SOLUTION_ICONS[index]} />
              <span className="font-mono text-2xl font-bold text-ocre-accesible">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="mt-6 text-h4 font-bold">{item.name}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-gris-texto">
              {item.body}
            </p>
          </RevealOnScroll>
        ))}
      </ol>

      <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14">
        <div>
          <Kicker>{solutions.modelsKicker}</Kicker>
          <h3 className="mt-4 text-h3 leading-tight font-extrabold">
            {solutions.modelsHeading}
          </h3>
          <p className="mt-4 text-gris-texto italic">{solutions.modelsNote}</p>
          <ButtonLink href={contactHref} className="mt-8">
            {solutions.cta}
          </ButtonLink>
        </div>
        <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {solutions.models.map((model, index) => (
            <li key={model.name} className="flex gap-4">
              <HexIcon icon={MODEL_ICONS[index]} tone="solid" size={44} />
              <div>
                <p className="font-bold text-tinta">{model.name}</p>
                <p className="mt-1 text-sm text-gris-texto">{model.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
