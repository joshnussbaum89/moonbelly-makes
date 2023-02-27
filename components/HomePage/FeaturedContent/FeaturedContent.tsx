// Components
import FeaturedPosts from '../FeaturedPosts/FeaturedPosts'
import AboutKatrina from '../../Global/AboutKatrina/AboutKatrina'

// Styles
import styles from './FeaturedContent.module.css'

// Types
import { PostProps } from '../../../types'

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
