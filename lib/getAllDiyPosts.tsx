import client from './sanityClient'

// Fetch all DIY posts from Sanity client
export async function getAllDiyPosts() {
  return await client.fetch(
    `*[_type == "post" && category == "diys"] | order(_createdAt desc)`
  )
}