// Components
import PageTitle from '../components/Global/PageTitle/PageTitle'
import ContentContainer from '../components/Global/ContentContainer/ContentContainer'

// Helpers
import { getAllDiyPosts } from '../lib/getAllDiyPosts'

/**
 * Diys Page
 *
 * @param {object} posts
 */
export default function Diys({ posts }) {
  return (
    <>
      <PageTitle text="Diys" />
      <ContentContainer posts={posts} />
    </>
  )
}

// Fetch Sanity posts
export async function getStaticProps() {
  const posts = await getAllDiyPosts()

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}
