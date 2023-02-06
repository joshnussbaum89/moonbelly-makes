// Types
import type { NextApiRequest, NextApiResponse } from 'next'

// Helpers
import { getAllPosts } from '../../lib/getAllPosts'

// Search API route -- '/api/search'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Fetch all possible posts from Sanity
  const posts: Post[] = await getAllPosts()

  // Execute search from request
  const performSearch = (query: string) => {
    return posts.filter((item: Post) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )
  }

  try {
    const { query } = req.body
    const results = performSearch(query)
    res.status(200).json({ data: results })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message || error.toString() })
    }
  }
}

// Types
interface Post {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  body: Object[]
  category: string
  mainImage: {
    _type: string
    alt: string
    asset: Object[]
  }
  publishedAt: string
  slug: { _type: string; current: string }
  tag: []
  title: string
}
