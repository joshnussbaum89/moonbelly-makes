// Components
import TopBar from '../TopBanner/TopBanner'
import Navigation from '../Navigation/Navigation'

// Types
interface HeaderProps {
  handleShowMobileNav: () => void
  handleShowMobileSearch: () => void
}

/**
 * Header Component (Top search bar and main site navigation)
 */
export default function Header({
  handleShowMobileNav,
  handleShowMobileSearch,
}: HeaderProps) {
  return (
    <header>
      <TopBar />
      <Navigation
        handleShowMobileNav={handleShowMobileNav}
        handleShowMobileSearch={handleShowMobileSearch}
      />
    </header>
  )
}
