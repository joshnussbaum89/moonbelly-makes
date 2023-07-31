// Components
import SEO from '../components/Global/SEO/SEO'
import NewestProjects from '../components/HomePage/NewestProjects/NewestProjects'
import Subscribe from '../components/Global/Subscribe/Subscribe'
import FeaturedContent from '../components/HomePage/FeaturedContent/FeaturedContent'
import { motion } from 'framer-motion'

// Helpers
import { getHomePagePosts } from '../lib/sanityApi'

// Types
import { GetStaticProps } from 'next'
import { Post } from '../types'

interface PostProps {
  posts: { newestProjects: Post[]; recentProjects: Post[] }
}

export default function HomePage({ posts }: PostProps) {
  return (
    <>
      <SEO
        title="Moonbelly Makes | Decorate Your Life"
        url="https://moonbellymakes.com"
        image="/fabric-flowers.jpeg"
        description="Moonbelly Makes is a blog and YouTube channel dedicated to sharing DIY projects, recipes, and more."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      >
        <NewestProjects posts={posts.newestProjects} />
        <Subscribe />
        <FeaturedContent posts={posts.recentProjects} />
      </motion.div>
    </>
  )
}

// Fetch Sanity posts
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getHomePagePosts()

  // Get newest posts
  const newestDiyPost = posts.filter((post: Post) => post.category === 'diys').at(0)
  const newestRecipePost = posts.filter((post: Post) => post.category === 'recipes').at(0)
  const newestBakeOffPost = posts.filter((post: Post) => post.category === 'bake-off').at(0)

  // Get posts without newest posts
  const postsWithoutNewest = posts.filter((post: Post) => {
    return (
      post._id !== newestDiyPost._id &&
      post._id !== newestRecipePost._id &&
      post._id !== newestBakeOffPost._id
    )
  })

  return {
    props: {
      posts: {
        newestProjects: [newestDiyPost, newestRecipePost, newestBakeOffPost],
        recentProjects: postsWithoutNewest,
      },
    },
    revalidate: 10,
  }
}
