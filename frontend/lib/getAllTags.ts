import client from './sanityClient'

// Fetch all tags
export async function getAllTags() {
  return await client.fetch(`*[_type == "tag"]`)
}
