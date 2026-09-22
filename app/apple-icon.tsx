import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0B3B2E',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', gap: 10 }}>
          <div
            style={{ width: 34, height: 34, borderRadius: 6, background: '#2FAFA3' }}
          />
          <div
            style={{ width: 34, height: 34, borderRadius: 6, background: 'transparent' }}
          />
          <div
            style={{ width: 34, height: 34, borderRadius: 6, background: '#2FAFA3' }}
          />
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <div
            style={{ width: 34, height: 34, borderRadius: 6, background: 'transparent' }}
          />
          <div
            style={{ width: 34, height: 34, borderRadius: 6, background: '#12938A' }}
          />
          <div
            style={{ width: 34, height: 34, borderRadius: 6, background: 'transparent' }}
          />
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <div
            style={{ width: 34, height: 34, borderRadius: 6, background: 'transparent' }}
          />
          <div
            style={{ width: 34, height: 34, borderRadius: 6, background: '#12938A' }}
          />
          <div
            style={{ width: 34, height: 34, borderRadius: 6, background: 'transparent' }}
          />
        </div>
      </div>
    </div>,
    { ...size }
  )
}
