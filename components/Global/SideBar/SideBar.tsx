// Components
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AboutKatrina from '../AboutKatrina/AboutKatrina'
import SubscribeDesktop from '../SubscribeDesktop/SubscribeDesktop'
import SubscribeMobile from '../SubscribeMobile/SubscribeMobile'

// Styles
import styles from './SideBar.module.css'

/**
 * Subribe and About information -- mobile and desktop
 */
export default function SideBar() {
  const [isSticky, setIsSticky] = useState(false)
  const [sidebarTop, setSidebarTop] = useState(0)

  // Connect to next router
  const router = useRouter()

  // Get current path
  const currentPath = router.pathname

  // Set sidebar top position
  useEffect(() => {
    // IF current path is not a post > return
    if (!currentPath.includes('posts')) return

    setIsSticky(true)

    if (typeof window !== 'undefined') {
      const sidebarEl = document
        .querySelector('[data-element="aside"]')
        ?.getBoundingClientRect() as DOMRect

      setSidebarTop(sidebarEl.top)
    }
  }, [])

  // Add scroll event listener
  useEffect(() => {
    // IF user hasn't yet scrolled or current path is not a post > return
    if (!sidebarTop || !currentPath.includes('posts')) return

    window.addEventListener('scroll', handleIsSticky)
    return () => {
      window.removeEventListener('scroll', handleIsSticky)
    }
  }, [sidebarTop])

  // Handle sticky sidebar
  const handleIsSticky = () => {
    const scrollTop = window.scrollY

    if (scrollTop >= sidebarTop - 36) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  return (
    <aside
      data-element="aside"
      className={isSticky ? `${styles.aside} ${styles.isSticky}` : styles.aside}
    >
      <div className={styles.mobile}>
        <SubscribeMobile />
        <AboutKatrina />
      </div>
      <div className={styles.desktop}>
        <SubscribeDesktop />
        <AboutKatrina />
      </div>
    </aside>
  )
}
