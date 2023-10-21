import { useEffect } from 'react'
import { TbX } from 'react-icons/tb'
import styles from './CookieBanner.module.css'

interface CookieBannerProps {
  cookieBannerIsActive: boolean
  handleShowCookieBanner: () => void
  handleSetUserCookies: (userAcceptedCookies: boolean) => void
}

export default function CookieBanner({
  cookieBannerIsActive,
  handleShowCookieBanner,
  handleSetUserCookies,
}: CookieBannerProps) {
  // Show cookie banner on page load
  useEffect(() => {
    setTimeout(handleShowCookieBanner, 100)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCookies = (e: React.MouseEvent<SVGElement | HTMLButtonElement, MouseEvent>) => {
    handleShowCookieBanner()

    // Cookies are always accepted unless user rejects them
    if (e.currentTarget.getAttribute('data-cookies') === 'reject') {
      handleSetUserCookies(false)
    } else {
      handleSetUserCookies(true)
    }
  }

  // TODO: add "personalized ads" to cookie banner once they are implemented

  return (
    <div
      className={cookieBannerIsActive ? `${styles.container} ${styles.active}` : styles.container}
    >
      <TbX className={styles.close} onClick={handleCookies} data-cookies="accept" />
      <h3>We Value Your Privacy</h3>
      <p>
        By remaining on this site, you consent to the use of cookies for third-party services such
        as YouTube embeds and affiliate marketing. If you do not consent, please navigate away from
        this site.
      </p>
      <a href="https://policies.google.com/technologies/partner-sites" target="_blank">
        Read more about how cookies are used on this site
      </a>
      <div className={styles.buttonContainer}>
        <button onClick={handleCookies} data-cookies="accept">
          Accept Cookies
        </button>
      </div>
    </div>
  )
}
