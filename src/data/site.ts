export const site = {
  name: "Luka Gligorevic",
  title: "Mobile & Frontend Developer",
  email: "lukagligorevic@gmail.com",
  phone: "+387 66 605 909",
  location: "Bijeljina, Bosnia and Herzegovina",
  available: true,
  cvUrl: "/assets/resume/LukaGligorevic-CV.pdf",
  linkedin: "https://linkedin.com/in/lukagligorevic",
  github: "https://github.com/gligor99",
} as const;

export const summary =
  "Software developer with a strong frontend focus, building and shipping scalable mobile and web applications in production environments. Specialised in React Native (Expo) and Next.js, with hands-on experience integrating backend services using Node.js, FastAPI, and AWS. I work end-to-end — from UI architecture and performance optimisation to deployment and app store releases.";

export interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  type: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: "Software Developer",
    company: "Rhapsody Media",
    companyUrl: "https://www.linkedin.com/company/rhapsody-limited/",
    period: "06/2022 – Present",
    type: "Remote",
    bullets: [
      "Built and shipped production-ready mobile applications for iOS and Android",
      "Owned frontend development using React Native (Expo) and TypeScript",
      "Contributed to web application development with React and Next.js",
      "Contributed to assessment and cybersecurity-related platforms in production",
    ],
  },
];

export interface Project {
  name: string;
  type: string;
  tags: string[];
  description: string;
  url?: string;
  status?: string;
}

export const projects: Project[] = [
  {
    name: "CVVerdict",
    type: "AI SaaS Web App",
    tags: ["Next.js", "OpenAI", "Prisma"],
    description:
      "AI-powered CV clarity coach that delivers recruiter-grade feedback for software engineers. Supports paste/PDF upload with structured analysis (credibility scoring, weak bullet explanations, suggested rewrites, and recruiter-style questions), plus a credit system with payments, and exportable PDF reports.",
    url: "https://cv-verdict.vercel.app/",
  },
  {
    name: "Razmjeni.ba",
    type: "Full-stack Web Platform",
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
    status: "In progress",
    description:
      "Full-stack peer-to-peer platform for the Bosnian market where users can exchange items or give them away for free. Built item listings with image uploads (S3), exchange request workflow (initiate → negotiate → confirm → complete), real-time messaging via WebSockets, double-blind reviews, and user reputation profiles.",
    url: "https://razmjeni.ba",
  },
  {
    name: "Pretty Perfect Products",
    type: "Consumer Mobile App",
    tags: ["React Native", "Expo", "AWS"],
    description:
      "Consumer iOS/Android app shipped with React Native (Expo) and a Node.js/AWS backend. Owned end-to-end delivery of core features including secure auth/session management, subscriptions/paywall with purchase validation, calendar-style scheduling UX, notifications, background processing, and full App Store/Google Play release cycle.",
  },
];

export interface Skill {
  name: string;
  primary?: boolean;
}

export const skills: Skill[] = [
  { name: "React Native", primary: true },
  { name: "Expo", primary: true },
  { name: "TypeScript", primary: true },
  { name: "Next.js", primary: true },
  { name: "React", primary: true },
  { name: "Tailwind CSS", primary: true },
  { name: "AWS", primary: true },
  { name: "Tamagui" },
  { name: "TanStack Query" },
  { name: "Zustand" },
  { name: "Reanimated" },
  //{ name: "FlashList" },
  { name: "RevenueCat" },
  { name: "EAS" },
  { name: "FastAPI" },
  { name: "Node.js" },
  { name: "PostgreSQL" },
  { name: "SQLAlchemy" },
  { name: "Prisma" },
  { name: "OpenAI API" },
  { name: "WebSockets" },
  { name: "JWT" },
  { name: "Google OAuth" },
  { name: "AWS S3" },
  { name: "Zod" },
  { name: "shadcn/ui" },
  { name: "Paddle" },
  { name: "REST / OpenAPI" },
  { name: "MongoDB" },
  { name: "Docker" },
];

export const education = {
  degree: "BSc Computer Science",
  institution: "Sinergija University",
  institutionUrl: "https://www.linkedin.com/school/sinergija-university",
  period: "10/2018 – 07/2022",
  location: "Bijeljina, Bosnia and Herzegovina",
};

export interface Certificate {
  name: string;
  issuer: string;
  url: string;
}

export const certificates: Certificate[] = [
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    url: "https://freecodecamp.org/certification/lukag99/responsive-web-design",
  },
  {
    name: "React Tutorial and Projects Course",
    issuer: "Udemy",
    url: "https://www.udemy.com/certificate/UC-2eef1bd9-478e-47f4-b88e-4d0c774771ef/",
  },
  {
    name: "Next.js & React – The Complete Guide",
    issuer: "Udemy",
    url: "https://ude.my/UC-2730e24c-ddb5-86be-c720301e34ac",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    url: "https://freecodecamp.org/certification/lukag99/javascript-algorithms-and-data-structures",
  },
  {
    name: "React Testing Library and Jest",
    issuer: "Udemy",
    url: "https://ude.my/UC-b30b3bcc-7ac5-4520-bed5-567eb109e109",
  },
  {
    name: "Understanding Node.js: Core Concepts",
    issuer: "Udemy",
    url: "https://www.udemy.com/certificate/UC-acee7b69-2458-4817-beb8-f3455706e3a8/",
  },
  {
    name: "Complete WordPress Developer Course",
    issuer: "Udemy",
    url: "https://www.udemy.com/certificate/UC-e70c2f2e-1962-436c-a40f-eb34e5b89696/",
  },
];
