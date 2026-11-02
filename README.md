# Built Young — Design Phase

A companion site for students in the Built Young **Design phase** (Phase 2 of 4).
Five lessons take a student from their Phase 1 PRD and epics to a tested, polished
app that's ready for an engineer.

Built with **Next.js 16 (App Router) + TypeScript**. Content comes from the Design
Phase Playbook in Notion, copied by hand into `lib/data.ts`. Coach-only material
stays in Notion.

## Features

- **Routes**: Home and Lesson 1 to 5
- **Lesson pages** — what to prep, what we'll do, prompts, guides, inspiration
  links and homework, all in one place
- **Checklists** — prep and homework items persist in `localStorage`
- **Prompts** — copy-to-clipboard, collapsed until opened
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
  layout.tsx            root layout: Header + Footer
  globals.css           design-system tokens + global styles
  page.tsx              Home: lessons, then the four-phase journey
  lesson/[num]/         Lesson 1 to 5
components/
  Header.tsx / Footer.tsx
  CheckItem.tsx         checklist item, saved in localStorage
  CopyButton.tsx        copy-to-clipboard button
  Disclosure.tsx        collapsed-by-default card
  PromptCard.tsx        a prompt with its copy button
  Guides.tsx            Good UX checklist, Premium checklist, test guide
lib/
  data.ts               all content (lessons, prompts, phases, guides, links)
docs/specs/             product specs
```

All content lives in `lib/data.ts`; screens are presentational.
