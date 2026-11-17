import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

type Tone = 'light' | 'dark' | 'solid' | 'tile'

/**
 * Manual §2.4: Lucide icon (2px stroke, round caps) inside a pointy-top hexagon.
 * light = Teal outline, white fill · dark = Teal Luz outline, Tinta fill ·
 * solid = Teal Accesible fill with white icon (summary deck's portfolio tiles) ·
 * tile = follows the --tile-hex-* vars of a responsive solution tile.
 */
const toneStyles: Record<Tone, { stroke: string; fill: string; icon: string }> = {
  light: { stroke: 'var(--color-teal)', fill: '#ffffff', icon: 'text-teal-accesible' },
  dark: {
    stroke: 'var(--color-teal-luz)',
    fill: 'var(--color-tinta)',
    icon: 'text-teal-luz',
  },
  solid: {
    stroke: 'var(--color-teal-accesible)',
    fill: 'var(--color-teal-accesible)',
    icon: 'text-white',
  },
  tile: {
    stroke: 'var(--tile-hex-stroke)',
    fill: 'var(--tile-hex-fill)',
    icon: 'text-[var(--tile-hex-icon)]',
  },
}

export function HexIcon({
  icon: Icon,
  tone = 'light',
  size = 56,
  className,
}: {
  icon: LucideIcon
  tone?: Tone
  size?: number
  className?: string
}) {
  const style = toneStyles[tone]
  return (
    <span
      aria-hidden="true"
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center',
        className
      )}
      style={{ width: size, height: size * 1.1 }}
    >
      <svg viewBox="0 0 100 110" className="absolute inset-0 h-full w-full">
        <path
          d="M50 4 L94 29 L94 81 L50 106 L6 81 L6 29 Z"
          fill={style.fill}
          stroke={style.stroke}
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
      <Icon
        className={cn('relative', style.icon)}
        size={Math.round(size * 0.42)}
        strokeWidth={2}
        absoluteStrokeWidth
      />
    </span>
  )
}
