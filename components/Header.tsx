import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "rgba(251,250,246,0.86)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--by-border)",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "12px 20px" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 11,
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          <Image
            src="/by-logo.png"
            alt="Built Young"
            width={34}
            height={34}
            style={{ objectFit: "contain", flexShrink: 0 }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              style={{
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: "-0.02em",
                color: "var(--by-text)",
              }}
            >
              Built Young
            </span>
            <span
              style={{
                fontWeight: 600,
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--by-warning-ink)",
                marginTop: 3,
              }}
            >
              Design Phase
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
