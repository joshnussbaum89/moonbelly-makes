// Components
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AboutKatrina from '../AboutKatrina/AboutKatrina'
import SubscribeDesktop from '../SubscribeDesktop/SubscribeDesktop'
import SubscribeMobile from '../Subscribe/Subscribe'

// Styles
import styles from './SideBar.module.css'

/**
 * Subribe and About information -- mobile and desktop
 */
export default function SideBar() {
  const [isSticky, setIsSticky] = useState(false)

  // Connect to next router
  const router = useRouter()

  // Get current path
  const currentPath = router.pathname

  // Set sidebar top position
  useEffect(() => {
    // IF current path is not a post > return
    if (!currentPath.includes('posts')) return

    // IF user is on a post > make sidebar sticky
    setIsSticky(true)
  }, [currentPath])

  return (
    <aside className={isSticky ? `${styles.aside} ${styles.isSticky}` : styles.aside}>
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
