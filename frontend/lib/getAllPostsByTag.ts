import client from './sanityClient'
import { getAllTags } from './getAllTags'

interface Tag {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  title: string
}

export async function getAllPostsByTag(slug: string) {
  const tags: Tag[] = await getAllTags()

  // Find correct tag title to ensure groq query works
  const { title } = tags.find((tag) => {
    const formattedTag = tag.title.toLowerCase()
    const formattedSlug = slug.toLowerCase().replace(/-/g, ' ')

    // Return tag that matches slug
    return formattedTag === formattedSlug
  }) as Tag

  const postsAssociatedWithTag =
    await client.fetch(`*[_type == "post" && "${title}" in tag[]->title] {
    _id,
    title,
    slug,
    mainImage,
    category
  }`)

  return postsAssociatedWithTag
}
