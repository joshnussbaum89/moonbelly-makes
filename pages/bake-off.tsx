// Components
import Head from 'next/head'
import PageTitle from '../components/Global/PageTitle/PageTitle'
import ContentContainer from '../components/Global/ContentContainer/ContentContainer'

// Helpers
import { getAllBakeOffPosts } from '../lib/getAllBakeOffPosts'

// Types
import { TypedObject } from '@portabletext/types'

/**
 * Bake Off Page
 */
export default function BakeOff({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>Moonbelly Makes | Bake Off</title>
        <meta name="description" content="Moonbelly Makes Bake Off" />
        <meta property="og:title" content="Moonbelly Makes | Bake Off" />
        <meta property="og:image" content="/fabric-flowers.jpeg" />
        <meta property="og:description" content="Moonbelly Makes Bake Off" />
        <meta property="og:url" content="https://moonbellymakes.com/bake-off" />
        <meta property="og:type" content="website" />
      </Head>
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
    revalidate: 10,
  }
}

// Types
interface Post {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  _key: string
  body: TypedObject[]
  category: string
  mainImage: {
    _type: string
    alt: string
    asset: Object[]
  }
  publishedAt: string
  slug: { _type: string; current: string }
  tag: []
  title: string
}
