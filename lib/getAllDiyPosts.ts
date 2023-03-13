import client from './sanityClient'

export async function getAllDiyPosts() {
  return await client.fetch(
    `*[_type == "post" && category == "diys"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      mainImage,
      category
    }`
  )
}
