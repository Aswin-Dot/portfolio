export default function Hero({ isMobile, isTablet }) {
  const stats = [
    {
      label: "Developer Experience",
      val: "5 yrs",
      sub: "Building Mobile Apps",
    },
    { label: "Startup Experience", val: "2 yrs", sub: "Running a Startup" },
    { label: "Apps Shipped", val: "20+", sub: "App Store · Play Store" },
    {
      label: "User Interviews",
      val: "300+",
      sub: "Surveys · ICP Frameworks · Research",
    },
  ];

  if (isMobile) {
    return (
      <section
        style={{
          borderBottom: "0.5px solid var(--border)",
          padding: "48px 20px 36px",
        }}
      >
        <div
          className="fade-up fade-up-1"
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "24px",
            fontFamily: "DM Mono, monospace",
          }}
        >
          Product Engineer · Startups · Bangalore
        </div>

        <h1
          className="fade-up fade-up-2"
          style={{
            fontSize: "clamp(36px, 10vw, 48px)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#111",
            marginBottom: "20px",
          }}
        >
          Most engineers
          <br />
          build what
          <br />
          <span style={{ color: "#ccc" }}>they're told.</span>
        </h1>

        <p
          className="fade-up fade-up-3"
          style={{
            fontSize: "15px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            marginBottom: "28px",
          }}
        >
          I think before I build, and build what I think. Five years building
          mobile apps, two years running a startup end to end.
        </p>

        <div
          className="fade-up fade-up-4"
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          <button
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              background: "#111",
              color: "#fff",
              padding: "12px 22px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: 700,
              border: "none",
              cursor: "none",
            }}
          >
            see my work ↓
          </button>
          <button
            onClick={() =>
              document
                .getElementById("video")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              background: "#fff",
              color: "#111",
              padding: "12px 18px",
              borderRadius: "6px",
              fontSize: "14px",
              border: "0.5px solid var(--border-mid)",
              cursor: "none",
              display: "flex",
              alignItems: "center",
              gap: "7px",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "#111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="7" height="7" viewBox="0 0 8 8" fill="#fff">
                <polygon points="2,1 7,4 2,7" />
              </svg>
            </span>
            watch intro
          </button>
        </div>

        {/* Stats 2x2 grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderTop: "0.5px solid var(--border)",
            borderLeft: "0.5px solid var(--border)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "20px 16px",
                borderRight: "0.5px solid var(--border)",
                borderBottom: i < 2 ? "0.5px solid var(--border)" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "8px",
                  fontFamily: "DM Mono, monospace",
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontSize: "26px",
                  fontWeight: 900,
                  color: "#111",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#999",
                  marginTop: "4px",
                  lineHeight: 1.3,
                }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: isTablet ? "1fr 240px" : "1fr 280px",
        borderBottom: "0.5px solid var(--border)",
        minHeight: "68vh",
      }}
    >
      <div
        style={{
          padding: isTablet ? "60px 36px 60px" : "80px 56px 72px",
          borderRight: "0.5px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          className="fade-up fade-up-1"
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "32px",
            fontFamily: "DM Mono, monospace",
          }}
        >
          Product Engineer · Startups · Bangalore
        </div>

        <h1
          className="fade-up fade-up-2"
          style={{
            fontSize: isTablet
              ? "clamp(36px, 5vw, 48px)"
              : "clamp(44px, 5.5vw, 64px)",
            fontWeight: 900,
            lineHeight: 1.04,
            letterSpacing: "-0.04em",
            color: "#111",
            marginBottom: "28px",
          }}
        >
          Most engineers
          <br />
          build what
          <br />
          <span style={{ color: "#ccc" }}>they're told.</span>
        </h1>

        <p
          className="fade-up fade-up-3"
          style={{
            fontSize: "17px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: "420px",
            marginBottom: "44px",
          }}
        >
          I think before I build, and build what I think. Five years building
          mobile apps, two years running a startup end to end.
        </p>

        <div
          className="fade-up fade-up-4"
          style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              background: "#111",
              color: "#fff",
              padding: "13px 28px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: 700,
              border: "none",
              cursor: "none",
              letterSpacing: "0.3px",
            }}
          >
            see my work ↓
          </button>
          <button
            onClick={() =>
              document
                .getElementById("video")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              background: "#fff",
              color: "#111",
              padding: "13px 22px",
              borderRadius: "6px",
              fontSize: "14px",
              border: "0.5px solid var(--border-mid)",
              cursor: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="#fff">
                <polygon points="2,1 7,4 2,7" />
              </svg>
            </span>
            watch intro video
          </button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {stats.map((s, i) => (
          <div
            key={i}
            className={`fade-up fade-up-${i + 2}`}
            style={{
              flex: 1,
              padding: "28px 28px",
              borderBottom:
                i < stats.length - 1 ? "0.5px solid var(--border)" : "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "12px",
                fontFamily: "DM Mono, monospace",
              }}
            >
              {s.label}
            </div>
            <div>
              <div
                style={{
                  fontSize: isTablet ? "28px" : "34px",
                  fontWeight: 900,
                  color: "#111",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#999",
                  marginTop: "6px",
                  lineHeight: 1.4,
                }}
              >
                {s.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
