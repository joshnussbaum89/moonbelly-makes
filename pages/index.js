// Components
import Head from 'next/head'
import RecentPosts from '../components/HomePage/RecentPosts/RecentPosts'
import Subscribe from '../components/Global/Subscribe/Subscribe'
import FeaturedContent from '../components/HomePage/FeaturedContent/FeaturedContent'

// Helpers
import { getHomePagePosts } from '../lib/getHomePagePosts'

/**
 * Home page
 *
 * @returns Recent posts, subscribe CTA, featured content
 */
export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Moonbelly Makes | Decorate Your Life</title>
        <meta name="description" content="decorate your life" />
      </Head>
      <RecentPosts posts={posts} />
      <Subscribe />
      <FeaturedContent posts={posts} />
    </>
  )
}

// Fetch Sanity posts
export async function getStaticProps() {
  const posts = await getHomePagePosts()

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}
