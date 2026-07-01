"use client";

import type { CSSProperties } from "react";
import { useApp } from "./AppContext";

export default function CheckItem({ id, text }: { id: string; text: string }) {
  const { checks, toggleCheck } = useApp();
  const checked = !!checks[id];

  const boxStyle: CSSProperties = {
    width: 23,
    height: 23,
    borderRadius: 7,
    flexShrink: 0,
    marginTop: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 140ms ease",
    background: checked ? "var(--by-gradient-primary)" : "var(--by-surface)",
    boxShadow: checked ? "none" : "inset 0 0 0 1.5px var(--by-border)",
  };
  const textStyle: CSSProperties = {
    font: "500 15px/1.45 var(--font-sans)",
    color: checked ? "var(--by-text-placeholder)" : "var(--by-text)",
    textDecoration: checked ? "line-through" : "none",
    transition: "color 140ms ease",
  };

  return (
    <button
      onClick={() => toggleCheck(id)}
      style={{
        display: "flex",
        gap: 13,
        alignItems: "flex-start",
        textAlign: "left",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "10px 6px",
        borderRadius: 10,
      }}
    >
      <span style={boxStyle}>
        {checked && (
          <span style={{ color: "#fff", fontSize: 13, fontWeight: 800, lineHeight: 1 }}>✓</span>
        )}
      </span>
      <span style={textStyle}>{text}</span>
    </button>
  );
}
