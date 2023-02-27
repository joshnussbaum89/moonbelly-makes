// Components
import MobileNavigation from './Mobile/MobileNavigation'
import DesktopNavigation from './Desktop/DesktopNavigation'

// Styles
import styles from './Navigation.module.css'

// Types
export interface NavigationProps {
  handleShowMobileNav: () => void
  handleShowMobileSearch: () => void
}

export interface NavItemProps {
  item: Item
  side: string
}

export type Item =
  | {
      id: number
      title: string
      href: string
      subNav: {
        id: number
        title: string
        href: string
      }[]
    }
  | {
      id: number
      title: string
      href: string
      subNav: null
    }

/**
 * Navigation Component (Mobile + desktop navigation)
 */
export default function Navigation({
  handleShowMobileNav,
  handleShowMobileSearch,
}: NavigationProps) {
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
