// Components
import TopBar from '../TopBar/TopBar'
import Navigation from '../Navigation/Navigation'

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

// Types
interface HeaderProps {
  handleShowMobileNav: () => void
  handleShowMobileSearch: () => void
}
