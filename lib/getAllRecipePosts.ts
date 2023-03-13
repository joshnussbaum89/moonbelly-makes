import client from './sanityClient'

export async function getAllRecipePosts() {
  return await client.fetch(
    `*[_type == "post" && category == "recipes"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      mainImage,
      category
    }`
  )
}
