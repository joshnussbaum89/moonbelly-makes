// Components
import Link from 'next/link'
import Logo from '../Logo/Logo'
import SocialIcons from '../SocialIcons/SocialIcons'

// Styles
import styles from './Footer.module.css'

/**
 * Footer to be displayed on every page
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.info}>
        <Link href="/" aria-label="Moonbelly Logo">
          <Logo />
        </Link>
        <SocialIcons darkMode={true} />
        <p>moonbelly makes © {new Date().getFullYear()}</p>
      </section>
    </footer>
  )
}
