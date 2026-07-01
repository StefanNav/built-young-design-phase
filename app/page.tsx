import Link from "next/link";
import type { CSSProperties } from "react";
import { PHASES, HOWTO, SESSIONS } from "@/lib/data";

export default function HomePage() {
  const phaseCount = PHASES.length;

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: "var(--by-gradient-hero)",
          borderBottom: "1px solid var(--by-border)",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "64px 20px 56px" }}>
          <span
            style={{
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--by-accent)",
            }}
          >
            Built Young · Phase 2 of 4
          </span>
          <h1
            style={{
              font: "800 clamp(40px,7vw,68px)/1.02 var(--font-sans)",
              letterSpacing: "-0.03em",
              color: "var(--by-text)",
              margin: "16px 0 0",
              maxWidth: "14ch",
            }}
          >
            The Design Phase
          </h1>
          <p
            style={{
              font: "400 clamp(17px,2.4vw,21px)/1.5 var(--font-sans)",
              color: "var(--by-text-muted)",
              margin: "20px 0 0",
              maxWidth: "56ch",
            }}
          >
            Turn your PRD into a build-ready product — from a rough clickable prototype to a
            polished, high-fidelity front end. This is your companion for every session: what to
            prep, what we&apos;ll do, and what to take home.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
            <Link
              href="/session/1"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                borderRadius: 12,
                background: "var(--by-gradient-primary)",
                padding: "15px 26px",
                fontWeight: 600,
                fontSize: 16,
                color: "#fff",
              }}
            >
              Start with Session 1
            </Link>
            <Link
              href="/overview"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                borderRadius: 12,
                background: "var(--by-surface)",
                boxShadow: "inset 0 0 0 1px var(--by-border)",
                padding: "15px 26px",
                fontWeight: 600,
                fontSize: 16,
                color: "var(--by-text)",
              }}
            >
              See the phase overview
            </Link>
          </div>
        </div>
      </section>

      {/* Four-phase journey */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "56px 20px 8px" }}>
        <span
          style={{
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--by-text-muted)",
          }}
        >
          Where you are
        </span>
        <h2
          style={{
            font: "700 clamp(26px,4vw,34px)/1.1 var(--font-sans)",
            letterSpacing: "-0.02em",
            margin: "10px 0 6px",
          }}
        >
          The four-phase journey
        </h2>
        <p
          style={{
            font: "400 15px/1.5 var(--font-sans)",
            color: "var(--by-text-muted)",
            margin: "0 0 30px",
            maxWidth: "52ch",
          }}
        >
          Design is Phase 2 of 4. Here&apos;s the path you&apos;re moving along.
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {PHASES.map((p, i) => {
            const cur = p.status === "current";
            const done = p.status === "done";
            const nodeStyle: CSSProperties = {
              width: 46,
              height: 46,
              borderRadius: "50%",
              flexShrink: 0,
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 17,
              fontFamily: "var(--font-sans)",
              background: done
                ? "var(--by-gradient-primary)"
                : cur
                  ? "var(--by-navy)"
                  : "var(--by-surface)",
              color: done ? "#fff" : cur ? "#fff" : "var(--by-text-placeholder)",
              boxShadow: done
                ? "none"
                : cur
                  ? "0 0 0 5px var(--by-primary-light)"
                  : "inset 0 0 0 2px var(--by-border)",
            };
            const cardStyle: CSSProperties = {
              flex: 1,
              borderRadius: 14,
              padding: "15px 20px",
              marginBottom: 14,
              background: cur ? "var(--by-primary-light)" : "var(--by-surface)",
              boxShadow: cur
                ? "inset 0 0 0 2px var(--by-primary)"
                : "var(--shadow-card), var(--shadow-hairline)",
              opacity: !cur && !done ? 0.9 : 1,
            };
            return (
              <div key={p.n} style={{ display: "flex", gap: 20, alignItems: "stretch" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <div style={nodeStyle}>{done ? <span>✓</span> : <span>{p.n}</span>}</div>
                  {i < phaseCount - 1 && (
                    <div
                      style={{
                        width: 3,
                        flex: 1,
                        minHeight: 22,
                        marginTop: 6,
                        borderRadius: 3,
                        background: done ? "var(--by-primary)" : "var(--by-border)",
                      }}
                    />
                  )}
                </div>
                <div style={cardStyle}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: 11,
                        letterSpacing: "0.07em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                        color: cur ? "var(--by-primary-dark)" : "var(--by-text-muted)",
                      }}
                    >
                      Phase {p.n}
                    </span>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: 11,
                        padding: "4px 10px",
                        borderRadius: 9999,
                        whiteSpace: "nowrap",
                        background: cur
                          ? "var(--by-primary)"
                          : done
                            ? "var(--by-success-tint)"
                            : "var(--by-surface-muted)",
                        color: cur
                          ? "#fff"
                          : done
                            ? "var(--by-success-ink)"
                            : "var(--by-text-muted)",
                      }}
                    >
                      {cur ? "You are here" : done ? "Done" : "Upcoming"}
                    </span>
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 18,
                      letterSpacing: "-0.01em",
                      color: "var(--by-text)",
                      marginTop: 7,
                    }}
                  >
                    {p.name}
                  </div>
                  <p
                    style={{
                      font: "400 13.5px/1.5 var(--font-sans)",
                      color: cur ? "var(--by-navy)" : "var(--by-text-muted)",
                      margin: "6px 0 0",
                    }}
                  >
                    {p.focus}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How to use this site */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "48px 20px 8px" }}>
        <span
          style={{
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--by-text-muted)",
          }}
        >
          How to use this site
        </span>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 16,
            marginTop: 18,
          }}
        >
          {HOWTO.map((h) => (
            <div
              key={h.title}
              style={{
                background: "var(--by-surface)",
                borderRadius: 16,
                boxShadow: "var(--shadow-card),var(--shadow-hairline)",
                overflow: "hidden",
              }}
            >
              <div style={{ height: 6, background: "var(--by-gradient-primary)" }} />
              <div style={{ padding: 22 }}>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 12,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--by-accent)",
                  }}
                >
                  {h.kicker}
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 18,
                    margin: "8px 0 8px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {h.title}
                </div>
                <p
                  style={{
                    font: "400 14.5px/1.55 var(--font-sans)",
                    color: "var(--by-text-muted)",
                    margin: 0,
                  }}
                >
                  {h.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Three sessions */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "48px 20px 72px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <h2
            style={{
              font: "700 clamp(24px,3.6vw,30px)/1.1 var(--font-sans)",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            The three sessions
          </h2>
          <Link
            href="/overview"
            style={{
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 14,
              color: "var(--by-primary-dark)",
              textDecoration: "none",
            }}
          >
            Full overview →
          </Link>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 16,
            marginTop: 20,
          }}
        >
          {SESSIONS.map((s) => (
            <Link
              key={s.id}
              href={`/session/${s.route}`}
              style={{
                cursor: "pointer",
                textDecoration: "none",
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
                  padding: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  flex: 1,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      font: "800 15px/1 var(--font-sans)",
                      color: "#fff",
                      background: "var(--by-navy)",
                      width: 34,
                      height: 34,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {s.num}
                  </span>
                  <span style={{ fontWeight: 600, fontSize: 12, color: "var(--by-text-muted)" }}>
                    {s.duration}
                  </span>
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 19,
                    letterSpacing: "-0.01em",
                    color: "var(--by-text)",
                  }}
                >
                  {s.title}
                </div>
                <p
                  style={{
                    font: "400 14.5px/1.55 var(--font-sans)",
                    color: "var(--by-text-muted)",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {s.focus}
                </p>
                <span style={{ fontWeight: 600, fontSize: 14, color: "var(--by-primary-dark)" }}>
                  Open session →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
