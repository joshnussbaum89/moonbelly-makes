import Image from 'next/image'
import Link from 'next/link'
import { TbSearch, TbMenu2 } from 'react-icons/tb'

import styles from './Navigation.module.css'
import logo from '../../../public/logo.svg'

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={`${styles.wrapper} ${styles.navigationMobile}`}>
        <TbSearch />
        <Link href="/">
          <Image
            src={logo}
            width={770}
            height={256}
            alt="Moonbelly Makes site logo"
            priority
          />
        </Link>
        <TbMenu2 />
      </div>
      <div className={`${styles.wrapper} ${styles.navigationDesktop}`}>
        <ul>
          <li>
            <Link href="/diys">DIYs</Link>
          </li>
          <li>
            <Link href="/recipes">Recipes</Link>
          </li>
        </ul>
        <Link href="/">
          <Image
            src={logo}
            width={770}
            height={256}
            alt="Moonbelly Makes site logo"
            priority
          />
        </Link>
        <ul>
          <li>
            <Link href="/bake-off">Bake Off</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
