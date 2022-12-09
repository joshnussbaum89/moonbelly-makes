import FeaturedPosts from '../FeaturedPosts/FeaturedPosts'
import AboutKatrina from '../AboutKatrina/AboutKatrina'

import styles from './FeaturedContent.module.css'

export default function FeaturedContent() {
  return (
    <section className={styles.content}>
      <FeaturedPosts />
      <AboutKatrina />
    </section>
  )
}
