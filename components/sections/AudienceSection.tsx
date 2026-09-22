import Link from 'next/link'
import type { Dictionary } from '@/lib/i18n/types'
import { audienceIds } from '@/content/site'
import type { Locale } from '@/lib/i18n/config'
import { Section } from '@/components/layout/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

export function AudienceSection({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: Dictionary
}) {
  return (
    <Section surface="field" id="para-quien">
      <RevealOnScroll>
        <Eyebrow surface="field">{dictionary.audience.eyebrow}</Eyebrow>
        <h2 className="text-h1 max-w-3xl font-medium tracking-[-0.03em] text-canopy">
          {dictionary.audience.heading}
        </h2>
      </RevealOnScroll>

      <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {audienceIds.map((id, index) => {
          const block = dictionary.audience.blocks[id]
          return (
            <RevealOnScroll key={id} delay={index * 0.05}>
              <Link
                href={`/${locale}/para-quien/${id}`}
                prefetch={false}
                className="block border-t border-field-warm pt-6"
              >
                <h3 className="text-h3 font-medium text-canopy">{block.name}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-slate">
                  {block.description}
                </p>
              </Link>
            </RevealOnScroll>
          )
        })}
      </div>
    </Section>
  )
}
