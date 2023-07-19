// Components
import Head from 'next/head'
import PageTitle from '../components/Global/PageTitle/PageTitle'
import ContentContainer from '../components/Global/ContentContainer/ContentContainer'
import { motion } from 'framer-motion'

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      >
        <PageTitle text="Bake Off" />
        <ContentContainer posts={posts} />
      </motion.div>
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
