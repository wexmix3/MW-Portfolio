import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Max Wexley — Finance Analyst & Builder';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,203,5,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,203,5,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Gold accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '6px',
            height: '100%',
            background: '#FFCB05',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#FFCB05',
            }}
          />
          <span style={{ color: '#FFCB05', fontSize: '16px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Finance Analyst · Builder · New York City
          </span>
        </div>

        {/* Name */}
        <div style={{ color: '#fafafa', fontSize: '88px', fontWeight: 700, lineHeight: 1, marginBottom: '24px', letterSpacing: '-2px' }}>
          Max Wexley
        </div>

        {/* Tagline */}
        <div style={{ color: '#94a3b8', fontSize: '28px', fontWeight: 400, marginBottom: '56px' }}>
          Finance by day. Builder by nature.
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ color: '#FFCB05', fontSize: '22px', fontWeight: 700 }}>BBVA</span>
            <span style={{ color: '#64748b', fontSize: '14px' }}>Energy Client Coverage</span>
          </div>
          <div style={{ width: '1px', height: '40px', background: '#1e2030' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ color: '#FFCB05', fontSize: '22px', fontWeight: 700 }}>Chapterly</span>
            <span style={{ color: '#64748b', fontSize: '14px' }}>getchapterly.com</span>
          </div>
          <div style={{ width: '1px', height: '40px', background: '#1e2030' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ color: '#FFCB05', fontSize: '22px', fontWeight: 700 }}>Michigan &apos;24</span>
            <span style={{ color: '#64748b', fontSize: '14px' }}>Economics & Environment</span>
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            color: '#334155',
            fontSize: '16px',
          }}
        >
          maxwexley.com
        </div>
      </div>
    ),
    { ...size }
  );
}