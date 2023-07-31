// Components
import SEO from '../components/Global/SEO/SEO'
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
      <SEO
        title="Moonbelly Makes | DIYs"
        url="https://moonbellymakes.com/diys"
        image="/fabric-flowers.jpeg"
        description="Moonbelly Makes DIY projects"
      />
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
