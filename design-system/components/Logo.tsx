import type { LogoInk } from "../tokens";

export interface LogoProps {
  /** "primary" = full wordmark, "secondary" = the a[wt] mark (menu, small sizes). */
  variant?: "primary" | "secondary";
  /** Pick from the pairings in the README: sage on forest/plum/brown/olive, forest or plum on sage/mint. */
  ink?: LogoInk;
  /** Height in px; width follows the artwork. */
  height?: number;
  /** Empty string when the logo sits inside a labelled link. */
  alt?: string;
  /** Where assets/logos is served from. Copy assets/logos to public/brand/logos, or change this. */
  basePath?: string;
  className?: string;
}

export function Logo({ variant = "secondary", ink = "sage", height, alt = "a [working title] studio", basePath = "/brand/logos", className }: LogoProps) {
  const h = height ?? (variant === "primary" ? 40 : 48);
  return (
    <img
      className={["awt-logo", className].filter(Boolean).join(" ")}
      src={`${basePath}/awt-${variant}-${ink}.svg`}
      alt={alt}
      height={h}
      style={{ height: h, width: "auto" }}
    />
  );
}
