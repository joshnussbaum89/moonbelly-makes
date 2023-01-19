import client from './sanityClient'

/**
 * Fetch all bake off posts from Sanity client
 */
export async function getAllBakeOffPosts() {
  return await client.fetch(
    `*[_type == "post" && category == "bakeOff"] | order(_createdAt desc)`
  )
}
