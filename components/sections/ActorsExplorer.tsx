'use client'

import { useId, useState, type KeyboardEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight } from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/types'
import type { Locale } from '@/lib/i18n/config'
import { servicePath, type IconKey, type ServiceSlug } from '@/content/services'
import { icons } from '@/components/ui/icons'
import { Kicker } from '@/components/ui/Kicker'
import { cn } from '@/lib/utils/cn'
import sello from '@/public/brand/intelicrop-sello.png'

type Actors = Dictionary['actors']

/**
 * The value chain as a ring: InteliCrop's seal at the center ("one data point
 * per plot") and the six players around it. Selecting a player draws the circuit
 * connector to it and shows pain → what InteliCrop delivers. Implemented as an
 * ARIA tablist so it works with arrow keys and screen readers.
 */
export function ActorsExplorer({
  locale,
  actors,
  serviceNames,
  pickerLabel,
}: {
  locale: Locale
  actors: Actors
  serviceNames: Record<string, string>
  pickerLabel: string
}) {
  const [active, setActive] = useState(1)
  const baseId = useId()
  const count = actors.items.length
  const current = actors.items[active]

  // Node positions on the ring, starting at the top, clockwise. In % of the box.
  const positions = actors.items.map((_, index) => {
    const angle = (index / count) * 2 * Math.PI - Math.PI / 2
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    return {
      x: 50 + 40 * cos,
      y: 50 + 40 * sin,
      // Spoke from just outside the seal to just inside the node.
      from: { x: 50 + 21 * cos, y: 50 + 21 * sin },
      to: { x: 50 + 33 * cos, y: 50 + 33 * sin },
    }
  })

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const delta =
      event.key === 'ArrowRight' || event.key === 'ArrowDown'
        ? 1
        : event.key === 'ArrowLeft' || event.key === 'ArrowUp'
          ? -1
          : 0
    if (!delta) return
    event.preventDefault()
    const next = (active + delta + count) % count
    setActive(next)
    document.getElementById(`${baseId}-tab-${next}`)?.focus()
  }

  return (
    <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
      <div className="relative mx-auto aspect-square w-full max-w-[520px]">
        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="var(--color-borde)"
            strokeWidth="0.4"
          />
          <circle
            cx="50"
            cy="50"
            r="28"
            fill="none"
            stroke="var(--color-borde)"
            strokeWidth="0.3"
            strokeDasharray="0.6 1.6"
          />
          {positions.map((position, index) => (
            <line
              key={index}
              x1={position.from.x}
              y1={position.from.y}
              x2={position.to.x}
              y2={position.to.y}
              stroke={index === active ? 'var(--color-teal)' : 'var(--color-borde)'}
              strokeWidth={index === active ? 0.9 : 0.3}
              strokeDasharray={index === active ? '1 1.6' : undefined}
              strokeLinecap="round"
              className="transition-all duration-300"
            />
          ))}
        </svg>

        <div className="absolute top-1/2 left-1/2 flex w-[34%] -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <Image src={sello} alt="" className="h-auto w-full" />
          <p className="mt-2 hidden rounded-full bg-white px-2 text-center text-xs font-bold text-teal-accesible sm:block">
            {actors.centerLabel}
          </p>
        </div>

        <div role="tablist" aria-label={pickerLabel} aria-orientation="horizontal">
          {actors.items.map((actor, index) => {
            const Icon = icons[actor.icon as IconKey]
            const selected = index === active
            const position = positions[index]
            return (
              <button
                key={actor.id}
                id={`${baseId}-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={onKeyDown}
                className="group absolute flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 sm:w-32"
                style={{ left: `${position.x}%`, top: `${position.y}%` }}
              >
                <span
                  className={cn(
                    'relative flex h-14 w-[52px] items-center justify-center transition-transform duration-300 sm:h-[68px] sm:w-[62px]',
                    selected ? 'scale-110' : 'group-hover:scale-105'
                  )}
                >
                  <svg
                    viewBox="0 0 100 110"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full"
                  >
                    <path
                      d="M50 4 L94 29 L94 81 L50 106 L6 81 L6 29 Z"
                      fill={selected ? 'var(--color-tinta)' : '#ffffff'}
                      stroke={selected ? 'var(--color-teal-luz)' : 'var(--color-teal)'}
                      strokeWidth="4"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Icon
                    aria-hidden="true"
                    size={24}
                    className={cn(
                      'relative',
                      selected ? 'text-teal-luz' : 'text-teal-accesible'
                    )}
                  />
                </span>
                <span
                  className={cn(
                    'rounded-full px-2 py-0.5 text-center text-[11px] leading-tight font-bold sm:text-xs',
                    selected ? 'bg-tinta text-white' : 'bg-white/90 text-tinta'
                  )}
                >
                  {actor.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        aria-live="polite"
        className="rounded-[var(--radius-card)] bg-crema p-7 md:p-10"
      >
        <h3 className="text-h3 leading-tight font-extrabold">{current.name}</h3>

        <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
          <div className="rounded-2xl border-l-4 border-ocre bg-white p-5">
            <Kicker as="p" className="text-xs">
              {actors.painLabel}
            </Kicker>
            <p className="mt-3 text-tinta">{current.pain}</p>
          </div>
          <div aria-hidden="true" className="flex items-center justify-center text-teal">
            <ArrowRight size={28} className="rotate-90 md:rotate-0" />
          </div>
          <div className="rounded-2xl border-l-4 border-teal bg-white p-5">
            <p className="text-xs font-bold tracking-[0.3em] text-teal-accesible uppercase">
              {actors.deliverLabel}
            </p>
            <p className="mt-3 text-tinta">{current.deliver}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-borde pt-6">
          <div>
            <p className="font-mono text-4xl font-bold text-teal-accesible">
              {current.metric}
            </p>
            <p className="mt-1 text-sm text-gris-texto">{current.metricLabel}</p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-ocre-accesible uppercase">
              {actors.servicesLabel}
            </p>
            <ul className="mt-2 flex flex-col">
              {current.services.map((slug) => (
                <li key={slug}>
                  <Link
                    href={servicePath(locale, slug as ServiceSlug)}
                    className="inline-flex min-h-9 items-center gap-1 text-[15px] font-bold text-teal-accesible hover:underline"
                  >
                    {serviceNames[slug]}
                    <ChevronRight aria-hidden="true" size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
