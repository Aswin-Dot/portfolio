export default function Footer({ isMobile }) {
  return (
    <footer style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'flex-start' : 'center',
      gap: isMobile ? '4px' : 0,
      padding: isMobile ? '14px 20px' : '16px 56px',
      background: '#0a0a0a',
      borderTop: '0.5px solid #1a1a1a',
    }}>
      <span style={{ fontSize: '11px', color: '#555', fontFamily: 'DM Mono, monospace' }}>
        aswin-dot.github.io · 2026
      </span>
      <span style={{ fontSize: '11px', color: '#444', fontFamily: 'DM Mono, monospace' }}>
        designed + built by Aswin Raj
      </span>
    </footer>
  )
}
