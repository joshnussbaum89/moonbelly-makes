import client from './sanityClient'

// Fetch all recipe posts from Sanity client
export async function getAllRecipePosts() {
  return await client.fetch(
    `*[_type == "post" && category == "recipes"] | order(_createdAt desc)`
  )
}
