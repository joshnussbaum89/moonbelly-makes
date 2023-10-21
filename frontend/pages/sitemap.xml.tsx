import { navigationData } from '../lib/navigationData'
import { getAllPosts, getAllTags } from '../lib/sanityApi'
import { createSlug } from '../lib/strings'

import { Post, Tag } from '../types/index'

function generateSiteMap(posts: Post[], tags: Tag[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://moonbellymakes.com</loc>
      </url>

      ${navigationData.map(({ href }) => {
        return `
            <url>
                <loc>${`https://moonbellymakes.com${href}`}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `
      })}

    ${posts.map(({ slug }) => {
      return `
        <url>
            <loc>${`https://moonbellymakes.com/posts/${slug.current}`}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `
    })}

    ${tags
      .map(({ title }) => {
        const slug = createSlug(title)

        return `
            <url>
                <loc>${`https://moonbellymakes.com/tags/${slug}`}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `
      })
      .join('')}
    </urlset>
  `
}

function SiteMap() {
  // getServerSideProps fetches posts and tags from Sanity
  // and generates a sitemap.xml file with res.write
  return null
}

export async function getServerSideProps({ res }: any) {
  // We make an API call to gather the URLs for our site
  const posts = await getAllPosts()
  const tags = await getAllTags()

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts, tags)

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
