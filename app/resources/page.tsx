import { RESOURCE_GROUPS } from "@/lib/data";

export default function ResourcesPage() {
  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "52px 20px 72px" }}>
      <span
        style={{
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--by-accent)",
        }}
      >
        Tools &amp; links
      </span>
      <h1
        style={{
          font: "800 clamp(32px,5vw,48px)/1.05 var(--font-sans)",
          letterSpacing: "-0.03em",
          margin: "14px 0 0",
        }}
      >
        Resources
      </h1>
      <p
        style={{
          font: "400 clamp(16px,2.2vw,20px)/1.5 var(--font-sans)",
          color: "var(--by-text-muted)",
          margin: "16px 0 0",
          maxWidth: "60ch",
        }}
      >
        Everything you&apos;ll reach for across the Design phase, grouped by where it comes up.
        Links open in a new tab.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 32 }}>
        {RESOURCE_GROUPS.map((g) => (
          <div
            key={g.title}
            style={{
              background: "var(--by-surface)",
              borderRadius: 16,
              boxShadow: "var(--shadow-card),var(--shadow-hairline)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "18px 22px",
                borderBottom: "1px solid var(--by-border)",
                display: "flex",
                alignItems: "center",
                gap: 11,
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 12,
                  padding: "5px 11px",
                  borderRadius: 9999,
                  flexShrink: 0,
                  background: g.tone === "navy" ? "var(--by-navy)" : "var(--by-primary-light)",
                  color: g.tone === "navy" ? "#fff" : "var(--by-primary-dark)",
                }}
              >
                {g.tag}
              </span>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 17,
                  letterSpacing: "-0.01em",
                  color: "var(--by-text)",
                }}
              >
                {g.title}
              </span>
            </div>
            <div
              style={{
                padding: "16px 22px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
                gap: 10,
              }}
            >
              {g.links.map((r) => (
                <a
                  key={r.label + r.note}
                  href={r.url}
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    textDecoration: "none",
                    padding: "12px 14px",
                    borderRadius: 11,
                    background: "var(--by-surface-muted)",
                    boxShadow: "inset 0 0 0 1px var(--by-border)",
                  }}
                >
                  <span
                    style={{ fontWeight: 600, fontSize: 14, color: "var(--by-text)" }}
                  >
                    {r.label} ↗
                  </span>
                  <span
                    style={{ fontWeight: 400, fontSize: 12.5, color: "var(--by-text-muted)" }}
                  >
                    {r.note}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
