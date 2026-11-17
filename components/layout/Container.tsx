import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

/** Manual §3.6 grid: max width 1280px, 80px side margins on desktop, 20px on mobile. */
export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn('mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-20', className)}
    >
      <div className="mx-auto w-full max-w-[1280px]">{children}</div>
    </div>
  )
}
