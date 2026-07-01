// Built Young — Design Phase content.
// Transcribed verbatim from the handoff prototype (BuiltYoung Design Phase.dc.html).

export type Prompt = {
  id: string;
  title: string;
  session: string; // filter key: 'Session 1' | 'Session 2' | 'Session 2 & 3'
  tool: string;
  body: string;
};

export type ResourceLink = { label: string; url: string; note: string };

export type Session = {
  id: string;
  num: string;
  route: string; // '1' | '2' | '3'
  crumb: string;
  duration: string;
  title: string;
  focus: string;
  beforeYouStart: string[];
  outcomes: string[];
  flow: { time: string; dur: string; title: string; note: string }[];
  concepts: { title: string; body: string }[];
  promptIds: string[];
  resources: ResourceLink[];
  homework: {
    title: string;
    note?: string;
    items: string[];
    linkRoute?: string;
    linkLabel?: string;
  };
  next: { route: string; tag: string; title: string; blurb: string };
};

export const PROMPTS: Prompt[] = [
  {
    id: "p1",
    title: "Design sprint / user-story table",
    session: "Session 1",
    tool: "Claude",
    body: `You are helping me translate a product requirements document into a
structured design sprint. I will paste my PRD below.

Break it into a table with these columns:
Epic | User Story | Key Features | Short Description | User Flow

Structure the Epics so they build progressively: Epic 1 establishes the
foundational skeleton (core navigation + the single most important screen
and user action). Each later Epic adds one layer on top of what came
before. Order the user stories within each Epic the same way.

Write user stories as: "As a [user], I want [goal], so that [benefit]."
Keep key features concrete and buildable in a prototype.

Output the table so I can paste it straight into Google Sheets
(a Markdown table or tab-separated).

Here is my PRD:
[PASTE PRD]`,
  },
  {
    id: "p2",
    title: "context.md file",
    session: "Session 1",
    tool: "Claude",
    body: `Using the PRD I've provided, write a context.md file that I will give to
an AI design tool as persistent context while it builds this app.

Include, in clean, skimmable Markdown:
1. Executive summary of the app (3-4 sentences)
2. The core problem the app solves
3. Who the target users are and what they need
4. Primary user goals / jobs to be done
5. Key constraints or non-negotiables
6. A note that the prototype uses mock/placeholder data

Keep it concise so an AI can load it and stay oriented while building
screen by screen. Output only the Markdown.

Here is the PRD:
[PASTE PRD]`,
  },
  {
    id: "p3",
    title: "Claude Design — opening prompt",
    session: "Session 1",
    tool: "Claude Design",
    body: `I'm building a medium-fidelity, clickable prototype for usability testing.
I've attached a context.md file describing the app, its users, and the
problem it solves. Read it first and keep it in mind for everything you
build.

We'll build progressively - one user story (or one small Epic) at a time.
Use realistic mock data (no lorem ipsum). Keep fidelity medium: clear
layout, real labels, tappable flows - don't over-polish the visuals yet.

Confirm you've read the context, then I'll paste the first user story.`,
  },
  {
    id: "p4",
    title: "Claude Design — per-row feed",
    session: "Session 1",
    tool: "Claude Design",
    body: `Here's the next item to build. Build the screen(s) and wire the flow so
it's clickable, using mock data consistent with what we've built so far.

Epic: [ ]
User story: [ ]
Key features: [ ]
Short description: [ ]
User flow: [ ]`,
  },
  {
    id: "p5",
    title: "Mood board → design system",
    session: "Session 2",
    tool: "Claude",
    body: `I'm attaching a mood-board image that captures the visual direction I
want for my app. Based on this image, create a design system I can use
to build a high-fidelity version.

Define:
- Color palette (primary, secondary, accent, neutrals, semantic) with hex
- Typography (font pairing, sizes, weights, and a type scale)
- Spacing scale and corner radii
- Core components (buttons, inputs, cards, nav) with their states

Explain the mood in a sentence so the system stays consistent, then output
the system as tokens I can drop into a project.`,
  },
  {
    id: "p6",
    title: "Claude Code — v2 hi-fi setup",
    session: "Session 2 & 3",
    tool: "Claude Code",
    body: `I'm setting up the high-fidelity version of my app in a fresh project.
Before writing any code, recommend a tech stack suited to a design-forward
front end that will LATER connect to a backend (an engineer wires that up
in a future phase, so structure the front end cleanly with mock data now).

I'll be loading: a context.md file describing the app, and design-system
files (colors, type, components) generated from a mood board.

Please:
1. Ask me any clarifying questions about the app.
2. Recommend a stack and explain why.
3. Propose a file/folder structure that separates UI, mock data, and a
   future data layer.
4. Suggest the order to build the Epics, reusing the design system each
   time.

Wait for my context.md and design-system files before scaffolding.`,
  },
];

export const SESSIONS: Session[] = [
  {
    id: "s1",
    num: "1",
    route: "1",
    crumb: "Session 1",
    duration: "~1.5 hours",
    title: "Sprint Planning & Your First Prototype",
    focus:
      "Turn your PRD into a structured design sprint, then build a medium-fidelity, clickable prototype you can put in front of real users.",
    beforeYouStart: [
      "Your product PRD from Phase 1 — your starting material",
      "A Claude Pro or Max account (Pro is the minimum)",
      "A GitHub account",
      "A Vercel account",
      "Google Drive set up",
    ],
    outcomes: [
      "A sprint table: Epics → user stories → features → flows",
      "A context.md file describing your app",
      "The start of a medium-fidelity prototype in Claude Design",
      "A shareable link (via Vercel) to test with real users",
    ],
    flow: [
      {
        time: "0:00",
        dur: "10 min",
        title: "Warm-up & PRD check",
        note: "Skim the student's PRD together. Confirm it's clear enough to break down into a sprint.",
      },
      {
        time: "0:10",
        dur: "20 min",
        title: "Break the PRD into a sprint table",
        note: "Demo prompt A.1 live. Columns: Epic, User Story, Key Features, Short Description, User Flow.",
      },
      {
        time: "0:30",
        dur: "10 min",
        title: "Order Epics to build progressively",
        note: "Epic 1 = skeleton (core nav + the top screen and action). Each later Epic layers on.",
      },
      {
        time: "0:40",
        dur: "15 min",
        title: "Create context.md",
        note: "Demo prompt A.2. Save it to Google Drive — it gets reused all phase.",
      },
      {
        time: "0:55",
        dur: "25 min",
        title: "Build in Claude Design",
        note: "Feed context.md, then one row at a time (A.3). Mock data throughout.",
      },
      {
        time: "1:20",
        dur: "10 min",
        title: "Push to GitHub + Vercel link",
        note: "Create the shareable link the student will test with.",
      },
    ],
    concepts: [
      {
        title: "Break your PRD into a sprint table",
        body: "Use Claude to turn your PRD into a table with five columns — Epic, User Story, Key Features, Short Description, User Flow. This becomes your build checklist for the whole prototype.",
      },
      {
        title: "Order your Epics to build progressively",
        body: "Ask Claude to structure Epics so Epic 1 is the skeleton — core navigation plus your single most important screen and action. Each later Epic layers on top. Skeleton before structured sections.",
      },
      {
        title: "Write your context.md",
        body: "Use your PRD and Claude to write a Markdown context file for the AI: the problem your app solves, who your users are, and a short executive description. You'll hand this to every tool that builds your app.",
      },
      {
        title: "Build in Claude Design, brick by brick",
        body: "Give Claude Design your context.md, then feed it one row of the sprint table at a time. Small Epics can go in whole. Use realistic mock data throughout — no lorem ipsum.",
      },
      {
        title: "Share it for testing",
        body: "Push your prototype to GitHub and create a shareable link with Vercel, so you can put it in front of real users and run a usability test.",
      },
    ],
    promptIds: ["p1", "p2", "p3", "p4"],
    resources: [
      { label: "Claude Design", url: "https://claude.ai", note: "Build your prototype" },
      { label: "GitHub", url: "https://github.com", note: "Version control" },
      { label: "Vercel", url: "https://vercel.com", note: "Shareable prototype link" },
      {
        label: "Google Drive",
        url: "https://drive.google.com",
        note: "Store your sprint table & context.md",
      },
    ],
    homework: {
      title: "Homework — Session 1",
      items: [
        "Complete your prototype using the methods you learned",
        "Run task-based usability testing to find usability issues or other problems",
      ],
      linkRoute: "walkthrough",
      linkLabel: "Open the usability-testing walkthrough →",
    },
    next: {
      route: "2",
      tag: "Session 2",
      title: "Specs, Design System & Claude Code",
      blurb:
        "Iterate with specs, build a mood board and a design system, then move into Claude Code for a high-fidelity build.",
    },
  },
  {
    id: "s2",
    num: "2",
    route: "2",
    crumb: "Session 2",
    duration: "~1–1.5 hours",
    title: "Specs, Design System & Claude Code",
    focus:
      "Iterate on your design, write specs, and create a visual language and design system — ready for a high-fidelity build.",
    beforeYouStart: [
      "Session 1 homework done — your prototype build + usability testing",
      "A free Figma account",
    ],
    outcomes: [
      "A mood board for your product",
      "A defined design system (colors, type, components)",
      "Ideally, a high-fidelity project scaffolded in Claude Code",
    ],
    flow: [
      {
        time: "0:00",
        dur: "10 min",
        title: "Review the homework",
        note: "How did the rest of the build go? How did usability testing go? What issues came up?",
      },
      {
        time: "0:10",
        dur: "15 min",
        title: "Iterate by writing specs",
        note: "Walk through the spec template; turn feedback into concrete specs.",
      },
      {
        time: "0:25",
        dur: "15 min",
        title: "Build a mood board",
        note: "ChatGPT / NanoBanana for styles; ChatGPT / Claude for font pairings.",
      },
      {
        time: "0:40",
        dur: "15 min",
        title: "Define the design system",
        note: "Load a mood-board image into Claude → a design system (A.4).",
      },
      {
        time: "0:55",
        dur: "20 min",
        title: "Move into Claude Code",
        note: "Recommend a stack, download skills from skills.sh, load context.md + design-system files (A.5).",
      },
      {
        time: "1:15",
        dur: "15 min",
        title: "Keep building Epics",
        note: "Continue Epic by Epic; explore interactions and animations.",
      },
    ],
    concepts: [
      {
        title: "Review how the build went",
        body: "Start by looking back: how did the rest of the build go? How did usability testing go? What issues came up, and what could be better?",
      },
      {
        title: "Iterate by writing specs",
        body: "Learn to iterate on your design by writing clear specs, using the spec template. Specs turn vague feedback into concrete changes the AI can build.",
      },
      {
        title: "Build a mood board",
        body: "Explore visual styles with ChatGPT or NanoBanana, and font pairings with ChatGPT or Claude. Collect the looks that feel right into one mood board.",
      },
      {
        title: "Define your design system",
        body: "Load a mood-board image into Claude and prompt it to create a design system — colors, type, spacing, and core components — based on the image.",
      },
      {
        title: "Move into Claude Code",
        body: "Leave Claude Design for a more robust environment. Ask Claude what stack it recommends, download skills from skills.sh, and load your context.md and design-system files. Build a structure that's easy to hook up to a backend later.",
      },
      {
        title: "Keep building — with polish",
        body: "Continue building your Epics, now exploring interactions and animations to bring the product to life.",
      },
    ],
    promptIds: ["p6", "p5"],
    resources: [
      { label: "Mobbin", url: "https://mobbin.com", note: "Real-app UI patterns" },
      { label: "Variant", url: "https://variant.com", note: "Visual exploration" },
      { label: "Flora", url: "https://flora.ai", note: "Visual exploration" },
      {
        label: "Aura — Design Systems",
        url: "https://aura.build/design-systems",
        note: "Design-system references",
      },
      { label: "Aura — Components", url: "https://aura.build/components", note: "Component references" },
      { label: "skills.sh", url: "https://skills.sh", note: "Skills for Claude Code" },
      { label: "Figma", url: "https://figma.com", note: "Refine your design system" },
    ],
    homework: {
      title: "Homework — Session 2",
      note: "Depends on your progress and what you're drawn to:",
      items: [
        "Love the visual side? Refine your design system and explore screens in Figma",
        "Claude Code set up (design system + skills + file structure)? Keep building the hi-fi app, Epic by Epic",
        "Didn't reach Claude Code? Setting it up becomes the priority for Session 3",
      ],
    },
    next: {
      route: "3",
      tag: "Session 3",
      title: "High-Fidelity Build & Handoff",
      blurb:
        "Finish your build-ready front end with mock data, structured to hand off cleanly to an engineer.",
    },
  },
  {
    id: "s3",
    num: "3",
    route: "3",
    crumb: "Session 3",
    duration: "~1 hour",
    title: "High-Fidelity Build & Handoff",
    focus:
      "Finish your high-fidelity front end (or get Claude Code set up), with mock data structured so it's ready to hand to an engineer.",
    beforeYouStart: [
      "Session 2 homework done — or Claude Code set up with your design system + file structure",
    ],
    outcomes: [
      "A high-fidelity front end built on your design system",
      "Mock data structured so the backend can be wired up cleanly in Phase 3",
    ],
    flow: [
      {
        time: "0:00",
        dur: "30 min",
        title: "Continue the high-fidelity build",
        note: "Or set up Claude Code with the design system + a proper file structure, if not done yet.",
      },
      {
        time: "0:30",
        dur: "30 min",
        title: "Prepare front end + UX with mock data",
        note: "Structure it so the engineer can wire the backend cleanly in Phase 3.",
      },
    ],
    concepts: [
      {
        title: "Finish the high-fidelity build",
        body: "Continue building your high-fidelity prototype on top of your design system. If Claude Code isn't set up yet, that's the first job — get the design system and a clean file structure in place.",
      },
      {
        title: "Structure for handoff",
        body: "Prepare your front end and UX with mock data, structured so that when you move to Phase 3 with an engineer, the front end is ready for the backend to be wired up properly.",
      },
    ],
    promptIds: ["p6"],
    resources: [
      {
        label: "Aura — Design Systems",
        url: "https://aura.build/design-systems",
        note: "Design-system references",
      },
      { label: "Mobbin", url: "https://mobbin.com", note: "Real-app UI patterns" },
      { label: "skills.sh", url: "https://skills.sh", note: "Skills for Claude Code" },
    ],
    homework: {
      title: "Homework — Session 3",
      items: [
        "Continue building out your front end and complete the Epics",
        "Prompt so that each Epic is built using your design system",
      ],
    },
    next: {
      route: "resources",
      tag: "Phase 3 — Build & Deploy",
      title: "You're ready for handoff",
      blurb:
        "Next phase, you work with an engineer to set up the backend. Session 3 exists to make that handoff clean.",
    },
  },
];

export const PHASES = [
  {
    n: "1",
    name: "Problem & Validation",
    focus: "Define the problem, users, and what to build. Produces the PRD.",
    status: "done",
  },
  {
    n: "2",
    name: "Design",
    focus: "Turn the PRD into a working prototype and a build-ready front end.",
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

export const HOWTO = [
  {
    kicker: "Before",
    title: "Come prepared",
    body: "Each session opens with a “Before you start” checklist — accounts to set up and homework to finish. Tick it off and you’re ready to build.",
  },
  {
    kicker: "During",
    title: "Follow along",
    body: "Work top to bottom: the concepts, the timed flow, and copy-paste starter prompts sit right where you need them.",
  },
  {
    kicker: "Between",
    title: "Self-serve",
    body: "Come back any time to see what you covered, what your homework is, and what’s coming up next — no need to message your instructor.",
  },
];

export const PANELS = [
  {
    n: "1",
    slotId: "wt-1",
    title: "Pick one real task",
    placeholder: "Panel 1 — choosing a task",
    cap: "Choose a single thing a user should be able to do in your prototype — “sign up”, “add a habit”, “book a slot.”",
  },
  {
    n: "2",
    slotId: "wt-2",
    title: "Write the scenario, not the steps",
    placeholder: "Panel 2 — the scenario",
    cap: "Give context, not instructions. Say “you want to track a new habit,” never “tap the plus button.”",
  },
  {
    n: "3",
    slotId: "wt-3",
    title: "Find a tester who fits",
    placeholder: "Panel 3 — the tester",
    cap: "A friend, classmate, or family member who looks like your real user. One person at a time is plenty.",
  },
  {
    n: "4",
    slotId: "wt-4",
    title: "Set the scene",
    placeholder: "Panel 4 — setting up",
    cap: "“Think out loud. There are no wrong answers — we're testing the design, not you.” Then hand them the task.",
  },
  {
    n: "5",
    slotId: "wt-5",
    title: "Watch, don't rescue",
    placeholder: "Panel 5 — observing",
    cap: "Stay quiet. Note every pause, wrong tap, and “wait, where do I…?” Resist the urge to help.",
  },
  {
    n: "6",
    slotId: "wt-6",
    title: "Capture the issues",
    placeholder: "Panel 6 — writing it up",
    cap: "Write down each hesitation and point of confusion as a fix for your next build. Those are your usability issues.",
  },
];

export const RESOURCE_GROUPS = [
  {
    tag: "S1",
    tone: "primary",
    title: "Session 1 — Sprint & prototype",
    links: SESSIONS[0].resources,
  },
  {
    tag: "S2",
    tone: "primary",
    title: "Session 2 — Design system & Claude Code",
    links: SESSIONS[1].resources,
  },
  {
    tag: "S3",
    tone: "primary",
    title: "Session 3 — Hi-fi & handoff",
    links: SESSIONS[2].resources,
  },
  {
    tag: "All",
    tone: "navy",
    title: "Tools across the phase",
    links: [
      { label: "Claude Pro / Max", url: "https://claude.ai", note: "Sprint planning & prototyping" },
      { label: "Claude Design", url: "https://claude.ai", note: "Medium-fidelity prototype" },
      { label: "Claude Code", url: "https://claude.ai/code", note: "High-fidelity build" },
      {
        label: "ChatGPT / NanoBanana",
        url: "https://chatgpt.com",
        note: "Mood boards & comic panels",
      },
      { label: "Figma", url: "https://figma.com", note: "Visual exploration" },
      { label: "GitHub", url: "https://github.com", note: "Version control" },
      { label: "Vercel", url: "https://vercel.com", note: "Shareable links" },
      { label: "Google Drive", url: "https://drive.google.com", note: "Store your files" },
      { label: "skills.sh", url: "https://skills.sh", note: "Skills for Claude Code" },
    ],
  },
] as const;

// ---- Navigation ----
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Overview", href: "/overview" },
  { label: "Prompts", href: "/prompts" },
  { label: "Resources", href: "/resources" },
];

export const MOBILE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Overview", href: "/overview" },
  { label: "Session 1", href: "/session/1" },
  { label: "Session 2", href: "/session/2" },
  { label: "Session 3", href: "/session/3" },
  { label: "Walkthrough", href: "/walkthrough" },
  { label: "Prompts", href: "/prompts" },
  { label: "Resources", href: "/resources" },
];

export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Overview", href: "/overview" },
  { label: "Prompts", href: "/prompts" },
  { label: "Resources", href: "/resources" },
  { label: "Walkthrough", href: "/walkthrough" },
];

export function routeToHref(route: string): string {
  if (route === "walkthrough") return "/walkthrough";
  if (route === "resources") return "/resources";
  if (route === "prompts") return "/prompts";
  if (route === "overview") return "/overview";
  if (route === "home") return "/";
  if (/^\d+$/.test(route)) return `/session/${route}`;
  return "/";
}
