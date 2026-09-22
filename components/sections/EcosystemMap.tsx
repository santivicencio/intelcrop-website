'use client'

import { useState } from 'react'
import { ecosystemActorIds, type EcosystemActorId } from '@/content/site'
import type { Dictionary } from '@/lib/i18n/types'
import { cn } from '@/lib/utils/cn'

const RADIUS_PERCENT = 42

function nodePosition(index: number, total: number) {
  const angle = (-90 + (360 / total) * index) * (Math.PI / 180)
  const left = 50 + RADIUS_PERCENT * Math.cos(angle)
  const top = 50 + RADIUS_PERCENT * Math.sin(angle)
  return { left: `${left}%`, top: `${top}%` }
}

export function EcosystemMap({ dictionary }: { dictionary: Dictionary }) {
  const [active, setActive] = useState<EcosystemActorId | null>(null)
  const { actors } = dictionary.ecosystem

  return (
    <div>
      {/* Desktop / tablet: radial diagram */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] md:block">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="18"
            fill="none"
            stroke="var(--color-canopy-soft)"
            strokeWidth="0.4"
          />
          {ecosystemActorIds.map((id, index) => {
            const { left, top } = nodePosition(index, ecosystemActorIds.length)
            const x2 = parseFloat(left)
            const y2 = parseFloat(top)
            const isActive = active === id
            return (
              <line
                key={id}
                x1="50"
                y1="50"
                x2={x2}
                y2={y2}
                stroke={
                  isActive ? 'var(--color-teal-bright)' : 'var(--color-canopy-soft)'
                }
                strokeWidth={isActive ? 0.6 : 0.3}
                className="transition-[stroke,stroke-width] duration-[180ms] ease-[var(--ease-entry)]"
              />
            )
          })}
        </svg>

        <div className="absolute top-1/2 left-1/2 flex w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center">
          <span className="font-mono text-[0.65rem] tracking-[0.1em] text-mist uppercase">
            {dictionary.ecosystem.ringLabel}
          </span>
          <span className="mt-2 text-sm font-medium text-field">
            {dictionary.ecosystem.centerLabel}
          </span>
        </div>

        {ecosystemActorIds.map((id, index) => {
          const { left, top } = nodePosition(index, ecosystemActorIds.length)
          const isActive = active === id
          return (
            <button
              key={id}
              type="button"
              style={{ left, top }}
              className={cn(
                'absolute min-h-11 -translate-x-1/2 -translate-y-1/2 rounded-full border px-4 py-2 text-xs font-medium whitespace-nowrap transition-colors duration-[180ms] ease-[var(--ease-entry)]',
                isActive
                  ? 'border-teal-bright bg-teal-bright/10 text-field'
                  : 'border-canopy-soft text-mist hover:text-field'
              )}
              onMouseEnter={() => setActive(id)}
              onMouseLeave={() =>
                setActive((current) => (current === id ? null : current))
              }
              onFocus={() => setActive(id)}
              onBlur={() => setActive((current) => (current === id ? null : current))}
              onClick={() => setActive(id)}
              aria-describedby="ecosystem-caption"
            >
              {actors[id].name}
            </button>
          )
        })}
      </div>

      <p
        id="ecosystem-caption"
        className="mx-auto mt-8 hidden min-h-8 max-w-md text-center text-sm text-teal-bright md:block"
      >
        {active ? actors[active].benefit : dictionary.ecosystem.tapHint}
      </p>

      {/* Mobile: vertical tap-to-expand list */}
      <div className="md:hidden">
        <div className="mb-6 border border-canopy-soft px-4 py-3 text-center">
          <span className="font-mono text-[0.65rem] tracking-[0.1em] text-mist uppercase">
            {dictionary.ecosystem.ringLabel}
          </span>
          <p className="mt-1 text-sm font-medium text-field">
            {dictionary.ecosystem.centerLabel}
          </p>
        </div>
        <p className="mb-2 text-xs text-mist">{dictionary.ecosystem.tapHint}</p>
        <ul className="flex flex-col divide-y divide-canopy-soft">
          {ecosystemActorIds.map((id) => {
            const isActive = active === id
            return (
              <li key={id}>
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActive((current) => (current === id ? null : id))}
                  className="flex min-h-11 w-full items-center justify-between py-4 text-left text-base font-medium text-field"
                >
                  {actors[id].name}
                  <span aria-hidden="true" className="text-teal-bright">
                    {isActive ? '−' : '+'}
                  </span>
                </button>
                {isActive && (
                  <p className="pb-4 text-sm text-teal-bright">{actors[id].benefit}</p>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
