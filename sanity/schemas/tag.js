import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Please add a title'),
    }),
    defineField({
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'Diy', value: 'diys'},
          {title: 'Recipe', value: 'recipes'},
          {title: 'Bake Off', value: 'bake-off'},
        ],
      },
      validation: (Rule) =>
        Rule.required().error('Please create a new category or select one from the provided list'),
    }),
  ],
})
