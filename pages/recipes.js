// Components
import PageTitle from '../components/Global/PageTitle/PageTitle'
import ContentContainer from '../components/Global/ContentContainer/ContentContainer'

// Helpers
import { getAllRecipePosts } from '../lib/getAllRecipePosts'

/**
 * Recipes Page
 *
 * @param {object} posts
 */
export default function Recipes({ posts }) {
  return (
    <>
      <PageTitle text="Recipes" />
      <ContentContainer posts={posts} />
    </>
  )
}

// Fetch Sanity posts
export async function getStaticProps() {
  const posts = await getAllRecipePosts()

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}
