"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const onCopy = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
    } catch {}
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1600);
  };

  const style: CSSProperties = {
    border: "none",
    cursor: "pointer",
    borderRadius: 9,
    padding: "7px 13px",
    fontWeight: 600,
    fontSize: 12.5,
    fontFamily: "var(--font-sans)",
    whiteSpace: "nowrap",
    transition: "background-color 140ms ease",
    background: copied ? "var(--by-success-tint)" : "var(--by-navy)",
    color: copied ? "var(--by-success-ink)" : "#fff",
  };

  return (
    <button onClick={onCopy} style={style}>
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}
