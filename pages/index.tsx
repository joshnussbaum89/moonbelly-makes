// Components
import Head from 'next/head'
import RecentPosts from '../components/HomePage/RecentPosts/RecentPosts'
import SubscribeMobile from '../components/Global/SubscribeMobile/SubscribeMobile'
import FeaturedContent from '../components/HomePage/FeaturedContent/FeaturedContent'

// Helpers
import { getHomePagePosts } from '../lib/getHomePagePosts'

// Types
import { GetStaticProps } from 'next'

/**
 * Home page
 */
export default function Home({ posts }: PostProps) {
  return (
    <>
      <Head>
        <title>Moonbelly Makes | Decorate Your Life</title>
        <meta name="description" content="Decorate Your Life" />
        <meta property="og:title" content="Moonbelly Makes | Decorate Your Life" />
        <meta property="og:image" content="/fabric-flowers.jpeg" />
        <meta property="og:description" content="Decorate Your Life" />
        <meta property="og:url" content="https://moonbellymakes.com" />
        <meta property="og:type" content="website" />
      </Head>
      <RecentPosts posts={posts.recentPosts} />
      <SubscribeMobile />
      <FeaturedContent posts={posts.featuredPosts} />
    </>
  )
}

// Fetch Sanity posts
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getHomePagePosts()

  // Get most recent posts
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
        recentPosts: [newestDiyPost, newestRecipePost, newestBakeOffPost],
        featuredPosts: postsWithoutNewest,
      },
    },
    revalidate: 10,
  }
}

// Types
type PostProps = { posts: { recentPosts: Post[]; featuredPosts: Post[] } }

interface Post {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  body: Object[]
  category: string
  mainImage: {
    _type: string
    alt: string
    asset: Object[]
  }
  publishedAt: string
  slug: { _type: string; current: string }
  tag: []
  title: string
}
