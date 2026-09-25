import { defineArrayMember, defineType } from "sanity";

/** Rich text with a "Bracket" decorator, rendered with the Bracket component: [JOY]. */
export const portableText = defineType({
  name: "portableText",
  title: "Text",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [{ title: "Normal", value: "normal" }],
      lists: [],
      marks: {
        decorators: [{ title: "Bracket", value: "bracket", icon: () => "[ ]" }],
        annotations: [{ name: "link", type: "object", title: "Link", fields: [{ name: "href", type: "url" }] }],
      },
    }),
  ],
});
