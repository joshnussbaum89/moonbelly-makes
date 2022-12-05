import Image from 'next/image'
import Link from 'next/link'
import {
  TbBrandYoutube,
  TbBrandInstagram,
  TbBrandTiktok,
  TbSearch,
} from 'react-icons/tb'

import styles from './Header.module.css'
import logo from '../../public/logo.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarSearch}>
          <input type="search" name="search" id="search" />
          <TbSearch />
        </div>
        <div className={styles.topBarIcons}>
          <TbBrandYoutube />
          <TbBrandInstagram />
          <TbBrandTiktok />
        </div>
      </div>
      <nav className={styles.nav}>
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
      </nav>
    </header>
  )
}
