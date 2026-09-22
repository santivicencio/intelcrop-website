import type { Dictionary } from '@/lib/i18n/types'
import { Section } from '@/components/layout/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

export function SustainabilitySection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <Section surface="field" id="sostenibilidad">
      <RevealOnScroll>
        <Eyebrow surface="field">{dictionary.sustainability.eyebrow}</Eyebrow>
        <h2 className="text-h1 max-w-3xl font-medium tracking-[-0.03em] text-canopy">
          {dictionary.sustainability.heading}
        </h2>
      </RevealOnScroll>

      <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
        {dictionary.sustainability.items.map((item, index) => (
          <RevealOnScroll
            key={item.name}
            delay={index * 0.06}
            className="border-t border-field-warm pt-6"
          >
            <h3 className="text-h3 font-medium text-canopy">{item.name}</h3>
            <p className="mt-2 text-sm leading-[1.6] text-slate">{item.description}</p>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.2} className="mt-10">
        <p className="text-xs text-slate italic">
          {/* TODO: contenido pendiente de validación — mapeo de ODS */}
          {dictionary.sustainability.odsNote}
        </p>
      </RevealOnScroll>
    </Section>
  )
}
