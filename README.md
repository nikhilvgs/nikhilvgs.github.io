# nikhilshetty.net

Personal site: profile, writing, and the book page. Astro, deployed to GitHub
Pages by Actions on every push to `main`.

## Running it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

Node version is pinned in `.nvmrc` and the workflow reads it from there, so
local and CI stay on the same major.

## Writing a post

Drop a Markdown file in `src/content/posts/`. Frontmatter is validated by the
schema in `src/content.config.ts`, so a typo fails the build instead of
producing a broken page:

```yaml
---
title: "Post title"
description: "One sentence. Used on the index, in RSS, and as the meta description."
pubDate: 2026-09-13
tags: ["interconnect"]
draft: false
---
```

The filename becomes the URL. `draft: true` keeps it out of the index, the RSS
feed, and the build.

## Before the first deploy

1. In the repo, Settings → Pages → Source: **GitHub Actions**.
2. Settings → Pages → Custom domain: `nikhilshetty.net`. Do this *before*
   touching DNS.
3. DNS: four A records at the apex to 185.199.108.153, 185.199.109.153,
   185.199.110.153, 185.199.111.153, plus `www` as a CNAME to
   `nikhilvgs.github.io`.
4. Wait for the certificate, then tick **Enforce HTTPS**.

`public/CNAME` already contains the domain, so the build carries it into
`dist/` on every deploy and GitHub won't drop it.

## Things left as TODO

- `src/components/Footer.astro` — social links still say `YOUR-USERNAME`.
- `src/pages/book.astro` — `FORM_ENDPOINT` and `PACKT_URL` are empty strings.
  Both blocks are hidden until you fill them in, so nothing renders broken.
- `src/content/posts/` — two placeholder posts. Delete them.
- The employer line in the footer disclaimer is deliberately generic.

## Design notes

Palette comes from datacenter fibre colour coding: OM3/OM4 aqua carries
interaction, and single-mode yellow is reserved for the book thread and
nothing else. Type is IBM Plex Sans for interface and headings, IBM Plex Serif
for body prose, Plex Mono only for actual code. Dates use tabular figures in
the sans rather than a monospace face.
