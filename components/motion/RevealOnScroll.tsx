'use client'

import type { ReactNode } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

/**
 * Fades and lifts content into place once, the first time it enters the viewport.
 * Under prefers-reduced-motion it renders the final state immediately — no opt-in required.
 */
export function RevealOnScroll({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li'
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = m[as]

  if (shouldReduceMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={cn('reveal-on-scroll', className)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
