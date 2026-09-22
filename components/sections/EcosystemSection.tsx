import type { Dictionary } from '@/lib/i18n/types'
import { Section } from '@/components/layout/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { EcosystemMap } from './EcosystemMap'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

export function EcosystemSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <Section surface="canopy" id="como-funciona">
      <RevealOnScroll className="text-center">
        <Eyebrow surface="canopy">{dictionary.ecosystem.eyebrow}</Eyebrow>
        <h2 className="text-h1 mx-auto max-w-3xl font-medium tracking-[-0.03em] text-field">
          {dictionary.ecosystem.heading}
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1} className="mt-16">
        <EcosystemMap dictionary={dictionary} />
      </RevealOnScroll>
    </Section>
  )
}
