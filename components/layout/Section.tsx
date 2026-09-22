import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'
import { Container } from './Container'

type Surface = 'canopy' | 'field'

const surfaceClasses: Record<Surface, string> = {
  canopy: 'bg-canopy text-field',
  field: 'bg-field text-canopy',
}

export function Section({
  id,
  surface,
  children,
  className,
  containerClassName,
  ariaLabel,
}: {
  id?: string
  surface: Surface
  children: ReactNode
  className?: string
  containerClassName?: string
  ariaLabel?: string
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      data-surface={surface === 'canopy' ? 'dark' : 'light'}
      className={cn('py-[clamp(96px,12vh,200px)]', surfaceClasses[surface], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
