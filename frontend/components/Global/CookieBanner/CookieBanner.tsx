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

  return (
    <div
      className={cookieBannerIsActive ? `${styles.container} ${styles.active}` : styles.container}
    >
      <TbX className={styles.close} onClick={handleCookies} data-cookies="accept" />
      <h3>We Value Your Privacy</h3>
      <p>
        We use cookies to enhance your browsing experience and analyze website traffic. By clicking
        &quot;Accept Cookies,&quot; you consent to the use of cookies for third-party services such
        as YouTube embeds. We also use cookies to personalize content and ads. You can manage your
        cookie preferences by clicking &quot;Reject Cookies.&quot;
      </p>
      <a href="https://policies.google.com/technologies/partner-sites" target="_blank">
        Read more about how cookies are used on this site
      </a>
      <div className={styles.buttonContainer}>
        <button onClick={handleCookies} data-cookies="reject">
          Reject Cookies
        </button>
        <button onClick={handleCookies} data-cookies="accept">
          Accept Cookies
        </button>
      </div>
    </div>
  )
}
