import {defineField, defineType} from 'sanity'
import {CommentIcon} from '@sanity/icons'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Please add your name'),
    }),
    defineField({
      name: 'approved',
      title: 'Comment Approved',
      type: 'boolean',
      description:
        "Do you approve this message? Comments won't display on site without admin approval.",
      initialValue: false,
      validation: (Rule) => Rule.required().error('Please approve or reject this comment'),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
    }),
    defineField({
      name: 'isSubscribed',
      title: 'User Is Subscribed',
      type: 'boolean',
      description:
        'Admin can change this if necessary but newsletter subscription is usually decided by the user.',
      initialValue: false,
    }),
    defineField({
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: [{type: 'post'}],
      description: 'Which post does this comment belong to?',
      validation: (Rule) => Rule.required().error('Please select a post'),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      comment: 'comment',
      post: 'post.title',
      media: 'post.mainImage',
      approved: 'approved',
    },
    prepare({name, comment, post, media, approved}) {
      let titleText = ''

      // Validation
      if (!approved) titleText = 'Pending approval'
      if (!name) titleText = 'Missing name'
      if (!post || !media) titleText = 'Missing post information'

      // If there is a name and approved post, show the title
      if (name && post && approved) titleText = `${name} on ${post}`

      return {
        title: titleText,
        subtitle: comment ? `${comment.substring(0, 50)}...` : 'No comment',
        media,
      }
    },
  },
})
