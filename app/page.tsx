import Link from "next/link";
import { LESSONS, PHASES } from "@/lib/data";

export default function HomePage() {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "40px 20px 72px" }}>
      <h1
        style={{
          font: "800 clamp(32px,6vw,44px)/1.05 var(--font-sans)",
          letterSpacing: "-0.03em",
          margin: 0,
        }}
      >
        The Design Phase
      </h1>
      <p
        style={{
          font: "400 clamp(16px,2.2vw,18px)/1.5 var(--font-sans)",
          color: "var(--by-text-muted)",
          margin: "10px 0 0",
          maxWidth: "56ch",
        }}
      >
        Five lessons that take your app from your Phase 1 docs to a tested, polished app, ready for
        an engineer.
      </p>

      {/* Lessons */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 28 }}>
        {LESSONS.map((l) => (
          <Link
            key={l.id}
            href={`/lesson/${l.num}`}
            className="by-lift"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              textDecoration: "none",
              background: "var(--by-surface)",
              borderRadius: 16,
              boxShadow: "var(--shadow-card),var(--shadow-hairline)",
              padding: "18px 20px",
            }}
          >
            <span
              style={{
                font: "800 18px/1 var(--font-sans)",
                color: "#fff",
                background: "var(--by-gradient-primary)",
                width: 44,
                height: 44,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {l.num}
            </span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span
                style={{
                  display: "block",
                  fontWeight: 600,
                  fontSize: 12,
                  color: "var(--by-text-muted)",
                }}
              >
                {l.part} · {l.length}
              </span>
              <span
                style={{
                  display: "block",
                  fontWeight: 700,
                  fontSize: 19,
                  letterSpacing: "-0.01em",
                  color: "var(--by-text)",
                  marginTop: 3,
                }}
              >
                {l.title}
              </span>
              <span
                style={{
                  display: "block",
                  font: "400 14.5px/1.5 var(--font-sans)",
                  color: "var(--by-text-muted)",
                  marginTop: 3,
                }}
              >
                {l.summary}
              </span>
            </span>
            <span aria-hidden style={{ fontSize: 20, color: "var(--by-text-muted)", flexShrink: 0 }}>
              →
            </span>
          </Link>
        ))}
      </div>

      {/* Four-phase journey */}
      <section style={{ marginTop: 44 }}>
        <h2
          style={{
            fontWeight: 600,
            fontSize: 14,
            color: "var(--by-text-muted)",
            margin: "0 0 12px",
          }}
        >
          Where this fits in Built Young
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
            gap: 10,
          }}
        >
          {PHASES.map((p) => {
            const cur = p.status === "current";
            return (
              <div
                key={p.n}
                style={{
                  borderRadius: 12,
                  padding: "12px 14px",
                  background: cur ? "var(--by-primary-light)" : "transparent",
                  boxShadow: cur
                    ? "inset 0 0 0 1.5px var(--by-primary)"
                    : "inset 0 0 0 1px var(--by-border)",
                }}
              >
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 11.5,
                    color: cur ? "var(--by-warning-ink)" : "var(--by-text-muted)",
                  }}
                >
                  Phase {p.n}
                  {cur ? " · You are here" : p.status === "done" ? " · Done" : ""}
                </div>
                <div
                  style={{ fontWeight: 700, fontSize: 14, color: "var(--by-text)", marginTop: 3 }}
                >
                  {p.name}
                </div>
                <p
                  style={{
                    font: "400 12.5px/1.45 var(--font-sans)",
                    color: cur ? "var(--by-navy)" : "var(--by-text-muted)",
                    margin: "4px 0 0",
                  }}
                >
                  {p.focus}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
