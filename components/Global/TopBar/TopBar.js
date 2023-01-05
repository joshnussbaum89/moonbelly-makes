import TopBarSearch from '../TopBarSearch/TopBarSearch'
import SocialIcons from '../SocialIcons/SocialIcons'

import styles from './TopBar.module.css'

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <TopBarSearch />
      <SocialIcons />
    </div>
  )
}
