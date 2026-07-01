"use client";

import { useParams, useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { useState, type CSSProperties } from "react";
import { SESSIONS, PROMPTS, routeToHref } from "@/lib/data";
import { useApp } from "@/components/AppContext";
import CheckItem from "@/components/CheckItem";
import CopyButton from "@/components/CopyButton";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function SessionPage() {
  const params = useParams<{ num: string }>();
  const router = useRouter();
  const { instructor, checks, winW } = useApp();
  const [flowOpen, setFlowOpen] = useState(false);

  const num = params.num;
  const session = SESSIONS.find((s) => s.route === num);
  if (!session) return notFound();
  const s = session;

  const isInstr = instructor;
  const isMobile = winW < 900;
  const sidebar = !isMobile;

  // Progress across "before you start" + homework items
  const preIds = s.beforeYouStart.map((_, i) => `${s.id}-pre-${i}`);
  const hwIds = s.homework.items.map((_, i) => `${s.id}-hw-${i}`);
  const allIds = [...preIds, ...hwIds];
  const done = allIds.filter((id) => checks[id]).length;
  const total = allIds.length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const preDone = preIds.filter((id) => checks[id]).length;

  const showFlow = isInstr || flowOpen;

  // Flow styling (instructor = dark card)
  const fBorder = isInstr ? "rgba(255,255,255,0.12)" : "var(--by-border)";
  const fTime = isInstr ? "var(--by-primary)" : "var(--by-navy)";
  const fMuted = isInstr ? "rgba(255,255,255,0.5)" : "var(--by-text-muted)";
  const fTitle = isInstr ? "#fff" : "var(--by-text)";
  const fNote = isInstr ? "rgba(255,255,255,0.72)" : "var(--by-text-muted)";

  const flowWrapStyle: CSSProperties = {
    scrollMarginTop: 90,
    borderRadius: 16,
    padding: 24,
    background: isInstr ? "var(--by-navy)" : "var(--by-surface)",
    boxShadow: isInstr ? "0 0 0 2px var(--by-primary)" : "var(--shadow-hairline)",
    opacity: isInstr ? 1 : 0.92,
  };
  const flowTagStyle: CSSProperties = {
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    padding: "4px 10px",
    borderRadius: 9999,
    background: isInstr ? "var(--by-primary)" : "var(--by-surface-muted)",
    color: isInstr ? "#fff" : "var(--by-text-muted)",
  };

  const switcherBtn = (o: (typeof SESSIONS)[number]): CSSProperties => ({
    width: 40,
    height: 40,
    borderRadius: 11,
    border: "none",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: 15,
    fontFamily: "var(--font-sans)",
    transition: "all 140ms ease",
    background: o.id === s.id ? "var(--by-gradient-primary)" : "var(--by-surface-muted)",
    color: o.id === s.id ? "#fff" : "var(--by-text-muted)",
    boxShadow: o.id === s.id ? "none" : "inset 0 0 0 1px var(--by-border)",
  });

  const jumpLinks: [string, string][] = [
    ["Before you start", "sec-before"],
    ["What you'll leave with", "sec-outcomes"],
    ["Session flow", "sec-flow"],
    ["Step by step", "sec-concepts"],
    ["Starter prompts", "sec-prompts"],
    ["Homework", "sec-homework"],
  ];

  const wrapStyle: CSSProperties = sidebar
    ? {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) 288px",
        gap: 28,
        alignItems: "start",
        marginTop: 32,
      }
    : { display: "block", marginTop: 28 };

  const chipStyle: CSSProperties = {
    fontWeight: 600,
    fontSize: 13,
    background: "var(--by-surface)",
    padding: "8px 14px",
    borderRadius: 9999,
    boxShadow: "inset 0 0 0 1px var(--by-border)",
  };

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 20px 72px" }}>
      {/* Breadcrumb */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap",
          marginBottom: 18,
        }}
      >
        <button
          onClick={() => router.push("/overview")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontWeight: 500,
            fontSize: 13,
            color: "var(--by-text-muted)",
          }}
        >
          Design Phase
        </button>
        <span style={{ color: "var(--by-text-placeholder)" }}>/</span>
        <span style={{ fontWeight: 600, fontSize: 13, color: "var(--by-text)" }}>{s.crumb}</span>
      </div>

      {/* Title block */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
        <span
          style={{
            font: "800 22px/1 var(--font-sans)",
            color: "#fff",
            background: "var(--by-gradient-primary)",
            width: 52,
            height: 52,
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {s.num}
        </span>
        <div style={{ flex: 1, minWidth: 240 }}>
          <span
            style={{
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--by-text-muted)",
            }}
          >
            {s.crumb} · {s.duration}
          </span>
          <h1
            style={{
              font: "800 clamp(28px,4.4vw,42px)/1.05 var(--font-sans)",
              letterSpacing: "-0.025em",
              margin: "8px 0 0",
            }}
          >
            {s.title}
          </h1>
          <p
            style={{
              font: "400 clamp(15px,2vw,18px)/1.5 var(--font-sans)",
              color: "var(--by-text-muted)",
              margin: "12px 0 0",
              maxWidth: "60ch",
            }}
          >
            {s.focus}
          </p>
        </div>
      </div>

      <div style={wrapStyle}>
        {/* CONTENT COLUMN */}
        <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Linear meta (mobile / linear layout) */}
          {!sidebar && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                alignItems: "center",
                paddingTop: 4,
              }}
            >
              <span style={{ ...chipStyle, color: "var(--by-text-muted)" }}>⏱ {s.duration}</span>
              <span style={{ ...chipStyle, color: "var(--by-text)" }}>
                {done} / {total} done
              </span>
              <div style={{ display: "flex", gap: 6, marginLeft: "auto" }}>
                {SESSIONS.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => router.push(`/session/${o.route}`)}
                    style={switcherBtn(o)}
                  >
                    {o.num}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Before you start */}
          <div
            id="sec-before"
            style={{
              scrollMarginTop: 90,
              background: "var(--by-surface)",
              borderRadius: 16,
              boxShadow: "var(--shadow-card),var(--shadow-hairline)",
              padding: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                marginBottom: 6,
              }}
            >
              <h2 style={{ font: "700 20px/1.1 var(--font-sans)", letterSpacing: "-0.01em", margin: 0 }}>
                Before you start
              </h2>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 12,
                  color: "var(--by-primary-dark)",
                  background: "var(--by-primary-light)",
                  padding: "5px 11px",
                  borderRadius: 9999,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {preDone} / {preIds.length}
              </span>
            </div>
            <p
              style={{
                font: "400 14px/1.5 var(--font-sans)",
                color: "var(--by-text-muted)",
                margin: "0 0 14px",
              }}
            >
              Tick these off so you&apos;re ready to build.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {s.beforeYouStart.map((t, i) => (
                <CheckItem key={i} id={`${s.id}-pre-${i}`} text={t} />
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div
            id="sec-outcomes"
            style={{
              scrollMarginTop: 90,
              background: "var(--by-navy)",
              borderRadius: 16,
              padding: 24,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                height: 6,
                background: "var(--by-gradient-primary)",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
              }}
            />
            <h2
              style={{
                font: "700 20px/1.1 var(--font-sans)",
                letterSpacing: "-0.01em",
                margin: "6px 0 4px",
                color: "#fff",
              }}
            >
              What you&apos;ll leave with
            </h2>
            <p
              style={{
                font: "400 14px/1.5 var(--font-sans)",
                color: "rgba(255,255,255,0.6)",
                margin: "0 0 16px",
              }}
            >
              By the end of this session you&apos;ll have:
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                gap: 12,
              }}
            >
              {s.outcomes.map((o) => (
                <div key={o} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 7,
                      background: "rgba(247,154,34,0.18)",
                      color: "var(--by-primary)",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 800,
                    }}
                  >
                    ★
                  </span>
                  <span style={{ font: "500 14px/1.4 var(--font-sans)", color: "#fff" }}>{o}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Session flow */}
          <div id="sec-flow" style={flowWrapStyle}>
            <button
              onClick={() => setFlowOpen((o) => !o)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <span style={flowTagStyle}>{isInstr ? "Instructor" : "Instructor guide"}</span>
                <h2
                  style={{
                    font: "700 18px/1.1 var(--font-sans)",
                    letterSpacing: "-0.01em",
                    margin: 0,
                    color: isInstr ? "#fff" : "var(--by-text-muted)",
                  }}
                >
                  Session flow
                </h2>
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--by-text-muted)" }}>
                {isInstr ? "" : flowOpen ? "Hide" : "Show"}
              </span>
            </button>
            {showFlow && (
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column" }}>
                {s.flow.map((f, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", gap: 14, padding: "12px 0", borderTop: `1px solid ${fBorder}` }}
                  >
                    <div style={{ width: 52, flexShrink: 0, textAlign: "right" }}>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: 14,
                          color: fTime,
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {f.time}
                      </div>
                      <div style={{ fontWeight: 500, fontSize: 11, color: fMuted, marginTop: 2 }}>
                        {f.dur}
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 15, color: fTitle }}>{f.title}</div>
                      <p style={{ font: "400 13.5px/1.5 var(--font-sans)", color: fNote, margin: "4px 0 0" }}>
                        {f.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Concepts */}
          <div
            id="sec-concepts"
            style={{
              scrollMarginTop: 90,
              background: "var(--by-surface)",
              borderRadius: 16,
              boxShadow: "var(--shadow-card),var(--shadow-hairline)",
              padding: 24,
            }}
          >
            <h2 style={{ font: "700 20px/1.1 var(--font-sans)", letterSpacing: "-0.01em", margin: "0 0 4px" }}>
              How it works, step by step
            </h2>
            <p
              style={{
                font: "400 14px/1.5 var(--font-sans)",
                color: "var(--by-text-muted)",
                margin: "0 0 18px",
              }}
            >
              What we cover — come back here any time.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {s.concepts.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 15, alignItems: "flex-start" }}>
                  <span
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 9999,
                      background: "var(--by-primary-light)",
                      color: "var(--by-primary-dark)",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {i + 1}
                  </span>
                  <div style={{ flex: 1, paddingTop: 2 }}>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 16,
                        color: "var(--by-text)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {c.title}
                    </div>
                    <p
                      style={{
                        font: "400 14.5px/1.6 var(--font-sans)",
                        color: "var(--by-text-muted)",
                        margin: "5px 0 0",
                      }}
                    >
                      {c.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prompts */}
          <div id="sec-prompts" style={{ scrollMarginTop: 90 }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 14,
              }}
            >
              <h2 style={{ font: "700 20px/1.1 var(--font-sans)", letterSpacing: "-0.01em", margin: 0 }}>
                Starter prompts
              </h2>
              <button
                onClick={() => router.push("/prompts")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  fontWeight: 600,
                  fontSize: 13,
                  color: "var(--by-primary-dark)",
                }}
              >
                Full library →
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {s.promptIds.map((id) => {
                const p = PROMPTS.find((pp) => pp.id === id);
                if (!p) return null;
                return (
                  <div
                    key={id}
                    style={{
                      background: "var(--by-surface)",
                      borderRadius: 14,
                      boxShadow: "var(--shadow-card),var(--shadow-hairline)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                        padding: "15px 18px",
                        borderBottom: "1px solid var(--by-border)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap" }}>
                        <span style={{ fontWeight: 700, fontSize: 15, color: "var(--by-text)" }}>
                          {p.title}
                        </span>
                        <span
                          style={{
                            fontWeight: 600,
                            fontSize: 11,
                            color: "var(--by-accent-ink)",
                            background: "var(--by-accent-tint)",
                            padding: "4px 9px",
                            borderRadius: 9999,
                          }}
                        >
                          {p.tool}
                        </span>
                      </div>
                      <CopyButton text={p.body} />
                    </div>
                    <pre
                      className="by-scroll"
                      style={{
                        margin: 0,
                        padding: "16px 18px",
                        font: "400 12.5px/1.6 ui-monospace,SFMono-Regular,Menlo,monospace",
                        color: "var(--by-text)",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        background: "#FCFBF8",
                        maxHeight: 220,
                        overflow: "auto",
                      }}
                    >
                      {p.body}
                    </pre>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Resources */}
          <div
            id="sec-resources"
            style={{
              scrollMarginTop: 90,
              background: "var(--by-surface)",
              borderRadius: 16,
              boxShadow: "var(--shadow-card),var(--shadow-hairline)",
              padding: 24,
            }}
          >
            <h2 style={{ font: "700 20px/1.1 var(--font-sans)", letterSpacing: "-0.01em", margin: "0 0 14px" }}>
              Resources
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
                gap: 10,
              }}
            >
              {s.resources.map((r) => (
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
                    padding: "13px 15px",
                    borderRadius: 11,
                    background: "var(--by-surface-muted)",
                    boxShadow: "inset 0 0 0 1px var(--by-border)",
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: 14, color: "var(--by-text)" }}>
                    {r.label} ↗
                  </span>
                  <span style={{ fontWeight: 400, fontSize: 12.5, color: "var(--by-text-muted)" }}>
                    {r.note}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Homework */}
          <div
            id="sec-homework"
            style={{
              scrollMarginTop: 90,
              background: "var(--by-primary-light)",
              borderRadius: 16,
              boxShadow: "inset 0 0 0 1px rgba(221,129,8,0.22)",
              padding: 24,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <span style={{ fontSize: 18 }}>🏠</span>
              <h2
                style={{
                  font: "700 20px/1.1 var(--font-sans)",
                  letterSpacing: "-0.01em",
                  margin: 0,
                  color: "var(--by-primary-dark)",
                }}
              >
                {s.homework.title}
              </h2>
            </div>
            {s.homework.note && (
              <p
                style={{
                  font: "500 14px/1.5 var(--font-sans)",
                  color: "var(--by-navy)",
                  margin: "0 0 12px",
                }}
              >
                {s.homework.note}
              </p>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {s.homework.items.map((t, i) => (
                <CheckItem key={i} id={`${s.id}-hw-${i}`} text={t} />
              ))}
            </div>
            {s.homework.linkRoute && (
              <button
                onClick={() => router.push(routeToHref(s.homework.linkRoute!))}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  display: "inline-block",
                  marginTop: 14,
                  fontWeight: 600,
                  fontSize: 14,
                  color: "var(--by-primary-dark)",
                }}
              >
                {s.homework.linkLabel}
              </button>
            )}
          </div>

          {/* Coming up next */}
          <button
            onClick={() => router.push(routeToHref(s.next.route))}
            style={{
              cursor: "pointer",
              textAlign: "left",
              border: "none",
              width: "100%",
              display: "block",
              background: "var(--by-navy)",
              borderRadius: 16,
              padding: 24,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--by-primary)",
              }}
            >
              Coming up next
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                marginTop: 10,
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                  {s.next.tag}
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 21,
                    letterSpacing: "-0.015em",
                    color: "#fff",
                    marginTop: 3,
                  }}
                >
                  {s.next.title}
                </div>
                <p
                  style={{
                    font: "400 14px/1.5 var(--font-sans)",
                    color: "rgba(255,255,255,0.65)",
                    margin: "8px 0 0",
                    maxWidth: "52ch",
                  }}
                >
                  {s.next.blurb}
                </p>
              </div>
              <span style={{ fontSize: 26, color: "var(--by-primary)", flexShrink: 0 }}>→</span>
            </div>
          </button>
        </div>

        {/* STICKY RAIL */}
        {sidebar && (
          <aside
            style={{
              position: "sticky",
              top: 82,
              alignSelf: "start",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                background: "var(--by-surface)",
                borderRadius: 16,
                boxShadow: "var(--shadow-card),var(--shadow-hairline)",
                padding: 20,
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "var(--by-text-muted)",
                }}
              >
                At a glance
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
                <span style={{ fontSize: 15 }}>⏱</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: "var(--by-text)" }}>
                  {s.duration}
                </span>
              </div>
              <div style={{ marginTop: 16 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 7,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: 12,
                      color: "var(--by-text-muted)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Your progress
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 12,
                      color: "var(--by-primary-dark)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {done} / {total}
                  </span>
                </div>
                <div
                  style={{
                    height: 8,
                    borderRadius: 9999,
                    background: "var(--by-surface-muted)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${pct}%`,
                      height: "100%",
                      background: "var(--by-gradient-primary)",
                      borderRadius: 9999,
                      transition: "width 220ms ease",
                    }}
                  />
                </div>
              </div>
              <div style={{ height: 1, background: "var(--by-border)", margin: "18px 0" }} />
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "var(--by-text-muted)",
                  marginBottom: 8,
                }}
              >
                Jump to
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {jumpLinks.map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => scrollToId(id)}
                    style={{
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "8px 8px",
                      borderRadius: 8,
                      fontWeight: 500,
                      fontSize: 13.5,
                      color: "var(--by-text-muted)",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div
              style={{
                background: "var(--by-surface)",
                borderRadius: 16,
                boxShadow: "var(--shadow-card),var(--shadow-hairline)",
                padding: "18px 20px",
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "var(--by-text-muted)",
                  marginBottom: 10,
                }}
              >
                Sessions
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {SESSIONS.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => router.push(`/session/${o.route}`)}
                    style={switcherBtn(o)}
                  >
                    {o.num}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
