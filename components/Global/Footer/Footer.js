// Components
import Logo from '../Logo/Logo'
import SocialIcons from '../SocialIcons/SocialIcons'

// Styles
import styles from './Footer.module.css'

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
        <Logo />
        <SocialIcons darkMode={true} />
        <p>
          created and maintained by moonbelly makes © {new Date().getFullYear()}
        </p>
      </section>
    </footer>
  )
}
