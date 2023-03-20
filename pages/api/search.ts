// Types
import type { NextApiRequest, NextApiResponse } from 'next'
import type { SlimPost, Tag } from '../../types'

// Helpers
import { searchAllPosts } from '../../lib/searchAllPosts'
import { getAllTags } from '../../lib/getAllTags'

// Search API route -- '/api/search'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Fetch all possible posts from Sanity
  const posts: SlimPost[] = await searchAllPosts()
  const tags: Tag[] = await getAllTags()

  // Execute search from request
  const performSearch = (query: string) => {
    const filteredPosts = posts.filter((item: SlimPost) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )

    const filteredTags = tags.filter((item: Tag) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )

    return {
      posts: filteredPosts,
      tags: filteredTags,
    }
  }

  try {
    const { query } = req.body
    const results = performSearch(query)
    res.status(200).json(results)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message || error.toString() })
    }
  }
}
