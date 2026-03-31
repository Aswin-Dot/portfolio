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
          borderRadius: '10px', overflow: 'hidden', border: '0.5px solid #1a1a1a',
          position: 'relative', paddingBottom: '56.25%', height: 0,
        }}>
          <iframe
            src="https://www.loom.com/embed/9df8f83dec624acf8b6ff4a16aed0d9b"
            frameborder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
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
