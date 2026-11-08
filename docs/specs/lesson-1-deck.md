# Spec: Session 1 slide deck

**Status:** Updated after teaching Session 1. Ready to teach
**Sources:** Design Phase Playbook and Slide deck brief in Notion (read 2026-11-01), the coach's pasted Claude Design brief, and the coach's changes after teaching Session 1 (2026-11-08)

## Problem statement

Session 1 opens with 10 to 12 minutes of slides that introduce the whole course and set up the hands-on work: turning the student's PRD into an Epics and Flows doc, then wireframing. Without a deck, the student's first impression of a design course is a screen share of unprepared material.

## Goals

1. **Ready to teach.** The coach can open the deck in a new tab and present it on a video call with only the keyboard.
2. **Readable on a laptop.** Nothing overflows or crowds at laptop size, and a teen can read every slide on a shared screen.
3. **Matches the session.** Slides agree with the playbook, so the deck, the session plan and the student site say the same thing.
4. **Looks designed.** The deck's own design follows the brand and avoids generic AI-made styling, because students judge the course by it.
5. **Has a backup.** A one-page-per-slide PDF can be downloaded from the deck.

## Non-goals

- **Decks for Sessions 2 to 5.** Session 1 sets the style first. The structure should make the others easy to add.
- **Slide editing tools.** The coach changes copy with Claude Code or in the HTML, which is simpler than an editor for one person.
- **Invented images.** No made-up screenshots of real apps or photos of real people. Missing images get a labeled frame.
- **A separate presenter window.** Press N for notes. Coaches on one screen can use the PDF or the notes page alongside if they need to.

## User stories

**Coach presenting**
- As a coach, I want to open the deck in a new tab and move through it with arrow keys or clicks so that I can stay focused on the student.
- As a coach, I want hidden speaker notes I can toggle so that I remember what to say.
- As a coach, I want a PDF backup so that I can still teach if something goes wrong.

**Student watching**
- As a student, I want one idea per slide in big type so that I can follow along on a shared screen.
- As a student, I want to introduce myself and show what I've made so that the coach knows where I'm starting from.
- As a student, I want to know what I'll make today and how the course runs so that I'm ready for the hands-on part.

## Slides

The deck has 17 slides. After teaching Session 1, the coach removed the AI slop topic and the "Try it" exercise, added a student introduction, a slide on directing Claude, and a slide on building one epic at a time. Students now arrive with a PRD only and make the Epics and Flows doc in the session.

| # | Slide | Main source |
| --- | --- | --- |
| 1 | Title: Session 1, From idea to wireframes | Playbook |
| 2 | Hi, I'm Stefan | Pasted brief |
| 3 | Some things I've made | Pasted brief |
| 4 | Your turn: the student introduces themselves | Coach update |
| 5 | Where we are: the four phases | Both |
| 6 | Course goals | Both |
| 7 | The course in three parts | Playbook |
| 8 | The design process: nine steps (goal 1) | Playbook |
| 9 | What makes a good designer (goal 2) | Both |
| 10 | Working with Claude: AI is the producer, you're the director | Coach update |
| 11 | How this course works | Both |
| 12 | Today's objectives | Playbook |
| 13 | Principle spotlight | Both |
| 14 | Build one piece at a time | Coach update |
| 15 | Example: the Workout Log epic map | Pasted brief |
| 16 | Good UX in 9 rules | Playbook |
| 17 | What you'll make today | Playbook |

## Requirements

### P0: must ship

**1. Presenting**
- [ ] Opens in a new tab from a link on the Session 1 page, and from `public/decks/lesson-1/index.html`.
- [ ] Slides are 16:9 on a 1920 x 1080 canvas and scale to fit the window.
- [ ] Arrow keys and clicking move between slides. Clicking the left edge goes back.
- [ ] N shows and hides speaker notes. Notes never appear on a slide or in the PDF.

**2. PDF**
- [ ] The deck has a visible way to download the PDF. The Session 1 page only opens the slides; the PDF downloads from inside them.
- [ ] The PDF has one slide per page, 17 pages, with brand colors and no deck controls.

**3. Format**
- [ ] Titles at least 80px on the canvas. Slide text at least 28px.
- [ ] Headings sit in the same place on every slide.
- [ ] One idea per slide, about 30 words at most where possible.
- [ ] Logo large on the title slide. Every other slide has the logo with "Built Young" at the bottom left and "Session 1" at the bottom right.
- [ ] No text or element overflows its box or the slide at laptop size.

**4. Brand**
- [ ] Uses the Built Young colors and Inter, with rounded corners and block shapes that echo the logo. Course goals uses a navy background, all others cream.
- [ ] No purple or blue gradients, glass or glow effects, sparkle icons, emoji icons or hype words.

**5. Images**
- [ ] Uses the real logo file and real screens of Somni, LastingMind and FanFeed, none of them cropped by the layout.

### P1: fast follow

- Deep links to a slide, such as `#9`.
- Fullscreen shortcut.

### P2: later

- Decks for Sessions 2 to 5 using the same styles.

## Success metrics

| Type | Metric | Target |
| --- | --- | --- |
| Leading | Slides with overflow, measured at 1366 x 768 and 1920 x 1080 | 0 |
| Leading | PDF page count | 17 |
| Leading | Text under 28px | 0 |
| Lagging | Session 1 slides stay within 10 to 12 minutes | Coach's call after the first run |

## Open questions

| Question | Owner | Blocking? |
| --- | --- | --- |
| Should students see the deck? This spec adds links on the Session 1 page, so anyone can open it and its speaker notes. | Coach | No. Removing the link takes one line, though the file stays reachable if deployed |

## Timeline considerations

No deadline was given. Nothing else is needed from the coach before teaching.
