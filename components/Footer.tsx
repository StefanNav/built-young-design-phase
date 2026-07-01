import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ background: "var(--by-navy)", padding: "40px 0" }}>
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <Image
            src="/by-logo.png"
            alt="Built Young"
            width={34}
            height={34}
            style={{ objectFit: "contain", flexShrink: 0 }}
          />
          <div style={{ lineHeight: 1.2 }}>
            <div
              style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em", color: "#fff" }}
            >
              Built Young
            </div>
            <div style={{ fontWeight: 500, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
              Design Phase Companion · v0.1
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
          {FOOTER_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                cursor: "pointer",
                fontWeight: 500,
                fontSize: 14,
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <span style={{ fontWeight: 400, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
          © 2026 Built Young
        </span>
      </div>
    </footer>
  );
}
