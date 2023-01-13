import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike Through', value: 'strike-through'},
          {title: 'Code', value: 'code'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }).error(`URL must start with 'http', 'https', 'mailto' or 'tel'`),
              },
            ],
          },
        ],
      },
    }),

    // TODO: create a custom AlignImage component --> https://stackoverflow.com/questions/61280906/text-image-alignment-in-sanity-io-portable-text-rich-text-editor
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required().error('Please add an image'),
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Alternative text',
          description: `Some of your visitors cannot see images, be they blind, color-blind, low-sighted; alternative text is of great help for those people that can rely on it to have a good idea of what's on your page.`,
          validation: (Rule) => Rule.required().error('Please add alternative text'),
        },
        // Column layout properties
        {
          title: 'Column Layout',
          name: 'columnLayout',
          type: 'string',
          options: {
            list: [
              {title: 'One', value: 'one-column'},
              {title: 'Two', value: 'two-column'},
              {title: 'Three', value: 'three-column'},
            ],
          },
        },
        {
          title: 'Alignment',
          name: 'alignment',
          type: 'string',
          options: {
            list: [
              {title: 'Full Width', value: 'full-width'},
              {title: 'Left', value: 'left'},
              {title: 'Right', value: 'right'},
              {title: 'Center', value: 'center'},
            ],
          },
        },
      ],
      initialValue: () => ({
        columnLayout: 'one-column',
        alignment: 'full-width',
      }),
    }),
  ],
})
