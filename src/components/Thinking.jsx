const cases = [
  {
    company: 'Airbnb', focus: 'Onboarding', accent: '#FF385C',
    bg: '#100810', eyebrow: 'Airbnb · Onboarding',
    title: 'Activation', sub: '7 interviews · 3 ICP types · 4% → 16%',
    tags: ['Activation', 'JTBD'],
    link: 'https://tide-canopy-e4c.notion.site/Airbnb-Onboarding-33280861ae088075b7f6ea7957e88544',
  },
  {
    company: 'Pincode', focus: 'Engagement', accent: '#6366F1',
    bg: '#06080f', eyebrow: 'Pincode · Engagement',
    title: 'Retention', sub: '5 campaigns · 3× order frequency',
    tags: ['Engagement', 'Campaigns'],
    link: 'https://tide-canopy-e4c.notion.site/Pincode-Engagement-Retention-33280861ae08803cba19d4ba6a649e50',
  },
  {
    company: 'Udacity', focus: 'Acquisition', accent: '#02B3E4',
    bg: '#06090d', eyebrow: 'Udacity · Acquisition',
    title: '₹1,360 Cr SOM', sub: 'SEO · Landing page · Referral design',
    tags: ['Acquisition', 'SEO'],
    link: 'https://tide-canopy-e4c.notion.site/Udacity-Acquisition-33280861ae08801e82b7f2d9bec1495d',
  },
  {
    company: 'Strava', focus: 'Retention', accent: '#FC4C02',
    bg: '#0a0700', eyebrow: 'Strava · Retention',
    title: 'D30: 9% → ?', sub: '5 product hooks · 6 campaigns · 12 interviews',
    tags: ['Retention', 'Hooks'],
    link: 'https://tide-canopy-e4c.notion.site/Strava-Engagement-Retention-33280861ae0880058847c32418ebea1c',
  },
]

function CaseCell({ c, isRight, isMobile }) {
  return (
    <a
      href={c.link} target="_blank" rel="noopener noreferrer"
      className="case-cell"
      style={{
        borderRight: (isRight || isMobile) ? 'none' : '0.5px solid var(--border)',
        borderBottom: '0.5px solid var(--border)',
        overflow: 'hidden', display: 'block', textDecoration: 'none',
      }}
    >
      <div className="case-cover-img" style={{
        background: c.bg,
        padding: isMobile ? '24px 20px 20px' : '28px 28px 24px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        minHeight: isMobile ? '170px' : '210px',
        transition: 'opacity 0.15s',
      }}>
        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: c.accent, fontFamily: 'DM Mono, monospace' }}>
          {c.eyebrow}
        </div>
        <div>
          <div style={{ fontSize: isMobile ? '24px' : '28px', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '8px' }}>
            {c.title}
          </div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Mono, monospace', marginBottom: '14px' }}>
            {c.sub}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {c.tags.map((t, i) => (
              <span key={i} style={{
                fontSize: '10px', fontWeight: 600, padding: '3px 9px', borderRadius: '3px',
                background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)',
                border: '0.5px solid rgba(255,255,255,0.12)',
              }}>{t}</span>
            ))}
            <span style={{ marginLeft: 'auto', fontSize: '14px', color: 'rgba(255,255,255,0.3)' }}>↗</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default function Thinking({ isMobile }) {
  return (
    <section id="thinking" style={{ borderBottom: '0.5px solid var(--border)' }} className="section-reveal">
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: isMobile ? '10px' : 0, padding: isMobile ? '28px 20px 20px' : '40px 56px 32px' }}>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', fontFamily: 'DM Mono, monospace' }}>Thinking</div>
          <div style={{ fontSize: isMobile ? '22px' : '26px', fontWeight: 800, color: '#111', letterSpacing: '-0.03em' }}>Products I've thought about</div>
        </div>
        <a href="https://tide-canopy-e4c.notion.site/Aswin-Raj-Portfolio-31a80861ae088095aea7cd48a35aa9e5"
          target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '12px', color: '#888', borderBottom: '0.5px solid var(--border-mid)', paddingBottom: '1px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
          view on Notion ↗
        </a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', borderTop: '0.5px solid var(--border)' }}>
        {cases.map((c, i) => <CaseCell key={i} c={c} isRight={i % 2 === 1} isMobile={isMobile} />)}
      </div>
    </section>
  )
}
