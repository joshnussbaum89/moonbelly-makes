// Components
import Head from 'next/head'
import NewestProjects from '../components/HomePage/NewestProjects/NewestProjects'
import Subscribe from '../components/Global/Subscribe/Subscribe'
import FeaturedContent from '../components/HomePage/FeaturedContent/FeaturedContent'

// Helpers
import { getHomePagePosts } from '../lib/getHomePagePosts'

// Types
import { GetStaticProps } from 'next'
import { Post } from '../types'

interface PostProps {
  posts: { newestProjects: Post[]; recentProjects: Post[] }
}

/**
 * Home page
 */
export default function Home({ posts }: PostProps) {
  return (
    <>
      <Head>
        <title>Moonbelly Makes | Decorate Your Life</title>
        <meta name="description" content="Decorate Your Life" />
        <meta
          property="og:title"
          content="Moonbelly Makes | Decorate Your Life"
        />
        <meta property="og:image" content="/fabric-flowers.jpeg" />
        <meta property="og:description" content="Decorate Your Life" />
        <meta property="og:url" content="https://moonbellymakes.com" />
        <meta property="og:type" content="website" />
      </Head>
      <NewestProjects posts={posts.newestProjects} />
      <Subscribe />
      <FeaturedContent posts={posts.recentProjects} />
    </>
  )
}

// Fetch Sanity posts
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getHomePagePosts()

  // Get newest posts
  const newestDiyPost = posts
    .filter((post: Post) => post.category === 'diys')
    .at(0)
  const newestRecipePost = posts
    .filter((post: Post) => post.category === 'recipes')
    .at(0)
  const newestBakeOffPost = posts
    .filter((post: Post) => post.category === 'bake-off')
    .at(0)

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
