import Link from 'next/link'
import { Check, ChevronRight } from 'lucide-react'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/types'
import {
  servicePath,
  type FeatureBlock,
  type RiskTone,
  type Service,
} from '@/content/services'
import { Container } from '@/components/layout/Container'
import { Section, type Surface } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { HexIcon } from '@/components/ui/HexIcon'
import { Kicker } from '@/components/ui/Kicker'
import { ButtonLink } from '@/components/ui/Button'
import { icons } from '@/components/ui/icons'
import { ContourLines } from '@/components/decor/ContourLines'
import { SatelliteGrid } from '@/components/decor/SatelliteGrid'
import { TealOcreStripe } from '@/components/decor/TealOcreStripe'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'
import { cn } from '@/lib/utils/cn'

export function ServiceHero({
  service,
  dictionary,
}: {
  service: Service
  dictionary: Dictionary
}) {
  return (
    <section
      aria-labelledby="service-heading"
      className="relative isolate overflow-hidden bg-crema pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <ContourLines className="top-[-20%] left-1/2 h-[140%] w-[110%] -translate-x-1/2" />
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <HexIcon icon={icons[service.icon]} size={88} />
          <Kicker className="mt-8">{service.kicker}</Kicker>
          <h1
            id="service-heading"
            className="mt-5 text-display leading-[1.05] font-extrabold tracking-[-0.025em]"
          >
            {service.headline}
          </h1>
          <TealOcreStripe className="mt-8" />
          <p className="mt-8 max-w-3xl text-lg leading-relaxed md:text-xl">
            {service.intro}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contacto">{dictionary.servicePage.requestDemo}</ButtonLink>
            <ButtonLink href="#detalle" variant="secondary">
              {dictionary.hero.ctaSecondary}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function ServiceHighlights({
  service,
  dictionary,
}: {
  service: Service
  dictionary: Dictionary
}) {
  return (
    <section
      id="detalle"
      aria-label={dictionary.servicePage.highlightsLabel}
      data-surface="dark"
      className="relative isolate overflow-hidden bg-tinta py-14 md:py-16"
    >
      <SatelliteGrid />
      <Container>
        <dl
          className={cn(
            'grid gap-x-8 gap-y-10 sm:grid-cols-2',
            service.highlights.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
          )}
        >
          {service.highlights.map((highlight) => (
            <div key={highlight.label} className="flex flex-col-reverse gap-2">
              <dt className="text-menta">{highlight.label}</dt>
              <dd className="font-mono text-[clamp(2rem,4vw,3.25rem)] leading-none font-bold text-white">
                {highlight.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

export function ServiceSteps({
  steps,
  surface = 'white',
}: {
  steps: NonNullable<Service['steps']>
  surface?: Surface
}) {
  const withPoints = steps.items.some((item) => item.points)
  return (
    <Section surface={surface} ariaLabelledBy="steps-heading">
      <SectionHeading id="steps-heading" kicker={steps.kicker}>
        {steps.title}
      </SectionHeading>
      <ol
        className={cn(
          'mt-12 grid gap-5',
          withPoints
            ? 'md:grid-cols-2 lg:grid-cols-4'
            : steps.items.length > 4
              ? 'sm:grid-cols-2 lg:grid-cols-3'
              : 'sm:grid-cols-2 lg:grid-cols-4'
        )}
      >
        {steps.items.map((item, index) => (
          <RevealOnScroll
            as="li"
            key={item.name}
            delay={(index % 4) * 0.06}
            className="flex flex-col rounded-[var(--radius-card)] border border-borde bg-crema p-7"
          >
            <span
              aria-hidden="true"
              className="flex h-11 w-10 items-center justify-center bg-teal-accesible font-mono font-bold text-white [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]"
            >
              {index + 1}
            </span>
            <h3 className="mt-5 text-h4 font-bold">{item.name}</h3>
            {item.subtitle && (
              <p className="mt-1 text-sm font-semibold text-teal-accesible">
                {item.subtitle}
              </p>
            )}
            {item.points && (
              <ul className="mt-4 flex flex-col gap-2 text-[15px]">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <Check
                      aria-hidden="true"
                      size={16}
                      className="mt-1 shrink-0 text-teal"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
            {item.body && (
              <p
                className={cn(
                  'text-[15px] text-gris-texto',
                  item.points ? 'mt-auto border-t border-borde pt-4 italic' : 'mt-3'
                )}
              >
                {item.body}
              </p>
            )}
          </RevealOnScroll>
        ))}
      </ol>
      {steps.note && <p className="mt-6 text-gris-texto italic">{steps.note}</p>}
    </Section>
  )
}

const toneClasses: Record<RiskTone, string> = {
  bajo: 'bg-riesgo-bajo text-white',
  medio: 'bg-riesgo-medio text-tinta',
  alto: 'bg-riesgo-alto text-tinta',
  rojo: 'bg-riesgo-critico text-white',
  critico: 'bg-[#7b1f1a] text-white',
}

export function ServiceBands({ bands }: { bands: NonNullable<Service['bands']> }) {
  return (
    <Section surface="crema" ariaLabelledBy="bands-heading">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
        <SectionHeading id="bands-heading" kicker={bands.kicker} subcopy={bands.note}>
          {bands.title}
        </SectionHeading>
        <ol className="flex flex-col gap-3">
          {bands.items.map((band) => (
            <li
              key={band.name}
              className="flex items-center gap-5 rounded-2xl bg-white p-4 shadow-[var(--shadow-card)]"
            >
              <span
                className={cn(
                  'inline-flex min-w-28 justify-center rounded-full px-4 py-2 text-sm font-extrabold tracking-[0.15em] uppercase',
                  toneClasses[band.tone]
                )}
              >
                {band.name}
              </span>
              <span className="font-semibold text-tinta">{band.action}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

export function ServiceFormulas({
  formulas,
}: {
  formulas: NonNullable<Service['formulas']>
}) {
  return (
    <Section surface="tinta" ariaLabelledBy="formulas-heading">
      <SectionHeading id="formulas-heading" kicker={formulas.kicker} tone="dark">
        {formulas.title}
      </SectionHeading>
      <dl className="mt-10 flex flex-col gap-4">
        {formulas.items.map((formula) => (
          <div
            key={formula.name}
            className="grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-[12rem_1fr] md:items-center"
          >
            <dt className="text-lg font-extrabold text-ocre-sol">{formula.name}</dt>
            <dd className="font-mono text-[clamp(1rem,1.8vw,1.375rem)] leading-snug font-bold text-white">
              {formulas.items.length === 1
                ? `= ${formula.expression}`
                : formula.expression}
            </dd>
          </div>
        ))}
      </dl>
      {formulas.note && <p className="mt-6 max-w-3xl text-menta">{formulas.note}</p>}
    </Section>
  )
}

export function ServiceBenefits({
  benefits,
}: {
  benefits: NonNullable<Service['benefits']>
}) {
  return (
    <Section surface="white" ariaLabelledBy="benefits-heading">
      <SectionHeading id="benefits-heading" kicker={benefits.kicker}>
        {benefits.title}
      </SectionHeading>
      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {benefits.items.map((item) => (
          <li key={item.name} className="border-l-4 border-teal pl-5">
            <h3 className="text-h4 font-bold">{item.name}</h3>
            <p className="mt-3 text-[15px] text-gris-texto">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function ServiceFeatureBlock({
  block,
  index,
  surface,
}: {
  block: FeatureBlock
  index: number
  surface: Surface
}) {
  const dark = surface === 'tinta'
  const id = `features-${index}-heading`
  return (
    <Section surface={surface} ariaLabelledBy={id}>
      <SectionHeading
        id={id}
        kicker={block.kicker}
        subcopy={block.intro}
        tone={dark ? 'dark' : 'light'}
      >
        {block.title}
      </SectionHeading>
      <ul
        className={cn(
          'mt-12 grid gap-5 sm:grid-cols-2',
          block.items.length === 4 || block.items.length >= 7
            ? 'lg:grid-cols-4'
            : block.items.length === 5
              ? 'lg:grid-cols-5'
              : 'lg:grid-cols-3'
        )}
      >
        {block.items.map((item, itemIndex) => (
          <RevealOnScroll
            as="li"
            key={item.name}
            delay={(itemIndex % 4) * 0.05}
            className={cn(
              'flex flex-col rounded-[var(--radius-card)] p-6',
              dark
                ? 'border border-white/10 bg-white/5'
                : 'bg-white shadow-[var(--shadow-card)]'
            )}
          >
            <HexIcon icon={icons[item.icon]} tone={dark ? 'dark' : 'light'} size={52} />
            <h3 className="mt-5 text-h4 font-bold">{item.name}</h3>
            <p
              className={cn('mt-2 text-[15px]', dark ? 'text-menta' : 'text-gris-texto')}
            >
              {item.body}
            </p>
          </RevealOnScroll>
        ))}
      </ul>
      {block.note && (
        <p
          className={cn(
            'mt-8 rounded-2xl px-6 py-4 font-semibold',
            dark ? 'bg-teal-accesible text-white' : 'bg-menta text-tinta'
          )}
        >
          {block.note}
        </p>
      )}
    </Section>
  )
}

export function ServiceBasel({ basel }: { basel: NonNullable<Service['basel']> }) {
  return (
    <Section surface="white" ariaLabelledBy="basel-heading">
      <SectionHeading id="basel-heading" kicker={basel.kicker} subcopy={basel.intro}>
        {basel.title}
      </SectionHeading>
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {basel.items.map((item, index) => (
          <li
            key={item.name}
            className="flex flex-col rounded-[var(--radius-card)] border border-t-4 border-borde border-t-teal-accesible bg-white p-6"
          >
            <span
              aria-hidden="true"
              className="flex h-11 w-10 items-center justify-center bg-teal-accesible font-mono font-bold text-white [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]"
            >
              {index + 1}
            </span>
            <h3 className="mt-4 font-bold text-teal-accesible">{item.name}</h3>
            <p className="mt-2 text-sm text-gris-texto">{item.body}</p>
            <p className="mt-4 text-xs font-bold tracking-[0.2em] text-ocre-accesible uppercase">
              {basel.requiresLabel}
            </p>
            <p className="mt-1 text-sm font-semibold text-tinta">{item.requires}</p>
            <div className="mt-auto pt-5">
              <div className="rounded-2xl bg-menta p-4">
                <p className="text-xs font-bold tracking-[0.2em] text-teal-accesible uppercase">
                  {basel.contributionLabel}
                </p>
                <p className="mt-1 text-sm font-bold text-tinta">{item.contribution}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-5 rounded-2xl bg-tinta px-6 py-4 font-semibold text-white">
        {basel.closing}
      </p>
      <p className="mt-4 text-caption text-gris-texto italic">{basel.sources}</p>
    </Section>
  )
}

export function ServiceTimeline({
  timeline,
}: {
  timeline: NonNullable<Service['timeline']>
}) {
  return (
    <Section surface="tinta" ariaLabelledBy="timeline-heading" decor={<SatelliteGrid />}>
      <SectionHeading id="timeline-heading" kicker={timeline.kicker} tone="dark">
        {timeline.title}
      </SectionHeading>
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div>
          <ol className="relative grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            <span
              aria-hidden="true"
              className="absolute top-9 right-[12%] left-[12%] hidden h-0.5 bg-teal-luz/60 sm:block"
            />
            {timeline.items.map((item) => (
              <li
                key={item.name}
                className="relative flex flex-col items-center text-center"
              >
                <HexIcon icon={icons[item.icon]} tone="dark" size={66} />
                <p className="mt-4 font-bold text-white">{item.name}</p>
                <p className="mt-1 text-xs font-bold tracking-[0.2em] text-ocre-sol uppercase">
                  {item.date}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-12 rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
            {timeline.note}
          </p>
        </div>
        <ol className="flex flex-col gap-4">
          {timeline.facts.map((fact, index) => (
            <li key={fact} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-mono font-bold text-ocre-sol">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="mt-2">{fact}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

export function ServiceClosingNotes({
  service,
  dictionary,
}: {
  service: Service
  dictionary: Dictionary
}) {
  if (!service.commercial && !service.footnote) return null
  return (
    <Section surface="crema" className="!py-14">
      <div className="flex flex-col gap-5">
        {service.commercial && (
          <div
            className="flex flex-col gap-2 rounded-[var(--radius-card)] bg-tinta p-7 md:flex-row md:items-center md:gap-8 md:p-9"
            data-surface="dark"
          >
            <Kicker tone="dark">{dictionary.servicePage.commercialLabel}</Kicker>
            <p className="text-xl font-bold text-white">{service.commercial}</p>
          </div>
        )}
        {service.footnote && (
          <p className="rounded-2xl border-l-4 border-ocre bg-menta px-6 py-5 text-[15px] text-tinta">
            {service.footnote}
          </p>
        )}
      </div>
    </Section>
  )
}

export function RelatedServices({
  locale,
  current,
  services,
  dictionary,
}: {
  locale: Locale
  current: Service
  services: Service[]
  dictionary: Dictionary
}) {
  const index = services.findIndex((service) => service.slug === current.slug)
  const related = [1, 2, 3].map((offset) => services[(index + offset) % services.length])
  return (
    <Section surface="white" ariaLabelledBy="related-heading">
      <SectionHeading id="related-heading" kicker={dictionary.servicePage.relatedKicker}>
        {dictionary.servicePage.relatedHeading}
      </SectionHeading>
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {related.map((service) => (
          <li key={service.slug}>
            <Link
              href={servicePath(locale, service.slug)}
              className="group flex h-full flex-col rounded-[var(--radius-card)] bg-crema p-7 transition-colors hover:bg-menta"
            >
              <HexIcon icon={icons[service.icon]} size={48} />
              <h3 className="mt-5 text-h4 font-bold group-hover:text-teal-accesible">
                {service.name}
              </h3>
              <p className="mt-2 text-[15px] text-gris-texto">{service.short}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-5 text-[15px] font-bold text-teal-accesible">
                {dictionary.solutions.learnMore}
                <ChevronRight aria-hidden="true" size={16} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
