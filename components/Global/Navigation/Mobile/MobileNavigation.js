// Components
import Link from 'next/link'
import { TbMenu2, TbSearch } from 'react-icons/tb'
import Logo from '../../Logo/Logo'

// Styles
import styles from './MobileNavigation.module.css'

/**
 * MobileNavigation Component
 *
 * @param {function} handleShowMobileNav
 * @param {function} handleShowMobileSearch
 * @returns Mobile navigation (search icon, site logo, hamburger icon)
 */
export default function MobileNavigation({
  handleShowMobileNav,
  handleShowMobileSearch,
}) {
  return (
    <div className={styles.wrapper}>
      <TbSearch onClick={handleShowMobileSearch} />
      <Link href="/">
        <Logo />
      </Link>
      <TbMenu2 onClick={handleShowMobileNav} />
    </div>
  )
}
