# Spec: Simplify the Design Phase site around lessons

**Status:** Draft for review
**Source of content:** Design Phase Playbook in Notion (read 2026-11-01)

## Problem statement

Students open this site to answer two questions: what is happening in my next lesson, and what do I have to do before it? Today those answers sit under a Student/Instructor toggle, a how-to section, a large hero, an Overview page, and a session page with a progress rail and a coach's timed guide.

The content is also out of date. The site teaches a three-session course. The playbook now teaches five lessons, with different prompts and tools, so a student following the site would do the wrong work.

There is no analytics or student research behind this. It comes from the program owner's direction and a comparison of the site against the playbook.

## Goals

1. **Lessons come first.** A student sees all five lessons as soon as the home page loads.
2. **One page per lesson.** Everything a student needs for a lesson is on that lesson's page.
3. **The site matches the playbook.** Lessons, prompts, tools and homework agree with the Notion playbook on the date of the copy.
4. **Student-only.** Nothing written for the coach appears on the site.
5. **Less site.** Page types go from 6 to 2, even with two more lessons.

## Non-goals

- **Coach or instructor view.** The coach already works from the Notion playbook, so a second copy adds upkeep.
- **Syncing with Notion.** Content stays hand-copied into `lib/data.ts`. Five lessons do not justify an integration.
- **Lesson dates or a "you are here" marker.** The course runs per student, so there is no shared calendar to read from.
- **Accounts or homework submission.** Students submit through Slack, Claude Design and GitHub.
- **A visual redesign.** Keep the existing design tokens and brand. This is about structure and content.

## User stories

**Student preparing for a lesson**
- As a student, I want to see all the lessons in order so that I know where I am in the course.
- As a student, I want to see what to finish before a lesson so that I show up ready.
- As a student, I want an overview of what we'll do so that I know what's coming.

**Student doing homework**
- As a student, I want the task and a clear "done when" list so that I know when I've finished.
- As a student, I want to copy the right prompt from the lesson page so that I don't have to hunt for it.
- As a student, I want the test guide and checklists on the lesson that uses them so that I can use them while I work.
- As a student, I want a few places to find visual inspiration so that I'm not starting from a blank page.

**Student who is new or missing something**
- As a student without a PRD or Epics doc, I want the prompts that create them so that I can still start Lesson 1.
- As a student, I want to see how the Design phase fits into Built Young so that I understand the bigger path, without it getting in the way.

## Site structure

| Today | After |
| --- | --- |
| Home | Home: lessons first, journey second |
| Session 1, 2, 3 at `/session/[num]` | Lesson 1 to 5 at `/lesson/[num]` |
| Overview | Removed. Its content moves to Home or is dropped |
| Walkthrough (comic with placeholder art) | Removed. Replaced by the test guide on Lesson 2 |
| Prompts library | Removed. Each prompt lives on its lesson page |
| Resources | Removed. A few inspiration links move to the lessons that use them |

There is no navigation menu. The logo goes to Home, each lesson links back to all lessons, and lessons link to each other.

**Resources are cut to four,** all for visual polish, mood boards and inspiration: Mobbin, Variant, Pinterest and Dribbble.

## Lesson content

| # | Title | Length | Part | You leave with | Prompts |
| --- | --- | --- | --- | --- | --- |
| 1 | From idea to wireframes | 75 min | Make it work | Reviewed PRD and Epics doc, the good UX rules, a Claude Design project, first core loop screens | 3 (1 and 2 if needed) |
| 2 | Test with real people | 60 min | Make it work | A plan for which review comments to act on, 3 test tasks, a practice test, a plan for who to test with | 4, 5 |
| 3 | Make it look good | 60 min | Make it look good | Testing takeaways, feeling words, an art direction, a design system, main screen in hi-fi | 6, 7, 8 |
| 4 | Build it in Claude Code | 60 min | Make it feel premium | App running in Claude Code, demo navigation, first fix specced and built, a repo to review | 9, /write-spec, 10, 11 |
| 5 | Make it feel premium, then hand off | 45 min | Make it feel premium | Answers to your questions, the premium checklist, one purposeful animation, a handoff note | 12, 13, plus /write-spec and 10 |

Prompts keep their playbook numbers, so the coach and the site refer to the same thing.

## Requirements

### P0: must ship

**1. Remove the Student/Instructor toggle and all instructor state**
- [ ] No toggle in the header on any screen size.
- [ ] `instructor`, `setInstructor` and `defaultView` are gone from `AppContext`.
- [ ] The timed "Session flow" section is gone.

**2. Remove "How to use this site"**
- [ ] The section and the `HOWTO` data are gone.

**3. Rebuild Home with lessons as the primary content**
- [ ] A short title and one sentence replace the large hero. The two hero buttons are gone.
- [ ] Five lesson cards appear in order, each with number, title, length, a one-line summary and a link.
- [ ] The Lesson 1 card is visible without scrolling at 1280x800 and 390x844.
- [ ] The whole card is the click target.

**4. Show the four-phase journey as secondary information**
- [ ] It sits below the lessons as a compact strip, with one short line per phase and Design marked as current.
- [ ] It uses a smaller heading than the lessons and takes less height than they do.

**5. Replace the session pages with five lesson pages**

Each page is a single column with these sections, in this order:
1. **Header:** lesson number, title, length, and what you'll leave with.
2. **Before this lesson:** the student's prep as checkboxes.
3. **What we'll do:** a short list rewritten for the student from the lesson plan, without minute marks.
4. **Think like a designer:** the lesson's one or two principles, one line each.
5. **Prompts:** collapsed by default, each with its tool name and a copy button that works while collapsed.
6. **Homework:** task, "done when" as checkboxes, get ready for the next lesson (if any), how to submit, the designer question, and an optional stretch.
7. **Next lesson:** a link, plus a link back to the previous lesson. Lesson 5 points to Phase 3 instead.

- [ ] The sticky rail, progress bar, jump links and session switcher are gone.
- [ ] Checkboxes still persist across reloads.
- [ ] `/lesson/0` and `/lesson/6` return the 404 page.

**6. Replace all course content with the playbook**
- [ ] `SESSIONS` and `PROMPTS` are replaced with the 5 lessons and prompts 1 to 13, plus the /write-spec instruction.
- [ ] Prompt text matches the playbook word for word, other than removing the coach notes above each prompt.
- [ ] Lesson 1 groups Prompts 1 and 2 under "If you don't have a PRD or Epics doc yet".
- [ ] Prompt 2 comes with the Epics and Flows template it asks the student to paste.
- [ ] Nothing remains from the old course: sprint table, context.md, Vercel, Google Drive, NanoBanana, Variant, Flora or skills.sh. The playbook warns students away from skills found in random places, so skills.sh in particular has to go.

**7. Keep coach-only content off the site**
- [ ] No "You" prep sections, opening slides, "Watch for" lists, "After the lesson" notes or the welcome message.
- [ ] No notes above prompts, such as "not tried with a student yet" or notes from past sessions.
- [ ] No people's names in site content. Students under 18 may be named in the coach's notes. Searching `lib/data.ts` for the names in the playbook returns nothing, and homework says "your coach".

**8. Put what homework depends on in the lesson that uses it**
- [ ] Lesson 2 has the simple usability test guide, including the notes table and the "what to say" script.
- [ ] Lessons 1 and 2 have the Good UX checklist. Lessons 4 and 5 have the Premium checklist.

**9. Add inspiration links to the relevant lessons**
- [ ] The only external resources are Mobbin, Variant, Pinterest and Dribbble (`https://dribbble.com/shots/popular/product-design`).
- [ ] Lesson 2 has Pinterest and Mobbin, Lesson 3 has all four, and Lessons 4 and 5 have Mobbin and Dribbble.
- [ ] Links open in a new tab and all resolve.

**10. Remove the Overview, Walkthrough, Prompts and Resources pages**
- [ ] The four routes, their data (`PANELS`, `RESOURCE_GROUPS`, `NAV_LINKS`, `MOBILE_LINKS`, `FOOTER_LINKS`) and their links are gone.
- [ ] No link on the site returns a 404.
- [ ] `npm run build` and `npm run lint` pass, and the README is updated.

**11. Redirect old links**
- [ ] `/session/*`, `/overview`, `/prompts` and `/resources` go to Home, and `/walkthrough` goes to `/lesson/2`. Old session numbers don't map to new lessons, so they don't redirect to a lesson.

**12. Show the three parts of the course**
- [ ] Each lesson card has a small "Make it work" style label.

### P1: fast follow

- **Key terms on Lesson 1:** short definitions of epic, flow, user story, core loop, mid-fi and P0/P1/P2.

### P2: later, no need to build now

- **Full usability test script** for older students. Keeping test guides as data makes this a simple addition.
- **Other phases on the same site.** Keeping lesson content in `lib/data.ts` and pages presentational leaves this open.
- **Notion as the live source of content.** Worth revisiting if hand-copying starts to drift.

## Success metrics

The site has no analytics, so these are checks rather than trends. There is no baseline for the Slack question below.

| Type | Metric | Target |
| --- | --- | --- |
| Leading | Page types | 6 today, 2 after |
| Leading | Clicks from Home to any lesson's homework | 1 click, then scroll |
| Leading | Hallway test: "What's your homework for Lesson 3, and when is it done?" | 3 of 3 people answer in under 30 seconds |
| Leading | Content audit against the playbook | No mismatches across the 5 lessons |
| Lagging | Students asking in Slack what to do next or where a prompt is | The coach sees fewer over one student's course |

## Open questions

| Question | Owner | Blocking? |
| --- | --- | --- |
| Call them "Lessons" to match the playbook, rather than "Sessions" or "Days"? This spec assumes Lessons. | Program owner | No. It is a quick rename, but best settled before the build |

## Timeline considerations

No deadline was given. If a student is mid-course on the old three-session structure, tell them the lesson numbers changed. All of this fits in one change, with no backend or new dependency, so phasing isn't needed.
