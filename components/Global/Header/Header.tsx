import Navigation from '../Navigation/Navigation'
import TopBar from '../TopBar/TopBar'

export default function Header({ handleShowMobileNav }) {
  return (
    <header>
      <TopBar />
      <Navigation handleShowMobileNav={handleShowMobileNav} />
    </header>
  )
}
