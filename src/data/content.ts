export const contact = {
  email: 'lukagligorevic@gmail.com',
  phone: '+387 66 605 909',
  phoneHref: 'tel:+38766605909',
  github: 'https://github.com/gligor99',
  linkedin: 'https://linkedin.com/in/lukagligorevic',
};

export const marquee = [
  'React Native',
  'Expo',
  'TypeScript',
  'Next.js',
  'React',
  'FastAPI',
  'PostgreSQL',
  'Reanimated',
  'RevenueCat',
  'AWS Cognito',
  'WebSockets',
  'EAS Build',
];

export const work = [
  {
    title: 'Rhapsody Media',
    kind: 'Fullstack dev · Remote London · 2022 → now',
    points: [
      'Shipped production iOS & Android apps with React Native (Expo) and TypeScript, owning the release pipeline end-to-end: EAS Build, TestFlight, sandbox testing and App Store / Google Play submissions, including store review rejections.',
      'Built and maintained the cybersecurity client portal for LRQA Nettitude in React (Vite) and TypeScript, alongside other client platforms in Next.js.',
      'Delivered features end-to-end: custom calendar components, offline-first SQLite sync, RevenueCat subscription flows and Reanimated drag-and-drop UI.',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'React (Vite)', 'Next.js', 'AWS'],
  },
  {
    title: 'Pretty Perfect Products',
    kind: 'Mobile · live on iOS & Android',
    points: [
      'Lifestyle app for habit tracking, meal planning, budgeting and rewards. Built the 24-hour planner: per-minute precision, collision detection, multi-column layout, Reanimated drag-and-drop with auto-scroll.',
      'In-app subscriptions with react-native-iap: monthly/annual plans, 7-day trial, restoration and paywall gating, hardened in production.',
    ],
    stack: ['React Native', 'Expo', 'AWS Cognito', 'Tamagui', 'Reanimated', 'react-native-iap'],
  },
  {
    title: 'razmjeni.ba',
    kind: 'Web · item exchange marketplace',
    points: [
      'Full-stack marketplace for the Bosnian market: JWT auth, WebSocket real-time chat, SSE notifications, dual-confirm exchange flow, blind-reveal reviews and APScheduler background tasks.',
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'WebSockets', 'SSE'],
  },
  {
    title: 'CV Verdict',
    kind: 'SaaS · AI CV analysis',
    points: [
      'Recruiter-grade CV feedback: credibility scoring, weak bullet rewrites and interview questions. Credit system, Stripe payments, PDF upload or paste, exportable reports.',
    ],
    stack: ['Next.js', 'FastAPI', 'OpenAI API', 'Prisma', 'Stripe'],
  },
];

export const services = [
  {
    tag: 'iOS + Android',
    title: 'Mobile app, idea to store',
    pitch: 'One React Native codebase, shipped to both stores.',
    items: [
      'Expo + EAS builds, TestFlight and internal testing',
      'App Store and Google Play submission and review',
      'Analytics and crash reporting wired in from day one',
    ],
  },
  {
    tag: 'Web + API',
    title: 'Web platform with a real backend',
    pitch: 'From database schema to a fast, typed frontend.',
    items: [
      'Next.js or React (Vite) frontend in TypeScript',
      'FastAPI + PostgreSQL backend with REST / OpenAPI',
      'Auth, real-time features and background jobs',
    ],
  },
  {
    tag: 'Revenue',
    title: 'Subscriptions & in-app purchases',
    pitch: "Paywalls that work, and purchases that don't go missing.",
    items: [
      'react-native-iap or RevenueCat integration',
      'Trials, plans, restoration and entitlement gating',
      'Fixing billing bugs in apps already in production',
    ],
  },
];

export const steps = [
  { title: 'Scope', text: 'A call to understand the product, the users and what has to ship first.' },
  { title: 'Plan', text: 'Written scope, milestones and an estimate before any code is written.' },
  { title: 'Build', text: 'Regular TestFlight and preview builds, so you see progress every week.' },
  { title: 'Launch', text: 'Store submission, production release and handover of code and accounts.' },
];

export const layers = [
  {
    name: 'Ship',
    proof: 'iOS & Android releases end-to-end: EAS Build, TestFlight, store review and in-app billing.',
    tools: ['EAS Build', 'Xcode', 'App Store Connect', 'Google Play Console', 'react-native-iap', 'RevenueCat'],
  },
  {
    name: 'Mobile',
    proof: 'A 24h planner with Reanimated drag & drop, and offline-first apps that sync when the signal comes back.',
    tools: ['React Native', 'Expo', 'Reanimated', 'Tamagui', 'FlashList', 'Zustand', 'React Query'],
  },
  {
    name: 'Web',
    proof: 'The LRQA Nettitude portal in React + Vite, and client platforms in Next.js.',
    tools: ['React', 'Next.js', 'Vite', 'TypeScript', 'Vue 3', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    name: 'API',
    proof: 'Real-time chat over WebSockets, SSE notifications and JWT auth on razmjeni.ba.',
    tools: ['FastAPI', 'Node.js', 'REST / OpenAPI', 'WebSockets', 'JWT', 'Google OAuth'],
  },
  {
    name: 'Data',
    proof: 'PostgreSQL behind the marketplace, SQLite on the device for offline-first sync.',
    tools: ['PostgreSQL', 'Prisma', 'SQLite', 'Zod'],
  },
  {
    name: 'Cloud',
    proof: 'Cognito & Amplify auth, S3 storage, Docker and Render for deploys.',
    tools: ['AWS Cognito', 'AWS Amplify', 'AWS S3', 'Render', 'Docker', 'Git'],
  },
];

export const pad = (n: number) => String(n).padStart(2, '0');
