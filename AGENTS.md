## Design system

This site uses the a [working title] studio design system in `src/design-system/`.
- Read `src/design-system/README.md` before building or changing any UI.
- Style only with the CSS variables and `.t-*` classes in `styles/tokens.css`. No hard-coded colors, fonts or sizes.
- Reuse the components in `src/design-system/components/` (Logo, SiteNav, Ground, PageTitle, ServiceCard, CategoryTabs, ProjectTile, ContactList, Bracket). Render them in .astro files without `client:` directives; keep them free of browser JS.
- One `Ground` per page (home forest, about plum, project sage, inquire brown, instagram olive), with `SiteNav` on the same ground.
- Website copy is uppercase except contact details. Bracket the one or two words a paragraph turns on with `<Bracket>`.
- Keep pages to about one screen and effects minimal; the project color reveal is the only motion.
- Content comes from Sanity (`sanity/schemaTypes`). Don't hard-code project, service or contact copy.
