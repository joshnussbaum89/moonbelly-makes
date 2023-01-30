// Components
import { TbX } from 'react-icons/tb'
import SocialIcons from '../SocialIcons/SocialIcons'
import NavItem from './NavItem/NavItem'

// Data
import { navigationData } from '../../../lib/navigationData'

// Styles
import styles from './OffCanvasNavigation.module.css'

/**
 * OffCanvasNavigation Component (hidden until active)
 *
 * @param {boolean} mobileNavIsActive
 * @param {function} handleShowMobileNav
 */
export default function OffCanvasNavigation({
  mobileNavIsActive,
  handleShowMobileNav,
}) {
  // Canvas container styles
  const canvasContainerStyles = mobileNavIsActive
    ? `${styles.offCanvasContainer} ${styles.active}`
    : styles.offCanvasContainer

  return (
    <div className={canvasContainerStyles}>
      <div className={styles.wrapper}>
        <ul>
          {navigationData.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              handleShowMobileNav={handleShowMobileNav}
            />
          ))}
        </ul>
        <TbX className={styles.close} onClick={handleShowMobileNav} />
      </div>
      <div className={styles.socialIcons}>
        <SocialIcons darkMode={true} />
      </div>
    </div>
  )
}
