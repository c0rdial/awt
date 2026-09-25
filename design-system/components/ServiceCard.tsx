import type { ReactNode } from "react";

export interface ServiceCardProps {
  title: string;
  /** A studio render; cropped to 16:9. */
  image: string;
  imageAlt: string;
  /** Image on the right; alternate down the page. */
  reverse?: boolean;
  children?: ReactNode;
  className?: string;
}

/** One of the four services: Architecture, Interior design, Decoration, Styling. */
export function ServiceCard({ title, image, imageAlt, reverse, children, className }: ServiceCardProps) {
  return (
    <article className={["awt-service", reverse && "awt-service--reverse", className].filter(Boolean).join(" ")}>
      <img className="awt-service__media" src={image} alt={imageAlt} loading="lazy" />
      <div>
        <h3 className="awt-service__title">{title}</h3>
        <p className="awt-service__body">{children}</p>
      </div>
    </article>
  );
}
