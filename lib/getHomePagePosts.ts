import client from './sanityClient'

// Fetch first five posts from Sanity client
export async function getHomePagePosts() {
  return await client.fetch(`*[_type == "post"][0..8] | order(_createdAt desc)`)
}
