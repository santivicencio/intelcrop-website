import type { Dictionary } from '@/lib/i18n/types'
import { decisionDomains } from '@/content/site'
import { Section } from '@/components/layout/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { DecisionChainAnimation } from '@/components/motion/DecisionChainAnimation'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

const domainLabels: Record<(typeof decisionDomains)[number], string> = {
  produccion: 'PRODUCCIÓN',
  sanidad: 'SANIDAD',
  clima: 'CLIMA',
}

export function SatelliteSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <Section surface="canopy" id="satelite" className="relative overflow-hidden">
      <div
        className="satellite-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative">
        <RevealOnScroll>
          <Eyebrow surface="canopy">{dictionary.satellite.eyebrow}</Eyebrow>
          <h2 className="text-h1 max-w-3xl font-medium tracking-[-0.03em] text-field">
            {dictionary.satellite.heading}
          </h2>
        </RevealOnScroll>

        <div className="mt-20 flex flex-col gap-14">
          {decisionDomains.map((domain, index) => (
            <RevealOnScroll key={domain} delay={index * 0.08}>
              <DecisionChainAnimation
                domainLabel={domainLabels[domain]}
                nodes={dictionary.satellite.chains[domain]}
                index={index}
              />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.3} className="mt-20 border-t border-canopy-soft pt-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
            {dictionary.satellite.stats.map((stat) => (
              <div key={stat.label}>
                <p className="tabular-nums font-mono text-2xl font-medium text-teal-bright">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-mist">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-mist italic">
            {/* TODO: contenido pendiente de validación — ver docs/CONTENT_TODO.md */}
            {dictionary.satellite.statsNote}
          </p>
          <p className="mt-4 text-sm text-mist">
            {dictionary.satellite.alertsChannelsNote}
          </p>
        </RevealOnScroll>
      </div>

      <style>{`
        .satellite-grid {
          background-image: radial-gradient(rgba(245, 243, 236, 0.05) 1px, transparent 1px);
          background-size: 28px 28px;
          animation: satellite-grid-drift 72s steps(24) infinite;
        }
        @keyframes satellite-grid-drift {
          from { background-position: 0 0; }
          to { background-position: 28px 28px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .satellite-grid { animation: none; }
        }
      `}</style>
    </Section>
  )
}
