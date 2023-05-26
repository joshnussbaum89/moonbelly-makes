import client from './sanityClient'

// Get all posts for a given category (e.g. "recipes"), ordered by published date
export async function getPostsByCategory(category: string) {
  return await client.fetch(
    `*[_type == "post" && category == "${category}"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      category
    }`
  )
}
