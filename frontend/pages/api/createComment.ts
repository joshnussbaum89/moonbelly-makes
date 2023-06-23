import client from '../../lib/sanityClient'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { _id, name, email, comment, isSubscribed } = req.body as {
    _id: string
    name: string
    email: string
    comment: string
    isSubscribed: boolean
  }

  // Validate fields
  if (!_id) return res.status(400).json({ error: 'Post ID is required', message: '' })
  if (!name) return res.status(400).json({ error: 'Name is required', message: '' })

  // TODO: email is always required 
  if (isSubscribed && !email) {
    return res
      .status(400)
      .json({ error: 'Email is required for newsletter subscription', message: '' })
  }

  if (!comment) return res.status(400).json({ error: 'Comment is required', message: '' })

  // Create comment
  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
      isSubscribed,
    })

    return res
      .status(201)
      .json({ error: '', message: 'Success! Your comment has been submitted for review 🎉' })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message || error.toString(), message: '' })
    }
  }
}
