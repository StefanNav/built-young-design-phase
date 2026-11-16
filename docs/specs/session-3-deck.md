# Spec: Session 3 deck and page

**Status:** Approved and built
**Sources:** The coach's notes on 2026-11-15 (art direction with a room example, feeling words, mood board, design systems), and the choices agreed in chat that day: one short lecture, then the rest of the hour working together, free photos for the room example, and homework at the end. The Notion playbook is out of date and isn't used.

## Problem statement

Session 3 is where students stop working in grey wireframes and give their app a look. They need to understand what an art direction is, find one for their own app, and turn it into a design system they can apply to every screen. There's no deck yet, and the Session 3 page still has a "Walk through your test results" step that the coach has cut.

## Goals

1. **Art direction clicks.** Students can explain it in one line, using the room example: the same room can feel completely different.
2. **A repeatable process.** Feeling words, then a mood board, then directions to compare.
3. **Design systems make sense.** Students know what's in one, how the parts build into screens, and how it comes out of the art direction.
4. **Short lecture, long work time.** One block of teaching, then the coach and students do the work together for the rest of the hour.
5. **Matches the site.** The deck and the Session 3 page say the same thing.
6. **Same quality bar as Session 2.** Same look, controls, PDF and overflow checks.

## Non-goals

- **"Your turn" stops during the lecture.** All the doing happens after it.
- **Test results.** Not covered in Session 3.
- **A drawn or AI-generated room.** The room example uses free photos.
- **A designer question or stretch task** in Session 3 homework, the same as Sessions 1 and 2.
- **Updating the Notion playbook.**

## Run of the session (60 min)

| Min | What happens | Slides |
| --- | --- | --- |
| 0 to 15 | Lecture: art direction, finding yours, design systems | 1 to 10 |
| 15 to 55 | Work together: feeling words, mood board, Prompt 6, Prompt 7 | 11 stays up |
| 55 to 60 | Homework, and the student says it back | 12 |

## Slides

12 slides at `public/decks/session-3/index.html`, with a PDF at `public/decks/session-3/Built-Young-Session-3.pdf`. The footer reads "Session 3". Same look and controls as the Session 2 deck.

| # | Slide | On the slide | Notes cover |
| --- | --- | --- | --- |
| 1 | Title | "Session 3: Make it look good." Promise: "Today you choose how your app looks and feels." | Your flows work. Now we make them feel like something. Quick lecture, then we build it together. |
| 2 | What's art direction? | "The look and feel you choose, so every screen feels like the same app." Chips: colors, fonts, images, shapes, mood. | It's a set of choices, made on purpose, that all point at one feeling. |
| 3 | An empty room | Photo of an empty room. "It works, but it doesn't feel like anything." | This is your app in grey wireframes. Everything's in the right place, but there's no feeling yet. |
| 4 | Art direction: Space | Photo: navy wall with a glowing moon lamp. Ingredients: deep navy, glowing light, stars, round shapes. Feels: dreamy, calm, a bit magical. | Every choice points at "space". Nothing in the room fights it. |
| 5 | Art direction: Nature | Photo: a bedroom with wood and a jungle view. Ingredients: greens, wood, plants, soft daylight. Feels: fresh, calm, alive. | Same kind of room, a completely different feeling. |
| 6 | Two more | Photos side by side. Retro arcade: neon pink and blue, dark walls, bold. Calm minimal: white, soft wood, lots of empty space. | Which would you sleep best in? Which would you game in? What the room is for decides the direction. |
| 7 | Same idea, your app | The Workout Log home screen three times: grey wireframe, "Power" (dark, lime green, bold), "Fresh" (light, friendly, rounded). | Same layout, same buttons, same words. Only the look changes. That's all an art direction is. Power fits Maya; Fresh might fit Sam. Pick for your primary persona. |
| 8 | Find yours: words, then a mood board | Workout Log example. Feeling words on top: it should feel strong, focused, quick; it shouldn't feel cute, cluttered. Below: a mood board of 6 photos (barbell, track, sprinter, stopwatch, chalk hands, dumbbells) and the colors pulled from it. Where to look: Pinterest, Dribbble, Mobbin, ChatGPT. | Words first, so you know what you're looking for. ChatGPT can make images of your words when you can't find the right one. Cut anything that doesn't fit your words. Then Prompt 6 turns the board into 2 or 3 directions to compare. |
| 9 | What's a design system? | "A set of rules and reusable parts that make every screen look like the same app." Like LEGO: a small set of pieces, used again and again. The parts: colors, type, spacing, corners and shadows, components. Real ones: Google's Material Design, Apple's Human Interface Guidelines. | Big companies have huge ones. Yours fits on one page. |
| 10 | From direction to system | The Power direction's design system sheet: colors with hex values, type scale, spacing, a primary and secondary button, a card. A line of how it builds: styles make components, components make screens. "Change the main color once, and every button changes." Room version: "Space" is the direction; the paint, the lamp and the bedding you buy are the system. | The direction is the feeling. The system writes it down, so every screen keeps it, and changes are fast. |
| 11 | Now let's make yours | The work plan, which stays up while you work: 1. Feeling words: 3 to 5 it should feel, 2 or 3 it shouldn't. 2. Mood board: cut it to what fits your words. 3. Run Prompt 6 and pick one direction. 4. Run Prompt 7, check contrast (4.5:1), and put the wireframe and new screen side by side. | Push past "clean" and "modern"; everyone says those. When they pick a direction, ask why it fits their users. |
| 12 | Your homework | Apply your design system to every screen, keeping the layouts and flows the same. Design your logo with Prompt 8. Due Sunday at 1 PM ET, before Session 4. Get ready: GitHub account, Claude plugins, Xcode for Mac mobile apps. | Say it back to me. |

## Photos

Each is saved into `public/decks/session-3/assets/` as a compressed JPEG. Unsplash photos (free under the Unsplash License) credit the photographer in the slide's notes.

The coach supplied the Space, Nature and Calm minimal images on 2026-11-15. They show the same room as the empty-room photo, restyled, so slides 3 to 6 now make the "same room, different direction" point directly.

| Slide | Image |
| --- | --- |
| 3 | Unsplash `empty-room-with-wooden-floor-and-large-window-4YhNRgL59Fc` |
| 4 | The coach's "Cosmic Command Lounge" (the same room, space theme) |
| 5 | The coach's "Cozy Biophilic Forest Living Room" (the same room, nature theme) |
| 6 | Unsplash `a-room-with-a-refrigerator-and-a-neon-sign-on-the-wall-FqC-82jpvbk` (Retro arcade), and the coach's "Serene Minimalist Living Room" (Calm minimal) |
| 8 | `a-close-up-of-a-barbell-on-a-gym-floor-gP9rAnGJBRo`, `curving-red-running-track-with-white-lane-lines-X--fADxhNIs`, `runner-starting-sprint-on-red-track-6PujGXV5kyc`, `a-close-up-of-a-stopwatch-on-a-black-background-VwqMTcsb0Tg`, `a-black-and-white-photo-of-two-hands-holding-something-Cc7JMGUNxok`, `row-of-black-hex-dumbbells-0OpVPmVS2vg` |

Slides 7 and 10 are built in HTML, not photos, so they match the Workout Log demo from Session 2.

## Session 3 page changes

- Summary: "Find your app's art direction, then turn it into a design system."
- You'll leave with: "Feeling words for your app, a mood board, a chosen art direction, and a design system on your main screen."
- What we'll do: Learn art direction and design systems; Pick your feeling words; Build your mood board; Explore directions (Prompt 6); Make your design system (Prompt 7); Lock your homework. The test results step is removed.
- Principles: Use design judgment, Sweat the craft. "Test and learn" is removed.
- Slides: an "Open slides" button.
- Homework: unchanged, except the designer question and stretch are removed.
- Before this session, prompts and resources: unchanged.
- Session 4 page: "Answer the designer question in Slack" is removed from its "before" list, since Session 3 no longer has one.
- Skills for Claude Code (added 2026-11-15): a new section with three cards. Each says who made the skill, links to where it came from, explains what it does and when to use it in plain words, and gives a copyable install line and a first thing to ask Claude.
  - Stageshow, by Benji Taylor, from his post on X: `npx skills add benjitaylor/skills --skill stageshow`
  - Animate, by Emil Kowalski, from his skills on GitHub: `npx skills add emilkowalski/skills --skill animate`
  - Impeccable, by Paul Bakaus, from impeccable.style: `npx impeccable install`, then `/impeccable init`

## Requirements

- The deck has the 12 slides above, in the Session 2 style, with speaker notes on every slide.
- No text or element overflows at 1366 x 768 or 1920 x 1080. Slide text is at least 28px.
- The PDF has 12 pages, one slide per page, with no controls or notes.
- No em dashes in new copy.
- `npm run build` and `npm run lint` pass.
