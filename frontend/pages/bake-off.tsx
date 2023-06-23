// Components
import Head from 'next/head'
import PageTitle from '../components/Global/PageTitle/PageTitle'
import ContentContainer from '../components/Global/ContentContainer/ContentContainer'

// Helpers
import { getPostsByCategory } from '../lib/sanityApi'

// Types
import { Post } from '../types'

export default function BakeOffPage({ posts }: { posts: Post[] }) {
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

// Fetch "Bake Off" posts
export async function getStaticProps() {
  const posts = await getPostsByCategory('bake-off')

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}
