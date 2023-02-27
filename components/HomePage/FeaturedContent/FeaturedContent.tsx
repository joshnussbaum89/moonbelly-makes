// Components
import RecentProjects from '../RecentProjects/RecentProjects'
import AboutKatrina from '../../Global/AboutKatrina/AboutKatrina'

// Styles
import styles from './FeaturedContent.module.css'

// Types
import { PostProps } from '../../../types'

/**
 * Recent projects and side panel info
 */
export default function FeaturedContent({ posts }: PostProps) {
  return (
    <section className={styles.content}>
      <div>
        <h2>Recent Projects</h2>
        <RecentProjects posts={posts} />
      </div>
      <AboutKatrina />
    </section>
  )
}
