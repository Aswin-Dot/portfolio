const projects = [
  {
    num: "01",
    name: "normify",
    arrow: "↗",
    desc: "Bulk image normalization CLI + Web UI with Claude Vision AI quality gate. Born at Pikvita.",
    tags: ["Node.js", "Claude Vision", "Slack Webhooks"],
    primaryTag: "Node.js",
    link: "https://github.com/Aswin-Dot/normify",
  },
  {
    num: "02",
    name: "startboard",
    arrow: "↗",
    desc: "The 6 metrics that matter for an early-stage consumer app. Built for founders by a founder.",
    tags: ["React", "Recharts", "15+ Metrics"],
    primaryTag: "React",
    link: "https://github.com/Aswin-Dot/startboard",
  },
  {
    num: "03",
    name: "prd-to-tasks",
    arrow: "↗",
    desc: "PRD in → structured dev tasks out. Streaming Claude API, two-panel layout.",
    tags: ["Claude API", "Jira", "Product"],
    primaryTag: "Claude API",
    link: "https://github.com/Aswin-Dot/prd-to-tasks",
  },
  {
    num: "04",
    name: "screenshotter",
    arrow: "↗",
    desc: "App Store marketing screenshots without Figma. Canvas compositing + AI captions.",
    tags: ["Canvas API", "Claude Vision", "JSZip"],
    primaryTag: "Canvas API",
    link: "https://github.com/Aswin-Dot/screenshotter",
  },
  {
    num: "05",
    name: "arcade-games",
    arrow: "↗",
    desc: "15 mobile games, one codebase, each live on the App Store. Built and shipped solo using AI",
    tags: ["React Native", "TypeScript", "Expo", "Mono-Repo"],
    primaryTag: "React Native",
    link: "https://github.com/Aswin-Dot/arcade-games",
    wide: true,
  },
];

function ProjectCell({ project, isMobile, isTablet }) {
  const cols = isMobile ? 1 : isTablet ? 2 : 3
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="proj-cell"
      style={{
        gridColumn: (!isMobile && !isTablet && project.wide) ? 'span 2' : 'span 1',
        padding: isMobile ? '24px 20px' : '32px 36px',
        borderRight: isMobile ? 'none' : '0.5px solid var(--border)',
        borderBottom: '0.5px solid var(--border)',
        display: 'block', textDecoration: 'none',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#bbb', letterSpacing: '1px', fontFamily: 'DM Mono, monospace' }}>{project.num}</span>
        <span style={{ fontSize: '16px', color: '#999', transition: 'color 0.15s' }}>{project.arrow}</span>
      </div>
      <div style={{ fontSize: isMobile ? '16px' : '17px', fontWeight: 700, color: '#111', marginBottom: '8px', letterSpacing: '-0.02em' }}>{project.name}</div>
      <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>{project.desc}</div>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {project.tags.map((tag, i) => (
          <span key={i} style={{
            fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '4px',
            background: tag === project.primaryTag ? '#111' : '#f3f3f3',
            color: tag === project.primaryTag ? '#fff' : '#555',
            border: `0.5px solid ${tag === project.primaryTag ? '#111' : 'var(--border)'}`,
            letterSpacing: '0.2px',
          }}>{tag}</span>
        ))}
      </div>
    </a>
  )
}

export default function Work({ isMobile, isTablet }) {
  const cols = isMobile ? 1 : isTablet ? 2 : 3

  return (
    <section id="work" style={{ borderBottom: '0.5px solid var(--border)' }} className="section-reveal">
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: isMobile ? '10px' : 0, padding: isMobile ? '28px 20px 20px' : '40px 56px 32px' }}>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', fontFamily: 'DM Mono, monospace' }}>Work</div>
          <div style={{ fontSize: isMobile ? '22px' : '26px', fontWeight: 800, color: '#111', letterSpacing: '-0.03em' }}>Things I've built</div>
        </div>
        <a href="https://github.com/Aswin-Dot" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '12px', color: '#888', borderBottom: '0.5px solid var(--border-mid)', paddingBottom: '1px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
          view all on GitHub ↗
        </a>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        borderTop: '0.5px solid var(--border)',
      }}>
        {projects.map((p, i) => (
          <ProjectCell key={i} project={p} isMobile={isMobile} isTablet={isTablet} />
        ))}
      </div>
    </section>
  )
}
