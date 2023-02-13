// Components
import Head from 'next/head'
import RecentPosts from '../components/HomePage/RecentPosts/RecentPosts'
import SubscribeMobile from '../components/Global/SubscribeMobile/SubscribeMobile'
import FeaturedContent from '../components/HomePage/FeaturedContent/FeaturedContent'

// Helpers
import { getHomePagePosts } from '../lib/getHomePagePosts'

// Types
import { GetStaticProps } from 'next'

/**
 * Home page
 */
export default function Home({ posts }: PostProps) {
  return (
    <>
      <Head>
        <title>Moonbelly Makes | Decorate Your Life</title>
        <meta name="description" content="decorate your life" />
      </Head>
      <RecentPosts posts={posts} />
      <SubscribeMobile />
      <FeaturedContent posts={posts} />
    </>
  )
}

// Fetch Sanity posts
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getHomePagePosts()

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}

// Types
type PostProps = { posts: Post[] }

interface Post {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  body: Object[]
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
