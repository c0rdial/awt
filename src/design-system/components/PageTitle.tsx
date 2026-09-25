export interface PageTitleProps {
  /** ABOUT, INQUIRY. Rendered uppercase. */
  title: string;
  /** OUR PHILOSOPHIES, HOW TO CONTACT US. */
  subtitle?: string;
  /** ARCHITECTURE . INTERIOR DESIGN. DECORATION. STYLING */
  tagline?: string;
  className?: string;
}

/** One per page, inside the page ground; inherits the ground's ink. */
export function PageTitle({ title, subtitle, tagline, className }: PageTitleProps) {
  return (
    <div className={["awt-title-block", className].filter(Boolean).join(" ")}>
      <h1 className="awt-title">{title}</h1>
      {subtitle && <p className="awt-title__sub">{subtitle}</p>}
      {tagline && <p className="awt-title__tagline">{tagline}</p>}
    </div>
  );
}
