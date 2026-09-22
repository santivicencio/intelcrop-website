import { cn } from '@/lib/utils/cn'

export function NumberMark({ value, className }: { value: string; className?: string }) {
  return (
    <span
      className={cn(
        'tabular-nums block font-mono text-number-mark leading-none font-medium tracking-[-0.02em]',
        className
      )}
      aria-hidden="true"
    >
      {value}
    </span>
  )
}
