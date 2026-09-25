# a [working title] studio website

Astro site with server-rendered React design-system components and Sanity content. The source design system is in `src/design-system/`; its logos and renders are served from `public/brand/`.

## Run locally

```sh
npm install
cp .env.example .env
npm run dev
```

The supplied Sanity project ID is `pbnloqtf`, and this setup uses its `production` dataset. The dataset currently has no published documents. The website shows layout placeholders until content is published.

Run `npm run studio` to edit content in the Sanity Studio. You will need an account with access to the project. Create one **Site settings** document, then add **Service**, **Project**, and **Instagram post** documents. The four service records, project records, and contact details come from Sanity rather than page source. Upload images to the relevant documents; the local brand renders remain as visual fallbacks for the home and About pages.

## Pages

- `/` — home render, wordmark, Sanity tagline
- `/about` — philosophy and services
- `/projects` and `/projects/commercial` — filtered project grids
- `/projects/[slug]` — project details generated from published projects
- `/inquire` — contact details
- `/instagram` — manually curated Instagram links and images

`npm run check` validates types; `npm run build` queries Sanity and generates static pages. Rebuild after publishing content. A failed Sanity request fails the build, so an outage cannot silently replace published content with placeholders.
