import Image from 'next/image'
import SocialIcons from '../SocialIcons/SocialIcons'

import logo from '../../../public/logo.svg'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src={logo}
        width={770}
        height={256}
        alt="Moonbelly Makes site logo"
        priority
      />
      <SocialIcons darkMode={true} />
      <p>created and maintained by moonbelly makes © 2022</p>
    </footer>
  )
}
