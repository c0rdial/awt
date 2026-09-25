import { defineField, defineType } from "sanity";

/** A project in the index. `loadingColor` drives ProjectTile's color reveal. */
export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({
      name: "category", type: "string", validation: (r) => r.required(),
      options: { list: [{ title: "Residential", value: "residential" }, { title: "Commercial/ Hospitality", value: "commercial" }], layout: "radio" },
    }),
    defineField({
      name: "loadingColor", title: "Loading color", type: "string", initialValue: "ivory",
      description: "The flat color the tile shows before the cover slides in. Give neighbouring projects different colors.",
      options: { list: ["lilac", "ivory", "butter", "blush", "taupe"], layout: "radio", direction: "horizontal" },
    }),
    defineField({ name: "cover", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", type: "string", validation: (r) => r.required() })] }),
    defineField({ name: "comingSoon", title: "Coming soon", type: "boolean", initialValue: false }),
    defineField({ name: "year", type: "number" }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "area", type: "string", description: "e.g. 135 m²" }),
    defineField({ name: "scope", type: "string", description: "e.g. Interior design, furniture design" }),
    defineField({ name: "description", type: "portableText" }),
    defineField({ name: "gallery", type: "array", of: [{ type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string" }] }] }),
    defineField({ name: "order", type: "number", description: "Lower numbers show first." }),
  ],
  orderings: [{ title: "Manual", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "category", media: "cover" } },
});
