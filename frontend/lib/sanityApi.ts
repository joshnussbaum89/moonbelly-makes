import client from './sanityClient'
import { Tag } from '../types'

/**
 * Fetch all posts, ordered by published date
 */
export async function getAllPosts() {
  return await client.fetch(`*[_type == "post"] | order(publishedAt desc)`)
}

/**
 * Fetch all tags
 */
export async function getAllTags() {
  return await client.fetch(`*[_type == "tag"]`)
}

/**
 * Fetch all home page posts, ordered by published date
 */
export async function getHomePagePosts() {
  return await client.fetch(`*[_type == "post"] | order(publishedAt desc)[0..8] {
    _id,
    title,
    slug,
    mainImage,
    category
  }`)
}

/**
 * Get all posts for a given category (e.g. "recipes"), ordered by published date
 */
export async function getPostsByCategory(category: string) {
  return await client.fetch(
    `*[_type == "post" && category == "${category}" && !(title in ["GBBO POST TEMPLATE", "RECIPE TEMPLATE"])] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      category
    }`
  )
}

/**
 * Get all posts for a given tag (e.g. "vegan")
 */
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

/**
 * Returns all tags for a given post title (e.g. "Bacon + Egg Fried Rice")
 */
export async function getAllTagsByPostTitle(title: string) {
  // Escape double quotes in title
  const formattedTitle = title.replace(/"/g, '\\"')

  return await client.fetch(`*[_type == "post" && title == "${formattedTitle}"] {
    tag[]->{
      title
    }
  }`)
}

/**
 * Returns all comments for a given post id
 */
export async function getAllCommentsByPostId(id: string) {
  return await client.fetch(
    `*[_type == "comment" && post._ref == "${id}" && approved == true] | order(_createdAt desc) {
      _id,
      name,
      email,
      comment,
      _createdAt
    }`
  )
}

/**
 * Search all posts, ordered by published date
 */
export async function searchAllPosts() {
  return await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    category
  }`)
}
