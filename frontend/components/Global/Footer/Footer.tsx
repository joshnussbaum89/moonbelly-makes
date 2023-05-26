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
          <p>moonbelly makes © {new Date().getFullYear()}</p>
          <p>
            website by{' '}
            <a href="https://joshnussbaumdev.com" target="_blank">
              Josh Nussbaum
            </a>{' '}
            💜
          </p>
        </div>
      </section>
    </footer>
  )
}