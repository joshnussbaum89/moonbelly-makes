import { useState } from 'react'
import Link from 'next/link'
import SocialIcons from '../SocialIcons/SocialIcons'
import { TbChevronDown, TbX } from 'react-icons/tb'

import styles from './OffCanvasNavigation.module.css'

// TODO: break out into seperate components, needs to be dynamic => map through data and create <NavItem />
export default function OffCanvasNavigation({
  mobileNavIsActive,
  handleShowMobileNav,
}) {
  const [subNavOneIsShown, setSubNavOneIsShown] = useState(false)
  const [subNavTwoIsShown, setSubNavTwoIsShown] = useState(false)
  const [subNavThreeIsShown, setSubNavThreeIsShown] = useState(false)

  // Handle hide/show sub navigation
  const handleShowSubNavOne = () => setSubNavOneIsShown(!subNavOneIsShown)
  const handleShowSubNavTwo = () => setSubNavTwoIsShown(!subNavTwoIsShown)
  const handleShowSubNavThree = () => setSubNavThreeIsShown(!subNavThreeIsShown)

  // Canvas container styles
  const canvasContainerStyles = mobileNavIsActive
    ? `${styles.offCanvasContainer} ${styles.active}`
    : styles.offCanvasContainer

  // Chevron styles
  const subNavOneArrowStyles = subNavOneIsShown
    ? `${styles.arrow} ${styles.active}`
    : styles.arrow
  const subNavTwoArrowStyles = subNavTwoIsShown
    ? `${styles.arrow} ${styles.active}`
    : styles.arrow
  const subNavThreeArrowStyles = subNavThreeIsShown
    ? `${styles.arrow} ${styles.active}`
    : styles.arrow

  // Sub navigation styles
  const subNavOneStyles = subNavOneIsShown
    ? `${styles.subNav} ${styles.active}`
    : styles.subNav
  const subNavTwoStyles = subNavTwoIsShown
    ? `${styles.subNav} ${styles.active}`
    : styles.subNav
  const subNavThreeStyles = subNavThreeIsShown
    ? `${styles.subNav} ${styles.active}`
    : styles.subNav

  return (
    <div className={canvasContainerStyles}>
      <div className={styles.wrapper}>
        <ul>
          <li className={styles.navItem}>
            <div>
              <Link href="/diys" onClick={handleShowMobileNav}>
                DIYs
              </Link>
              <TbChevronDown
                className={subNavOneArrowStyles}
                onClick={handleShowSubNavOne}
              />
            </div>
            {/* Sub navigation */}
            <ul className={subNavOneStyles}>
              <li>
                <Link href="/tags/fabric" onClick={handleShowMobileNav}>
                  Fabric
                </Link>
              </li>
              <li>
                <Link href="/tags/ink" onClick={handleShowMobileNav}>
                  Ink
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <div>
              <Link href="/recipes" onClick={handleShowMobileNav}>
                Recipes
              </Link>
              <TbChevronDown
                className={subNavTwoArrowStyles}
                onClick={handleShowSubNavTwo}
              />
            </div>
            {/* Sub navigation */}
            <ul className={subNavTwoStyles}>
              <li>
                <Link href="/tags/lunch" onClick={handleShowMobileNav}>
                  Lunch
                </Link>
              </li>
              <li>
                <Link href="/tags/snacks" onClick={handleShowMobileNav}>
                  Snacks
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <div>
              <Link href="/bake-off" onClick={handleShowMobileNav}>
                Bake Off
              </Link>
              <TbChevronDown
                className={subNavThreeArrowStyles}
                onClick={handleShowSubNavThree}
              />
            </div>
            {/* Sub navigation */}
            <ul className={subNavThreeStyles}>
              <li>
                <Link
                  href="/tags/about-my-great-british-baking-project"
                  onClick={handleShowMobileNav}
                >
                  About My Great British Baking Project
                </Link>
              </li>
              <li>
                <Link
                  href="/tags/signature-bakes"
                  onClick={handleShowMobileNav}
                >
                  Signature Bakes
                </Link>
              </li>
              <li>
                <Link
                  href="/tags/technical-bakes"
                  onClick={handleShowMobileNav}
                >
                  Technical Bakes
                </Link>
              </li>
              <li>
                <Link
                  href="/tags/showstopper-bakes"
                  onClick={handleShowMobileNav}
                >
                  Showstopper Bakes
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <div>
              <Link href="/about" onClick={handleShowMobileNav}>
                About
              </Link>
            </div>
          </li>
        </ul>
        {/* Close navigation icon */}
        <TbX className={styles.close} onClick={handleShowMobileNav} />
      </div>
      <div className={styles.socialIcons}>
        <SocialIcons darkMode={true} />
      </div>
    </div>
  )
}
