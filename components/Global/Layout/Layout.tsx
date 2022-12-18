import { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import OffCanvasNavigation from '../OffCanvasNavigation/OffCanvasNavigation'
import OffCanvasSearch from '../OffCanvasSearch/OffCanvasSearch'

import styles from './Layout.module.css'

export default function Layout({ children }) {
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false)
  const [mobileSearchIsActive, setMobileSearchIsActive] = useState(false)

  // Hide/show off canvas mobile navigation menu
  const handleShowMobileNav = () => setMobileNavIsActive(!mobileNavIsActive)

  // Hide/show off canvas mobile search field
  const handleShowMobileSearch = () =>
    setMobileSearchIsActive(!mobileSearchIsActive)

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
      />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}
