import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

/**
 * Manual §2.3 kicker: Manrope Bold, uppercase, wide tracking, Ocre. On light
 * surfaces it uses Ocre Accesible (Ocre itself is 2.7:1 on Crema); on Tinta, Ocre Sol.
 */
export function Kicker({
  children,
  tone = 'light',
  className,
  as: Tag = 'p',
}: {
  children: ReactNode
  tone?: 'light' | 'dark'
  className?: string
  as?: 'p' | 'span' | 'h3'
}) {
  return (
    <Tag
      className={cn(
        'text-kicker font-bold tracking-[0.3em] uppercase',
        tone === 'dark' ? 'text-ocre-sol' : 'text-ocre-accesible',
        className
      )}
    >
      {children}
    </Tag>
  )
}
