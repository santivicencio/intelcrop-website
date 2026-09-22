import type { Dictionary } from '@/lib/i18n/types'
import { Section } from '@/components/layout/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

export function EcuadorDataSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <Section surface="canopy" id="ecuador" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, var(--color-field) 0, var(--color-field) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, var(--color-field) 0, var(--color-field) 1px, transparent 1px, transparent 48px)',
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <RevealOnScroll>
          <Eyebrow surface="canopy">{dictionary.ecuadorData.eyebrow}</Eyebrow>
          <h2 className="text-h1 max-w-3xl font-medium tracking-[-0.03em] text-field">
            {dictionary.ecuadorData.heading}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll
          delay={0.1}
          className="mt-16 flex flex-col gap-10 sm:flex-row sm:gap-16"
        >
          {dictionary.ecuadorData.stats.map((stat) => (
            <div key={stat.label}>
              <p className="tabular-nums font-mono text-number-mark leading-none font-medium text-teal-bright">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-mist">{stat.label}</p>
            </div>
          ))}
        </RevealOnScroll>
        <RevealOnScroll delay={0.15}>
          <p className="mt-4 text-xs text-mist italic">
            {/* TODO: contenido pendiente de validación — ver docs/CONTENT_TODO.md */}
            {dictionary.ecuadorData.statsNote}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} className="mt-14 border-t border-canopy-soft pt-8">
          <p className="font-mono text-xs tracking-[0.14em] text-mist uppercase">
            {dictionary.ecuadorData.cropsLabel}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {dictionary.ecuadorData.crops.map((crop) => (
              <li key={crop} className="text-base text-field">
                {crop}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </Section>
  )
}
