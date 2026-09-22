import type { Dictionary } from '@/lib/i18n/types'
import { Section } from '@/components/layout/Section'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

export function WhyIntelCropSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <Section surface="canopy" id="por-que">
      <div className="flex flex-col gap-6">
        {dictionary.whyIntelCrop.statements.map((statement, index) => (
          <RevealOnScroll key={statement} delay={index * 0.15}>
            <p className="text-h1 max-w-4xl font-medium tracking-[-0.03em] text-field">
              {statement}
            </p>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll
        delay={0.55}
        className="mt-20 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-4"
      >
        {dictionary.whyIntelCrop.equationParts.map((part) => (
          <span
            key={part}
            className="text-h1 sm:text-display font-medium tracking-[-0.03em] text-field"
          >
            {part}
          </span>
        ))}
        <span className="text-h1 sm:text-display font-medium tracking-[-0.03em] text-teal-bright">
          {dictionary.whyIntelCrop.equationResult}
        </span>
      </RevealOnScroll>
    </Section>
  )
}
