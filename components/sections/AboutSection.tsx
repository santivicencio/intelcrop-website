import Image from 'next/image'
import { CircleCheck } from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/types'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContourLines } from '@/components/decor/ContourLines'
import sello from '@/public/brand/intelicrop-sello.png'

export function AboutSection({ dictionary }: { dictionary: Dictionary }) {
  const { about } = dictionary
  return (
    <Section
      id="nosotros"
      surface="crema"
      ariaLabelledBy="about-heading"
      decor={<ContourLines className="top-0 right-[-25%] h-full w-[80%]" />}
    >
      <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <SectionHeading id="about-heading" kicker={about.kicker}>
            {about.heading}
          </SectionHeading>
          <p className="mt-6 text-lg leading-relaxed">{about.body}</p>
          <p className="mt-4 text-lg leading-relaxed">{about.body2}</p>
          <p className="mt-8 inline-flex items-center gap-3 rounded-full bg-teal-accesible px-5 py-3 text-sm font-bold text-white">
            <CircleCheck aria-hidden="true" size={18} />
            {about.cropin}
          </p>
        </div>
        <Image
          src={sello}
          alt=""
          width={280}
          height={280}
          className="mx-auto hidden h-auto w-56 lg:block lg:w-72"
        />
      </div>

      <dl className="mt-16 grid gap-5 md:grid-cols-3">
        {about.statements.map((statement) => (
          <div
            key={statement.name}
            className="rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)]"
          >
            <dt className="text-xs font-bold tracking-[0.3em] text-ocre-accesible uppercase">
              {statement.name}
            </dt>
            <dd className="mt-3 text-[15px] leading-relaxed text-tinta">
              {statement.body}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
