// Components
import TopBar from '../TopBar/TopBar'
import Navigation from '../Navigation/Navigation'

/**
 * Header Component
 *
 * @param {function} handleShowMobileNav
 * @param {function} handleShowMobileSearch
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
