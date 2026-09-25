import { defineField, defineType } from "sanity";

/** Singleton: home, about and contact copy. */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "tagline", type: "string", initialValue: "Architecture . Interior design. Decoration. Styling" }),
    defineField({ name: "heroImage", title: "Home render", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string" }] }),
    defineField({ name: "philosophy", title: "About: our philosophies", type: "portableText", description: "Use the Bracket button on the one or two words each paragraph turns on." }),
    defineField({ name: "aboutImage", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string" }] }),
    defineField({ name: "instagram", type: "string", initialValue: "@aworkingtitle.studio" }),
    defineField({ name: "email", type: "string", initialValue: "hello.awts@gmail.com" }),
    defineField({
      name: "whatsapp", type: "array",
      of: [{ type: "object", fields: [{ name: "name", type: "string" }, { name: "number", type: "string" }], preview: { select: { title: "name", subtitle: "number" } } }],
    }),
    defineField({ name: "visitNote", title: "Visit us", type: "string", initialValue: "at our shared creative space (A Working Space) in Teges, Ubud!" }),
  ],
});
