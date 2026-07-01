"use client";

import Link from "next/link";
import { useRef } from "react";
import { PANELS } from "@/lib/data";

export default function WalkthroughPage() {
  const comicRef = useRef<HTMLDivElement | null>(null);

  const scrollComic = (dir: number) => {
    const el = comicRef.current;
    if (el) el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "44px 20px 8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <Link
            href="/session/1"
            style={{
              cursor: "pointer",
              fontWeight: 500,
              fontSize: 13,
              color: "var(--by-text-muted)",
              textDecoration: "none",
            }}
          >
            ← Session 1
          </Link>
        </div>
        <span
          style={{
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--by-accent)",
          }}
        >
          Interactive · Session 1 homework
        </span>
        <h1
          style={{
            font: "800 clamp(30px,5vw,46px)/1.05 var(--font-sans)",
            letterSpacing: "-0.03em",
            margin: "14px 0 0",
            maxWidth: "20ch",
          }}
        >
          How to run a usability test
        </h1>
        <p
          style={{
            font: "400 clamp(16px,2.2vw,20px)/1.5 var(--font-sans)",
            color: "var(--by-text-muted)",
            margin: "16px 0 0",
            maxWidth: "60ch",
          }}
        >
          Task-based usability testing, in six steps. Scroll sideways through the story — then go do
          it with your own prototype.
        </p>
        <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
          <button
            onClick={() => scrollComic(-1)}
            aria-label="Previous"
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              border: "none",
              background: "var(--by-surface)",
              boxShadow: "inset 0 0 0 1px var(--by-border)",
              cursor: "pointer",
              fontSize: 18,
              color: "var(--by-text)",
            }}
          >
            ←
          </button>
          <button
            onClick={() => scrollComic(1)}
            aria-label="Next"
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              border: "none",
              background: "var(--by-gradient-primary)",
              cursor: "pointer",
              fontSize: 18,
              color: "#fff",
            }}
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={comicRef}
        className="by-scroll"
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          padding: "28px 20px 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 20,
            maxWidth: 1120,
            margin: "0 auto",
            width: "max-content",
            paddingLeft: "max(0px,calc((100vw - 1120px)/2))",
          }}
        >
          {PANELS.map((pn) => (
            <div
              key={pn.slotId}
              style={{
                scrollSnapAlign: "start",
                flexShrink: 0,
                width: 300,
                background: "var(--by-surface)",
                borderRadius: 18,
                boxShadow: "var(--shadow-card),var(--shadow-hairline)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    width: "100%",
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "0 20px",
                    background:
                      "repeating-linear-gradient(45deg,var(--by-surface-muted),var(--by-surface-muted) 12px,#EDEEF1 12px,#EDEEF1 24px)",
                    color: "var(--by-text-placeholder)",
                    font: "500 13px/1.4 var(--font-sans)",
                    borderBottom: "1px solid var(--by-border)",
                  }}
                >
                  {pn.placeholder}
                </div>
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    width: 32,
                    height: 32,
                    borderRadius: 9999,
                    background: "var(--by-gradient-primary)",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 15,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(15,23,41,0.25)",
                  }}
                >
                  {pn.n}
                </span>
              </div>
              <div
                style={{
                  padding: "18px 20px 22px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 17,
                    letterSpacing: "-0.01em",
                    color: "var(--by-text)",
                  }}
                >
                  {pn.title}
                </div>
                <p
                  style={{
                    font: "400 14px/1.55 var(--font-sans)",
                    color: "var(--by-text-muted)",
                    margin: 0,
                  }}
                >
                  {pn.cap}
                </p>
              </div>
            </div>
          ))}
          <div
            style={{
              scrollSnapAlign: "start",
              flexShrink: 0,
              width: 280,
              background: "var(--by-navy)",
              borderRadius: 18,
              padding: 26,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 14,
            }}
          >
            <div
              style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em", color: "#fff" }}
            >
              Now go do it.
            </div>
            <p
              style={{
                font: "400 14px/1.55 var(--font-sans)",
                color: "rgba(255,255,255,0.65)",
                margin: 0,
              }}
            >
              Run this on your own prototype and write down every usability issue you spot.
              That&apos;s your Session 1 homework.
            </p>
            <Link
              href="/session/1"
              style={{
                alignSelf: "flex-start",
                textDecoration: "none",
                cursor: "pointer",
                borderRadius: 11,
                background: "var(--by-gradient-primary)",
                padding: "12px 20px",
                fontWeight: 600,
                fontSize: 14,
                color: "#fff",
              }}
            >
              Back to Session 1
            </Link>
          </div>
        </div>
      </div>
      <p
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 20px 60px",
          font: "400 13px/1.5 var(--font-sans)",
          color: "var(--by-text-placeholder)",
          fontStyle: "italic",
        }}
      >
        Panel art placeholders — drop in your ChatGPT-generated comic images (or any picture) to
        bring the story to life.
      </p>
    </div>
  );
}
