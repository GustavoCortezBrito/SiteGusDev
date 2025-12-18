import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Gustavo Cortez - Desenvolvedor Web'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '80px',
            width: '100%',
            zIndex: 1,
          }}
        >
          {/* Left side - Text */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '700px',
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 20,
                lineHeight: 1.1,
              }}
            >
              Transformo ideias em{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                sites que vendem
              </span>{' '}
              🚀
            </div>
            <div
              style={{
                fontSize: 32,
                color: '#d1d5db',
                marginBottom: 30,
                lineHeight: 1.4,
              }}
            >
              Desenvolvedor Web especializado em criar soluções digitais modernas e eficientes
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Gustavo Cortez
              </div>
              <div
                style={{
                  fontSize: 24,
                  color: '#9ca3af',
                }}
              >
                •
              </div>
              <div
                style={{
                  fontSize: 24,
                  color: '#a855f7',
                }}
              >
                Medicina & Tecnologia
              </div>
            </div>
          </div>

          {/* Right side - Avatar */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 280,
                height: 280,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 120,
                fontWeight: 'bold',
                color: 'white',
                border: '6px solid rgba(168, 85, 247, 0.3)',
                boxShadow: '0 20px 60px rgba(168, 85, 247, 0.4)',
              }}
            >
              GC
            </div>
          </div>
        </div>

        {/* Bottom badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 80,
            display: 'flex',
            alignItems: 'center',
            gap: 15,
            padding: '15px 30px',
            background: 'rgba(168, 85, 247, 0.2)',
            borderRadius: 50,
            border: '2px solid rgba(168, 85, 247, 0.3)',
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: '#a855f7',
              fontWeight: 'bold',
            }}
          >
            gustavocortez.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}