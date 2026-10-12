# Faiz Ahmad — Portfolio

Compact, server-rendered portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, official shadcn/ui Button, Card, Badge, and Separator components, and Motion. Black default theme, persistent white theme, and an amber accent. The hero follows the supplied reference: circular photo, handwritten name, two short lines, then social icons and compact actions in one row.

## Develop

Use Node.js 22.13+ or Node.js 24 LTS.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm start
```

On PowerShell with restricted script execution, use `npm.cmd`.

## Personalize before publication

Edit `src/lib/content.ts` for your introduction, technologies, projects, experience, email, LinkedIn, and resume. Unsupplied projects and experience are explicitly labeled placeholders; no sample accomplishments or employers are asserted. Project links and resume downloads remain disabled until their URLs are added.

Hero copy is in `profile.heroLines`; add X, YouTube, Instagram, and LinkedIn URLs to activate the matching social icons. The navbar uses `public/logo.png`. Hero handwriting uses the self-hosted Caveat font via `next/font`.

- Put your PDF in `public/` and set `profile.resume` to its root-relative path.
- Set `profile.email` to activate direct email contact.
- Replace `public/project-web.svg` and `public/project-ai.svg` with real screenshots; update paths and alt text.
- Add real project descriptions, verified achievements, demo and repository URLs.
- Add verified roles, organizations, and dates to `experience`.
- The current `public/faiz-avatar.jpg` is the supplied GitHub account’s actual avatar.
- The copyright year is explicit in `src/app/page.tsx`; update it annually.

## GitHub activity

`src/components/github-activity.tsx` fetches real public contributions for `FaizAhmad0` from `github-contributions-api.jogruber.de`, with an hourly Next.js cache. The checked-in `src/github-contributions.json` is a real snapshot retrieved on 2026-10-12. When live refresh fails, the snapshot appears with a clear date and fallback label. Totals are computed from displayed days. No graph data is fabricated. The provider is a third-party service; private contribution visibility follows GitHub settings.

## SEO, accessibility, performance

- Canonical origin: `https://www.faizahmad.in/`.
- Descriptive metadata, Open Graph, Twitter summary cards, and a generated 1200×630 PNG social image.
- `/sitemap.xml` and `/robots.txt` come from App Router metadata routes.
- Person JSON-LD contains supplied identity and role and the verified GitHub account; no invented location, employment dates, or organization.
- Important content and the graph render on the server. Only theme and small animation wrappers are client components.
- Geist fonts are self-hosted via `next/font`. Avatar uses Next.js image optimization and priority loading; project previews are lazy.
- Keyboard focus, skip link, native disclosure rows, and reduced-motion handling. The calendar scrolls inside its card on mobile.

## Deploy

Deploy to a Next.js-compatible host, then attach `www.faizahmad.in`. This change implements the local repository; it does not configure hosting or DNS. Server-side activity refresh needs outbound access to the provider. Replace the clearly marked placeholders before public launch.

Production build, TypeScript, and ESLint pass. Production dependency audit reported zero vulnerabilities. The inherited Next.js ESLint development tree has a `braces` advisory; npm’s suggested fix downgrades the lint configuration across major versions, so it was not applied automatically. Browser visual and Core Web Vitals measurements were not performed in this environment.
