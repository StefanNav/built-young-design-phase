import type { CSSProperties } from "react";
import type { Prompt } from "@/lib/data";
import CopyButton from "./CopyButton";
import Disclosure from "./Disclosure";

const preStyle: CSSProperties = {
  margin: 0,
  padding: "16px 18px",
  font: "400 12.5px/1.6 ui-monospace,SFMono-Regular,Menlo,monospace",
  color: "var(--by-text)",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  background: "#FCFBF8",
  borderTop: "1px solid var(--by-border)",
};

const downloadStyle: CSSProperties = {
  textDecoration: "none",
  borderRadius: 9,
  padding: "8px 14px",
  fontWeight: 600,
  fontSize: 13,
  whiteSpace: "nowrap",
  background: "var(--by-navy)",
  color: "#fff",
};

export default function PromptCard({ prompt: p }: { prompt: Prompt }) {
  // A prompt with a file to download leads with the download, then the copy.
  const actions = p.download && (
    <>
      <a href={p.download.href} download style={downloadStyle}>
        ↓ {p.download.label}
      </a>
      <CopyButton text={p.body} label="Copy prompt" variant="secondary" />
    </>
  );

  return (
    <Disclosure
      title={p.title}
      tag={p.label}
      badge={p.tool}
      note={p.howTo}
      aside={p.download ? undefined : <CopyButton text={p.body} />}
      actions={actions}
    >
      <pre style={preStyle}>{p.body}</pre>
    </Disclosure>
  );
}
