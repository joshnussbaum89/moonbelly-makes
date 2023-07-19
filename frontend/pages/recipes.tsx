// Components
import Head from 'next/head'
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
      <Head>
        <title>Moonbelly Makes | Recipes</title>
        <meta name="description" content="Moonbelly Makes Recipes" />
        <meta property="og:title" content="Moonbelly Makes | Recipes" />
        <meta property="og:image" content="/fabric-flowers.jpeg" />
        <meta property="og:description" content="Moonbelly Makes Recipes" />
        <meta property="og:url" content="https://moonbellymakes.com/recipes" />
        <meta property="og:type" content="website" />
      </Head>
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
