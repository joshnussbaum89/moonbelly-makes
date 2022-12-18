import MobileNavigation from './Mobile/MobileNavigation'
import DesktopNavigation from './Desktop/DesktopNavigation'

import styles from './Navigation.module.css'

export default function Navigation({ handleShowMobileNav, handleShowMobileSearch }) {
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
