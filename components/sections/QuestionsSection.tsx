import type { Dictionary } from '@/lib/i18n/types'
import { Section } from '@/components/layout/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Rule } from '@/components/ui/Rule'
import { NumberMark } from '@/components/ui/NumberMark'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

export function QuestionsSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <Section surface="field" id="preguntas">
      <RevealOnScroll>
        <Eyebrow surface="field">{dictionary.questions.eyebrow}</Eyebrow>
        <h2 className="text-h1 max-w-3xl font-medium tracking-[-0.03em] text-canopy">
          {dictionary.questions.heading}
        </h2>
      </RevealOnScroll>

      <div className="mt-16">
        <Rule />
        {dictionary.questions.items.map((item, index) => (
          <RevealOnScroll key={item.question} delay={index * 0.06}>
            <div className="flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:gap-10">
              <NumberMark
                value={String(index + 1).padStart(2, '0')}
                className="w-24 shrink-0 text-field-warm"
              />
              <p className="text-h3 min-w-0 font-medium text-canopy lg:w-96 lg:shrink-0">
                {item.question}
              </p>
              <div className="flex min-w-0 flex-1 flex-col gap-2 lg:flex-row lg:items-center lg:gap-8">
                <p className="min-w-0 text-base text-slate">
                  <span className="font-mono text-xs tracking-[0.1em] text-slate uppercase">
                    {dictionary.questions.todayLabel}:{' '}
                  </span>
                  {item.today}
                </p>
                <p className="min-w-0 text-base font-medium text-canopy">
                  <span className="font-mono text-xs tracking-[0.1em] text-teal-deep uppercase">
                    {dictionary.questions.withIntelCropLabel}:{' '}
                  </span>
                  {item.withIntelCrop}
                </p>
              </div>
            </div>
            <Rule />
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  )
}
