import client from './sanityClient'
import { getAllTags } from './getAllTags'

// Fetch all posts associated with tag slug from Sanity
export async function getAllPostsByTag(slug) {
  // Fetch all available tags
  const tags = await getAllTags()

  // Find correct tag title to ensure groq query works
  const { title } = tags.find((tag) => {
    const formattedTag = tag.title.toLowerCase()
    const formattedSlug = slug.toLowerCase().replace(/-/g, ' ')

    // Return tag that matches slug
    return formattedTag === formattedSlug
  })

  return await client.fetch(`*[_type == "post" && "${title}" in tag[]->title]{
    title,
    slug,
    body,
    category,
    mainImage
  }`)
}
