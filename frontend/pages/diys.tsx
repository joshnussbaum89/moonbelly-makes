// Components
import Head from 'next/head'
import PageTitle from '../components/Global/PageTitle/PageTitle'
import ContentContainer from '../components/Global/ContentContainer/ContentContainer'
import { motion } from 'framer-motion'

// Helpers
import { getPostsByCategory } from '../lib/sanityApi'

// Types
import { Post } from '../types'

export default function DiysPage({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>Moonbelly Makes | DIYs</title>
        <meta name="description" content="Moonbelly Makes DIY projects" />
        <meta property="og:title" content="Moonbelly Makes | DIYs" />
        <meta property="og:image" content="/fabric-flowers.jpeg" />
        <meta property="og:description" content="Moonbelly Makes DIY projects" />
        <meta property="og:url" content="https://moonbellymakes.com/diys" />
        <meta property="og:type" content="website" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      >
        <PageTitle text="DIYs" />
        <ContentContainer posts={posts} />
      </motion.div>
    </>
  )
}

// Fetch "DIY" posts
export async function getStaticProps() {
  const posts = await getPostsByCategory('diys')

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}
