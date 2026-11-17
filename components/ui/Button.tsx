import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

type Variant = 'primary' | 'secondary' | 'accent' | 'secondaryDark'

/**
 * Manual §3.6 buttons: pill radius, 16×28 padding, Manrope 800.
 * - primary: Tinta fill, white text; hover goes teal (Teal Accesible, so the
 *   white label keeps 5.6:1 — plain Teal would drop it to 3.0:1).
 * - secondary: 2px Tinta outline.
 * - accent: Ocre Sol with Tinta text (5.6:1) — downloads and dark-band CTAs.
 * - secondaryDark: outline variant for Tinta surfaces.
 */
const variantClasses: Record<Variant, string> = {
  primary: 'bg-tinta text-white hover:bg-teal-accesible',
  secondary: 'border-2 border-tinta text-tinta hover:bg-tinta hover:text-white',
  accent: 'bg-ocre-sol text-tinta hover:bg-sol',
  secondaryDark: 'border-2 border-teal-luz text-white hover:bg-teal-luz hover:text-tinta',
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
}) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-extrabold tracking-[0.01em] transition-colors duration-200 ease-[var(--ease-entry)]',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </a>
  )
}
