import { cn } from '@/lib/utils/cn'

/**
 * Manual §2.5 "Retícula satelital 3×3 m": satellite pixels, the fintech/data DNA.
 * Use on dark surfaces only, with at most 5% of cells lit.
 */
const COLUMNS = 24
const ROWS = 10
// Fixed, hand-picked cells (≈4% of 240) so server and client render identically.
const LIT: [number, number, number][] = [
  [2, 1, 0.5],
  [7, 0, 0.35],
  [11, 3, 0.45],
  [15, 1, 0.3],
  [19, 4, 0.5],
  [21, 2, 0.35],
  [4, 6, 0.3],
  [9, 8, 0.4],
  [17, 7, 0.3],
  [22, 8, 0.45],
]

export function SatelliteGrid({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${COLUMNS * 40} ${ROWS * 40}`}
      preserveAspectRatio="xMidYMid slice"
      className={cn(
        'pointer-events-none absolute inset-0 -z-10 h-full w-full',
        className
      )}
    >
      <defs>
        <pattern id="satellite-cell" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M40 0H0V40"
            fill="none"
            stroke="var(--color-teal-luz)"
            strokeOpacity="0.08"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#satellite-cell)" />
      {LIT.map(([x, y, opacity]) => (
        <rect
          key={`${x}-${y}`}
          x={x * 40 + 4}
          y={y * 40 + 4}
          width="32"
          height="32"
          rx="4"
          fill="var(--color-teal-luz)"
          opacity={opacity * 0.3}
        />
      ))}
    </svg>
  )
}
