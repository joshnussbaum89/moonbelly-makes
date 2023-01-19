// Components
import TopBarSearch from '../TopBarSearch/TopBarSearch'
import SocialIcons from '../SocialIcons/SocialIcons'

// Styles
import styles from './TopBar.module.css'

/**
 * TopBar Component
 *
 * @returns Search bar and social icons
 */
export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <TopBarSearch />
      <SocialIcons />
    </div>
  )
}
