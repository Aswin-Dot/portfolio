const beliefs = [
  { num: '01', text: "User Research tells you who you're building for, what you build becomes the by product of figuring that out." },
  { num: '02', text: 'Conversion problems are almost always trust problems in disguise.' },
  { num: '03', text: 'Building the wrong thing well is the most expensive mistake a small team can make.' },
  { num: '04', text: "You can't compensate poor planning with hard work." },
  { num: '05', text: "AI won't replace developers. It'll widen the gap between good and mediocre ones." },
  { num: '06', text: 'The best engineers ask the most product questions.' },
]

const askMe = [
  { key: 'Pikvita', val: 'The pivot is a better story in person than in text' },
  { key: 'Building with AI', val: 'Day to day usage — not just the theory' },
  { key: 'Toastmasters', val: 'Learned more about communication on stage than anywhere else' },
  { key: 'Bike trips', val: "Something always goes wrong. Wayanad one's my favourite" },
  { key: 'Movies', val: 'The thought of watching a movie in a theatre excites me more than the movie itself' },
]

const leadershipLessons = [
  "Being an introvert is a skill issue. Humans are social creatures, and if you're not communicating things properly, you are just making life harder for yourself.",
  "Having empathy and showing empathy gives you two different outcomes.",
]

export default function About({ isMobile }) {
  const pad = isMobile ? '36px 20px' : '60px 56px'

  return (
    <section
      id="about"
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        borderBottom: "0.5px solid var(--border)",
      }}
      className="section-reveal"
    >
      <div
        style={{
          padding: pad,
          borderRight: isMobile ? "none" : "0.5px solid var(--border)",
          borderBottom: isMobile ? "0.5px solid var(--border)" : "none",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "24px",
            fontFamily: "DM Mono, monospace",
          }}
        >
          About
        </div>

        {[
          <>
            I started Pikvita thinking I was solving a supply problem.{" "}
            <strong style={{ color: "#111", fontWeight: 700 }}>
              300 user interviews later
            </strong>{" "}
            I realised I was solving it for the wrong audience entirely.
          </>,
          <>
            That's the thing about being close to both product and code — you
            notice the gap faster. When a feature doesn't move a metric, you
            feel it in both directions.
          </>,
          <>
            I've shipped 20+ apps, built a hyperlocal marketplace from zero, and
            now I use{" "}
            <strong style={{ color: "#111", fontWeight: 700 }}>
              AI to build
            </strong>{" "}
            tools that solve the problems I keep running into as a founder.
          </>,
        ].map((p, i) => (
          <p
            key={i}
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            {p}
          </p>
        ))}

        <div
          style={{
            height: "0.5px",
            background: "var(--border)",
            margin: "32px 0",
          }}
        />

        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "8px",
            fontFamily: "DM Mono, monospace",
          }}
        >
          Product Learnings
        </div>

        {beliefs.map((b, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "flex-start",
              padding: "14px 0",
              borderBottom:
                i < beliefs.length - 1 ? "0.5px solid #f0f0f0" : "none",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#ccc",
                fontFamily: "DM Mono, monospace",
                minWidth: "24px",
                marginTop: "2px",
              }}
            >
              {b.num}
            </span>
            <span style={{ fontSize: "15px", color: "#333", lineHeight: 1.6 }}>
              {b.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ padding: pad }}>
        <div style={{ marginBottom: "36px" }}>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "12px",
              fontFamily: "DM Mono, monospace",
            }}
          >
            What I'm optimising for
          </div>
          <p style={{ fontSize: "16px", color: "#333", lineHeight: 1.75 }}>
            A problem hard enough to need both product thinking and engineering.
            A team small enough that my decisions actually shape the product —
            not just contribute to it.
          </p>
        </div>

        <div style={{ marginBottom: "36px" }}>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "12px",
              fontFamily: "DM Mono, monospace",
            }}
          >
            Outside work
          </div>
          <p style={{ fontSize: "16px", color: "#333", lineHeight: 1.75 }}>
            Mountains. Music. Theatres.
            <br /> Thinking too hard about human relationships. Curious about
            Everything!
          </p>
        </div>

        <div style={{ marginBottom: "36px" }}>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "12px",
              fontFamily: "DM Mono, monospace",
            }}
          >
            Leadership Lessons
          </div>
          {leadershipLessons.map((lesson, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                marginBottom: i < leadershipLessons.length - 1 ? "12px" : 0,
              }}
            >
              <span
                style={{
                  color: "#ccc",
                  fontSize: "16px",
                  lineHeight: 1.75,
                  flexShrink: 0,
                  marginTop: "1px",
                }}
              >
                •
              </span>
              <span
                style={{ fontSize: "15px", color: "#333", lineHeight: 1.75 }}
              >
                {lesson}
              </span>
            </div>
          ))}
        </div>

        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "14px",
              fontFamily: "DM Mono, monospace",
            }}
          >
            Ask me about
          </div>
          <div
            style={{
              border: "0.5px solid var(--border)",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            {askMe.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: isMobile ? "12px 14px" : "14px 18px",
                  background: "#fff",
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                  borderBottom:
                    i < askMe.length - 1 ? "0.5px solid #f0f0f0" : "none",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#111",
                    minWidth: isMobile ? "90px" : "110px",
                    flexShrink: 0,
                  }}
                >
                  {item.key}
                </span>
                <span
                  style={{ fontSize: "13px", color: "#666", lineHeight: 1.5 }}
                >
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
