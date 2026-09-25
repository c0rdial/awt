# a [working title] studio: design system

Brand guide, tokens, logos and React + TypeScript components for the studio's website. Built from the website deck (layout and direction) and the branding guide (logo, palette, type).

## What's here

| Path | What |
|---|---|
| `styles/tokens.css` | Every color, font family, spacing, radius and stroke as CSS variables, plus a `.t-<style>` class per text style |
| `styles/components.css` | Styles for the components. Load after tokens.css |
| `tokens.ts`, `tokens.json` | The same tokens for TypeScript and tools |
| `components/` | `Logo`, `SiteNav`, `Ground`, `PageTitle`, `ServiceCard`, `CategoryTabs`, `ProjectTile`, `ContactList`, `Bracket` |
| `assets/logos/` | Primary wordmark and secondary `a[wt]` mark as SVG, each in forest, ink, lavender, plum, sage and white |
| `assets/images/` | Three of the studio's renders |
| `sanity/schemaTypes/` | Starter schemas: `project`, `service`, `siteSettings`, `portableText` (with a Bracket decorator) |

## Setting it up (Astro + React + Sanity)

1. Put this folder at `src/design-system/`, and copy `assets/logos` to `public/brand/logos` (the path `Logo` expects; override it with `basePath`).
2. `npx astro add react`, then import `src/design-system/styles/tokens.css` and `components.css` once in the base layout.
3. Use the components straight in `.astro` files with no `client:` directive. None of them needs browser JavaScript: the menu and category tabs are links, and the project reveal is CSS.
4. Copy `sanity/schemaTypes` into the Studio. Render `portableText` with `@portabletext/react`, mapping the `bracket` mark to `<Bracket>`.
5. Fonts: Bellefair loads from Google Fonts in components.css. Neue Haas Grotesk Display and GT America Mono are paid fonts: add `@font-face` rules for licensed web files, or the stacks fall back to Helvetica Neue and system monospace.

Example page:

```astro
---
import { SiteNav, Ground, PageTitle, ServiceCard, Bracket } from "../design-system/components";
---
<SiteNav ground="about" active="About" />
<Ground ground="about">
  <PageTitle title="About" subtitle="Our philosophies" />
  <p class="t-body">To us, a space should evoke <Bracket>joy</Bracket> to all the senses.</p>
</Ground>
```

## Rules for anyone writing code here (people or Claude)

- Use the CSS variables and `.t-*` classes; never hard-code a hex value, font or size.
- Use the components before writing new markup; if a new one is needed, build it from tokens and add it here.
- Every page sits in one `Ground`, with `SiteNav` using the same ground.
- Only the studio's own images; logos only from `assets/logos`, never retyped or recolored.

A [working title] studio is a Bali design studio founded by two designers, born and based in Ubud. It works on architecture, interior design, decoration, styling and product design. The logo "challenges the structure and rigidity of architecture by breaking the grid", and the website follows the same idea: earthy solid colors, large renders, and very little on each page.

## Website direction

The site follows the website deck. Each page is one solid color with an uppercase menu across the top.

- **One ground per page.** Home `ground-home` (forest), About `ground-about` (plum), Project `ground-project` (sage), Inquire `ground-inquire` (brown), Instagram `ground-instagram` (olive). Wrap each page in `<Ground ground="about">` (or `.awt-ground` with `data-ground`), which sets the background and a text ink that passes contrast.
- **Menu always visible.** Use `SiteNav` on every page: the `a[wt]` mark in the top-left corner, then HOME, ABOUT, PROJECT, INQUIRE, INSTAGRAM. It's sticky and never collapses behind an icon on desktop.
- **Little scrolling.** A page should mostly fit one screen: a title, a few lines, the images. Split content across pages before making a long one.
- **Few effects.** In the client's words: "we don't want to be pushing". The one motion is the project color reveal (`ProjectTile`). No parallax, no scroll-jacking, no hover zooms.
- **Home** is a full-bleed studio render, with the primary wordmark in sage centred over it and the services line under it in white `tagline`.
- **About** is `PageTitle`, the philosophy copy centred in `body` with `Bracket` accents beside a photo, then four `ServiceCard`s (Architecture, Interior design, Decoration, Styling) that alternate image sides.
- **Project** has `CategoryTabs` (Residential / Commercial/ Hospitality) over a five-across grid of `ProjectTile`s on a white mat. Each project loads as its own flat color (`project-lilac`, `project-ivory`, `project-butter`, `project-blush`, `project-taupe`) and slides up to reveal the cover. A project page is one large render with its facts beside it.
- **Inquire** has `PageTitle` (INQUIRY / HOW TO CONTACT US), an email field and `ContactList`.
- **Instagram** is the latest posts as a flat grid.

## Voice

- Website headings, menu and body copy are ALL CAPS: "ARCHITECTURE . INTERIOR DESIGN. DECORATION. STYLING". Contact details and business cards use sentence case.
- The studio speaks as "we" and "us", warmly: "TO US, A SPACE SHOULD EVOKE [JOY] TO ALL THE SENSES." "WE DESIGN FROM THE [INSIDE] - [OUT], FORM FOLLOWS OUR DAILY NEED FOR COMFORT."
- Bracket the one or two words a sentence turns on, using `Bracket`: [JOY], [SENSITIVITY TOWARDS NATURE], [CHAMPIONING LOCALITY]. It echoes the brackets in the logo.
- The name is written "a [working title] studio" in lowercase with brackets, and A WORKING TITLE STUDIO in running footers.
- No emoji, exclamation marks only in the friendly contact lines ("and visit us!"), and no sales language.

## Color

The palette is "inspired by earthy tones with a pop of pastels". The final pairings are purple, brown and green.

- Earth tones carry the grounds: `forest`, `plum`, `brown`, `olive`, `sage`. The pastels `lavender` and `blue` are accents and logo inks, plus `mint`, the brand guide's own page color.
- Text ink per ground: `white` on forest, plum, brown and olive; `forest` or `plum` on sage; `plum` or `ink` on mint; `ink` on lavender and blue. Each usage note gives the ratio.
- Guide pairings to reuse: lavender + brown, sage + brown, brown + ink, white + sage, brown + black, plum + sage, lavender + olive, forest + blue. Several are logo-on-ground pairs below 4.5:1; use them for the logo and large type, not body text.
- Project colors (`project-*`) come from the website deck, not the brand guide. Use them only for the project loading color, with plum labels.
- Solid fills only. No gradients, transparency washes or shadows.

## Typography

- `--font-sans`, Neue Haas Grotesk Display (55 Roman, 65 Medium), sets everything on the site. It falls back to Helvetica Neue, which the deck used. The site styles are `page-title` 42px, `nav` and `subheading` 20px, `tagline` 16px, `card-title` 14px medium, `body` 13px and `small` 10px, all uppercase, plus `contact-label` and `contact-value` 16px in sentence case.
- `--font-mono`, GT America Mono Ultra Light, is for presentations and documents: section labels and explanations (`mono-body` 18px), big index titles (`index-title` 60px) and callouts (`mono-caption`). Keep it off the website, where it's too light at small sizes.
- `--font-accent`, Bellefair in italic, is only for `bracket` words. The logo itself is drawn from Fligen and is never retyped; use the logo files.
- Numbered lists put `index-numeral` in lavender beside `index-title`, as in the guide's contents page.
- No font files ship with the system. The three brand faces are commercial, so self-host them only under a web license (the guide was set with a trial copy of GT America Mono). Bellefair loads from Google Fonts.

## Logo

- The primary wordmark "a [working title] studio" is custom type with a 22° skew on "work" and -50 tracking. The secondary `a[wt]` is for small spaces: the menu, favicons and business cards.
- Use the `Logo` component or the SVGs under Logos. Never retype, recolor to an off-palette color, stretch or re-track it.
- Put it in the top-left corner on the website (a client requirement), and on the lower left of presentation slides.

## Layout

- Website: `space-page` (45px) side margins; the menu row starts `space-header` down. Image grids use `space-grid` gaps, services use `space-card` between image and text, and card rows `space-gutter`.
- Presentations use a 12 × 12 grid built for large renders. The header sits in the lower-left corner and body text bottom-aligns next to it. Slides are Intro (client name), Index (keywords), Content (header + render) and Outro (thank you).
- Business cards use a 3 × 3 grid: disciplines along the top ("Interior —— Architecture —— Product Design" joined by `stroke-hairline` rules), and the name and details bottom-left with the studio name bottom-right.
- Documents carry a running footer in `footer` type on mint: A WORKING TITLE STUDIO · document · section · page number, spaced in quarters.
- Everything is square (`radius-none`). The only curves are the color-pairing discs (`radius-round`) and the tile outline corners (`radius-outline`).

## Imagery

- The work is shown through large, warm renders: terracotta and timber, stone paving, tropical planting, low evening light. Let them fill the frame, with no borders or captions on top.
- Only the studio's own renders and photos. Crop to 16:9 for services and heroes and 3:4 for project tiles.

## Iconography

- The brand has no icon set and the site doesn't need one: navigation is words. For Instagram, use the word INSTAGRAM, as the deck does. If an icon becomes unavoidable, use a thin outline style at the text's weight and add a set here first.

## States and accessibility

- Current page and selected tab: a `stroke-hairline` underline in the same ink. Color alone doesn't carry it.
- Keyboard focus: a 2px solid outline in the current text color, 3px offset, which passes on every ground. Project tiles use the 5px `focus` outline.
- The deck set white text on sage (1.51:1) and forest for the active menu on dark grounds (1.3–1.8:1). This system replaces both; don't reintroduce them.
