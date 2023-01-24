import client from './sanityClient'

// Fetch all posts by slug from Sanity
export async function getAllPostsByTag(slug) {
  return await client.fetch(`*[_type == "post" && "${slug}" in tag[]->title]{
    title,
    slug,
    body,
    category,
    mainImage
  }`)
}
