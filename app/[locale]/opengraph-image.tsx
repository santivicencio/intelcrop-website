import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const alt =
  'InteliCrop — AI para el agro. La tierra habla. Nosotros la entendemos.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** Manual §3.5 LinkedIn banner layout, reused as the 1200×627 share image. */
export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), 'public/brand/intelicrop-logo-negativo.png')
  )
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#0B3B45',
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', padding: '72px 88px 0' }}>
        <img src={logoSrc} width={328} height={94} alt="" />
        <div
          style={{
            display: 'flex',
            marginTop: 64,
            fontSize: 80,
            fontWeight: 800,
            color: '#FFFFFF',
          }}
        >
          <span style={{ color: '#E0A63F', marginRight: 22 }}>AI</span>
          para el agro.
        </div>
        <div style={{ display: 'flex', marginTop: 18, fontSize: 34, color: '#5ED3B8' }}>
          La tierra habla. Nosotros la entendemos.
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', height: 26, background: '#2F5E3A' }} />
        <div style={{ display: 'flex', height: 22, background: '#3E7D3A' }} />
        <div style={{ display: 'flex', height: 20, background: '#E0A63F' }} />
        <div style={{ display: 'flex', height: 18, background: '#6B4A2B' }} />
      </div>
    </div>,
    { ...size }
  )
}
