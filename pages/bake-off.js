// Components
import PageTitle from '../components/Global/PageTitle/PageTitle'
import ContentContainer from '../components/Global/ContentContainer/ContentContainer'

// Helpers
import { getAllBakeOffPosts } from '../lib/getAllBakeOffPosts'

/**
 * Bake Off Page
 *
 * @param {object} posts
 */
export default function BakeOff({ posts }) {
  return (
    <>
      <PageTitle text="Bake Off" />
      <ContentContainer posts={posts} />
    </>
  )
}

// Fetch Sanity posts
export async function getStaticProps() {
  const posts = await getAllBakeOffPosts()

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}
