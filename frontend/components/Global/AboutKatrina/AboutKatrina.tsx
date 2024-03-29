// Components
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCookies } from '../../../hooks/useCookies'
import WidgetTitle from '../WidgetTitle/WidgetTitle'
import AdBanner from '../AdBanner/AdBanner'

// Styles
import styles from './AboutKatrina.module.css'

// Images
import katrinaHeadshot from '../../../public/katrina-headshot.png'

/**
 * About Katrina section for the side panel
 */
export default function AboutKatrina() {
  const router = useRouter()
  const currentPath = router.pathname
  const cookies = useCookies()

  return (
    <div className={styles.container} data-path={currentPath}>
      <div className={styles.aboutKatrina}>
        <WidgetTitle titleCopy="About Katrina" />
        <Image
          src={katrinaHeadshot}
          className={styles.headshot}
          quality={100}
          sizes="50vw"
          placeholder="blur"
          alt="Katrina headshot"
        />
        <p>
          <em>Hello you!</em> Welcome to Moonbelly Makes, the virtual vessel for sharing my homemade
          projects, both from the craft studio and from the kitchen! Feel free to explore the
          website, find me on Instagram or Pinterest (@moonbellymakes), join the newsletter, and
          check out the YouTube for more.
        </p>
        <p>
          I create as an act of healing, connection, expression, and energetic exchange.{' '}
          <em>I make to know who I am.</em>
        </p>
        <p>Thank you for visiting, I really love that you&apos;re here!</p>
        <p>
          <strong>💖, Katrina</strong>
        </p>
      </div>
      <div className={styles.aboutKatrinaInfo}>
        <WidgetTitle titleCopy="About Moonbelly" />
        <p>
          There are three tenderly held intentions that steer Moonbelly: to know myself and the
          world better through the process of making and sharing, to foster and nurture a powerful
          connection between myself as a human and the rest of nature, and to bask in this abundant,
          rich, beautiful, magnificent, and magical existence.
        </p>
        <p>
          Above all, through the projects I share here I strive to find ways to support my main aim:
        </p>
        <p>
          <strong>to live a decorated life.</strong> ✨
        </p>
      </div>
      {cookies.userAcceptedCookies && <AdBanner dataAdSlot="2564114503" />}
    </div>
  )
}
