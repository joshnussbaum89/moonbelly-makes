import client from './sanityClient'

// Fetch all recipe posts from Sanity client
export async function getAllRecipePosts() {
  return await client.fetch(
    `*[_type == "post" && category == "recipe"] | order(_createdAt desc)`
  )
}
