import client from './sanityClient'

// Search all posts, ordered by published date
export async function searchAllPosts() {
  return await client.fetch(`*[_type == "post"] | order(_publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    category
  }`)
}
