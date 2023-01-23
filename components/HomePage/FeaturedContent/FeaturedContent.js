// Components
import FeaturedPosts from '../FeaturedPosts/FeaturedPosts'
import AboutKatrina from '../AboutKatrina/AboutKatrina'

// Styles
import styles from './FeaturedContent.module.css'

/**
 * FeaturedContent Component
 *
 * @returns Featured posts and side panel info
 */
export default function FeaturedContent({ posts }) {
  return (
    <section className={styles.content}>
      <FeaturedPosts posts={posts} />
      <AboutKatrina />
    </section>
  )
}
