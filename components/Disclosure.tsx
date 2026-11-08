import type { ReactNode } from "react";

// A collapsed-by-default card. `aside` sits over the summary row, outside
// <summary>, so a button placed there doesn't open or close the card.
// `actions` is a row of buttons under the card that stays visible when collapsed.
export default function Disclosure({
  title,
  note,
  tag,
  badge,
  aside,
  actions,
  children,
}: {
  title: string;
  note?: string;
  tag?: string;
  badge?: string;
  aside?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        position: "relative",
        background: "var(--by-surface)",
        borderRadius: 14,
        boxShadow: "var(--shadow-card),var(--shadow-hairline)",
        overflow: "hidden",
      }}
    >
      <details className="by-disclosure">
        <summary
          style={{
            display: "flex",
            gap: 11,
            alignItems: "flex-start",
            padding: aside ? "15px 84px 15px 16px" : "15px 16px",
          }}
        >
          <span aria-hidden className="by-chevron" style={{ fontSize: 13, color: "var(--by-text-muted)", marginTop: 3 }}>
            ▶
          </span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              {tag && (
                <span style={{ fontWeight: 600, fontSize: 12.5, color: "var(--by-text-muted)" }}>{tag}</span>
              )}
              <span style={{ fontWeight: 700, fontSize: 15, color: "var(--by-text)" }}>{title}</span>
              {badge && (
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
                  {badge}
                </span>
              )}
            </span>
            {note && (
              <span
                style={{
                  display: "block",
                  font: "400 13.5px/1.45 var(--font-sans)",
                  color: "var(--by-text-muted)",
                  marginTop: 4,
                }}
              >
                {note}
              </span>
            )}
          </span>
        </summary>
        {children}
      </details>
      {actions && <div className="by-actions">{actions}</div>}
      {aside && <div style={{ position: "absolute", top: 11, right: 12 }}>{aside}</div>}
    </div>
  );
}
