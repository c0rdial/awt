import { defineField, defineType } from 'sanity';

export const instagramPost = defineType({
  name: 'instagramPost',
  title: 'Instagram post',
  type: 'document',
  fields: [
    defineField({ name: 'image', type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', type: 'string', validation: (rule) => rule.required() })], validation: (rule) => rule.required() }),
    defineField({ name: 'url', title: 'Instagram URL', type: 'url', validation: (rule) => rule.required() }),
    defineField({ name: 'publishedAt', type: 'datetime', validation: (rule) => rule.required() }),
  ],
  preview: { select: { title: 'url', media: 'image' } },
});
