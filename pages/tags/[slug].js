// Components
import PageTitle from '../../components/Global/PageTitle/PageTitle'

// Helpers
import { getAllTags } from '../../lib/getAllTags'
import { getAllPostsByTag } from '../../lib/getAllPostsByTag'
import { createTitleFromSlug } from '../../lib/createTitleFromSlug'
import ContentContainer from '../../components/Global/ContentContainer/ContentContainer'

export default function tags({ posts, title }) {
  return (
    <>
      <PageTitle text={title} />
      <ContentContainer posts={posts} />
    </>
  )
}

// Create dynamic URLs from tags
export async function getStaticPaths() {
  const tags = await getAllTags()

  // Create path for each tag
  const paths = tags.map((tag) => ({
    params: {
      slug: tag.title.toLowerCase().replace(/ /g, '-'),
    },
  }))

  return { paths, fallback: false }
}

// Fetch posts by tag
export async function getStaticProps({ params }) {
  const title = createTitleFromSlug(params.slug)
  const posts = await getAllPostsByTag(params.slug)

  return {
    props: {
      posts,
      title,
    },
    revalidate: 60,
  }
}
