import { cn } from '@/lib/utils/cn'

/** Manual §2.5 "Franja Teal → Ocre": from data to harvest. Covers, closings, dividers. */
export function TealOcreStripe({
  orientation = 'horizontal',
  className,
}: {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'block rounded-full',
        orientation === 'horizontal'
          ? 'h-1 w-24 bg-gradient-to-r from-teal to-ocre'
          : 'w-1 bg-gradient-to-b from-teal to-ocre',
        className
      )}
    />
  )
}
