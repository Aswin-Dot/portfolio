export default function VideoSection({ isMobile, isTablet }) {
  const px = isMobile ? '20px' : '56px'

  return (
    <section id="video" style={{ borderBottom: '0.5px solid var(--border)', padding: isMobile ? '40px 20px' : '56px 56px' }} className="section-reveal">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: isMobile ? '20px' : '32px' }}>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', fontFamily: 'DM Mono, monospace' }}>Intro</div>
          <div style={{ fontSize: isMobile ? '18px' : '24px', fontWeight: 800, color: '#111', letterSpacing: '-0.03em' }}>Before you read further, watch this</div>
        </div>
        {!isMobile && <span style={{ fontSize: '13px', color: '#999', fontFamily: 'DM Mono, monospace' }}>2 min · no fluff</span>}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 260px' : '1fr 340px',
        gap: isMobile ? '16px' : '28px',
        alignItems: 'start',
      }}>
        <div style={{
          background: '#0a0a0a', borderRadius: '10px', aspectRatio: '16/9',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden', border: '0.5px solid #1a1a1a',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, #1a1a2e 0%, #0a0a0a 70%)' }} />

          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div className="play-pulse" style={{
              position: 'relative', width: '64px', height: '64px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)', border: '0.5px solid rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'none',
            }}>
              <svg width="18" height="18" viewBox="0 0 16 16" fill="white"><polygon points="5,3 13,8 5,13" /></svg>
            </div>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'DM Mono, monospace', letterSpacing: '1px' }}>PLAY</span>
          </div>

          <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>Why I do what I do</div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Mono, monospace' }}>Aswin Raj · Product Engineer · 2026</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { label: 'The short version', body: 'Most engineers build what they\'re told. Most PMs spec what they can\'t build. I\'ve always been uncomfortable being either of those people.' },
            { label: 'The Pikvita moment', body: '300 user interviews. Wrong audience. Right pivot.', quote: '"We weren\'t solving the wrong problem. We were solving it for the wrong people."' },
            { label: 'What I\'m looking for', body: 'A problem worth showing up for every day.' },
          ].map((card, i) => (
            <div key={i} style={{ background: '#fafafa', border: '0.5px solid var(--border)', borderRadius: '8px', padding: isMobile ? '14px 16px' : '18px 20px' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#aaa', marginBottom: '10px', fontFamily: 'DM Mono, monospace' }}>
                {card.label}
              </div>
              <div style={{ fontSize: '14px', color: '#333', lineHeight: 1.6 }}>{card.body}</div>
              {card.quote && (
                <div style={{ fontSize: '13px', color: '#666', fontStyle: 'italic', lineHeight: 1.65, borderLeft: '2px solid var(--border)', paddingLeft: '14px', marginTop: '12px' }}>
                  {card.quote}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
