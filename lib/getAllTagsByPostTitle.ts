import client from './sanityClient'

export async function getAllTagsByPostTitle(title: string) {
  return await client.fetch(`*[_type == "post" && title == "${title}"] {
    tag[]->{
      title
    }
  }`)
}
