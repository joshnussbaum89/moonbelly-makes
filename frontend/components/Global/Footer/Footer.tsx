// Components
import Link from 'next/link'
import SeeMoreContent from '../SeeMoreContent/SeeMoreContent'
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
      <SeeMoreContent />
      <section className={styles.info}>
        <Link href="/" aria-label="Moonbelly Logo">
          <Logo />
        </Link>
        <SocialIcons darkMode={true} />
        <div>
          <p>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
          <p>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </p>
          <p>Moonbelly Makes © {new Date().getFullYear()}</p>
          <p>
            Website by{' '}
            <a href="https://wavelandweb.com" target="_blank">
              Wave Land Web
            </a>{' '}
            💜
          </p>
        </div>
      </section>
    </footer>
  )
}
