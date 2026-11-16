import type { CSSProperties } from "react";
import type { Skill } from "@/lib/data";
import CopyButton from "./CopyButton";

const textStyle: CSSProperties = {
  font: "400 14.5px/1.5 var(--font-sans)",
  color: "var(--by-text-muted)",
  margin: "10px 0 0",
};

const labelStyle: CSSProperties = {
  display: "block",
  fontWeight: 700,
  fontSize: 13,
  color: "var(--by-navy)",
  margin: "14px 0 6px",
};

// A line students paste somewhere, with its own copy button.
function CodeLine({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 8px 8px 14px",
        borderRadius: 10,
        background: "#FCFBF8",
        boxShadow: "inset 0 0 0 1px var(--by-border)",
      }}
    >
      <code
        style={{
          flex: 1,
          minWidth: 0,
          font: "400 13px/1.5 ui-monospace,SFMono-Regular,Menlo,monospace",
          color: "var(--by-text)",
        }}
      >
        {/* Lines only break between words, so "--skill" never splits on a phone. */}
        {text.split(" ").map((word, i) => (
          <span key={i}>
            {i > 0 && " "}
            <span style={{ whiteSpace: "nowrap" }}>{word}</span>
          </span>
        ))}
      </code>
      <CopyButton text={text} variant="secondary" />
    </div>
  );
}

export default function SkillCard({ skill: s }: { skill: Skill }) {
  return (
    <article
      style={{
        background: "var(--by-surface)",
        borderRadius: 14,
        boxShadow: "var(--shadow-card),var(--shadow-hairline)",
        padding: "18px 18px 20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <h3 style={{ font: "700 16px/1.2 var(--font-sans)", color: "var(--by-text)", margin: 0 }}>{s.name}</h3>
        <span
          style={{
            fontWeight: 600,
            fontSize: 11,
            color: "var(--by-success-ink)",
            background: "var(--by-accent-tint)",
            padding: "3px 8px",
            borderRadius: 9999,
          }}
        >
          Claude Code
        </span>
      </div>
      <p style={{ font: "400 13px/1.45 var(--font-sans)", color: "var(--by-text-muted)", margin: "6px 0 0" }}>
        Made by {s.by}. From{" "}
        <a href={s.from.url} target="_blank" rel="noopener" style={{ color: "var(--by-navy)", fontWeight: 600 }}>
          {s.from.label} ↗
        </a>
      </p>

      <p style={{ ...textStyle, color: "var(--by-text)" }}>{s.what}</p>
      <p style={textStyle}>
        <strong style={{ color: "var(--by-text)", fontWeight: 600 }}>Use it when:</strong> {s.when}
      </p>

      <span style={labelStyle}>Install it</span>
      <CodeLine text={s.install} />
      {s.then && <p style={{ ...textStyle, marginTop: 8 }}>Then: {s.then}</p>}

      <span style={labelStyle}>Then try asking Claude</span>
      <CodeLine text={s.tryIt} />
    </article>
  );
}
