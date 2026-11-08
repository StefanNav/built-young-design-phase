import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import { LESSONS, PROMPTS, RESOURCES, type GuideId } from "@/lib/data";
import CheckItem from "@/components/CheckItem";
import Disclosure from "@/components/Disclosure";
import { GoodUxChecklist, PremiumChecklist, TestGuide } from "@/components/Guides";
import PromptCard from "@/components/PromptCard";

export const dynamicParams = false;

// Inspiration links, used in "Find inspiration" and in a homework's get-ready list.
function ResourceLinks({ ids }: { ids: string[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 10 }}>
      {ids.map((id) => {
        const r = RESOURCES[id];
        return (
          <a
            key={id}
            href={r.url}
            target="_blank"
            rel="noopener"
            className="by-lift"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              textDecoration: "none",
              padding: "13px 15px",
              borderRadius: 12,
              background: "var(--by-surface)",
              boxShadow: "var(--shadow-hairline)",
            }}
          >
            <span style={{ fontWeight: 600, fontSize: 14.5, color: "var(--by-text)" }}>{r.label} ↗</span>
            <span style={{ fontSize: 13, lineHeight: 1.4, color: "var(--by-text-muted)" }}>{r.note}</span>
          </a>
        );
      })}
    </div>
  );
}

export function generateStaticParams() {
  return LESSONS.map((l) => ({ num: l.num }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ num: string }>;
}): Promise<Metadata> {
  const { num } = await params;
  const lesson = LESSONS.find((l) => l.num === num);
  if (!lesson) return {};
  return { title: `Session ${lesson.num}: ${lesson.title} — Built Young`, description: lesson.summary };
}

const cardStyle: CSSProperties = {
  background: "var(--by-surface)",
  borderRadius: 16,
  boxShadow: "var(--shadow-card),var(--shadow-hairline)",
  padding: 24,
};

const h2Style: CSSProperties = {
  font: "700 20px/1.1 var(--font-sans)",
  letterSpacing: "-0.01em",
  margin: "0 0 14px",
};

const labelStyle: CSSProperties = {
  fontWeight: 700,
  fontSize: 14,
  color: "var(--by-navy)",
  margin: "20px 0 6px",
};

const GUIDES: Record<GuideId, { title: string; note: string; body: ReactNode }> = {
  "good-ux": {
    title: "Good UX checklist",
    note: "Nine rules to guide your designs",
    body: <GoodUxChecklist />,
  },
  "test-guide": {
    title: "Usability test guide",
    note: "What to say, what to do, and where to take notes",
    body: <TestGuide />,
  },
  premium: {
    title: "Premium checklist",
    note: "What makes an app feel considered, not vibe coded",
    body: <PremiumChecklist />,
  },
};

export default async function LessonPage({ params }: { params: Promise<{ num: string }> }) {
  const { num } = await params;
  const index = LESSONS.findIndex((l) => l.num === num);
  if (index === -1) notFound();
  const l = LESSONS[index];
  const prev = LESSONS[index - 1];
  const next = LESSONS[index + 1];

  const prompts = (ids: string[]) =>
    ids.map((id) => {
      const p = PROMPTS.find((pp) => pp.id === id);
      return p ? <PromptCard key={id} prompt={p} /> : null;
    });

  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "28px 20px 72px" }}>
      <Link
        href="/"
        style={{
          fontWeight: 600,
          fontSize: 14,
          color: "var(--by-text-muted)",
          textDecoration: "none",
        }}
      >
        ← All sessions
      </Link>

      {/* Header */}
      <div style={{ marginTop: 18 }}>
        <span style={{ fontWeight: 600, fontSize: 13, color: "var(--by-text-muted)" }}>
          Session {l.num} · {l.part} · {l.length}
        </span>
        <h1
          style={{
            font: "800 clamp(30px,5vw,42px)/1.05 var(--font-sans)",
            letterSpacing: "-0.025em",
            margin: "8px 0 0",
          }}
        >
          {l.title}
        </h1>
        <p
          style={{
            font: "400 clamp(15px,2vw,17px)/1.5 var(--font-sans)",
            color: "var(--by-text-muted)",
            margin: "12px 0 0",
          }}
        >
          <strong style={{ color: "var(--by-text)", fontWeight: 600 }}>
            You&apos;ll leave with:
          </strong>{" "}
          {l.leaveWith}
        </p>
        {/* The PDF downloads from inside the slides, so the page only opens them. */}
        {l.slides && (
          <div style={{ display: "flex", marginTop: 18 }}>
            <a
              href={l.slides.href}
              target="_blank"
              rel="noopener"
              style={{ ...pagerStyle, background: "var(--by-navy)", color: "#fff" }}
            >
              Open slides ↗
            </a>
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 24 }}>
        {/* Before this session */}
        <section style={cardStyle}>
          <h2 style={{ ...h2Style, marginBottom: 8 }}>Before this session</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {l.before.map((t, i) => (
              <CheckItem key={i} id={`${l.id}-before-${i}`} text={t} />
            ))}
          </div>
        </section>

        {/* What we'll do */}
        <section style={cardStyle}>
          <h2 style={h2Style}>What we&apos;ll do</h2>
          <ol
            style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}
          >
            {l.plan.map((step, i) => (
              <li key={step.title} style={{ display: "flex", gap: 13, alignItems: "flex-start" }}>
                <span
                  aria-hidden
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 9999,
                    background: "var(--by-primary-light)",
                    color: "var(--by-warning-ink)",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                >
                  {i + 1}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 15.5, color: "var(--by-text)" }}>
                    {step.title}
                  </div>
                  <p
                    style={{
                      font: "400 14.5px/1.5 var(--font-sans)",
                      color: "var(--by-text-muted)",
                      margin: "2px 0 0",
                    }}
                  >
                    {step.note}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <h3 style={labelStyle}>Think like a designer</h3>
          <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 4 }}>
            {l.mindset.map((m) => (
              <li key={m.name} style={{ font: "400 14.5px/1.5 var(--font-sans)", color: "var(--by-text-muted)" }}>
                <strong style={{ color: "var(--by-text)", fontWeight: 600 }}>{m.name}.</strong>{" "}
                {m.line}
              </li>
            ))}
          </ul>
        </section>

        {/* Prompts */}
        <section>
          <h2 style={h2Style}>Prompts</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {prompts(l.promptIds)}
          </div>
          {l.ifNeeded && (
            <>
              <h3 style={{ ...labelStyle, marginBottom: 10 }}>{l.ifNeeded.title}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {prompts(l.ifNeeded.promptIds)}
              </div>
            </>
          )}
        </section>

        {/* Guides */}
        {l.guides.length > 0 && (
          <section>
            <h2 style={h2Style}>{l.guides.length > 1 ? "Guides" : "Guide"}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {l.guides.map((id) => (
                <Disclosure key={id} title={GUIDES[id].title} note={GUIDES[id].note}>
                  <div style={{ padding: "0 18px 18px" }}>{GUIDES[id].body}</div>
                </Disclosure>
              ))}
            </div>
          </section>
        )}

        {/* Inspiration */}
        {l.resourceIds.length > 0 && (
          <section>
            <h2 style={h2Style}>Find inspiration</h2>
            <ResourceLinks ids={l.resourceIds} />
          </section>
        )}

        {/* Homework */}
        <section
          style={{
            background: "var(--by-primary-light)",
            borderRadius: 16,
            boxShadow: "inset 0 0 0 1px rgba(221,129,8,0.22)",
            padding: 24,
          }}
        >
          <h2 style={{ ...h2Style, marginBottom: 4 }}>Homework</h2>
          <p style={{ fontWeight: 500, fontSize: 13.5, color: "var(--by-warning-ink)", margin: "0 0 12px" }}>
            Due: {l.homework.due}
          </p>
          <p style={{ font: "500 15.5px/1.5 var(--font-sans)", color: "var(--by-navy)", margin: 0 }}>
            {l.homework.task}
          </p>

          <h3 style={labelStyle}>Done when</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {l.homework.doneWhen.map((t, i) => (
              <CheckItem key={i} id={`${l.id}-done-${i}`} text={t} />
            ))}
          </div>

          {l.homework.getReady && next && (
            <>
              <h3 style={labelStyle}>Get ready for Session {next.num}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {l.homework.getReady.map((t, i) => (
                  <CheckItem key={i} id={`${l.id}-ready-${i}`} text={t} />
                ))}
              </div>
              {l.homework.getReadyLinks && (
                <div style={{ marginTop: 10 }}>
                  <ResourceLinks ids={l.homework.getReadyLinks} />
                </div>
              )}
            </>
          )}

          <h3 style={labelStyle}>Submit</h3>
          <p style={{ font: "400 15px/1.5 var(--font-sans)", color: "var(--by-navy)", margin: 0 }}>
            {l.homework.submit}
          </p>

          {l.homework.question && (
            <>
              <h3 style={labelStyle}>Designer question</h3>
              <p style={{ font: "400 15px/1.5 var(--font-sans)", color: "var(--by-navy)", margin: 0 }}>
                Answer this in Slack: &ldquo;{l.homework.question}&rdquo;
              </p>
            </>
          )}

          {l.homework.stretch && (
            <>
              <h3 style={labelStyle}>Stretch (optional)</h3>
              <p style={{ font: "400 15px/1.5 var(--font-sans)", color: "var(--by-navy)", margin: 0 }}>
                {l.homework.stretch}
              </p>
            </>
          )}
        </section>

        {/* Next and previous */}
        <nav
          aria-label="Sessions"
          style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}
        >
          {prev ? (
            <Link href={`/lesson/${prev.num}`} style={{ ...pagerStyle, background: "var(--by-surface)", color: "var(--by-text)", boxShadow: "var(--shadow-hairline)" }}>
              ← Session {prev.num}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/lesson/${next.num}`} style={{ ...pagerStyle, background: "var(--by-navy)", color: "#fff" }}>
              Next: Session {next.num}, {next.title} →
            </Link>
          ) : (
            <p style={{ font: "500 14.5px/1.5 var(--font-sans)", color: "var(--by-text-muted)", margin: 0, flex: "1 1 240px", textAlign: "right" }}>
              Next up is Phase 3, Build &amp; Deploy, where you work with an engineer to build the
              backend and ship it.
            </p>
          )}
        </nav>
      </div>
    </div>
  );
}

const pagerStyle: CSSProperties = {
  textDecoration: "none",
  borderRadius: 12,
  padding: "13px 18px",
  fontWeight: 600,
  fontSize: 14.5,
};
