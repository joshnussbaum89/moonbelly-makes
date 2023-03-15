import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'youtube',
  title: 'Youtube Embed',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'YouTube video URL',
      type: 'url',
    }),
  ],
})
