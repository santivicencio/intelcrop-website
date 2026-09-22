import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'
import { Label } from './Label'

/**
 * Kicker text above a headline. `surface` picks the accent per the contrast rule:
 * teal-bright only on canopy, teal-deep only on field (see globals.css).
 */
export function Eyebrow({
  children,
  surface,
  className,
}: {
  children: ReactNode
  surface: 'canopy' | 'field'
  className?: string
}) {
  return (
    <Label
      as="p"
      className={cn(
        'mb-4',
        surface === 'canopy' ? 'text-teal-bright' : 'text-teal-deep',
        className
      )}
    >
      {children}
    </Label>
  )
}
