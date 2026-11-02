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

export default function PromptCard({ prompt: p }: { prompt: Prompt }) {
  return (
    <Disclosure
      title={p.title}
      tag={p.label}
      badge={p.tool}
      note={p.howTo}
      aside={<CopyButton text={p.body} />}
    >
      <pre style={preStyle}>{p.body}</pre>
      {p.attachment && (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              padding: "12px 18px",
              borderTop: "1px solid var(--by-border)",
            }}
          >
            <span style={{ fontWeight: 700, fontSize: 14 }}>{p.attachment.title}</span>
            <CopyButton text={p.attachment.body} />
          </div>
          <pre style={preStyle}>{p.attachment.body}</pre>
        </>
      )}
    </Disclosure>
  );
}
