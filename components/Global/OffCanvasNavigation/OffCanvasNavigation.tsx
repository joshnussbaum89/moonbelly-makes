import Link from 'next/link'
import { TbX } from 'react-icons/tb'

import styles from './OffCanvasNavigation.module.css'

export default function OffCanvasNavigation({
  handleShowMobileNav,
  mobileNavIsActive,
}) {
  return (
    <div
      className={
        mobileNavIsActive
          ? `${styles.container} ${styles.active}`
          : styles.container
      }
    >
      <ul className={styles.mainNav}>
        <li className={styles.navItem}>
          <Link href="/diys" onClick={handleShowMobileNav}>
            DIYs
          </Link>
          {/* Sub navigation */}
          <ul className={styles.subNav}>
            <li>
              <Link href="/tags/fabric" onClick={handleShowMobileNav}>
                Fabric
              </Link>
            </li>
            <li>
              <Link href="/tags/ink" onClick={handleShowMobileNav}>
                Ink
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.navItem}>
          <Link href="/recipes" onClick={handleShowMobileNav}>
            Recipes
          </Link>
          {/* Sub navigation */}
          <ul className={styles.subNav}>
            <li>
              <Link href="/tags/lunch" onClick={handleShowMobileNav}>
                Lunch
              </Link>
            </li>
            <li>
              <Link href="/tags/snacks" onClick={handleShowMobileNav}>
                Snacks
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.navItem}>
          <Link href="/bake-off" onClick={handleShowMobileNav}>
            Bake Off
          </Link>
          {/* Sub navigation */}
          <ul className={`${styles.subNav} ${styles.right}`}>
            <li>
              <Link
                href="/tags/about-my-great-british-baking-project"
                onClick={handleShowMobileNav}
              >
                About My Great British Baking Project
              </Link>
            </li>
            <li>
              <Link href="/tags/signature-bakes" onClick={handleShowMobileNav}>
                Signature Bakes
              </Link>
            </li>
            <li>
              <Link href="/tags/technical-bakes" onClick={handleShowMobileNav}>
                Technical Bakes
              </Link>
            </li>
            <li>
              <Link
                href="/tags/showstopper-bakes"
                onClick={handleShowMobileNav}
              >
                Showstopper Bakes
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.navItem}>
          <Link href="/about" onClick={handleShowMobileNav}>
            About
          </Link>
        </li>
      </ul>
      <TbX onClick={handleShowMobileNav} />
    </div>
  )
}
