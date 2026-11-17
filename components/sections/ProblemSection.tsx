import { Cpu, FolderSearch, Banknote } from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/types'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { HexIcon } from '@/components/ui/HexIcon'
import { Kicker } from '@/components/ui/Kicker'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

const ICONS = [Cpu, FolderSearch, Banknote]

export function ProblemSection({ dictionary }: { dictionary: Dictionary }) {
  const { problem } = dictionary
  return (
    <Section id="contexto" surface="crema" ariaLabelledBy="problem-heading">
      <SectionHeading
        id="problem-heading"
        kicker={problem.kicker}
        subcopy={problem.subcopy}
      >
        {problem.heading}
      </SectionHeading>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <ul className="flex flex-col gap-9">
          {problem.items.map((item, index) => (
            <RevealOnScroll
              as="li"
              key={item.title}
              delay={index * 0.08}
              className="flex gap-5"
            >
              <HexIcon icon={ICONS[index]} />
              <div>
                <h3 className="text-h4 font-bold text-teal-accesible">{item.title}</h3>
                <p className="mt-2">
                  <strong className="font-extrabold text-tinta">{item.highlight}</strong>{' '}
                  {item.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </ul>

        <RevealOnScroll className="rounded-[var(--radius-card)] border-l-4 border-ocre bg-white p-8 shadow-[var(--shadow-card)] md:p-10">
          <Kicker>{problem.gapKicker}</Kicker>
          <dl className="mt-6 flex flex-col gap-7">
            {problem.gapItems.map((item) => (
              <div key={item.value} className="flex flex-col-reverse gap-2">
                <dt>{item.label}</dt>
                <dd className="font-mono text-[clamp(1.75rem,3vw,2.5rem)] leading-none font-bold text-tinta">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 rounded-2xl bg-menta p-6">
            <Kicker as="h3">{problem.exitKicker}</Kicker>
            <p className="mt-2 text-lg font-semibold text-tinta">{problem.exitBody}</p>
          </div>
        </RevealOnScroll>
      </div>

      <p className="mt-12 text-caption text-gris-texto italic">{problem.sources}</p>
    </Section>
  )
}
