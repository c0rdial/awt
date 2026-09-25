import type { ElementType, ReactNode } from "react";
import type { Ground as GroundName } from "../tokens";

/** A page (or band) in one of the site's grounds: sets the background and a text ink that passes contrast. */
export function Ground({ ground, as: Tag = "main", children, className }: { ground: GroundName; as?: ElementType; children: ReactNode; className?: string }) {
  return (
    <Tag className={["awt-ground", className].filter(Boolean).join(" ")} data-ground={ground}>
      {children}
    </Tag>
  );
}
