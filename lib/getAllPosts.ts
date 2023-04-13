import client from './sanityClient'

// Fetch all posts, ordered by published date
export async function getAllPosts() {
  return await client.fetch(`*[_type == "post"] | order(publishedAt desc)`)
}
