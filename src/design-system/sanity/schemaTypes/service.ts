import { defineField, defineType } from "sanity";

/** One of the services on the About page (ServiceCard). */
export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", description: "Architecture, Interior design, Decoration, Styling", validation: (r) => r.required() }),
    defineField({ name: "image", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", type: "string", validation: (r) => r.required() })] }),
    defineField({ name: "body", type: "text", rows: 4, validation: (r) => r.max(280).warning("Keep it short: the site avoids long scrolling.") }),
    defineField({ name: "order", type: "number" }),
  ],
});
