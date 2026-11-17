import Image from 'next/image'
import logoColor from '@/public/brand/intelicrop-logo.png'
import logoNegativo from '@/public/brand/intelicrop-logo-negativo.png'

/**
 * Official horizontal logo, extracted from the brand manual's kit — never
 * retyped or redrawn (manual §2.1). `negativo` is for Tinta surfaces.
 * Minimum digital height: 32px.
 */
export function Logo({
  variant = 'color',
  height = 36,
  alt = 'InteliCrop',
  preload = false,
}: {
  variant?: 'color' | 'negativo'
  height?: number
  alt?: string
  preload?: boolean
}) {
  const src = variant === 'negativo' ? logoNegativo : logoColor
  return (
    <Image
      src={src}
      alt={alt}
      height={Math.max(height, 32)}
      width={Math.round((Math.max(height, 32) * src.width) / src.height)}
      preload={preload}
    />
  )
}
