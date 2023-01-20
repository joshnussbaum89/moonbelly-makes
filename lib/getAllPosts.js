import client from './sanityClient'

// Fetch all posts from Sanity client
export async function getAllPosts() {
  return await client.fetch(
    `*[_type == "post"] | order(_createdAt desc)`
  )
}
