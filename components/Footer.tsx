import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "var(--by-navy)", padding: "32px 0" }}>
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
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
          <div
            style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em", color: "#fff" }}
          >
            Built Young
          </div>
        </div>
        <span style={{ fontWeight: 400, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
          © 2026 Built Young
        </span>
      </div>
    </footer>
  );
}
