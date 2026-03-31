const items = [
  "Mobile App Development",
  "React Native",
  "Claude API",
  "TypeScript",
  "React.js",
  "Node.js",
  "Tailwind CSS",
  "NestJS",
  "MongoDB",
  "Firebase",
  "AppsFlyer",
  "Mixpanel",
  "Leadership",
  "Product Strategy",
  "User Research",
  "ICP Frameworks",
  "Product Development",
  "Operations Management",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: "#111",
        padding: "13px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        borderBottom: "0.5px solid #1a1a1a",
        borderTop: "0.5px solid #1a1a1a",
      }}
    >
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#777",
              padding: "0 24px",
              borderRight: "0.5px solid #2a2a2a",
              fontFamily: "DM Mono, monospace",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
