import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site-config'

export const alt = 'IntelCrop — Digitalización | Inteligencia Agrícola | Agrofinanzas'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        background: '#0B3B2E',
        padding: '90px',
      }}
    >
      <div
        style={{
          fontSize: 76,
          fontWeight: 700,
          color: '#F5F3EC',
          letterSpacing: '-0.01em',
        }}
      >
        IntelCrop
      </div>
      <div
        style={{
          display: 'flex',
          width: 140,
          height: 2,
          background: '#2FAFA3',
          margin: '36px 0',
        }}
      />
      <div
        style={{
          fontSize: 30,
          fontWeight: 600,
          color: '#2FAFA3',
          letterSpacing: '0.04em',
        }}
      >
        {siteConfig.descriptor}
      </div>
    </div>,
    { ...size }
  )
}
