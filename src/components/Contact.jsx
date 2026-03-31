const stack = [
  { key: 'Built with', val: 'React + Vite + Tailwind' },
  { key: 'Deployed to', val: 'GitHub Pages' },
  { key: 'Location', val: 'Bangalore, IN' },
  { key: 'Status', val: 'Got an interesting problem?' },
]

export default function Contact({ isMobile }) {
  return (
    <section id="contact" style={{ background: '#111', padding: isMobile ? '52px 20px' : '80px 56px' }} className="section-reveal">
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '56px', alignItems: 'end' }}>

        <div>
          <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(30px, 3.5vw, 44px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '16px' }}>
            If you have a problem worth solving, let's talk.
          </h2>
          <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.6, marginBottom: '28px' }}>
            Not looking for a title. Looking for the right problem.
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {[
              { label: 'aswincse10@gmail.com', href: 'mailto:aswincse10@gmail.com' },
              { label: 'LinkedIn ↗', href: 'https://linkedin.com/in/aswin-raj-195b13203' },
              { label: 'GitHub ↗', href: 'https://github.com/Aswin-Dot' },
              { label: 'Resume ↓', href: '/resume.pdf', download: true, muted: true },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.download ? undefined : '_blank'}
                rel="noopener noreferrer"
                download={link.download}
                style={{
                  fontSize: '13px', color: link.muted ? '#666' : '#ddd',
                  border: `0.5px solid ${link.muted ? '#2a2a2a' : '#444'}`,
                  padding: '10px 18px', borderRadius: '6px', textDecoration: 'none',
                  transition: 'border-color 0.15s, color 0.15s',
                  fontFamily: 'DM Sans, sans-serif',
                }}
                onMouseEnter={e => { if (!link.muted) { e.currentTarget.style.borderColor = '#888'; e.currentTarget.style.color = '#fff' } }}
                onMouseLeave={e => { if (!link.muted) { e.currentTarget.style.borderColor = '#444'; e.currentTarget.style.color = '#ddd' } }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.75, fontStyle: 'italic', borderLeft: '2px solid #2a2a2a', paddingLeft: '20px', marginBottom: '28px' }}>
            "If you've ever felt the gap between your product vision and what actually gets shipped — that gap is exactly where I work."
          </p>
          <div>
            {stack.map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: '0.5px solid #1f1f1f' }}>
                <span style={{ fontSize: '10px', color: '#555', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: 'DM Mono, monospace' }}>{row.key}</span>
                <span style={{ fontSize: '12px', color: '#888', fontFamily: 'DM Mono, monospace' }}>{row.val}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
