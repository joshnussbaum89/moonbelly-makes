// Components
import Head from 'next/head'
import PageTitle from '../components/Global/PageTitle/PageTitle'
import ContentContainer from '../components/Global/ContentContainer/ContentContainer'

// Helpers
import { getPostsByCategory } from '../lib/getPostsByCategory'

// Types
import { Post } from '../types'

/**
 * Diys Page
 */
export default function Diys({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>Moonbelly Makes | DIYs</title>
        <meta name="description" content="Moonbelly Makes DIY projects" />
        <meta property="og:title" content="Moonbelly Makes | DIYs" />
        <meta property="og:image" content="/fabric-flowers.jpeg" />
        <meta
          property="og:description"
          content="Moonbelly Makes DIY projects"
        />
        <meta property="og:url" content="https://moonbellymakes.com/diys" />
        <meta property="og:type" content="website" />
      </Head>
      <PageTitle text="DIYs" />
      <ContentContainer posts={posts} />
    </>
  )
}

// Fetch "DIY" posts
export async function getStaticProps() {
  const posts = await getPostsByCategory('diys')

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}