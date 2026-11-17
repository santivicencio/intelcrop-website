import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'
import { Kicker } from './Kicker'

export function SectionHeading({
  id,
  kicker,
  children,
  subcopy,
  tone = 'light',
  className,
}: {
  id: string
  kicker: string
  children: ReactNode
  subcopy?: string
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <div className={cn('max-w-3xl', className)}>
      <Kicker tone={tone}>{kicker}</Kicker>
      <h2
        id={id}
        className="mt-4 text-h2 leading-[1.12] font-extrabold tracking-[-0.02em]"
      >
        {children}
      </h2>
      {subcopy && (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed',
            tone === 'dark' ? 'text-menta' : 'text-gris-texto'
          )}
        >
          {subcopy}
        </p>
      )}
    </div>
  )
}
