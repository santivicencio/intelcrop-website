import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'
import { Container } from './Container'

export type Surface = 'crema' | 'white' | 'menta' | 'tinta'

const surfaceClasses: Record<Surface, string> = {
  crema: 'bg-crema text-texto',
  white: 'bg-white text-texto',
  menta: 'bg-menta text-texto',
  tinta: 'bg-tinta text-menta',
}

export function Section({
  id,
  surface = 'crema',
  children,
  className,
  containerClassName,
  ariaLabelledBy,
  decor,
}: {
  id?: string
  surface?: Surface
  children: ReactNode
  className?: string
  containerClassName?: string
  ariaLabelledBy?: string
  /** Absolutely positioned background art (contour lines, satellite grid). */
  decor?: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      data-surface={surface === 'tinta' ? 'dark' : 'light'}
      className={cn(
        'relative isolate overflow-hidden py-20 md:py-28',
        surfaceClasses[surface],
        className
      )}
    >
      {decor}
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
