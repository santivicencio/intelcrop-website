import { Star } from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/types'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Kicker } from '@/components/ui/Kicker'
import { SatelliteGrid } from '@/components/decor/SatelliteGrid'

/**
 * Manual §2.7 data viz: highlighted series in Ocre, the rest in Teal; figures in
 * JetBrains Mono; axis labels in Manrope; no borders or 3D; source in teal italic.
 */
export function EcuadorSection({ dictionary }: { dictionary: Dictionary }) {
  const { ecuador } = dictionary
  const max = Math.max(...ecuador.crops.map((crop) => crop.hectares))

  return (
    <>
      <Section surface="tinta" ariaLabelledBy="ecuador-heading" decor={<SatelliteGrid />}>
        <SectionHeading
          id="ecuador-heading"
          kicker={ecuador.kicker}
          subcopy={ecuador.subcopy}
          tone="dark"
        >
          {ecuador.heading}
        </SectionHeading>
        <p className="mt-12 text-sm font-bold tracking-[0.2em] text-teal-luz uppercase">
          {ecuador.marketLabel}
        </p>
        <dl className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {ecuador.stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col-reverse gap-3 border-t border-white/15 pt-5"
            >
              <dt className="text-sm">{stat.label}</dt>
              <dd className="font-mono text-[clamp(1.75rem,3vw,2.5rem)] leading-none font-bold text-ocre-sol">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-caption italic">{ecuador.statsSource}</p>
      </Section>

      <Section surface="white" ariaLabelledBy="crops-heading">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
          <div>
            <Kicker>{ecuador.chartKicker}</Kicker>
            <h2 id="crops-heading" className="mt-4 text-h2 leading-[1.12] font-extrabold">
              {ecuador.chartHeading}
            </h2>
            <p className="mt-6 flex items-center gap-2 text-sm text-gris-texto">
              <Star aria-hidden="true" size={16} className="fill-ocre text-ocre" />
              {ecuador.chartReviewed}
            </p>
          </div>

          <figure>
            <ul
              aria-label={dictionary.a11y.chartDescription}
              className="flex flex-col gap-3"
            >
              {ecuador.crops.map((crop, index) => (
                <li
                  key={crop.name}
                  className="grid grid-cols-[7.5rem_1fr] items-center gap-4 sm:grid-cols-[9rem_1fr]"
                >
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-tinta">
                    {crop.name}
                    {crop.reviewed && (
                      <>
                        <Star
                          aria-hidden="true"
                          size={13}
                          className="shrink-0 fill-ocre text-ocre"
                        />
                        <span className="sr-only">({ecuador.chartReviewed})</span>
                      </>
                    )}
                  </span>
                  <span className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={`h-7 rounded-r-md ${index === 0 ? 'bg-ocre' : 'bg-teal'}`}
                      style={{ width: `${Math.max((crop.hectares / max) * 82, 1.2)}%` }}
                    />
                    <span className="font-mono text-sm font-bold whitespace-nowrap text-tinta">
                      {crop.label} {ecuador.chartUnit}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <figcaption className="mt-5 text-caption text-teal-accesible italic">
              {ecuador.chartSource}
            </figcaption>
          </figure>
        </div>
      </Section>
    </>
  )
}
