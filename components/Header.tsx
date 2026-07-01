"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, type CSSProperties } from "react";
import { useApp } from "./AppContext";
import { NAV_LINKS, MOBILE_LINKS } from "@/lib/data";

function navLinkStyle(active: boolean, mobile: boolean): CSSProperties {
  if (mobile) {
    return {
      textDecoration: "none",
      cursor: "pointer",
      display: "block",
      padding: "12px 14px",
      borderRadius: 11,
      fontWeight: 600,
      fontSize: 15,
      fontFamily: "var(--font-sans)",
      background: active ? "var(--by-primary-light)" : "transparent",
      color: active ? "var(--by-primary-dark)" : "var(--by-text)",
    };
  }
  return {
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: 10,
    padding: "8px 14px",
    fontWeight: 500,
    fontSize: 14,
    fontFamily: "var(--font-sans)",
    whiteSpace: "nowrap",
    transition: "background-color 120ms ease, color 120ms ease",
    background: active ? "var(--by-primary-light)" : "transparent",
    color: active ? "var(--by-primary-dark)" : "var(--by-text-muted)",
  };
}

export default function Header() {
  const pathname = usePathname();
  const { instructor, setInstructor, winW } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = winW < 760;

  const activeFor = (href: string) =>
    href === pathname ||
    (href === "/overview" && pathname === "/walkthrough");

  const segBase: CSSProperties = {
    border: "none",
    cursor: "pointer",
    borderRadius: 9999,
    padding: "7px 15px",
    fontWeight: 600,
    fontSize: 13,
    fontFamily: "var(--font-sans)",
    transition: "all 140ms ease",
  };
  const studentBtnStyle: CSSProperties = {
    ...segBase,
    ...(instructor
      ? { background: "transparent", color: "var(--by-text-muted)" }
      : {
          background: "var(--by-surface)",
          color: "var(--by-text)",
          boxShadow: "var(--shadow-sm)",
        }),
  };
  const instructorBtnStyle: CSSProperties = {
    ...segBase,
    ...(instructor
      ? { background: "var(--by-navy)", color: "#fff", boxShadow: "var(--shadow-sm)" }
      : { background: "transparent", color: "var(--by-text-muted)" }),
  };

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
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
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
                color: "var(--by-primary-dark)",
                marginTop: 3,
              }}
            >
              Design Phase
            </span>
          </div>
        </Link>

        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} style={navLinkStyle(activeFor(link.href), false)}>
                {link.label}
              </Link>
            ))}
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "var(--by-surface-muted)",
              borderRadius: 9999,
              padding: 3,
              boxShadow: "inset 0 0 0 1px var(--by-border)",
            }}
          >
            <button onClick={() => setInstructor(false)} style={studentBtnStyle}>
              Student
            </button>
            <button onClick={() => setInstructor(true)} style={instructorBtnStyle}>
              Instructor
            </button>
          </div>
          {isMobile && (
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              style={{
                width: 38,
                height: 38,
                borderRadius: 11,
                border: "none",
                background: "var(--by-surface)",
                boxShadow: "inset 0 0 0 1px var(--by-border)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <span style={{ width: 16, height: 2, background: "var(--by-text)", borderRadius: 2 }} />
              <span style={{ width: 16, height: 2, background: "var(--by-text)", borderRadius: 2 }} />
              <span style={{ width: 16, height: 2, background: "var(--by-text)", borderRadius: 2 }} />
            </button>
          )}
        </div>
      </div>

      {isMobile && menuOpen && (
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "4px 20px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {MOBILE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={navLinkStyle(pathname === link.href, true)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
