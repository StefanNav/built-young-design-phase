# Spec: Session 2 deck, demo and page

**Status:** Approved and built. The demo link works once the site is deployed
**Sources:** The coach's notes on 2026-11-08 (personas, live usability test, core flows, homework), and the choices agreed in chat that day. The Notion playbook's Lesson 2 page is out of date and was only used for what the notes don't cover: the test guide script and the weak vs strong task example.

## Problem statement

Session 2 used to be about review comments and test tasks, with 5 minutes of slides. The coach now wants it built around two ideas: designing for personas, and usability testing. Students make their own personas, watch a real test happen on an example app, and choose which core flows to test. The site's Session 2 page, prompts and test guide still describe the old session.

## Goals

1. **Personas stick.** Students leave knowing what a persona is, with a primary persona and one more for their own app, and they use them to judge their screens.
2. **Students see a real test.** The coach runs a usability test live, on a demo that reliably surfaces a problem, so students see what "watch, don't help" looks like.
3. **Interactive.** The deck runs through the whole hour, with two "Your turn" stops where the class works together.
4. **Matches the site.** The deck, the Session 2 page, the prompts and the test guide say the same thing.
5. **Same quality bar as Session 1.** Same look, controls, PDF and overflow checks.

## Non-goals

- **Going through the coach's comments.** Cut from Session 2.
- **Visual design.** Students stay in grey, medium-fidelity wireframes until Session 3.
- **A designer question or stretch task** in Session 2 homework.
- **Updating the Notion playbook.** The site and deck change; Notion doesn't.

## User stories

- As a coach, I want slides that move between teaching and "Your turn" activities so that the hour stays interactive.
- As a coach, I want a demo I can share as a link and run a real test on, so that students see a test before running their own.
- As a student, I want an example persona so that I know what to make for my own app.
- As a student, I want a prompt that drafts my personas from my PRD so that we can make them in the session.
- As a student, I want clear homework that tells me to fix my flows, not my visuals, before I test.

## Run of the session (60 min)

| Min | What happens | Slides |
| --- | --- | --- |
| 0 to 8 | Objectives, what a persona is, Maya and Sam, designing for how they think | 1 to 7 |
| 8 to 20 | Your turn: brainstorm personas, then run Prompt 4 in Claude Design | 8 |
| 20 to 28 | Why we test, how to run a test, weak vs strong tasks, stay quiet | 9 to 12 |
| 28 to 40 | Live test on the demo, then debrief and show the fixed version | 13 and 14 |
| 40 to 52 | Your turn: pick the core flows to test, then make a test guide with Prompt 5 | 15 and 16 |
| 52 to 60 | Homework, and the student says it back | 17 |

## Slides

The deck has 17 slides, at `public/decks/session-2/index.html`, with a PDF at `public/decks/session-2/Built-Young-Session-2.pdf`. The footer reads "Session 2".

| # | Slide | On the slide | Notes cover |
| --- | --- | --- | --- |
| 1 | Title | "Session 2: Test with real people." Promise: "Today you meet your users, then watch someone use your app." | Welcome back. Today has two parts: personas, then testing. |
| 2 | Today's objectives | Explain what a persona is. Make a primary persona and one more. Write test tasks as goals. Run a test without helping. Pick the core flows worth testing. | We'll check these off at the end. |
| 3 | Today's principles | "Start with people": your user isn't you. Ask yourself: "Who is this for, and how do they think?" "Test and learn": you don't know if it works until someone else tries it. Ask yourself: "Where did someone get stuck, and why?" | Both are from the six principles in Session 1. |
| 4 | What's a persona? | "A made-up person, based on real people, who stands for a group of your users." | It's not you, and it's not everyone. Name, goals, needs, pain points and how they think. |
| 5 | Meet Maya | Primary persona card for Workout Log, with the coach's photo of Maya. Quote: "I just want to log it and get back to my set." Who: 16, plays soccer, lifts 3 times a week. Goal: get stronger before the season. Needs: log a set in seconds. Pain point: forgets what she lifted last time. How she thinks: in sets and reps, phone in one hand. | Maya is the primary persona: the app is built for her first. |
| 6 | Meet Sam | Second persona card, with the coach's photo of Sam. Quote: "I don't even know what I'm supposed to write down." Who: 19, new to the gym this year. Goal: make the gym a habit. Needs: to know what to do next. Pain point: gives up when an app asks too much. How he thinks: in exercises, not sets. | Same app, different needs. A second persona keeps you from designing only for one kind of user. |
| 7 | Design for how they think | Maya logs between sets, with one hand: big buttons, and repeat the last set in one tap. Sam doesn't know what to log: suggest a starter workout. | Ties to the Good UX rules "Speaks the user's language" and "Consistent and familiar". On every screen, ask: would Maya get this? Would Sam? |
| 8 | Your turn: who are your personas? | Who are they? What are their goals? What do they need? What gets in their way? How do they think? Then: "Run Prompt 4 in Claude Design." | Talk it through for 3 minutes, primary first. Then run the prompt. Fix anything that sounds generic or doesn't sound like a real person. |
| 9 | Why we test | "You know how your app works. Your users don't." | You've looked at your screens all week, so you can't see them fresh. When people get stuck, they blame themselves, but it's the design. |
| 10 | A test in 6 steps | Pick a core flow. Write tasks as goals. Find a tester who matches your persona. Read the script. Watch, don't help. Write down where they got stuck. | About 10 minutes per tester. The script is in the usability test guide on the site. |
| 11 | Weak task vs strong task | Weak: "Tap the plus button and add a workout." It tells them where to tap. Strong: "You just finished at the gym. Record what you did." It gives a goal, in a real moment. | Don't use the words on your buttons. |
| 12 | The hardest part: stay quiet | "Don't help." If they ask what to do, say: "What would you try?" | If they're stuck for more than a minute, help them and write it down. Watch what they do more than what they say. |
| 13 | Let's test it | The demo link, the task ("You just finished at the gym. You did 3 sets of 10 squats. Record what you did."), and the roles: one tester, everyone else writes down where they pause. | Paste the link in the chat. The tester opens it and shares their screen. Read the script, then the task, then stay quiet. |
| 14 | What did we notice? | Where did they pause? What did they expect to happen? What would you change? | The planted problem: the big button says "Add exercise" and saving is a small "Finish" in the corner. Then open the `?fixed` version to show the change. |
| 15 | Test your core flows | "You can't test everything. Start with the flows your app can't work without." The Workout Log epic map from Session 1, with Epic 1 marked "Test this first". | In this course we only test core flows. |
| 16 | Your turn: pick your core flows | Sub: "Which flows will you test?" Name your core loop. Pick the 1 or 2 flows in it. Run Prompt 5: your test guide. | Do it together. Check every task against slide 11: no button words, no tapping instructions. |
| 17 | Your homework | Tidy up your flows and do one more round on them: the flows, not the looks. Test with 2 or 3 people who match your personas. Make changes from what you find. Due Sunday at 1 PM ET. | Say it back to me. Stay in grey wireframes until Session 3. |

## Demo: Workout Log, "Log a workout"

A clickable, grey, medium-fidelity wireframe at `public/decks/session-2/demo/index.html`. Students open it from the short link `built-young-design-phase.vercel.app/workout-log`, which redirects there and keeps `?fixed`.

**Screens**
1. **Home:** the last workout, and a clear "Log a workout" button.
2. **Pick an exercise:** a search box and a short list: Squats, Bench press, Deadlift, Push-ups.
3. **Add your sets:** the chosen exercise with Set 1 filled in (10 reps) and "+ Add set" to add more.
4. **Saved:** "Workout saved", with a summary of what was logged.

**Planted problem (screen 3):** the biggest button is "Add exercise", which goes back to the exercise list. The real way to save is a small grey "Finish" in the top corner. It breaks the Good UX rule "Obvious next step".

**Fixed version:** the same page with `?fixed` in the URL. Screen 3 has a full-width "Save workout" button at the bottom, and "Add exercise" becomes a secondary button.

**Coach controls:** a small "Restart" link under the phone takes it back to Home.

**Requirements**
- Fills the screen on a phone. On a laptop it sits in a centered phone frame.
- Grey only, with no brand colors, like the students' wireframes.
- One self-contained HTML file with no outside scripts and no tracking.
- Every tap that a tester might try does something sensible: back buttons work, and no dead ends.

## Site changes

**New Prompt 4: Personas (Claude Design)**
- How to use it: "Attach your PRD and paste this."
- It makes two persona cards, primary first. Each card has a name, age, a one-line quote, who they are, goals, needs, pain points, and how they think (the words they use, and when and where they'd use the app).
- It asks at most 3 questions, and only if the PRD leaves out something important.
- It only uses facts from the PRD and the student's answers.

**New Prompt 5: Usability test (Claude Design)**
- Replaces "Draft test tasks". Run in the student's Claude Design project, it reads the wireframes and makes a printable PDF test guide: an intro, 3 to 5 tasks (one per main flow), a follow-up question per task, a giveaway check and a notes table to print once per tester.
- "Test notes to findings" is cut.

**Renumbering:** Personas is Prompt 4 and the usability test is Prompt 5. Art directions through the engineer handoff note become Prompts 6 to 13. Every "Prompt X" mentioned in site copy is updated to match.

**Session 2 page**
- Summary: "Make personas, then test your core flows with real people."
- You'll leave with: "Your primary persona and one more, a live test you watched, the core flows you'll test, and a printable test guide."
- Before this session: unchanged.
- What we'll do: Meet personas; Make your personas (Prompt 4); How to run a test; Live test; Pick your core flows and make your test guide (Prompt 5); Lock your homework.
- Prompts: 4 (Personas) and 5 (Usability test).
- Slides: an "Open slides" button. The PDF downloads from inside the slides.
- Homework task: "Tidy up your flows and do one more round on them, then test with 2 or 3 people who match your personas, and make changes from what you find."
- Done when:
  - Your core flows click through from start to finish, and you'd be happy to show someone.
  - You worked on the flows, not the looks, and stayed in grey wireframes.
  - You've tested with 2 or 3 people who match your personas, with notes for each.
  - You've changed what tripped up your testers.
- Get ready for Session 3: start finding apps with a design you like on Dribbble and Mobbin, and save 10 to 15 images to a Pinterest board. Links to Dribbble, Mobbin and Pinterest sit under this list, inside the homework. Session 2 has no separate "Find inspiration" section.
- Submit: "Share your updated Claude Design project with your coach, and post your test notes and Pinterest board in Slack."
- No designer question or stretch.

**Usability test guide:** "Test with 3 people" becomes "Test with 2 or 3 people". Who to test becomes "People who match your personas".

**Session 3 page:** remove "answer the designer question in Slack" from its "before" list.

## Requirements

### P0: must ship
- [ ] The deck has the 17 slides above, in the Session 1 style, with speaker notes on every slide.
- [ ] No text or element overflows at 1366 x 768 or 1920 x 1080. Slide text is at least 28px and titles at least 80px.
- [ ] The PDF has 17 pages, one slide per page, with no controls or notes.
- [ ] The demo works at 375px wide and on a laptop, including the `?fixed` version and Restart.
- [ ] The Session 2 page, Prompts 4 to 13 and the test guide match this spec.
- [ ] No em dashes in new copy.
- [ ] `npm run build` and `npm run lint` pass.

### P1: nice to have
- A QR code for the demo link on slide 13, for students who'd rather use their phone.

## Success metrics

| Type | Metric | Target |
| --- | --- | --- |
| Leading | Slides with overflow at 1366 x 768 and 1920 x 1080 | 0 |
| Leading | PDF page count | 17 |
| Lagging | The live test surfaces the planted problem | Coach's call after Session 2 |
| Lagging | Students make both personas within the 12 minutes | Coach's call after Session 2 |

## Open questions

| Question | Owner | Blocking? |
| --- | --- | --- |
| The demo link only works once the site is deployed. Deploy before Session 2. | Coach | Yes, before teaching |
| The Notion playbook's prompt numbers will be out of step with the site after renumbering. | Coach | No |
