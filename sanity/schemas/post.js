import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Please add a title'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'The "slug" will be the URL path for your post - ex/ www.moonbelly.com/posts/generated-slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().error('Please create your own, or click "generate" to add a slug'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'Diy', value: 'diy'},
          {title: 'Recipe', value: 'recipe'},
          {title: 'Bake Off', value: 'bakeOff'},
        ],
      },
      validation: (Rule) =>
        Rule.required().error('Please create a new category or select one from the provided list'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      validation: (Rule) => Rule.required().error('Please add an image'),
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text *',
          type: 'string',
          description: `Some of your visitors cannot see images, be they blind, color-blind, low-sighted; alternative text is of great help for those people that can rely on it to have a good idea of what's on your page.`,
          validation: (Rule) => Rule.required().error('Please add alternative text'),
        },
      ],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tag',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
      validation: (Rule) =>
        Rule.min(1).error(
          'Tags are required for site navigation and website search functionality - please add at least one tag'
        ),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY',
      },
      validation: (Rule) => Rule.required().error('Please add a date'),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: '❤️',
      validation: (Rule) =>
        Rule.required().error('Body text is required to create a post - please add some text'),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare(selection) {
      const {title, media, date} = selection
      return {
        title,
        media,
        subtitle: `${date.split('-')[1]}-${date.split('-')[2]}-${date.split('-')[0]}`, // YYYY-MM-DD --> MM-DD-YYYY
      }
    },
  },
})
