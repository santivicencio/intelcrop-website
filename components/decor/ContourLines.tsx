import { cn } from '@/lib/utils/cn'

/**
 * Manual §2.5 "Curvas de nivel": terrain + data, 10–20% opacity behind content.
 * Concentric, slightly irregular rings drawn from one path scaled outward.
 */
const RING =
  'M0 -1 C0.38 -1.04 0.78 -0.86 0.96 -0.5 C1.12 -0.16 1.02 0.3 0.8 0.62 C0.56 0.96 0.12 1.06 -0.3 0.96 C-0.72 0.86 -1.02 0.5 -1.04 0.06 C-1.06 -0.4 -0.82 -0.78 -0.42 -0.94 C-0.28 -0.99 -0.14 -1 0 -1 Z'

export function ContourLines({
  className,
  tone = 'light',
  rings = 9,
}: {
  className?: string
  tone?: 'light' | 'dark'
  rings?: number
}) {
  const stroke = tone === 'dark' ? 'var(--color-teal-luz)' : 'var(--color-teal)'
  return (
    <svg
      aria-hidden="true"
      viewBox="-500 -500 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      className={cn('pointer-events-none absolute -z-10', className)}
      style={{ opacity: tone === 'dark' ? 0.16 : 0.14 }}
    >
      <g fill="none" stroke={stroke} strokeWidth="1.4" vectorEffect="non-scaling-stroke">
        {Array.from({ length: rings }, (_, index) => {
          const scale = 40 + index * 52
          const rotate = index * 7
          return (
            <path
              key={index}
              d={RING}
              transform={`rotate(${rotate}) scale(${scale} ${scale * 0.82})`}
              vectorEffect="non-scaling-stroke"
            />
          )
        })}
      </g>
    </svg>
  )
}
