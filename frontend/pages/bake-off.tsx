// Components
import SEO from '../components/Global/SEO/SEO'
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
      <SEO
        title="Moonbelly Makes | Bake Off"
        url="https://moonbellymakes.com/bake-off"
        image="/fabric-flowers.jpeg"
        description="Moonbelly Makes Bake Off"
      />
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
