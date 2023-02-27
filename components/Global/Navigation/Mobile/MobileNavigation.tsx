// Components
import Link from 'next/link'
import { TbMenu2, TbSearch } from 'react-icons/tb'
import Logo from '../../Logo/Logo'

// Styles
import styles from './MobileNavigation.module.css'

// Types
import { NavigationProps } from '../Navigation'

/**
 * Mobile navigation (search icon, site logo, hamburger icon)
 */
export default function MobileNavigation({
  handleShowMobileNav,
  handleShowMobileSearch,
}: NavigationProps) {
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
