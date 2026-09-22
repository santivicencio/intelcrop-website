import type { Dictionary } from '@/lib/i18n/types'
import { creditStageIds } from '@/content/site'
import { Section } from '@/components/layout/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { NumberMark } from '@/components/ui/NumberMark'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

export function CreditSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <Section surface="field" id="credito">
      <RevealOnScroll>
        <Eyebrow surface="field">{dictionary.credit.eyebrow}</Eyebrow>
        <h2 className="text-h1 max-w-3xl font-medium tracking-[-0.03em] text-canopy">
          {dictionary.credit.heading}
        </h2>
        <p className="text-body-lg mt-6 max-w-[48ch] text-slate">
          {dictionary.credit.supportingLine}
        </p>
      </RevealOnScroll>

      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {creditStageIds.map((id, index) => (
          <RevealOnScroll
            key={id}
            delay={index * 0.08}
            className="border-t border-field-warm pt-6"
          >
            <NumberMark
              value={String(index + 1).padStart(2, '0')}
              className="text-2xl text-teal-deep"
            />
            <h3 className="text-h3 mt-3 font-medium text-canopy">
              {dictionary.credit.stages[id].name}
            </h3>
            <p className="mt-2 text-sm leading-[1.6] text-slate">
              {dictionary.credit.stages[id].description}
            </p>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  )
}
