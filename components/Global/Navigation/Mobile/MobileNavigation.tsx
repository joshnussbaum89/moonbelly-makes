import Link from 'next/link'
import Image from 'next/image'
import { TbMenu2, TbSearch } from 'react-icons/tb'

import logo from '../../../../public/logo.svg'
import styles from './MobileNavigation.module.css'

export default function MobileNavigation({
  handleShowMobileNav,
  handleShowMobileSearch,
}) {
  return (
    <div className={styles.wrapper}>
      {/* Search */}
      <TbSearch onClick={handleShowMobileSearch} />
      {/* Logo */}
      <Link href="/">
        <Image
          src={logo}
          width={770}
          height={256}
          alt="Moonbelly Makes site logo"
          priority
        />
      </Link>
      {/* Hamburger */}
      <TbMenu2 onClick={handleShowMobileNav} />
    </div>
  )
}
