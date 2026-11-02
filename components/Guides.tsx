import type { CSSProperties } from "react";
import { GOOD_UX_RULES, MOTION_BASICS, PREMIUM_ROWS, TEST_GUIDE as G } from "@/lib/data";
import CopyButton from "./CopyButton";

const body: CSSProperties = {
  font: "400 14.5px/1.5 var(--font-sans)",
  color: "var(--by-text-muted)",
  margin: 0,
};

const heading: CSSProperties = {
  fontWeight: 700,
  fontSize: 14.5,
  color: "var(--by-text)",
  margin: "18px 0 6px",
};

const list: CSSProperties = {
  ...body,
  paddingLeft: 18,
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

export function GoodUxChecklist() {
  return (
    <ol style={{ ...body, paddingLeft: 22, display: "flex", flexDirection: "column", gap: 12 }}>
      {GOOD_UX_RULES.map((r) => (
        <li key={r.rule}>
          <strong style={{ color: "var(--by-text)", fontWeight: 600 }}>{r.rule}.</strong> {r.means}{" "}
          <em>&ldquo;{r.ask}&rdquo;</em>
        </li>
      ))}
    </ol>
  );
}

export function PremiumChecklist() {
  const cell: CSSProperties = { padding: "9px 10px 9px 0", verticalAlign: "top", textAlign: "left" };
  return (
    <>
      <table style={{ ...body, fontSize: 14, width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ color: "var(--by-text)" }}>
            <th style={cell}>Premium</th>
            <th style={cell}>Vibe coded</th>
          </tr>
        </thead>
        <tbody>
          {PREMIUM_ROWS.map((r) => (
            <tr key={r.premium} style={{ borderTop: "1px solid var(--by-border)" }}>
              <td style={{ ...cell, color: "var(--by-text)" }}>{r.premium}</td>
              <td style={cell}>{r.vibe}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 style={heading}>Motion basics</h3>
      <ul style={list}>
        {MOTION_BASICS.map((m) => (
          <li key={m.name}>
            <strong style={{ color: "var(--by-text)", fontWeight: 600 }}>{m.name}:</strong> {m.line}
          </li>
        ))}
      </ul>
    </>
  );
}

export function TestGuide() {
  return (
    <>
      <p style={body}>{G.intro}</p>

      <h3 style={heading}>Who to test</h3>
      <p style={body}>{G.who}</p>

      <h3 style={heading}>What you need</h3>
      <ul style={list}>
        {G.need.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <h3 style={heading}>Step 1: Say this at the start</h3>
      <blockquote
        style={{
          ...body,
          color: "var(--by-text)",
          margin: 0,
          padding: "10px 14px",
          borderRadius: 10,
          background: "var(--by-surface-muted)",
        }}
      >
        {G.script}
      </blockquote>

      <h3 style={heading}>Step 2: Give them tasks</h3>
      <p style={body}>{G.taskIntro}</p>
      <ul style={{ ...list, marginTop: 6 }}>
        <li>
          <strong style={{ color: "var(--by-text)", fontWeight: 600 }}>Don&apos;t say:</strong>{" "}
          {G.dontSay}
        </li>
        <li>
          <strong style={{ color: "var(--by-text)", fontWeight: 600 }}>Say:</strong> {G.say}
        </li>
      </ul>

      <h3 style={heading}>Step 3: Watch and stay quiet</h3>
      <ul style={list}>
        {G.watch.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <h3 style={heading}>Step 4: Ask 3 questions at the end</h3>
      <ul style={list}>
        {G.questions.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          margin: "18px 0 6px",
        }}
      >
        <h3 style={{ ...heading, margin: 0 }}>Notes (one table per person)</h3>
        <CopyButton text={G.notesTable} />
      </div>
      <pre
        style={{
          margin: 0,
          padding: "12px 14px",
          borderRadius: 10,
          background: "#FCFBF8",
          boxShadow: "var(--shadow-hairline)",
          font: "400 12.5px/1.6 ui-monospace,SFMono-Regular,Menlo,monospace",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {G.notesTable}
      </pre>

      <h3 style={heading}>After all 3 tests</h3>
      <p style={body}>{G.after}</p>
    </>
  );
}
