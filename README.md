# Luka Gligorevic — Portfolio

Personal portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

Live: https://gligor99.vercel.app

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview
```

## Structure

- `src/data/content.ts` — all page content (work, services, stack, contact)
- `src/data/site.ts` — SEO metadata (title, description, structured data)
- `src/components/` — one component per section
- `src/styles/global.css` — Tailwind theme (colors, fonts, animations)
