import client from './sanityClient'

// Fetch all tags from Sanity client
export async function getAllTags() {
  return await client.fetch(`*[_type == "tag"]`)
}
