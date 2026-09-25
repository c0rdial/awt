export interface ContactItem { label: string; value: string | string[]; href?: string }

export interface ContactListProps { items: ContactItem[]; className?: string }

/** Inquire page details. Sentence case: the one place the site isn't uppercase. */
export function ContactList({ items, className }: ContactListProps) {
  return (
    <dl className={["awt-contact", className].filter(Boolean).join(" ")}>
      {items.map((it) => {
        const values = Array.isArray(it.value) ? it.value : [it.value];
        return (
          <div className="awt-contact__item" key={it.label}>
            <dt>{it.label}</dt>
            {values.map((v, i) => (
              <dd key={i}>{it.href && i === 0 ? <a href={it.href}>{v}</a> : v}</dd>
            ))}
          </div>
        );
      })}
    </dl>
  );
}
