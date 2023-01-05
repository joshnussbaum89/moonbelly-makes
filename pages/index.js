// Components
import Head from 'next/head'
import RecentPosts from '../components/HomePage/RecentPosts/RecentPosts'
import Subscribe from '../components/HomePage/Subscribe/Subscribe'
import FeaturedContent from '../components/HomePage/FeaturedContent/FeaturedContent'

/**
 * Home page
 *
 * @returns Recent posts, subscribe CTA, featured content
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>[NEXT] Moonbelly Makes - decorate your life</title>
        <meta name="description" content="decorate your life" />
      </Head>
      <RecentPosts />
      <Subscribe />
      <FeaturedContent />
    </>
  )
}
