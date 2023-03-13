import client from './sanityClient'

export async function getHomePagePosts() {
  return await client.fetch(`*[_type == "post"][0..8] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage,
    category
  }`)
}
