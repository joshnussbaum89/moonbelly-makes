import client from './sanityClient'

// Fetch all home page posts, ordered by published date
export async function getHomePagePosts() {
  return await client.fetch(`*[_type == "post"] | order(publishedAt desc)[0..8] {
    _id,
    title,
    slug,
    mainImage,
    category
  }`)
}
