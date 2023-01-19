// Components
import TopBar from '../TopBar/TopBar'
import Navigation from '../Navigation/Navigation'

/**
 * Header Component
 *
 * @returns Top search bar and main site navigation
 */
export default function Header({
  handleShowMobileNav,
  handleShowMobileSearch,
}) {
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
