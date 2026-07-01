import Link from "next/link";
import { SESSIONS } from "@/lib/data";

export default function OverviewPage() {
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
        Phase 2 — Design
      </span>
      <h1
        style={{
          font: "800 clamp(32px,5vw,48px)/1.05 var(--font-sans)",
          letterSpacing: "-0.03em",
          margin: "14px 0 0",
          maxWidth: "20ch",
        }}
      >
        The Design phase at a glance
      </h1>
      <p
        style={{
          font: "400 clamp(16px,2.2vw,20px)/1.5 var(--font-sans)",
          color: "var(--by-text-muted)",
          margin: "18px 0 0",
          maxWidth: "62ch",
        }}
      >
        Three sessions of roughly an hour each move you from a written PRD to a build-ready,
        high-fidelity front end — in three arcs.
      </p>

      <div
        style={{
          marginTop: 32,
          background: "var(--by-accent-tint)",
          borderRadius: 16,
          boxShadow: "inset 0 0 0 1px rgba(42,157,144,0.25)",
          padding: "22px 24px",
          display: "flex",
          gap: 16,
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 11,
            background: "var(--by-accent)",
            color: "#fff",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: 16,
          }}
        >
          1
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 16, color: "var(--by-accent-ink)" }}>
            Phase 1 — Problem &amp; Validation
          </div>
          <p
            style={{
              font: "400 15px/1.55 var(--font-sans)",
              color: "var(--by-navy)",
              margin: "6px 0 0",
              maxWidth: "70ch",
            }}
          >
            In Phase 1, you worked with another instructor to write a{" "}
            <strong>product requirements document (PRD)</strong> for your own product — what
            you&apos;re building, the problem it solves, and who it&apos;s for. That PRD is the
            primary input to Session 1 of this phase.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: 16,
          marginTop: 24,
        }}
      >
        {SESSIONS.map((s) => (
          <div
            key={s.id}
            style={{
              background: "var(--by-surface)",
              borderRadius: 16,
              boxShadow: "var(--shadow-card),var(--shadow-hairline)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ height: 8, background: "var(--by-gradient-primary)" }} />
            <div
              style={{
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                flex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    font: "800 15px/1 var(--font-sans)",
                    color: "#fff",
                    background: "var(--by-navy)",
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {s.num}
                </span>
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: 12,
                    color: "var(--by-text-muted)",
                    background: "var(--by-surface-muted)",
                    padding: "5px 11px",
                    borderRadius: 9999,
                  }}
                >
                  {s.duration}
                </span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em" }}>
                {s.title}
              </div>
              <p
                style={{
                  font: "400 14.5px/1.55 var(--font-sans)",
                  color: "var(--by-text-muted)",
                  margin: 0,
                }}
              >
                {s.focus}
              </p>
              <div style={{ marginTop: 2 }}>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--by-text-muted)",
                    marginBottom: 8,
                  }}
                >
                  You&apos;ll leave with
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {s.outcomes.map((o) => (
                    <div key={o} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 9999,
                          background: "var(--by-primary)",
                          marginTop: 7,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          font: "400 13.5px/1.45 var(--font-sans)",
                          color: "var(--by-text)",
                        }}
                      >
                        {o}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href={`/session/${s.route}`}
                style={{
                  cursor: "pointer",
                  marginTop: 6,
                  fontWeight: 600,
                  fontSize: 14,
                  color: "var(--by-primary-dark)",
                  textDecoration: "none",
                }}
              >
                Open session →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <p
        style={{
          font: "400 13px/1.6 var(--font-sans)",
          color: "var(--by-text-muted)",
          margin: "28px 0 0",
          maxWidth: "70ch",
          fontStyle: "italic",
        }}
      >
        A note on wording: “PRD” here means your product PRD from Phase 1. The session content
        below is all about turning that document into a real, designed product.
      </p>
    </div>
  );
}
