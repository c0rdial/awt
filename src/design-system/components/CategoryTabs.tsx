export interface CategoryTab { label: string; href: string }

export interface CategoryTabsProps {
  items?: CategoryTab[];
  /** Label of the category being shown. */
  active?: string;
  label?: string;
  className?: string;
}

const DEFAULT_TABS: CategoryTab[] = [
  { label: "Residential", href: "/projects" },
  { label: "Commercial/ Hospitality", href: "/projects/commercial" },
];

/** Residential / Commercial/ Hospitality. Plain links (one route per category), so no client JS is needed. */
export function CategoryTabs({ items = DEFAULT_TABS, active, label = "Project category", className }: CategoryTabsProps) {
  const current = active ?? items[0]?.label;
  return (
    <ul className={["awt-tabs", className].filter(Boolean).join(" ")} aria-label={label}>
      {items.map((it) => (
        <li key={it.label}>
          <a className="awt-tabs__tab" href={it.href} aria-current={it.label === current ? "page" : undefined}>
            {it.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
