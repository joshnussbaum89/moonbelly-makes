// Components
import MobileNavigation from './Mobile/MobileNavigation'
import DesktopNavigation from './Desktop/DesktopNavigation'

// Styles
import styles from './Navigation.module.css'

/**
 * Navigation Component
 *
 * @returns Mobile + desktop navigation
 */
export default function Navigation({
  handleShowMobileNav,
  handleShowMobileSearch,
}) {
  return (
    <nav className={styles.navigation}>
      <MobileNavigation
        handleShowMobileNav={handleShowMobileNav}
        handleShowMobileSearch={handleShowMobileSearch}
      />
      <DesktopNavigation />
    </nav>
  )
}
