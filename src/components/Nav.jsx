import { useState } from 'react'

export default function Nav({ isMobile }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: isMobile ? '0 20px' : '0 48px',
        height: '56px', borderBottom: '0.5px solid var(--border)',
        background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '13px', fontWeight: 700, color: '#111', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '1px' }}>
          AR<span className="cursor-blink" />
        </span>

        {isMobile ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={() => handleScroll('contact')}
              style={{ background: '#111', border: 'none', cursor: 'none', fontSize: '12px', fontWeight: 700, color: '#fff', padding: '7px 14px', borderRadius: '5px', fontFamily: 'DM Sans, sans-serif' }}>
              Get in touch →
            </button>
            <button
              onClick={() => setMenuOpen(v => !v)}
              style={{ background: 'none', border: '0.5px solid var(--border-mid)', borderRadius: '4px', padding: '6px 8px', cursor: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}
              aria-label="Menu"
            >
              <span style={{ display: 'block', width: '16px', height: '1.5px', background: '#111', borderRadius: '1px' }} />
              <span style={{ display: 'block', width: '16px', height: '1.5px', background: '#111', borderRadius: '1px' }} />
              <span style={{ display: 'block', width: '16px', height: '1.5px', background: '#111', borderRadius: '1px' }} />
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {['work', 'thinking', 'about'].map(s => (
              <button key={s} className="nav-link" onClick={() => handleScroll(s)}
                style={{ background: 'none', border: 'none', cursor: 'none', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}>
                {s}
              </button>
            ))}

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px',
                textTransform: 'uppercase', color: '#111',
                border: '0.5px solid var(--border-mid)', padding: '6px 12px',
                borderRadius: '4px', textDecoration: 'none',
                transition: 'all 0.15s',
                fontFamily: 'DM Mono, monospace',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#111' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#111'; e.currentTarget.style.borderColor = 'var(--border-mid)' }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="2" y="1" width="8" height="10" rx="1" />
                <line x1="4" y1="4" x2="8" y2="4" />
                <line x1="4" y1="6" x2="8" y2="6" />
                <line x1="4" y1="8" x2="6" y2="8" />
              </svg>
              Resume ↓
            </a>

            <button onClick={() => handleScroll('contact')}
              style={{
                background: 'none', border: 'none', cursor: 'none',
                fontSize: '13px', fontWeight: 700, color: '#111',
                borderBottom: '1.5px solid #111', paddingBottom: '1px',
                fontFamily: 'DM Sans, sans-serif',
              }}>
              Get in touch →
            </button>
          </div>
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: '56px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(12px)',
          borderBottom: '0.5px solid var(--border)',
          padding: '12px 20px 16px',
        }}>
          {['work', 'thinking', 'about'].map(s => (
            <button key={s} onClick={() => handleScroll(s)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: 'none', border: 'none', cursor: 'none',
                fontSize: '15px', fontWeight: 600, color: '#111',
                padding: '12px 0', borderBottom: '0.5px solid #f5f5f5',
                fontFamily: 'DM Sans, sans-serif',
              }}>
              {s}
            </button>
          ))}
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} download
            style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#666', padding: '12px 0', textDecoration: 'none', fontFamily: 'DM Mono, monospace', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Resume ↓
          </a>
        </div>
      )}
    </>
  )
}
