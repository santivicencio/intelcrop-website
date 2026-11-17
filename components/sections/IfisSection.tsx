import { Binoculars, FileText, Satellite, HandCoins, type LucideIcon } from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/types'
import type { Locale } from '@/lib/i18n/config'
import { servicePath } from '@/content/services'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { HexIcon } from '@/components/ui/HexIcon'
import { ButtonLink } from '@/components/ui/Button'
import { SatelliteGrid } from '@/components/decor/SatelliteGrid'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

const STAGE_ICONS: LucideIcon[] = [Binoculars, FileText, Satellite, HandCoins]

export function IfisSection({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: Dictionary
}) {
  const { ifis } = dictionary
  return (
    <Section
      id="para-ifis"
      surface="tinta"
      ariaLabelledBy="ifis-heading"
      decor={<SatelliteGrid />}
    >
      <SectionHeading
        id="ifis-heading"
        kicker={ifis.kicker}
        subcopy={ifis.subcopy}
        tone="dark"
      >
        {ifis.heading}
      </SectionHeading>

      <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {ifis.stages.map((stage, index) => (
          <RevealOnScroll
            as="li"
            key={stage.name}
            delay={index * 0.08}
            className="flex flex-col rounded-[var(--radius-card)] border border-t-4 border-teal-luz/30 border-t-teal-luz bg-white/5 p-7"
          >
            <div className="flex items-center gap-4">
              <HexIcon icon={STAGE_ICONS[index]} tone="dark" size={48} />
              <h3 className="text-h4 font-bold">{stage.name}</h3>
            </div>
            <p className="mt-6 font-bold text-teal-luz">{stage.lead}</p>
            <p className="mt-4 border-t border-white/10 pt-4 text-[15px]">{stage.body}</p>
          </RevealOnScroll>
        ))}
      </ol>

      <p className="mt-8 rounded-2xl border-l-4 border-ocre-sol bg-white/5 px-6 py-5 text-[15px]">
        <strong className="text-ocre-sol">{ifis.callout}</strong> {ifis.calloutBody}
      </p>
      <ButtonLink
        href={servicePath(locale, 'score-agroclimatico')}
        variant="accent"
        className="mt-10"
      >
        {ifis.cta}
      </ButtonLink>
    </Section>
  )
}
