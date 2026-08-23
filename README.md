# Portfolio

Personal portfolio for Saifeddine Kasmi — built with Next.js 16 (App Router),
TypeScript and Tailwind CSS v4, deployed as a static site to GitHub Pages.

**Live:** https://fr4t3llo.github.io/portfolio/

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # static export into ./out
```

## Editing content

All page copy lives in [`src/data/profile.ts`](src/data/profile.ts) — name, bio,
experience, education, certifications, volunteering, projects, skills, languages
and contact details. Components read from it, so no JSX changes are needed to
update the site's text.

- Replace `public/avatar.jpg` with a profile photo.
- Replace `public/cv.pdf` to change the Download CV link.
- Tech icons come from `simple-icons`; keys are mapped in
  [`src/components/TechIcon.tsx`](src/components/TechIcon.tsx).

## Design tokens

Colours and the type scale are defined in one `@theme` block in
[`src/app/globals.css`](src/app/globals.css). Adjusting the seven `--text-*`
values rescales the whole site without touching a component.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the static export and publishes it to GitHub Pages.

This repo is a **project page**, so the site is served from `/portfolio`. The
workflow sets `NEXT_PUBLIC_BASE_PATH=/portfolio` and `next.config.ts` applies it
as `basePath`/`assetPrefix`. Local development leaves it empty and serves from `/`.

> Note: `next/image` does not apply `basePath` when `images.unoptimized` is set,
> so plain asset URLs go through the `asset()` helper in `src/lib/asset.ts`.

To move to a user page (a repo named `fr4t3llo.github.io`), delete the `env:`
block from the build step — the config falls back to `""`.

**Required once in repo settings:** Settings → Pages → Build and deployment →
Source: **GitHub Actions**.
