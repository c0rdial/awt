import type { Ground, LogoInk } from "../tokens";
import { Logo } from "./Logo";

export interface NavItem { label: string; href: string }

export interface SiteNavProps {
  /** The page's ground: sets the background, the link ink and the logo ink. */
  ground?: Ground;
  /** Label of the current page, e.g. "About". */
  active?: string;
  items?: NavItem[];
  homeHref?: string;
  logoInk?: LogoInk;
  logoHeight?: number;
  logoBasePath?: string;
  className?: string;
}

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/projects" },
  { label: "Inquire", href: "/inquire" },
  { label: "Instagram", href: "https://instagram.com/aworkingtitle.studio" },
];

const LOGO_INK: Record<Ground, LogoInk> = { home: "sage", about: "sage", project: "forest", inquire: "sage", instagram: "sage", mint: "plum" };

/** Always-visible menu: the a[wt] mark top-left, five uppercase links. The current page is underlined, not recolored. */
export function SiteNav({ ground = "home", active = "", items = DEFAULT_ITEMS, homeHref = "/", logoInk, logoHeight = 44, logoBasePath, className }: SiteNavProps) {
  return (
    <header className={["awt-ground awt-nav", className].filter(Boolean).join(" ")} data-ground={ground}>
      <a href={homeHref} aria-label="a [working title] studio, home">
        <Logo variant="secondary" ink={logoInk ?? LOGO_INK[ground]} height={logoHeight} alt="" basePath={logoBasePath} />
      </a>
      <nav aria-label="Main">
        <ul className="awt-nav__links">
          {items.map((it) => (
            <li key={it.label}>
              <a className="awt-nav__link" href={it.href} aria-current={it.label.toLowerCase() === active.toLowerCase() ? "page" : undefined}>
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
