// Components
import Link from 'next/link'
import Logo from '../../Logo/Logo'

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
        <li className={styles.navItem}>
          <Link href="/diys" className={styles.animatedLink}>
            DIYs
          </Link>
          {/* Sub navigation */}
          <ul className={styles.subNav}>
            <li>
              <Link href="/tags/fabric">Fabric</Link>
            </li>
            <li>
              <Link href="/tags/ink">Ink</Link>
            </li>
          </ul>
        </li>
        <li className={styles.navItem}>
          <Link href="/recipes" className={styles.animatedLink}>
            Recipes
          </Link>
          {/* Sub navigation */}
          <ul className={styles.subNav}>
            <li>
              <Link href="/tags/lunch">Lunch</Link>
            </li>
            <li>
              <Link href="/tags/snacks">Snacks</Link>
            </li>
          </ul>
        </li>
      </ul>
      {/* Logo */}
      <Link href="/">
        <Logo />
      </Link>
      {/* Right menu items */}
      <ul className={styles.mainNav}>
        <li className={styles.navItem}>
          <Link href="/bake-off" className={styles.animatedLink}>
            Bake Off
          </Link>
          {/* Sub navigation */}
          <ul className={`${styles.subNav} ${styles.right}`}>
            <li>
              <Link href="/tags/about-my-great-british-baking-project">
                About My Great British Baking Project
              </Link>
            </li>
            <li>
              <Link href="/tags/signature-bakes">Signature Bakes</Link>
            </li>
            <li>
              <Link href="/tags/technical-bakes">Technical Bakes</Link>
            </li>
            <li>
              <Link href="/tags/showstopper-bakes">Showstopper Bakes</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/about" className={styles.animatedLink}>
            About
          </Link>
        </li>
      </ul>
    </div>
  )
}
