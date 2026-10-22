import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'

export const runtime = 'nodejs'
export const alt = 'Goran Stefanovski - Full-Stack Developer & Team Lead'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const portrait = await readFile(path.join(process.cwd(), 'public/og-portrait.jpg'))
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 64,
          padding: '0 96px',
          background: 'linear-gradient(135deg, #fbe2e3 0%, #f9fafb 50%, #dbd7fb 100%)',
          color: '#030712',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={portraitSrc}
          width={300}
          height={300}
          alt=""
          style={{ borderRadius: '50%', border: '10px solid white', objectFit: 'cover' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 72, fontWeight: 700 }}>Goran Stefanovski</div>
          <div style={{ fontSize: 40, marginTop: 12, color: '#374151' }}>
            Full-Stack Developer & Team Lead
          </div>
          <div style={{ fontSize: 28, marginTop: 32, color: '#6b7280' }}>
            React · React Native · Laravel · tevidma.com
          </div>
        </div>
      </div>
    ),
    size
  )
}
