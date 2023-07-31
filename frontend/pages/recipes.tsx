// Components
import SEO from '../components/Global/SEO/SEO'
import PageTitle from '../components/Global/PageTitle/PageTitle'
import ContentContainer from '../components/Global/ContentContainer/ContentContainer'
import { motion } from 'framer-motion'

// Helpers
import { getPostsByCategory } from '../lib/sanityApi'

// Types
import { Post } from '../types'

export default function RecipesPage({ posts }: { posts: Post[] }) {
  return (
    <>
      <SEO
        title="Moonbelly Makes | Recipes"
        url="https://moonbellymakes.com/recipes"
        image="/fabric-flowers.jpeg"
        description="Moonbelly Makes Recipes"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      >
        <PageTitle text="Recipes" />
        <ContentContainer posts={posts} />
      </motion.div>
    </>
  )
}

// Fetch "Recipe" posts
export async function getStaticProps() {
  const posts = await getPostsByCategory('recipes')

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}
