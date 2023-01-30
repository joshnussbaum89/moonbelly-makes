// Hookes, Components
import { useState } from 'react'
import Link from 'next/link'
import { TbChevronDown } from 'react-icons/tb'

// Styles
import styles from './NavItem.module.css'

/**
 * Mobile NavItem component for off canvas navigation (with sub navigation)
 *
 * @param {object} item
 * @param {function} handleShowMobileNav
 */
export default function NavItem({ item, handleShowMobileNav }) {
  const [subNavIsShown, setSubNavIsShown] = useState(false)

  // Handle hide/show sub navigation
  const handleShowSubNav = () => setSubNavIsShown(!subNavIsShown)

  // Chevron styles
  const subNavArrowStyles = subNavIsShown
    ? `${styles.arrow} ${styles.active}`
    : styles.arrow

  // Sub navigation styles
  const subNavStyles = subNavIsShown
    ? `${styles.subNav} ${styles.active}`
    : styles.subNav

  return (
    <li className={styles.navItem}>
      <div>
        <Link href={item.href} onClick={handleShowMobileNav}>
          {item.title}
        </Link>
        {item.subNav && (
          <div className={subNavArrowStyles} onClick={handleShowSubNav}>
            <TbChevronDown />
          </div>
        )}
      </div>
      {item.subNav && (
        <ul className={subNavStyles}>
          {item.subNav.map((subNavItem) => (
            <li key={subNavItem.id}>
              <Link href={subNavItem.href} onClick={handleShowMobileNav}>
                {subNavItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
