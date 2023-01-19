// Components
import Image from 'next/image'
import SocialIcons from '../SocialIcons/SocialIcons'

// Styles
import styles from './Footer.module.css'

// Images
import logo from '../../../public/logo.svg'

/**
 * Footer Component
 *
 * @returns Footer to be displayed on every page
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* TODO */}
      {/* <section className={styles.instagram}></section> */}
      <section className={styles.info}>
        <Image
          src={logo}
          width={770}
          height={256}
          alt="Moonbelly Makes site logo"
          priority
        />
        <SocialIcons darkMode={true} />
        <p>
          created and maintained by moonbelly makes © {new Date().getFullYear()}
        </p>
      </section>
    </footer>
  )
}
