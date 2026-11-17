import { cn } from '@/lib/utils/cn'

/**
 * Manual §2.5 "Capas del territorio": water · field · sun · earth bands.
 * Always at the bottom of a block, never inverted.
 */
export function TerritoryLayers({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={cn('block h-14 w-full md:h-20', className)}
    >
      <path
        d="M0 18 C240 4 480 10 720 16 C960 22 1200 8 1440 12 V90 H0 Z"
        fill="#2F5E3A"
      />
      <path
        d="M0 36 C260 28 520 40 760 34 C1000 28 1220 38 1440 32 V90 H0 Z"
        fill="var(--color-campo)"
      />
      <path
        d="M0 56 C300 50 560 60 820 54 C1080 48 1260 58 1440 52 V90 H0 Z"
        fill="var(--color-ocre-sol)"
      />
      <path
        d="M0 72 C320 68 600 76 880 70 C1120 66 1300 74 1440 70 V90 H0 Z"
        fill="var(--color-tierra)"
      />
    </svg>
  )
}
