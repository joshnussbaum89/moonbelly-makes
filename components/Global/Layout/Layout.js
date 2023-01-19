// Hooks, Components
import { useEffect, useRef, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import OffCanvasNavigation from '../OffCanvasNavigation/OffCanvasNavigation'
import OffCanvasSearch from '../OffCanvasSearch/OffCanvasSearch'

// Styles
import styles from './Layout.module.css'

/**
 * Layout Component
 *
 * @param {object} children
 * @returns Site header, site footer, off canvas elements + children
 */
export default function Layout({ children }) {
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false)
  const [mobileSearchIsActive, setMobileSearchIsActive] = useState(false)

  // Search input ref for auto focusing
  const searchRef = useRef(null)

  // Hide/show off canvas mobile navigation menu
  const handleShowMobileNav = () => setMobileNavIsActive(!mobileNavIsActive)

  // Hide/show off canvas mobile search field
  const handleShowMobileSearch = () => {
    setMobileSearchIsActive(!mobileSearchIsActive)
    setTimeout(() => searchRef.current.focus(), 50)
  }

  // Disable site scrolling when mobile search or navigation is open
  useEffect(() => {
    const attribute =
      mobileNavIsActive || mobileSearchIsActive ? 'true' : 'false'
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
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}
