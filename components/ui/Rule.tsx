import { cn } from '@/lib/utils/cn'

export function Rule({ className }: { className?: string }) {
  return <hr className={cn('border-t border-field-warm', className)} />
}
