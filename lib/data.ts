// Built Young — Design Phase content.
// Student-facing version of the Design Phase Playbook in Notion. Coach-only
// material (prep, slides, "watch for" lists, notes on prompts) stays in Notion.

export type Prompt = {
  id: string;
  label: string; // the playbook's number, e.g. "Prompt 3"
  title: string;
  tool: string;
  howTo?: string;
  body: string;
  attachment?: { title: string; body: string };
};

export type ResourceLink = { label: string; url: string; note: string };

export type GuideId = "good-ux" | "test-guide" | "premium";

export type Lesson = {
  id: string;
  num: string;
  part: string;
  title: string;
  length: string;
  summary: string;
  leaveWith: string;
  before: string[];
  plan: { title: string; note: string }[];
  mindset: { name: string; line: string }[];
  promptIds: string[];
  ifNeeded?: { title: string; promptIds: string[] };
  guides: GuideId[];
  resourceIds: string[];
  slides?: { href: string; pdf: string };
  homework: {
    due: string;
    task: string;
    doneWhen: string[];
    getReady?: string[];
    submit: string;
    question: string;
    stretch: string;
  };
};

const EPICS_TEMPLATE = `# [App name]: Epics and Flows

Owner: [student name] · Last updated: [date]
Links: [PRD] · [Wireframes] · [Repo]

## Epic map

| # | Epic | Goal | Depends on | Unlocks | MVP? |
|---|------|------|------------|---------|------|
| 1 | [Core loop] | [What the user can do] | None | [2, 3] | Yes |
| 2 | | | | | |

MVP cut line: Epics 1 to [X] ship in the first version. Everything after is Later.

---

## Epic 1: [Name]

Goal: [One sentence: what the user can do when this epic is done]
Why it's here: [Core loop / needed by epics X and Y]
Depends on: [Epics, or none]
Unlocks: [Epics]

### Flow 1.1: [Name]

Entry point: [Where the user starts, e.g., home screen, notification]
Done when: [What success looks like for the user]

User stories (tag each MVP or Later)
- [MVP] As a [user], I want to [action] so that [outcome].
- [Later] As a [user], I want to [action] so that [outcome].

Steps
1. [Screen name]: [What the user sees]. The user [does what].
2. [Screen name]: ...
3. ...

Key features on this flow
- [Feature]: [what it does]

States to design
- [ ] First-time or empty
- [ ] Loading
- [ ] Error
- [ ] Success

Open questions
- [Question]

### Flow 1.2: [Name]
[Same structure]

---

## Epic 2: [Name]
[Same structure]

---

## Decision log

| Date | Decision | Why |
|------|----------|-----|
| | [e.g., Moved sharing to Later] | [Not needed to get the core value] |

## Suggestions (not in scope yet)
- [Ideas that came up. Move into an epic only after a decision.]`;

export const PROMPTS: Prompt[] = [
  {
    id: "p1",
    label: "Prompt 1",
    title: "PRD",
    tool: "Claude",
    howTo:
      "Attach all your Phase 1 docs, change the bracket in the first line to fit your app, and paste this.",
    body: `I'm building a [mobile, desktop or web] app. I've attached everything I have about it. Turn it into a Product Requirements Document (PRD) that reads like one from a real product team at a tech company.

Step 1: Questions
Read everything first. Find what the PRD needs that's missing, unclear or contradictory. Make sure you know every type of user (for example, a student and a parent) and which one is the primary user. Ask me about the gaps as questions (5 max). For each question, give 2 or 3 suggested answers, lettered, and mark the one you recommend. I'll pick one or write my own (e.g., 1A, 2B, 3: my own idea). Don't write the PRD until I've answered.

Step 2: The PRD
Use this structure:

Document header (a table): product name, owner (me), status (Draft), version (0.1), last updated (today), reviewer (my coach), links (designs and repo: TBD).

1. Summary: 3 or 4 sentences. A busy reader could stop here.
2. Problem statement: who has the problem, what it costs them today, and the evidence from my research. If more than one type of user has the problem, cover each one.
3. Goals and non-goals: 3 goals written as outcomes, not features. Then 3 to 5 non-goals, each with a one-line reason.
4. Target users: a short persona for each type of user, starting with the primary user. For each one: who they are, what they're trying to do, what gets in their way, and how they use the app (for example, one person sets it up and another uses it every day).
5. Current alternatives: a table of what people use today and why it falls short.
6. Core loop: the one action the primary user repeats that delivers the value, as numbered steps. If another type of user has their own repeated action, give it a short loop of its own.
7. Key user stories: 5 to 8, written as "As a [user], I want to [action] so that [outcome]." Group them by type of user and order them by priority.
8. Functional requirements: a table with columns ID (FR-1, FR-2...), Requirement, User (which type of user it's for) and Priority (P0 must-have, P1 nice-to-have, P2 later). One requirement per row. P0 is only what the MVP can't ship without.
9. Non-functional requirements: accessibility, privacy and safety, and platforms and performance (which devices and systems it runs on). Short bullets, each with a clear standard (e.g., "Body text contrast of at least 4.5:1").
10. Success metrics: a table with Metric, Target, How we'll measure it, and When.
11. Scope and release plan: what's in the MVP, what comes next, and milestones for design, build and a pilot with real users.
12. Risks and assumptions: a table with Risk, Impact (high, medium or low) and Mitigation.
13. Open questions: a table with Question, Owner (me, my coach or the engineer) and Blocking (yes or no).
Appendix: links to my research docs, and a short glossary of terms like MVP, P0 and core loop.

Style rules:
- Write like a senior product manager: precise and neutral, with no hype words.
- Use plain language a teenager can follow. Define a term the first time you use it.
- Use tables where the structure asks for them, and one idea per bullet.
- Only use facts from my documents and my answers. If something is unknown, mark it TBD and add it to Open questions instead of guessing.
- Aim for 3 to 5 pages.`,
  },
  {
    id: "p2",
    label: "Prompt 2",
    title: "Epics and Flows",
    tool: "Claude",
    howTo:
      "Run this once the PRD is clean. Attach the PRD and paste the template below where marked.",
    body: `Here is the PRD for my app. Help me turn it into an Epics and Flows doc that breaks the product into what we'll design and build, in order.

Definitions:
- Epic: a major capability the user gains (e.g., "Log a workout"). Each epic contains 1 to 3 user flows.
- User flow: the path a user takes through screens to finish a task, from entry point to done.
- User story: what a flow must accomplish, written as "As a [user], I want to [action] so that [outcome]."

How to order the epics:
1. Epic 1 is the core loop from the PRD: the main thing the app exists to do. Assume the user is already signed in and has any data they need.
2. Next, what a brand-new user needs to reach the core loop (onboarding, account, setup).
3. Next, what brings users back (history, progress, reminders).
4. Then everything else (sharing, social, settings, extras).
Each epic should build on the ones before it, so the app can grow without redesigning earlier work.

For each epic, give:
- Name and goal (one sentence: what the user can do when it's done)
- Why it's in this position
- Depends on / Unlocks
- Its flows. For each flow:
  - Entry point and done state
  - User stories (2 to 5)
  - Steps: screen by screen, what the user sees and does
  - Key features on this flow
  - States to design: first-time or empty, loading, error, success
  - Open questions

Start with an epic map table. Then propose an MVP cut line: the smallest set of epics that lets a real user get the core value.

Follow this structure:
[PASTE THE EPICS TEMPLATE HERE]

Rules:
- Only include features from the PRD. If you think something is missing, list it under Suggestions at the end, not in the epics.
- Keep the language plain and short.
- Flag anything the PRD leaves unclear instead of guessing.`,
    attachment: { title: "Epics and Flows template", body: EPICS_TEMPLATE },
  },
  {
    id: "p3",
    label: "Prompt 3",
    title: "Wireframe an epic",
    tool: "Claude Design",
    howTo:
      "Use once per epic. Attach the PRD and the Epics and Flows doc, and change the brackets to fit your app.",
    body: `Design mid-fidelity wireframes for Epic [#]: [name] of my [mobile, desktop or web] app. I've attached the PRD and the Epics and Flows doc.

- Screens sized for [a phone / a desktop or laptop], grayscale only. No brand colors or custom fonts yet.
- Design every flow in this epic, screen by screen, following the Steps in the doc.
- Use realistic content (real-looking names, numbers, and text). No placeholder text.
- For each flow, include these states: first-time or empty, loading, error, success.
- Label each screen with its flow and step (e.g., "1.1 Step 3: Confirm workout").
- Link the screens so each flow can be clicked through from entry point to done.
- Use standard patterns for the platform unless the doc says otherwise (on mobile: tab bar, back navigation, bottom sheets; on desktop: sidebar or top navigation).
- Stay consistent with the screens from earlier epics.`,
  },
  {
    id: "p4",
    label: "Prompt 4",
    title: "Draft test tasks",
    tool: "Claude",
    howTo: "Paste the user stories for the flows you're testing.",
    body: `I'm going to run a usability test on my app prototype. Here are the user stories for the flows I'm testing:

[PASTE USER STORIES FROM YOUR EPICS DOC]

Write 3 test tasks I can read out to a tester.
- Each task is a goal in a realistic situation, not instructions.
- Don't use the words on my buttons or screens.
- Put them in the order a real user would do them.

Weak task: "Tap the plus button and add a workout."
Strong task: "You just finished at the gym. Record what you did."

Then point out any task that might give away the answer.`,
  },
  {
    id: "p5",
    label: "Prompt 5",
    title: "Test notes to findings",
    tool: "Claude",
    howTo: "For homework. Paste your notes, or attach photos of them.",
    body: `I tested my app with [number] people. Here are my notes from each test:

[PASTE NOTES, OR ATTACH PHOTOS OF THEM]

Turn them into a findings table with these columns:
Issue | Flow and screen | How many testers hit it | Severity | Suggested fix

Severity:
- Blocker: couldn't finish the task
- Major: finished, but struggled or needed help
- Minor: a small pause or annoyance

Sort by severity, then by how many testers hit it. Only use what's in my notes. Don't guess.

Then ask me which fixes I want to make first, and why.`,
  },
  {
    id: "p6",
    label: "Prompt 6",
    title: "Explore art directions",
    tool: "Claude Design",
    howTo: "Attach your PRD and mood board images.",
    body: `I'm ready to explore the look of my app. I've attached my PRD and my mood board images.

My app is [one-line description] for [primary users].
It should feel: [3 to 5 words]
It should NOT feel: [2 or 3 words]

First, brainstorm 3 different art directions in words. For each one, give it a name and describe the mood, colors, fonts and why it fits my users. Don't design anything yet.

Once I pick the ones I like, design the main screen of my core loop in each direction, side by side. Keep the layout and content the same, and change only the visual style, so I can compare them.`,
  },
  {
    id: "p7",
    label: "Prompt 7",
    title: "Design system",
    tool: "Claude Design",
    howTo: "Run this once you've picked a direction.",
    body: `I picked the [direction name] direction. Turn it into a small design system for my app.

My app is [one-line description] for [primary users]. It should feel: [words].
Anything about my users that affects how they see or use a screen: [for example, older adults with weaker eyesight]

Define:
- Typography: 1 or 2 free typefaces and a type scale (display, title, heading, body, caption) with sizes and weights
- Color: a palette with roles (primary, text on primary, background, surface, text, muted text, border, success, warning, error), with hex values
- Spacing scale (for example 4, 8, 12, 16, 24, 32)
- Corner radius and shadow styles
- Core components (buttons, inputs, cards, list rows, navigation) with their states
- For each choice, one line on how it fits the feeling and my users

Check every text and background pairing against WCAG AA contrast (4.5:1 for body text) and flag any that fail. Make tap targets at least 44 pt.

Then apply the design system to the main screen of my core loop.`,
  },
  {
    id: "p8",
    label: "Prompt 8",
    title: "Logo ideas",
    tool: "Claude Design",
    howTo: "For homework.",
    body: `I want to design a logo for my app. My app is [name]: [one-line description] for [primary users]. It should feel: [words].

First, brainstorm 5 logo ideas in words. For each, describe the symbol, the colors, and why it fits my app. Don't design anything yet.

Once I pick 2 or 3, design each one with my app's name underneath, in my design system's colors and fonts. Show each logo large, and small like an app icon.`,
  },
  {
    id: "p9",
    label: "Prompt 9",
    title: "Demo navigation",
    tool: "Claude Code",
    howTo: "Makes every flow one tap away.",
    body: `Build a demo navigation so it's easy to test every flow in the app, and easy for the person demoing to jump between flows.

It should be a drop-down menu that's hard to see and doesn't take away from the UI. Keep it separate from the rest of the app so it's easy to turn off before launch.`,
  },
  {
    id: "write-spec",
    label: "Skill",
    title: "Spec it with /write-spec",
    tool: "Claude Code",
    howTo:
      "Use it on each fix or build-plan item before building it. Claude asks a few questions, then writes a spec with goals, non-goals, user stories, P0, P1 and P2 requirements, and acceptance criteria.",
    body: `/product-management:write-spec [PASTE THE FIX OR THE ITEM FROM YOUR BUILD PLAN]. This is for a student project, so keep it short and plain. Skip business metrics and the timeline.`,
  },
  {
    id: "p10",
    label: "Prompt 10",
    title: "Build one step at a time",
    tool: "Claude Code",
    howTo: "Use it right after /write-spec, for every fix and every build-plan item.",
    body: `Build the P0 requirements from the spec you just wrote. If the spec isn't in this chat, here it is: [PASTE THE SPEC]

Before writing any code, break the work into small steps (A, B, C). Build only step A. Check it against the spec's acceptance criteria and make sure nothing else broke, then stop and tell me what changed in plain words. Wait for me before starting the next step.`,
  },
  {
    id: "p11",
    label: "Prompt 11",
    title: "Audit and build plan",
    tool: "Claude Code",
    howTo: "For homework. Use Opus, and give it 10 minutes or more.",
    body: `I want to audit the current app to find any major gaps, then make a structured plan for building out the rest of it.

Compare the app against my PRD and my Epics and Flows doc. Include a design and accessibility review.

Focus on the front end first, but build it so the backend is easy to hook up later. Put front-end gaps first in the plan, and list backend work separately for the engineer.

Use the product management, design and engineering plugins where they help.

Save the plan as a Markdown file in my docs folder, next to the PRD and the Epics doc.`,
  },
  {
    id: "p12",
    label: "Prompt 12",
    title: "Add a purposeful animation",
    tool: "Claude Code",
    howTo: "Pick one moment in your core loop, like finishing the main task.",
    body: `I want to add one animation to [the moment, like finishing a workout]. Its job is to [confirm the action / show where something came from / guide the eye].

Before writing any code, describe 2 options in plain words: what moves, how long it takes and how it eases. Keep it quick (about 200 to 300 milliseconds), match my design system, and make it feel [feeling words]. Respect the device's reduce-motion setting.

Once I pick one, build it, check that nothing else broke, and tell me what changed.`,
  },
  {
    id: "p13",
    label: "Prompt 13",
    title: "Engineer handoff note",
    tool: "Claude Code",
    howTo: "Read the note it writes. Would an engineer understand your app from it?",
    body: `Write a handoff note for the engineer who will build the backend for my app. Read the code, my PRD, my Epics and Flows doc and my build plan first.

Include:
- What's built and working, by epic
- What's mocked or hard-coded (fake data, placeholder images)
- The tech stack, and how to run the app
- The data the app stores, and how it connects
- Who can see and change what (flag this for the engineer to decide)
- Known issues and open questions
- What I want to learn next
- Links to my PRD, Epics doc, designs and repo

Keep it short and plain. Save it as handoff.md in my docs folder.`,
  },
];

export const RESOURCES: Record<string, ResourceLink> = {
  mobbin: {
    label: "Mobbin",
    url: "https://mobbin.com",
    note: "Real app screens, to see how other apps solve the same problem",
  },
  variant: {
    label: "Variant",
    url: "https://variant.com",
    note: "Explore visual styles and directions",
  },
  pinterest: {
    label: "Pinterest",
    url: "https://pinterest.com",
    note: "Collect images for your mood board",
  },
  dribbble: {
    label: "Dribbble",
    url: "https://dribbble.com/shots/popular/product-design",
    note: "Popular product design, for visual inspiration",
  },
};

export const LESSONS: Lesson[] = [
  {
    id: "l1",
    num: "1",
    part: "Make it work",
    title: "From idea to wireframes",
    length: "75 min",
    summary: "Wireframe every epic in Claude Design, using good UX rules.",
    leaveWith:
      "A reviewed PRD and Epics doc, the good UX rules, a Claude Design project, and the first screens of your core loop.",
    before: [
      "Get Claude Pro or Max (Pro is the minimum) and check you can open Claude Design",
      "Get set up in Slack",
      "Share your PRD and Epics doc from Phase 1 with your coach, at least 24 hours before",
    ],
    plan: [
      {
        title: "See the whole course",
        note: "Meet your coach and learn the design process, the designer principles, and how to spot AI slop.",
      },
      {
        title: "Check in",
        note: "Say in one sentence what your app helps someone do, and who it's for.",
      },
      {
        title: "Review your PRD and epics",
        note: "Why is Epic 1 first? Where's the MVP cut line? You direct Claude to fix any gaps.",
      },
      {
        title: "Learn what good UX is",
        note: "Try the Good UX checklist on a real app screen. Find a rule it follows and a rule it breaks.",
      },
      {
        title: "Start wireframing",
        note: "Set up a Claude Design project, attach your docs, and run Prompt 3 for Epic 1.",
      },
      {
        title: "Lock your homework",
        note: "Say the homework back to your coach, so you both know what's next.",
      },
    ],
    mindset: [
      { name: "Start with people", line: "Who is this for, and what are they trying to do?" },
      { name: "Solve the right problem", line: "What's the one thing this app has to do well?" },
    ],
    promptIds: ["p3"],
    ifNeeded: {
      title: "If you don't have a PRD or Epics doc yet",
      promptIds: ["p1", "p2"],
    },
    guides: ["good-ux"],
    resourceIds: [],
    slides: {
      href: "/decks/lesson-1/index.html",
      pdf: "/decks/lesson-1/Built-Young-Lesson-1.pdf",
    },
    homework: {
      due: "At least 24 hours before Lesson 2",
      task: "Wireframe every epic in your Epics doc in Claude Design, starting with the core loop.",
      doneWhen: [
        "Every epic is wireframed, and every flow clicks through from start to finish",
        "Each flow has its first-time, loading, error and success screens",
        "You tried 2 different layouts for your core loop's main screen, and picked one",
        "You checked every screen against the Good UX checklist",
      ],
      submit: "Share your Claude Design project with your coach.",
      question: "Which layout did you pick for your main screen, and why?",
      stretch:
        "In a separate Claude Design project, explore 2 or 3 design system directions for your app. Keep your wireframes grayscale for now.",
    },
  },
  {
    id: "l2",
    num: "2",
    part: "Make it work",
    title: "Test with real people",
    length: "60 min",
    summary: "Run a usability test, and choose what to test.",
    leaveWith:
      "A plan for which review comments to act on, 3 test tasks, a practice test under your belt, and a plan for who to test with.",
    before: [
      "Wireframe every epic and share your Claude Design project with your coach, at least 24 hours before",
      "Answer the designer question in Slack",
    ],
    plan: [
      {
        title: "Why we test",
        note: "See what to test first and what a test looks like.",
      },
      {
        title: "Go through your coach's comments",
        note: "Click through your prototype as your user. You decide what to change, then direct Claude Design to fix the top one.",
      },
      {
        title: "Choose what to test",
        note: "The core loop first, then anything new, risky or still being debated.",
      },
      {
        title: "Write the tasks",
        note: "Run Prompt 4, then edit until no task gives away the answer.",
      },
      {
        title: "Run a practice test",
        note: "Test your coach with the test guide, then talk through what you noticed.",
      },
      {
        title: "Plan and lock your homework",
        note: "Pick your 3 testers, at least 1 of them a real target user. Say the homework back to your coach.",
      },
    ],
    mindset: [
      { name: "Start with people", line: "Your user isn't you. Watch, ask and listen." },
      { name: "Test and learn", line: "You don't know if it works until someone else tries it." },
    ],
    promptIds: ["p4", "p5"],
    guides: ["test-guide", "good-ux"],
    resourceIds: ["pinterest", "mobbin"],
    homework: {
      due: "At least 24 hours before Lesson 3",
      task: "Make the changes you chose from our review, then test your app with 3 people using the test guide. At least 1 should be a real target user.",
      doneWhen: [
        "You've made the changes you chose from your coach's comments",
        "You've run 3 tests, with a notes table for each person",
        "You've turned your notes into a findings table with Prompt 5",
        "You've fixed anything that stopped someone from finishing a task",
      ],
      getReady: [
        "Make a free Pinterest account and save 10 to 15 images that feel like your app: other apps, places, objects and colors",
      ],
      submit:
        "Share your updated Claude Design project with your coach, and post your findings table and Pinterest board in Slack.",
      question: "Where did someone get stuck, and why do you think it happened?",
      stretch: "Find 3 apps your users already like on Mobbin, and note one thing each does well.",
    },
  },
  {
    id: "l3",
    num: "3",
    part: "Make it look good",
    title: "Make it look good",
    length: "60 min",
    summary: "Turn a mood board into a design system, and apply it to every screen.",
    leaveWith:
      "Clear takeaways from testing, feeling words for your app, a chosen art direction, a design system, and your main screen in hi-fi.",
    before: [
      "Run 3 tests, make a findings table and fix the blockers",
      "Save 10 to 15 images to a Pinterest board",
      "Share everything at least 24 hours before, and answer the designer question in Slack",
    ],
    plan: [
      {
        title: "What art direction is",
        note: "See how to read test results, what art direction means, and what makes a screen look good.",
      },
      {
        title: "Walk through your findings",
        note: "Go through your findings table and fixes, then your coach's comments.",
      },
      {
        title: "Pick your feeling words",
        note: "From your mood board, pick 3 to 5 words for how the app should feel and 2 or 3 for how it shouldn't. Cut images that don't fit.",
      },
      {
        title: "Explore directions",
        note: "Run Prompt 6 to compare 2 or 3 directions side by side. Pick one and say why it fits your users.",
      },
      {
        title: "Make your design system",
        note: "Run Prompt 7. Check contrast, then put the wireframe and hi-fi versions of your main screen side by side.",
      },
      {
        title: "Lock your homework",
        note: "Say the homework back to your coach, so you both know what's next.",
      },
    ],
    mindset: [
      { name: "Test and learn", line: "Let what you saw change your mind." },
      {
        name: "Use design judgment",
        line: "Taste comes from seeing a lot of work and noticing why it works.",
      },
      {
        name: "Sweat the craft",
        line: "Small details, like contrast and spacing, help people feel confident.",
      },
    ],
    promptIds: ["p6", "p7", "p8"],
    guides: [],
    resourceIds: ["pinterest", "mobbin", "variant", "dribbble"],
    homework: {
      due: "At least 24 hours before Lesson 4",
      task: 'Apply your design system to every screen, then design your logo with Prompt 8. To start, tell Claude Design: "Apply the design system to every screen. Keep the layouts and flows the same."',
      doneWhen: [
        "Every screen uses the design system's colors, fonts and spacing, with the layouts and flows unchanged",
        "Repeated parts, like buttons, cards and list rows, look the same everywhere",
        "All text passes the contrast check",
        "You have 2 or 3 logo options, each with your app's name",
      ],
      getReady: [
        "Make a GitHub account if you don't have one",
        "In Claude's settings, under Plugins, install Anthropic's design, engineering and product management plugins",
        "For a mobile app on a Mac, install Xcode from the App Store. It's a big download, so start early",
      ],
      submit: "Share your Claude Design project with your coach.",
      question: "Pick one choice you made, like a color, font or layout. Why does it fit your users?",
      stretch:
        "Show the hi-fi version to 1 person from your target audience, and write down their first reaction.",
    },
  },
  {
    id: "l4",
    num: "4",
    part: "Make it feel premium",
    title: "Build it in Claude Code",
    length: "60 min",
    summary: "Move to Claude Code, and build one spec at a time.",
    leaveWith:
      "Your app running in Claude Code, demo navigation, your first fix specced and built the right way, and a repo your coach can review.",
    before: [
      "Apply the design system to every screen, make a logo, and share your Claude Design project with your coach, at least 24 hours before",
      "Answer the designer question in Slack",
      "Have a GitHub account, and Anthropic's design, engineering and product management plugins installed",
      "For a mobile app on a Mac: install Xcode",
    ],
    plan: [
      {
        title: "Prototype vs. real app",
        note: "See what changes in Claude Code, what a spec is, and why small steps mean fewer bugs.",
      },
      {
        title: "Go through your coach's comments",
        note: "Decide what to fix, and which fixes wait for Claude Code.",
      },
      {
        title: "Hand off to Claude Code",
        note: "In Claude Design, type / and choose Handoff to Claude Code. Open it in Claude Code, connect GitHub and run the app. Add your coach to the repo: on GitHub, the repo's Settings, then Collaborators, then Add people.",
      },
      {
        title: "Add demo navigation",
        note: "Run Prompt 9 so every flow is one tap away.",
      },
      {
        title: "Spec it, then build",
        note: "Pick one of your coach's comments. Run /write-spec on it, then Prompt 10 to build only the first step. Check it against the spec's acceptance criteria.",
      },
      {
        title: "Lock your homework",
        note: "Say the homework back to your coach, so you both know what's next.",
      },
    ],
    mindset: [
      {
        name: "Sweat the craft",
        line: "Check the real app against the design. Details get lost in the move.",
      },
      {
        name: "Use design judgment",
        line: "A plan isn't an order. Read it, question it, and keep the P0 list short.",
      },
    ],
    promptIds: ["p9", "write-spec", "p10", "p11"],
    guides: ["premium"],
    resourceIds: ["mobbin", "dribbble"],
    homework: {
      due: "At least 24 hours before Lesson 5",
      task: "Run the audit with Prompt 11, then polish the app: fix the comments from our review and the front-end gaps the audit finds, one spec at a time.",
      doneWhen: [
        "The audit's build plan is saved in your docs folder",
        "Every review comment is fixed, or has a reason it isn't",
        "Each front-end item in sprint 1 of the build plan has a spec, meets it, and is pushed to GitHub",
      ],
      submit: "Push your latest code to GitHub, then tell your coach in Slack that it's ready.",
      question: "What's one detail you polished, and why does it matter to your users?",
      stretch: "In Claude Code, type / and run design critique on your main screens. Fix one thing it finds.",
    },
  },
  {
    id: "l5",
    num: "5",
    part: "Make it feel premium",
    title: "Make it feel premium, then hand off",
    length: "45 min",
    summary: "Polish with motion and detail, and hand off to an engineer.",
    leaveWith:
      "Answers to your questions, a premium checklist to keep polishing with, one animation with a clear job, and a handoff note for the engineer.",
    before: [
      "Push your latest code to GitHub, at least 24 hours before",
      "Answer the designer question in Slack",
    ],
    plan: [
      {
        title: "Premium vs. vibe coded",
        note: "See two versions of the same screen, what motion is for, and what an engineer needs.",
      },
      {
        title: "Comments and questions",
        note: "Go through your coach's GitHub issues, then ask your questions.",
      },
      {
        title: "Make one moment premium",
        note: "Pick one moment in your core loop. Run Prompt 12 to add an animation with a clear job, then check it against the Premium checklist.",
      },
      {
        title: "Write your handoff note",
        note: "Run Prompt 13 and read the note. Would an engineer understand your app from this?",
      },
      {
        title: "Wrap up",
        note: "Walk through the design process from memory, meet your engineer, and set your homework.",
      },
    ],
    mindset: [
      { name: "Sweat the craft", line: "Premium is a hundred small details done on purpose." },
      { name: "Explain your thinking", line: "The engineer can only build what they understand." },
    ],
    promptIds: ["p12", "p13", "write-spec", "p10"],
    guides: ["premium"],
    resourceIds: ["mobbin", "dribbble"],
    homework: {
      due: "Before your first session with the engineer",
      task: "Fix the comments from our review, one spec at a time, and keep your handoff note up to date.",
      doneWhen: [
        "Every GitHub issue from the review is closed, or has a reason it's still open",
        "The core loop passes the Premium checklist",
        "Your handoff note matches the app",
      ],
      submit: "Share your repo and handoff note with your coach and the engineer.",
      question: "What's the most important thing the engineer needs to understand about your app?",
      stretch: "Test the real app with 1 person from your target audience.",
    },
  },
];

export const PHASES = [
  {
    n: "1",
    name: "Problem & Validation",
    focus: "Define the problem, users, and what to build.",
    status: "done",
  },
  {
    n: "2",
    name: "Design",
    focus: "Turn the PRD into a tested design and a front end that's ready to build.",
    status: "current",
  },
  {
    n: "3",
    name: "Build & Deploy",
    focus: "Work with an engineer to build the backend and ship it.",
    status: "upcoming",
  },
  {
    n: "4",
    name: "Commercialization",
    focus: "Take the finished product to market.",
    status: "upcoming",
  },
] as const;

export const GOOD_UX_RULES = [
  {
    rule: "Obvious next step",
    means: "Each screen has one main thing to do, and it stands out.",
    ask: "What's the one thing to do here?",
  },
  {
    rule: "Speaks the user's language",
    means: "Labels use the words your users use, not tech words.",
    ask: "Would my user say it this way?",
  },
  {
    rule: "Shows what's happening",
    means: "Loading, saving, success and errors are always visible.",
    ask: "Does the user know it worked?",
  },
  {
    rule: "Easy to undo",
    means: "People can go back, cancel or undo without fear.",
    ask: "What if they tapped the wrong thing?",
  },
  {
    rule: "Prevents mistakes, and helps fix them",
    means: "It's hard to do the wrong thing. Errors say what went wrong and how to fix it.",
    ask: "Could this go wrong? What does the error say?",
  },
  {
    rule: "Consistent and familiar",
    means: "The same things look and work the same way everywhere, and follow patterns people already know.",
    ask: "Does this work like other apps they use?",
  },
  {
    rule: "Shows, doesn't make you remember",
    means: "Options and information are visible when they're needed, not hidden.",
    ask: "Does the user have to remember anything?",
  },
  {
    rule: "Only what's needed",
    means: "Every element earns its place. Extra features and decoration get cut.",
    ask: "What can I remove?",
  },
  {
    rule: "Works for everyone",
    means: "Readable text, strong contrast and big tap targets.",
    ask: "Could my oldest or youngest user use this?",
  },
];

export const PREMIUM_ROWS = [
  {
    premium: "The same spacing, type sizes, colors and components everywhere",
    vibe: "One-off sizes and colors on every screen",
  },
  { premium: "One thing stands out on each screen", vibe: "Everything shouts at once" },
  {
    premium: "Real-looking content, and images made for the app",
    vibe: "Placeholder text and random photos from the internet",
  },
  {
    premium: "Every state designed: first-time, loading, empty, error and success",
    vibe: "Blank screens and raw error messages",
  },
  {
    premium: "Every tap gets a response: a pressed state, and haptics on mobile",
    vibe: "Buttons that feel dead",
  },
  {
    premium: "Motion that explains where things come from and go",
    vibe: "No motion, or flashy animation for its own sake",
  },
  {
    premium: "Words written with care: clear labels and a human voice",
    vibe: "Robotic or hype copy",
  },
  { premium: "Fast: something shows right away", vibe: "Long spinners and jumpy layouts" },
  { premium: "One small moment of delight in the core loop", vibe: "Nothing memorable" },
];

export const MOTION_BASICS = [
  {
    name: "Every animation needs a job",
    line: "Show where something came from, confirm an action, or guide the eye.",
  },
  {
    name: "Keep it quick",
    line: "Most transitions feel right at about 200 to 300 milliseconds.",
  },
  {
    name: "Ease in and out",
    line: "Natural motion speeds up and slows down instead of moving at one speed.",
  },
  {
    name: "Respect reduce motion",
    line: "Tone animations down when the user's device asks for it.",
  },
  {
    name: "Start with the core loop",
    line: "One great moment beats animations everywhere.",
  },
];

export const TEST_GUIDE = {
  intro:
    "A usability test means watching someone use your app to see where they get stuck. It takes about 10 minutes per person. Test with 3 people.",
  who: "People who would actually use your app. Family counts if they're the kind of person it's for.",
  need: [
    "Your prototype, open on a phone or computer",
    "3 tasks (Prompt 4 helps you write them)",
    "The notes table below",
    "If you want to record, ask first",
  ],
  script:
    "Thanks for helping! I'm testing my app, not you, so you can't do anything wrong. Please say what you're thinking out loud as you go. I'm going to stay quiet so I can see how you'd use it on your own.",
  taskIntro:
    "Give one task at a time. A task is something the person wants to do, not instructions on what to tap.",
  dontSay: "Tap the green Start button.",
  say: "You want to practice Spanish for 5 minutes. Go do that.",
  watch: [
    "Don't help, even if they're stuck.",
    'If they ask what to do, say: "What would you try?"',
    "Write down where they pause, get confused, or tap the wrong thing.",
    "If they're stuck for more than a minute, help them and write it down.",
  ],
  questions: ["What was confusing?", "What did you like?", "Would you use this?"],
  notesTable: `Tester: [name]

| Task | Did they do it? | Where did they get stuck? |
| --- | --- | --- |
| 1 | Yes / Needed help / No | |
| 2 | | |
| 3 | | |`,
  after:
    "Look at your notes. If 2 or more people got stuck in the same spot, fix that first. Then tell Claude what to change.",
};
