// Hookes, Components
import Link from 'next/link'
import { useState } from 'react'
import { TbChevronDown } from 'react-icons/tb'

// Styles
import styles from './NavItem.module.css'

/**
 * Mobile NavItem component for off canvas navigation (with sub navigation)
 */
export default function NavItem({ item, handleShowMobileNav }: NavItemProps) {
  const [subNavIsShown, setSubNavIsShown] = useState(false)

  // Handle hide/show sub navigation
  const handleShowSubNav = () => setSubNavIsShown(!subNavIsShown)

  // When a menu item is selected, hide navigation
  const handleSelectMenuItem = () => {
    handleShowMobileNav()
    setSubNavIsShown(false)
  }

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
        <Link href={item.href} onClick={handleSelectMenuItem}>
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
              <Link href={subNavItem.href} onClick={handleSelectMenuItem}>
                {subNavItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

// Types
interface NavItemProps {
  item: Item
  handleShowMobileNav: () => void
}

type Item =
  | {
      id: number
      title: string
      href: string
      subNav: {
        id: number
        title: string
        href: string
      }[]
    }
  | {
      id: number
      title: string
      href: string
      subNav: null
    }
