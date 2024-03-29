// Helpers
import { navigationData } from '../lib/navigationData'
import { getAllPosts, getAllTags } from '../lib/sanityApi'
import { createSlug } from '../lib/strings'

// Types
import { Post, Tag } from '../types/index'

function generateSiteMap(posts: Post[], tags: Tag[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.moonbellymakes.com/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>

      ${navigationData.map(({ href }) => {
        return `
            <url>
                <loc>${`https://www.moonbellymakes.com${href}`}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `
      })}

    ${posts.map(({ slug }) => {
      return `
        <url>
            <loc>${`https://www.moonbellymakes.com/posts/${slug.current}`}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `
    })}

    ${tags
      .map(({ title }) => {
        const slug = createSlug(title)

        return `
            <url>
                <loc>${`https://www.moonbellymakes.com/tags/${slug}`}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `
      })
      .join('')}
    </urlset>
  `
}

/** This page is used to generate the sitemap.xml file */
function SiteMap() {
  return null
}

/**
 * Fetches posts and tags from Sanity
 *
 * Generates a sitemap.xml file with res.write
 */
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
