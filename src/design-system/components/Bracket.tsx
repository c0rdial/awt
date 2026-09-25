import type { ReactNode } from "react";

/** A key word in Bellefair italic, framed in square brackets: [JOY], [INSIDE] - [OUT]. One or two per paragraph. */
export function Bracket({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={["awt-bracket", className].filter(Boolean).join(" ")}>[{children}]</span>;
}
