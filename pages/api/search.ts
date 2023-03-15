// Types
import type { NextApiRequest, NextApiResponse } from 'next'
import type { SlimPost } from '../../types'

// Helpers
import { searchAllPosts } from '../../lib/searchAllPosts'

// Search API route -- '/api/search'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Fetch all possible posts from Sanity
  const posts: SlimPost[] = await searchAllPosts()

  // Execute search from request
  const performSearch = (query: string) => {
    return posts.filter((item: SlimPost) =>
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
