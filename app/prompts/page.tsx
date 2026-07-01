"use client";

import { useState, type CSSProperties } from "react";
import { PROMPTS } from "@/lib/data";
import CopyButton from "@/components/CopyButton";

const FILTERS = [
  { key: "all", label: "All prompts" },
  { key: "Session 1", label: "Session 1" },
  { key: "Session 2", label: "Session 2" },
  { key: "Session 2 & 3", label: "Session 3" },
];

export default function PromptsPage() {
  const [filter, setFilter] = useState("all");
  const filtered = PROMPTS.filter((p) => filter === "all" || p.session === filter);

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
        Copy · paste · build
      </span>
      <h1
        style={{
          font: "800 clamp(32px,5vw,48px)/1.05 var(--font-sans)",
          letterSpacing: "-0.03em",
          margin: "14px 0 0",
        }}
      >
        Prompt Library
      </h1>
      <p
        style={{
          font: "400 clamp(16px,2.2vw,20px)/1.5 var(--font-sans)",
          color: "var(--by-text-muted)",
          margin: "16px 0 0",
          maxWidth: "62ch",
        }}
      >
        Every starter prompt in one place. Replace anything in [BRACKETS], then paste straight into
        your tool.
      </p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "28px 0 20px" }}>
        {FILTERS.map((f) => {
          const active = filter === f.key;
          const style: CSSProperties = {
            border: "none",
            cursor: "pointer",
            borderRadius: 9999,
            padding: "9px 16px",
            fontWeight: 600,
            fontSize: 13.5,
            fontFamily: "var(--font-sans)",
            transition: "all 140ms ease",
            background: active ? "var(--by-navy)" : "var(--by-surface)",
            color: active ? "#fff" : "var(--by-text-muted)",
            boxShadow: active ? "none" : "inset 0 0 0 1px var(--by-border)",
          };
          return (
            <button key={f.key} onClick={() => setFilter(f.key)} style={style}>
              {f.label}
            </button>
          );
        })}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: 16,
          alignItems: "start",
        }}
      >
        {filtered.map((p) => (
          <div
            key={p.id}
            style={{
              background: "var(--by-surface)",
              borderRadius: 16,
              boxShadow: "var(--shadow-card),var(--shadow-hairline)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ height: 6, background: "var(--by-gradient-primary)" }} />
            <div style={{ padding: "16px 18px", borderBottom: "1px solid var(--by-border)" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    letterSpacing: "-0.01em",
                    color: "var(--by-text)",
                  }}
                >
                  {p.title}
                </span>
                <CopyButton text={p.body} />
              </div>
              <div style={{ display: "flex", gap: 7, marginTop: 9, flexWrap: "wrap" }}>
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: 11,
                    color: "var(--by-primary-dark)",
                    background: "var(--by-primary-light)",
                    padding: "4px 9px",
                    borderRadius: 9999,
                  }}
                >
                  {p.session}
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
                flex: 1,
                maxHeight: 300,
                overflow: "auto",
              }}
            >
              {p.body}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
