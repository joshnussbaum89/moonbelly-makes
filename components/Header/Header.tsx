import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.css'
import logo from '../../public/logo.png'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav>
          <ul>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/recipes">recipes</Link>
            </li>
            <li>
              <Link href="/diys">diys</Link>
            </li>
            <li>
              <Link href="/bake-off">bake off</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
          </ul>
        </nav>
        <Image
          src={logo}
          width={1102}
          height={476}
          alt="Moonbelly Makes site logo"
          priority
        />
        {/* TODO */}
        <div>Nav Icons</div>
      </div>
    </header>
  )
}
