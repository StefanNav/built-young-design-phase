# Spec: Lesson 1 slide deck

**Status:** Built, waiting on a real app screen for slide 16
**Sources:** Design Phase Playbook and Slide deck brief in Notion (read 2026-11-01), plus the coach's pasted Claude Design brief

## Problem statement

Lesson 1 opens with 10 to 12 minutes of slides that introduce the whole course, and the coach has no deck yet. Without one, the student's first impression of a course about avoiding AI slop is a screen share of unprepared material.

## Goals

1. **Ready to teach.** The coach can open the deck in a new tab and present it on a video call with only the keyboard.
2. **Readable on a laptop.** Nothing overflows or crowds at laptop size, and a teen can read every slide on a shared screen.
3. **Matches the lesson.** Slides agree with the playbook, so the deck, the lesson plan and the student site say the same thing.
4. **Shows what it teaches.** The deck has none of the AI slop tells that it asks students to spot, outside the labeled example.
5. **Has a backup.** A one-page-per-slide PDF can be downloaded from the deck.

## Non-goals

- **Decks for Lessons 2 to 5.** Lesson 1 sets the style first. The structure should make the others easy to add.
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
- As a student, I want to see real examples of good and bad design so that I can tell them apart.

## Slides

Content follows the playbook's 16-slide outline. Slide 14 is added from the pasted brief, because students need it to explain Epic 1 and the MVP cut line.

| # | Slide | Main source |
| --- | --- | --- |
| 1 | Title: Lesson 1, From idea to wireframes | Playbook |
| 2 | Hi, I'm Stefan | Pasted brief |
| 3 | Some things I've made | Pasted brief |
| 4 | Where we are: the four phases | Both |
| 5 | Course goals | Both |
| 6 | The course in three parts | Playbook |
| 7 | The design process: nine steps | Playbook |
| 8 | What makes a good designer | Both |
| 9 | AI slop vs designed: Workout Log home screen | Playbook |
| 10 | How to spot AI slop | Playbook |
| 11 | How this course works | Both |
| 12 | Today's objectives | Playbook |
| 13 | Principle spotlight | Both |
| 14 | Example: the Workout Log epic map | Pasted brief |
| 15 | Good UX in 9 rules | Playbook |
| 16 | Try it: a real app screen | Playbook |
| 17 | What you'll make today | Playbook |

## Requirements

### P0: must ship

**1. Presenting**
- [ ] Opens in a new tab from a link on the Lesson 1 page, and from `public/decks/lesson-1/index.html`.
- [ ] Slides are 16:9 on a 1920 x 1080 canvas and scale to fit the window.
- [ ] Arrow keys and clicking move between slides. Clicking the left edge goes back.
- [ ] N shows and hides speaker notes. Notes never appear on a slide or in the PDF.

**2. PDF**
- [ ] The deck has a visible way to download the PDF, and the Lesson 1 page links to it too.
- [ ] The PDF has one slide per page, 17 pages, with brand colors and no deck controls.

**3. Format**
- [ ] Titles at least 80px on the canvas. Slide text at least 28px, excluding the small text inside the example app screens.
- [ ] Headings sit in the same place on every slide.
- [ ] One idea per slide, about 30 words at most where possible.
- [ ] Logo large on the title slide. Every other slide has the logo with "Built Young" at the bottom left and "Lesson 1" at the bottom right.
- [ ] No text or element overflows its box or the slide at laptop size.

**4. Brand**
- [ ] Uses the Built Young colors and Inter, with rounded corners and block shapes that echo the logo. Course goals uses a navy background, all others cream.
- [ ] Outside the labeled AI slop example: no purple or blue gradients, glass or glow effects, sparkle icons, emoji icons or hype words.

**5. Images**
- [ ] Uses the real logo file and real screens of Somni, LastingMind and FanFeed, none of them cropped by the layout.
- [ ] The real app on the "Try it" slide is a labeled "Drop in" frame.

### P1: fast follow

- Add a real app screen for slide 16.
- Deep links to a slide, such as `#9`.
- Fullscreen shortcut.

### P2: later

- Decks for Lessons 2 to 5 using the same styles.

## Success metrics

| Type | Metric | Target |
| --- | --- | --- |
| Leading | Slides with overflow, measured at 1366 x 768 and 1920 x 1080 | 0 |
| Leading | PDF page count | 17 |
| Leading | Text under 28px, excluding example screens | 0 |
| Lagging | Lesson 1 slides stay within 10 to 12 minutes | Coach's call after the first run |

## Open questions

| Question | Owner | Blocking? |
| --- | --- | --- |
| Should students see the deck? This spec adds links on the Lesson 1 page, so anyone can open it and its speaker notes. | Coach | No. Removing the link takes one line, though the file stays reachable if deployed |
| Which real app goes on slide 16? The playbook suggests Duolingo, Headspace, Things 3, Apple Weather or Airbnb from Mobbin. | Coach | No. It's a labeled frame until then |

## Timeline considerations

No deadline was given. The slide 16 screen is the only input still needed from the coach before teaching.
