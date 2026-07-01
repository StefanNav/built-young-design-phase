# Built Young — Design Phase

A companion site for the Built Young **Design phase** (Phase 2 of 4): it walks
students and instructors through turning a PRD into a build-ready product across
three sessions — from a rough clickable prototype to a polished, high-fidelity
front end.

Implemented from the Claude Design handoff prototype (`BuiltYoung Design
Phase.dc.html`) as a **Next.js 16 (App Router) + TypeScript** app.

## Features

- **Routes**: Home, Overview, Session 1/2/3, Walkthrough, Prompts, Resources
- **Student / Instructor toggle** — instructor view reveals the timed session
  flow; preference persists in `localStorage`
- **Checklists** — "Before you start" and homework items persist and drive a
  per-session progress bar
- **Starter prompt library** — filterable, with copy-to-clipboard
- **Usability-testing walkthrough** — horizontal-scroll comic with prev/next
- Built on the Built Young design system tokens (colors, type, spacing,
  elevation) in `app/globals.css`

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

## Structure

```
app/
  layout.tsx            root layout: Header + Footer + AppProvider
  globals.css           design-system tokens + global styles
  page.tsx              Home
  overview/             Overview
  session/[num]/        Session 1/2/3
  walkthrough/          Usability-testing comic
  prompts/              Prompt library
  resources/            Grouped tools & links
components/
  AppContext.tsx        view + checklist state (localStorage)
  Header.tsx / Footer.tsx
  CheckItem.tsx         persisted checklist item
  CopyButton.tsx        copy-to-clipboard button
lib/
  data.ts               all content (sessions, prompts, phases, resources)
```

All content lives in `lib/data.ts`; screens are presentational.
