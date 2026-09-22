import type { Dictionary } from '@/lib/i18n/types'
import { Section } from '@/components/layout/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

export function ObservatorySection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <Section surface="field" id="observatorio">
      <RevealOnScroll>
        <Eyebrow surface="field">{dictionary.observatory.eyebrow}</Eyebrow>
        <h2 className="text-h1 max-w-3xl font-medium tracking-[-0.03em] text-canopy">
          {dictionary.observatory.heading}
        </h2>
        <p className="mt-4 text-sm text-slate italic">
          {/* TODO: contenido pendiente de validación — ver docs/CONTENT_TODO.md */}
          {dictionary.observatory.placeholderNote}
        </p>
      </RevealOnScroll>

      <div className="mt-16 grid grid-cols-1 gap-10 border-t border-field-warm sm:grid-cols-3 sm:gap-12">
        {dictionary.observatory.items.map((item, index) => (
          <RevealOnScroll
            key={`${item.category}-${index}`}
            delay={index * 0.08}
            className="border-b border-field-warm pt-8 pb-8 sm:border-b-0"
          >
            <p className="tabular-nums text-xs text-slate">{item.date}</p>
            <p className="mt-3 font-mono text-xs font-medium tracking-[0.14em] text-teal-deep uppercase">
              {item.category}
            </p>
            <p className="text-h3 mt-3 font-medium text-canopy">{item.title}</p>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  )
}
