// Components
import { useEffect } from 'react'
import { TbX } from 'react-icons/tb'
import SocialIcons from '../SocialIcons/SocialIcons'
import NavItem from './NavItem/NavItem'

// Data
import { navigationData } from '../../../lib/navigationData'

// Styles
import styles from './OffCanvasNavigation.module.css'

/**
 * OffCanvasNavigation Component (hidden until active)
 */
export default function OffCanvasNavigation({
  mobileNavIsActive,
  handleShowMobileNav,
}: OffCanvasNavigationProps) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const eventTarget = event.target as HTMLElement
      const eventTargetIsCanvas = eventTarget !== document.querySelector('body')
      if (mobileNavIsActive && !eventTargetIsCanvas) {
        handleShowMobileNav()
      }
    }

    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [mobileNavIsActive])

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

// Types
interface OffCanvasNavigationProps {
  mobileNavIsActive: boolean
  handleShowMobileNav: () => void
}
