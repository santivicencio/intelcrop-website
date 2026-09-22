'use client'

import { m, useReducedMotion } from 'framer-motion'

function Connector({ drawDelay }: { drawDelay: number }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div
      className="relative mx-3 h-px min-w-8 flex-1 bg-canopy-soft sm:mx-4"
      aria-hidden="true"
    >
      <m.div
        className="absolute inset-0 origin-left bg-teal-bright"
        initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: drawDelay, ease: [0.22, 1, 0.36, 1] }}
      />
      {!shouldReduceMotion && (
        <m.span
          className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-teal-bright"
          initial={{ left: '0%', opacity: 0 }}
          whileInView={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
          viewport={{ margin: '-80px' }}
          transition={{
            duration: 4,
            delay: drawDelay + 0.6,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      )}
    </div>
  )
}

/** One "PRODUCCIÓN  Imagen → Vigor → Rendimiento" row from the satellite-to-field section. */
export function DecisionChainAnimation({
  domainLabel,
  nodes,
  index = 0,
}: {
  domainLabel: string
  nodes: readonly [string, string, string]
  index?: number
}) {
  const rowDelay = index * 0.15

  return (
    <div
      className="flex flex-col gap-4 sm:flex-row sm:items-center"
      role="img"
      aria-label={`${domainLabel}: ${nodes.join(' → ')}`}
    >
      <span
        className="w-full shrink-0 font-mono text-xs font-medium tracking-[0.14em] text-mist uppercase sm:w-32"
        aria-hidden="true"
      >
        {domainLabel}
      </span>
      <div className="flex flex-1 items-center" aria-hidden="true">
        <span className="text-h3 font-medium text-field">{nodes[0]}</span>
        <Connector drawDelay={rowDelay} />
        <span className="text-h3 font-medium text-field">{nodes[1]}</span>
        <Connector drawDelay={rowDelay + 0.2} />
        <span className="text-h3 font-medium text-field">{nodes[2]}</span>
      </div>
    </div>
  )
}
