import type { CSSProperties } from "react";
import type { ProjectColor } from "../tokens";

export interface ProjectTileProps {
  title: string;
  href: string;
  /** Cover photo; cropped to 3:4. */
  image?: string;
  /** The project's own loading color, revealed away on hover/focus. */
  color?: ProjectColor;
  comingSoon?: boolean;
  /** Keep the photo showing (e.g. on touch devices or the project's own page). */
  revealed?: boolean;
  className?: string;
}

/** Project in the index: a flat color that slides up to reveal the cover. Pure CSS; respects reduced motion. */
export function ProjectTile({ title, href, image, color = "ivory", comingSoon, revealed, className }: ProjectTileProps) {
  const style = { "--awt-tile-color": `var(--project-${color})` } as CSSProperties;
  return (
    <a className={["awt-tile", className].filter(Boolean).join(" ")} href={href} aria-label={comingSoon ? `${title}, coming soon` : undefined} data-revealed={revealed ? "true" : undefined} style={style}>
      <span className="awt-tile__frame">
        {image && <img className="awt-tile__img" src={image} alt="" loading="lazy" />}
        <span className="awt-tile__veil" aria-hidden="true">{comingSoon && <span className="awt-tile__soon">coming soon</span>}</span>
      </span>
      <span className="awt-tile__caption">{title}{comingSoon && <span> — coming soon</span>}</span>
    </a>
  );
}
