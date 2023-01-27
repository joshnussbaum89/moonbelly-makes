// Components
import Link from 'next/link'
import Image from 'next/image'
import { TbMenu2, TbSearch } from 'react-icons/tb'

// Styles
import logo from '../../../../public/logo.svg'
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
        <Image
          src={logo}
          width={385}
          height={128}
          alt="Moonbelly Makes site logo"
          priority
        />
      </Link>
      <TbMenu2 onClick={handleShowMobileNav} />
    </div>
  )
}
