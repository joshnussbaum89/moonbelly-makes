import Image from 'next/image'

import styles from './AboutKatrina.module.css'
import katrinaHeadshot from '../../../public/katrina-headshot.png'
import katrinaSignature from '../../../public/katrina-signature.png'

export default function AboutKatrina() {
  return (
    <aside className={styles.aside}>
      <h4>About Katrina</h4>
      <Image
        src={katrinaHeadshot}
        className={styles.headshot}
        alt="Katrina Atkin headshot"
      />
      <p>
        Welcome to Moonbelly Makes, the online container for my homemade
        projects! Feel free to explore the website, join the newsletter, or
        check out the YouTube for more! I&apos;m so glad you&apos;re here!
      </p>
      <Image
        src={katrinaSignature}
        className={styles.signature}
        alt="Katrina Atkin signature"
      />
      <h4>About Moonbelly</h4>
      <h5 className={styles.subHeader}>Decorate Your Life</h5>
      <p>
        Moonbelly is driven by the aim to live an abundant, rich, beautiful,
        magnificent, and magical existence. The phrase *decorate your life*
        serves as a compass needle that reminds me to approach projects and
        practices with integrity and care. And I think (for me at least) making
        things just might be the meaning of life 😊
      </p>
    </aside>
  )
}
