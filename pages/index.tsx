import Head from 'next/head'
import MostRecentPosts from '../components/HomePage/MostRecentPosts/MostRecentPosts'
import Subscribe from '../components/HomePage/Subscribe/Subscribe'
import FeaturedContent from '../components/HomePage/FeaturedContent/FeaturedContent'

export default function Home() {
  return (
    <>
      <Head>
        <title>[NEXT] Moonbelly Makes - decorate your life</title>
        <meta name="description" content="decorate your life" />
      </Head>
      <MostRecentPosts />
      <Subscribe />
      <FeaturedContent />
    </>
  )
}
