// Components
import AboutKatrina from '../AboutKatrina/AboutKatrina'
import SubscribeDesktop from '../SubscribeDesktop/SubscribeDesktop'
import SubscribeMobile from '../SubscribeMobile/SubscribeMobile'

// Styles
import styles from './SideBar.module.css'

/**
 * Subribe and About information -- mobile and desktop
 */
export default function SideBar() {
  return (
    <aside className={styles.aside}>
      <div className={styles.mobile}>
        <SubscribeMobile />
        <AboutKatrina />
      </div>
      <div className={styles.desktop}>
        <SubscribeDesktop />
        <AboutKatrina />
      </div>
    </aside>
  )
}
