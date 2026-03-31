# Portfolio — Luka Gligorevic

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Zero client-side JS, fully static.

## Project structure

```
src/
├── data/
│   └── site.ts               ← all content lives here
├── layouts/
│   └── Layout.astro          ← HTML shell + SEO meta tags
├── components/
│   ├── Nav.astro
│   ├── Header.astro
│   ├── About.astro
│   ├── Experience.astro
│   ├── Projects.astro
│   ├── Skills.astro
│   ├── Education.astro
│   ├── Footer.astro
│   └── SectionLabel.astro
├── pages/
│   ├── index.astro
│   └── 404.astro
└── styles/
    └── global.css            ← Tailwind directives + base styles
public/
└── assets/
    └── resume/
        └── LukaGligorevic-Resume-CV.pdf   ← drop CV here
```

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output → dist/
npm run preview   # preview the build locally
```

## Updating content

**Only touch `src/data/site.ts`** — everything else renders from it:

| Export | What it controls |
|---|---|
| `site` | Name, email, phone, links, CV path, available flag |
| `summary` | About section paragraph |
| `experience` | Jobs — add more objects to the array |
| `projects` | Projects — add `url` to get the external link icon |
| `skills` | Skills — `primary: true` for highlighted style |
| `education` | Degree info |
| `certificates` | Cert links |

## Design tokens

Custom Tailwind tokens are in `tailwind.config.mjs`:

- `bg-bg` / `bg-bg-2` / `bg-bg-3` — background shades
- `text-text` / `text-text-muted` / `text-text-dim` / `text-text-faint` — text hierarchy
- `text-accent` / `text-accent-teal` — accent colours
- `border-border` / `border-border-hi` — border opacities
- `font-mono` / `font-display` / `font-sans` — type families

## Deploying to Vercel

Push to GitHub → import on Vercel → done. Astro is auto-detected, no config needed.

Drop your CV PDF into `public/assets/resume/` before deploying.
