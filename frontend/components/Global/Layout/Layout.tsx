// Hooks, Components
import { useEffect, useRef, useState, MutableRefObject } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import OffCanvasNavigation from '../OffCanvasNavigation/OffCanvasNavigation'
import OffCanvasSearch from '../OffCanvasSearch/OffCanvasSearch'
import CookieBanner from '../CookieBanner/CookieBanner'
import { useCookies } from '../../../hooks/useCookies'

// Styles
import styles from './Layout.module.css'

/**
 * Layout Component (Site header, site footer, off canvas elements + children)
 */
export default function Layout({ children }: React.PropsWithChildren<{}>) {
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false)
  const [mobileSearchIsActive, setMobileSearchIsActive] = useState(false)
  const [cookieBannerIsActive, setCookieBannerIsActive] = useState(false)

  // Get user cookies info
  const cookies = useCookies()

  // Search input ref for auto focusing
  const searchRef = useRef() as MutableRefObject<HTMLInputElement>

  // Hide/show off canvas mobile navigation menu
  const handleShowMobileNav = () => setMobileNavIsActive(!mobileNavIsActive)

  // Hide/show off canvas mobile search field
  const handleShowMobileSearch = () => {
    setMobileSearchIsActive(!mobileSearchIsActive)
    if (!mobileSearchIsActive) setTimeout(() => searchRef.current.focus(), 100)
  }

  // Hide/show off canvas cookie banner
  const handleShowCookieBanner = () => {
    // Check if user has already set cookies
    const userCookiesSet = localStorage.getItem('user-cookies-set') || 'false'

    // Show cookie banner if user has not set cookies
    if (userCookiesSet === 'false') {
      setCookieBannerIsActive(!cookieBannerIsActive)
    }
  }

  // User cookie preferences
  const handleSetUserCookies = (userAcceptedCookies: boolean) => {
    // Set local storage
    localStorage.setItem('user-accepted-cookies', `${userAcceptedCookies}`)
    localStorage.setItem('user-cookies-set', 'true')

    // Set state
    cookies.setUserAcceptedCookies(userAcceptedCookies)
  }

  // Disable site scrolling when mobile search or navigation is open
  useEffect(() => {
    const attribute =
      mobileNavIsActive || mobileSearchIsActive || cookieBannerIsActive ? 'true' : 'false'
    document.body.setAttribute('data-canvas-shown', attribute)
  })

  return (
    <>
      <Header
        handleShowMobileNav={handleShowMobileNav}
        handleShowMobileSearch={handleShowMobileSearch}
      />
      <OffCanvasNavigation
        mobileNavIsActive={mobileNavIsActive}
        handleShowMobileNav={handleShowMobileNav}
      />
      <OffCanvasSearch
        mobileSearchIsActive={mobileSearchIsActive}
        handleShowMobileSearch={handleShowMobileSearch}
        searchRef={searchRef}
      />
      <CookieBanner
        cookieBannerIsActive={cookieBannerIsActive}
        handleShowCookieBanner={handleShowCookieBanner}
        handleSetUserCookies={handleSetUserCookies}
      />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}
