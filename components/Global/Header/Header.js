import TopBar from '../TopBar/TopBar'
import Navigation from '../Navigation/Navigation'

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
