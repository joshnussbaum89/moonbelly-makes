import Head from 'next/head'
import FeaturedPosts from '../components/HomePage/FeaturedPosts/FeaturedPosts'
import Subscribe from '../components/Global/Subscribe/Subscribe'

export default function Home() {
  return (
    <>
      <Head>
        <title>[NEXT] Moonbelly Makes - decorate your life</title>
        <meta name="description" content="decorate your life" />
      </Head>
      <FeaturedPosts />
      <Subscribe />
      {/* Recent Posts */}
      {/* About Katrina */}
    </>
  )
}
