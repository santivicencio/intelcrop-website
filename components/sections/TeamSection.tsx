import type { Dictionary } from '@/lib/i18n/types'
import { Section } from '@/components/layout/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

export function TeamSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <Section surface="field" id="nosotros">
      <RevealOnScroll>
        <Eyebrow surface="field">{dictionary.team.eyebrow}</Eyebrow>
        <h2 className="text-h1 max-w-3xl font-medium tracking-[-0.03em] text-canopy">
          {dictionary.team.heading}
        </h2>
        {/* TODO: contenido pendiente de validación — liderazgo y logos de alianzas con autorización */}
        <p className="mt-6 max-w-[62ch] text-base leading-[1.65] text-slate">
          {dictionary.team.body}
        </p>
      </RevealOnScroll>
    </Section>
  )
}
