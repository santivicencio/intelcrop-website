import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

export function Label({
  children,
  className,
  as: Tag = 'span',
}: {
  children: ReactNode
  className?: string
  as?: ElementType
}) {
  return (
    <Tag
      className={cn(
        'font-mono text-xs font-medium tracking-[0.14em] uppercase',
        className
      )}
    >
      {children}
    </Tag>
  )
}
