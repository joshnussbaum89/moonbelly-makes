// Components
import Head from 'next/head'
import RecentPosts from '../components/HomePage/RecentPosts/RecentPosts'
import Subscribe from '../components/Global/Subscribe/Subscribe'
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
        <title>Moonbelly Makes | Decorate Your Life</title>
        <meta name="description" content="decorate your life" />
      </Head>
      <RecentPosts />
      <Subscribe />
      <FeaturedContent />
    </>
  )
}
