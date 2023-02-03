// Helpers
import { getAllPosts } from '../../lib/getAllPosts'

// Search API route -- '/api/search'
export default async function handler(req, res) {
  // Fetch all possible posts from Sanity
  const posts = await getAllPosts()

  // Execute search from request
  const performSearch = (query) => {
    return posts.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )
  }

  try {
    const { query } = req.body
    const results = performSearch(query)
    res.status(200).json({ data: results })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
