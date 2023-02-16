// Components
import Head from 'next/head'
import PageTitle from '../components/Global/PageTitle/PageTitle'
import ContentContainer from '../components/Global/ContentContainer/ContentContainer'

// Helpers
import { getAllDiyPosts } from '../lib/getAllDiyPosts'

// Types
import { TypedObject } from '@portabletext/types'

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

// Fetch Sanity posts
export async function getStaticProps() {
  const posts = await getAllDiyPosts()

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
