import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

type ButtonProps = {
  href: string
  children: ReactNode
  className?: string
}

/** Primary CTA: thin border, no fill, hover fills gold with canopy text (4.85:1 — see contrast rule). Canopy/dark surfaces only. */
export function Button({ href, children, className }: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex min-h-11 items-center justify-center border border-current px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-[180ms] ease-[var(--ease-entry)] hover:border-gold hover:bg-gold hover:text-canopy',
        className
      )}
    >
      {children}
    </a>
  )
}

/** Secondary, text-only CTA with an underline. */
export function TextLink({ href, children, className }: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex min-h-11 items-center gap-2 text-sm font-medium underline decoration-1 underline-offset-4 transition-opacity duration-[180ms] hover:opacity-70',
        className
      )}
    >
      {children}
    </a>
  )
}
