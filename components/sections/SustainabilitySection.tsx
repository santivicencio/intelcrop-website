import {
  Sprout,
  Footprints,
  Trees,
  Droplets,
  Layers,
  Recycle,
  FlaskConical,
  type LucideIcon,
} from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/types'
import { contactHref } from '@/content/site'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { HexIcon } from '@/components/ui/HexIcon'
import { Kicker } from '@/components/ui/Kicker'
import { ButtonLink } from '@/components/ui/Button'

const PRACTICE_ICONS: LucideIcon[] = [
  Sprout,
  Footprints,
  Trees,
  Droplets,
  Layers,
  Recycle,
  FlaskConical,
]

export function SustainabilitySection({ dictionary }: { dictionary: Dictionary }) {
  const { sustainability } = dictionary
  return (
    <Section id="sostenibilidad" surface="menta" ariaLabelledBy="sustainability-heading">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="sustainability-heading"
            kicker={sustainability.kicker}
            subcopy={sustainability.subcopy}
          >
            {sustainability.heading}
          </SectionHeading>
          <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {sustainability.practices.map((practice, index) => (
              <li key={practice} className="flex items-center gap-4">
                <HexIcon icon={PRACTICE_ICONS[index]} size={44} />
                <span className="font-semibold text-tinta">{practice}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          data-surface="dark"
          className="flex flex-col rounded-[var(--radius-card)] bg-tinta p-8 text-menta md:p-10"
        >
          <Kicker tone="dark">{sustainability.odsKicker}</Kicker>
          <p className="mt-4 text-xl leading-snug font-semibold text-white">
            {sustainability.odsBody}
          </p>
          <ul className="mt-8 flex flex-col gap-3">
            {sustainability.ods.map((goal) => (
              <li key={goal.number} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 font-mono font-bold text-teal-luz">
                  {goal.number}
                </span>
                <span>{goal.name}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-white/10 pt-6 text-[15px]">
            {sustainability.eudr}
          </p>
          <ButtonLink href={contactHref} variant="accent" className="mt-8 self-start">
            {sustainability.cta}
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
