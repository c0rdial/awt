/** Design tokens for a [working title] studio. Values mirror styles/tokens.css; prefer the CSS variables in markup. */
export const colors = {
  "forest": "#25543f",
  "plum": "#59293e",
  "sage": "#c9d9b4",
  "brown": "#7e5525",
  "olive": "#666438",
  "lavender": "#a59dd4",
  "blue": "#8fa1d8",
  "mint": "#dff2c7",
  "ink": "#231f20",
  "white": "#ffffff",
  "project-lilac": "#dcaedd",
  "project-ivory": "#fdfff2",
  "project-butter": "#efdc9a",
  "project-blush": "#f2b9a8",
  "project-taupe": "#bbb4ae"
} as const;
export type BrandColor = keyof typeof colors;

/** Website page grounds (website deck): one solid color per page. */
export const grounds = { home: "forest", about: "plum", project: "sage", inquire: "brown", instagram: "olive", mint: "mint" } as const;
export type Ground = keyof typeof grounds;

/** Project loading colors (website deck): the flat color a project tile shows before its photo slides in. */
export const projectColors = ["lilac", "ivory", "butter", "blush", "taupe"] as const;
export type ProjectColor = (typeof projectColors)[number];

/** Logo inks with an SVG file in assets/logos. */
export const logoInks = ["forest", "ink", "lavender", "plum", "sage", "white"] as const;
export type LogoInk = (typeof logoInks)[number];

export const spacing = {
  "space-grid": "8px",
  "space-inset": "16px",
  "space-card": "20px",
  "space-gutter": "24px",
  "space-footer": "36px",
  "space-page": "45px",
  "space-header": "84px"
} as const;
