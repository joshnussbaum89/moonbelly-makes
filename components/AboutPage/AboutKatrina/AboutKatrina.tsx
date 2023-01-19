// Components
import Image from 'next/image'

// Styles
import styles from './AboutKatrina.module.css'

// Images
import katrinaHeadshot from '../../../public/katrina-headshot.png'

/**
 * About page content
 */
export default function AboutKatrina() {
  return (
    <section className={styles.container}>
      <div className={styles.katrinaContainer}>
        <Image
          className={styles.headshot}
          src={katrinaHeadshot}
          width={500}
          height={500}
          sizes="(min-width: 768px) 50vw, 100vw"
          alt="Katrina Atkin headshot"
        />
        <h3>Katrina Quick Facts</h3>
        <div className={styles.quickFacts}>
          <ul>
            <li>I share life with my wonderful husband, Josh</li>
            <li>We live with our ridiculous cats, Jack and Pete</li>
            <li>I am obsessed with produce, especially vegetables</li>
            <li>I am younger than my sewing machine</li>
            <li>I have a degree in Dance Performance</li>
            <li>I enjoy yoga and day hikes</li>
            <li>I am a Libra sun, Pisces moon, and Scorpio rising</li>
            <li>I will choose cheesecake over regular cake any day</li>
            <li>I live between two gorgeous lakes in the upper Midwest</li>
            <li>
              I love Tarot (current frequent pulls are Temperance, Queen of
              Pentacles, and 3 of Swords)
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <h3>Welcome to Moonbelly makes…</h3>
        <h4>…the online container for my homemade projects!</h4>
        <p>
          The philosophies that drive Moonbelly start with the aim to live an
          abundant, rich, and magnificent existence. It is important to me to
          feed my body, eyes, and heart with magic and beauty. The phrase
          <em> decorate your life </em>serves as a compass needle that reminds
          me to approach projects and practices with integrity and care.
        </p>
        <p>
          For me, a connection with nature is vital, so I am always searching
          for new methods of bringing the natural, outside world into my inside
          world; both into my home by incorporating natural elements and themes
          into my projects, and into my body with delicious, nutrient rich,
          dishes that feel like a soul-hug.
        </p>
        <p>
          I create as an act of healing, output, expression, and energy
          exchange. And I think (for me at least) making might just be the
          meaning of life 😊
        </p>
        <p>
          Feel free to explore the website, leave a comment, join the
          newsletter, and check out my YouTube for more!
        </p>
        <p className={styles.heavyText}>Thank you for visiting! I love you!</p>
        <p className={styles.heavyText}>
          xo,
          <span className={styles.italicText}> Katrina</span>
        </p>
      </div>
    </section>
  )
}
