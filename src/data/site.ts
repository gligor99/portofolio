import { contact, layers } from './content';

export const site = {
  name: 'Luka Gligorevic',
  title: 'Luka Gligorevic — Fullstack & Mobile Developer',
  description:
    'Fullstack & mobile developer in Bijeljina, BiH. iOS & Android apps with React Native & Expo, web platforms with Next.js & FastAPI — shipped to the App Store.',
  jobTitle: 'Fullstack & Mobile Developer',
  locale: 'en_US',
  ogImage: '/og.png',
  ogImageAlt: 'Luka Gligorevic — Fullstack & Mobile developer. React Native, Next.js, FastAPI.',
  themeColor: '#0b0b0c',
  city: 'Bijeljina',
  country: 'BA',
  studio: 'G99 Labs',
  sameAs: [contact.github, contact.linkedin],
  skills: [...new Set(layers.flatMap((l) => l.tools))],
};
