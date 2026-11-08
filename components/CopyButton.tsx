"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

export default function CopyButton({
  text,
  label = "Copy",
  variant = "primary",
}: {
  text: string;
  label?: string;
  variant?: "primary" | "secondary";
}) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const fallbackCopy = () => {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  };

  const onCopy = async () => {
    let ok: boolean;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      ok = fallbackCopy();
    }
    setCopied(ok);
    setFailed(!ok);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setCopied(false);
      setFailed(false);
    }, 1600);
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
    background: copied
      ? "var(--by-success-tint)"
      : variant === "secondary"
        ? "var(--by-surface)"
        : "var(--by-navy)",
    color: copied
      ? "var(--by-success-ink)"
      : variant === "secondary"
        ? "var(--by-text)"
        : "#fff",
    boxShadow: variant === "secondary" && !copied ? "inset 0 0 0 1px var(--by-border)" : "none",
  };

  return (
    <button onClick={onCopy} style={style}>
      {copied ? "Copied ✓" : failed ? "Couldn't copy" : label}
    </button>
  );
}
