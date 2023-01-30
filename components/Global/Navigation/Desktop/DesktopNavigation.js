// Components
import Link from 'next/link'
import Logo from '../../Logo/Logo'
import NavItem from '../NavItem/NavItem'

// Data
import { navigationData } from '../../../../lib/navigationData'

// Styles
import styles from './DesktopNavigation.module.css'

/**
 * DesktopNavigation Component
 *
 * @returns Desktop navigation (menu items, sub navigation modals, site logo)
 */
export default function DesktopNavigation() {
  return (
    <div className={styles.wrapper}>
      {/* Left menu items */}
      <ul className={styles.mainNav}>
        {[navigationData[0], navigationData[1]].map((item) => (
          <NavItem key={item.id} item={item} side="left" />
        ))}
      </ul>
      {/* Logo */}
      <Link href="/">
        <Logo />
      </Link>
      {/* Right menu items */}
      <ul className={styles.mainNav}>
        {[navigationData[2], navigationData[3]].map((item) => (
          <NavItem key={item.id} item={item} side="right" />
        ))}
      </ul>
    </div>
  )
}
