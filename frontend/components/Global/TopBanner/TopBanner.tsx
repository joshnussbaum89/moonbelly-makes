// Components
import TopBarSearch from '../TopBarSearch/TopBarSearch'
import SocialIcons from '../SocialIcons/SocialIcons'

// Styles
import styles from './TopBanner.module.css'

/**
 * Top bar above hero - search bar and social icons
 */
export default function TopBanner() {
  return (
    <div className={styles.TopBanner}>
      <TopBarSearch />
      <SocialIcons />
    </div>
  )
}
