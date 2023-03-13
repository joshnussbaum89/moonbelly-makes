import client from './sanityClient'

export async function getAllBakeOffPosts() {
  return await client.fetch(
    `*[_type == "post" && category == "bake-off"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      mainImage,
      category
    }`
  )
}
