// Components
import Head from 'next/head'
import PageTitle from '../components/Global/PageTitle/PageTitle'
import ContentContainer from '../components/Global/ContentContainer/ContentContainer'

// Helpers
import { getAllRecipePosts } from '../lib/getAllRecipePosts'

// Types
import { Post } from '../types'

/**
 * Recipes Page
 */
export default function Recipes({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>Moonbelly Makes | Recipes</title>
        <meta name="description" content="Moonbelly Makes Recipes" />
        <meta property="og:title" content="Moonbelly Makes | Recipes" />
        <meta property="og:image" content="/fabric-flowers.jpeg" />
        <meta property="og:description" content="Moonbelly Makes Recipes" />
        <meta property="og:url" content="https://moonbellymakes.com/recipes" />
        <meta property="og:type" content="website" />
      </Head>
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
