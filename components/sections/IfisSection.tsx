import {
  Binoculars,
  FileText,
  Satellite,
  HandCoins,
  Globe,
  type LucideIcon,
} from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/types'
import { contactHref } from '@/content/site'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { HexIcon } from '@/components/ui/HexIcon'
import { Kicker } from '@/components/ui/Kicker'
import { ButtonLink } from '@/components/ui/Button'
import { SatelliteGrid } from '@/components/decor/SatelliteGrid'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

const STAGE_ICONS: LucideIcon[] = [Binoculars, FileText, Satellite, HandCoins]

export function IfisSection({ dictionary }: { dictionary: Dictionary }) {
  const { ifis } = dictionary
  return (
    <>
      <Section
        id="para-ifis"
        surface="tinta"
        ariaLabelledBy="ifis-heading"
        decor={<SatelliteGrid />}
      >
        <SectionHeading
          id="ifis-heading"
          kicker={ifis.kicker}
          subcopy={ifis.subcopy}
          tone="dark"
        >
          {ifis.heading}
        </SectionHeading>

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ifis.stages.map((stage, index) => (
            <RevealOnScroll
              as="li"
              key={stage.name}
              delay={index * 0.08}
              className="flex flex-col rounded-[var(--radius-card)] border border-teal-luz/30 border-t-4 border-t-teal-luz bg-white/5 p-7"
            >
              <div className="flex items-center gap-4">
                <HexIcon icon={STAGE_ICONS[index]} tone="dark" size={48} />
                <h3 className="text-h4 font-bold">{stage.name}</h3>
              </div>
              <p className="mt-6 font-bold text-teal-luz">{stage.lead}</p>
              <p className="mt-4 border-t border-white/10 pt-4 text-[15px]">
                {stage.body}
              </p>
            </RevealOnScroll>
          ))}
        </ol>

        <p className="mt-8 rounded-2xl border-l-4 border-ocre-sol bg-white/5 px-6 py-5 text-[15px]">
          <strong className="text-ocre-sol">{ifis.callout}</strong> {ifis.calloutBody}
        </p>
      </Section>

      {/* Score Agroclimático */}
      <Section surface="crema" ariaLabelledBy="score-heading">
        <SectionHeading
          id="score-heading"
          kicker={ifis.scoreKicker}
          subcopy={ifis.scoreSubcopy}
        >
          {ifis.scoreHeading}
        </SectionHeading>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ifis.scoreBlocks.map((block) => (
            <div
              key={block.name}
              className="rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)]"
            >
              <span aria-hidden="true" className="block h-1 w-10 rounded-full bg-ocre" />
              <h3 className="mt-5 text-h4 font-bold text-teal-accesible">{block.name}</h3>
              <p className="mt-3 text-[15px] text-gris-texto">{block.body}</p>
            </div>
          ))}
        </div>

        <div
          data-surface="dark"
          className="mt-6 rounded-[var(--radius-card)] bg-tinta p-8 text-menta md:p-10"
        >
          <Kicker tone="dark">{ifis.scoreDecisionLabel}</Kicker>
          <dl className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ifis.scoreDecision.map((item) => (
              <div key={item.value} className="flex flex-col-reverse gap-2">
                <dt className="text-sm">{item.label}</dt>
                <dd className="text-xl font-bold text-teal-luz">
                  {/[0-9]/.test(item.value) ? (
                    <span className="font-mono">{item.value}</span>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="mt-5 text-caption text-gris-texto italic">{ifis.scoreNote}</p>
      </Section>

      {/* Riesgo climático zonal + Basilea */}
      <Section surface="white" ariaLabelledBy="climate-heading">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.6fr] lg:gap-12">
          <div className="flex flex-col">
            <SectionHeading
              id="climate-heading"
              kicker={ifis.climateKicker}
              subcopy={ifis.climateSubcopy}
            >
              {ifis.climateHeading}
            </SectionHeading>
            <div className="mt-8 hidden lg:block">
              <HexIcon icon={Globe} size={72} />
            </div>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2">
            {ifis.climateItems.map((item, index) => (
              <li
                key={item.name}
                className="rounded-[var(--radius-card)] border border-borde border-t-4 border-t-teal-accesible bg-crema p-6"
              >
                <h3 className="flex items-baseline gap-3 text-h4 font-bold text-teal-accesible">
                  <span className="font-mono text-ocre-accesible">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item.name}
                </h3>
                <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-[15px] marker:text-teal">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-24">
          <SectionHeading
            id="basel-heading"
            kicker={ifis.baselKicker}
            subcopy={ifis.baselSubcopy}
          >
            {ifis.baselHeading}
          </SectionHeading>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {ifis.baselItems.map((item, index) => (
              <li
                key={item.name}
                className="flex flex-col rounded-[var(--radius-card)] border border-borde border-t-4 border-t-teal-accesible bg-white p-6"
              >
                <span
                  aria-hidden="true"
                  className="flex h-11 w-10 items-center justify-center bg-teal-accesible font-mono font-bold text-white [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]"
                >
                  {index + 1}
                </span>
                <h3 className="mt-4 font-bold text-teal-accesible">{item.name}</h3>
                <p className="mt-4 text-xs font-bold tracking-[0.2em] text-ocre-accesible uppercase">
                  {ifis.baselRequiresLabel}
                </p>
                <p className="mt-1 text-sm font-semibold text-tinta">{item.requires}</p>
                <div className="mt-auto pt-5">
                  <div className="rounded-2xl bg-menta p-4">
                    <p className="text-xs font-bold tracking-[0.2em] text-teal-accesible uppercase">
                      {ifis.baselContributionLabel}
                    </p>
                    <p className="mt-1 text-sm font-bold text-tinta">
                      {item.contribution}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5 rounded-2xl bg-tinta px-6 py-4 font-semibold text-white">
            {ifis.baselClosing}
          </p>
          <p className="mt-4 text-caption text-gris-texto italic">{ifis.baselSources}</p>
          <p className="mt-8 rounded-2xl border-l-4 border-ocre bg-menta px-6 py-5 text-[15px]">
            {ifis.safeguard}
          </p>
          <ButtonLink href={contactHref} className="mt-10">
            {ifis.cta}
          </ButtonLink>
        </div>
      </Section>
    </>
  )
}
