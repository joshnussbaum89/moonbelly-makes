import { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import OffCanvasNavigation from '../OffCanvasNavigation/OffCanvasNavigation'

import styles from './Layout.module.css'

export default function Layout({ children }) {
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false)

  // Hide/show off canvas mobile navigation menu
  const handleShowMobileNav = () => setMobileNavIsActive(!mobileNavIsActive)

  // Disable site scrolling when mobile nav is open
  useEffect(() => {
    const attribute = mobileNavIsActive ? 'true' : 'false'
    document.body.setAttribute('data-canvas-shown', attribute)
  })

  return (
    <>
      <Header handleShowMobileNav={handleShowMobileNav} />
      <OffCanvasNavigation
        handleShowMobileNav={handleShowMobileNav}
        mobileNavIsActive={mobileNavIsActive}
      />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}
