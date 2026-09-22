import Link from 'next/link'
import type { Dictionary } from '@/lib/i18n/types'
import { solutionAreaIds, solutionAreaNumbers } from '@/content/site'
import type { Locale } from '@/lib/i18n/config'
import { Section } from '@/components/layout/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Rule } from '@/components/ui/Rule'
import { NumberMark } from '@/components/ui/NumberMark'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

export function SolutionsSection({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: Dictionary
}) {
  return (
    <Section surface="field" id="soluciones">
      <RevealOnScroll>
        <Eyebrow surface="field">{dictionary.solutions.eyebrow}</Eyebrow>
        <h2 className="text-h1 max-w-3xl font-medium tracking-[-0.03em] text-canopy">
          {dictionary.solutions.heading}
        </h2>
        <p className="mt-4 text-sm text-slate">{dictionary.solutions.note}</p>
      </RevealOnScroll>

      <div className="mt-16">
        <Rule />
        {solutionAreaIds.map((id, index) => {
          const area = dictionary.solutions.areas[id]
          return (
            <RevealOnScroll key={id} delay={index * 0.06}>
              <Link
                href={`/${locale}/soluciones/${id}`}
                prefetch={false}
                className="group grid grid-cols-1 gap-6 py-10 transition-transform duration-[180ms] ease-[var(--ease-entry)] hover:translate-x-2 sm:grid-cols-2 sm:gap-12"
              >
                <div className="flex items-start gap-6">
                  <NumberMark
                    value={solutionAreaNumbers[id]}
                    className="w-16 shrink-0 text-2xl text-field-warm transition-colors duration-[180ms] group-hover:text-teal-deep"
                  />
                  <div>
                    <h3 className="text-h3 font-medium text-canopy">{area.name}</h3>
                    <p className="mt-2 text-sm text-slate">{area.tagline}</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-3">
                  {area.items.map((item) => (
                    <li key={item} className="text-base leading-[1.6] text-canopy">
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
              <Rule />
            </RevealOnScroll>
          )
        })}
      </div>
    </Section>
  )
}
