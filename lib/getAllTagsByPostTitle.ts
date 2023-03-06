import client from './sanityClient'

export async function getAllTagsByPostTitle(title: string) {
  // Escape double quotes in title
  const formattedTitle = title.replace(/"/g, '\\"')

  return await client.fetch(`*[_type == "post" && title == "${formattedTitle}"] {
    tag[]->{
      title
    }
  }`)
}
