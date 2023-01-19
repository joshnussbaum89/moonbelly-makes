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
export default function FeaturedContent() {
  return (
    <section className={styles.content}>
      <FeaturedPosts />
      <AboutKatrina />
    </section>
  )
}
