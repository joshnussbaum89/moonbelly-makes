// Components
import FeaturedPosts from '../FeaturedPosts/FeaturedPosts'
import AboutKatrina from '../../Global/AboutKatrina/AboutKatrina'

// Styles
import styles from './FeaturedContent.module.css'

/**
 * Featured posts and side panel info
 */
export default function FeaturedContent({ posts }: PostProps) {
  return (
    <section className={styles.content}>
      <FeaturedPosts posts={posts} />
      <AboutKatrina />
    </section>
  )
}

// Types
type PostProps = { posts: Post[] }

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
