// Components, hooks
import Image from 'next/image'
import Link from 'next/link'
import { useCookies } from '../../../hooks/useCookies'

// Styles
import styles from './AboutKatrina.module.css'

// Images
import katrinaHeadshot from '../../../public/katrina-headshot.png'
import katrinaDancing from '../../../public/katrina-dancing.webp'
import spiralIcon from '../../../public/spiral-icon.webp'

/**
 * About page content
 */
export default function AboutKatrina() {
  // User cookie global state
  const cookies = useCookies()

  return (
    <section className={styles.wrapper}>
      <p className={styles.greeting}>
        <strong>
          <em>Hello you!</em> Welcome to Moonbelly Makes, the virtual vessel for sharing my homemade
          projects!
        </strong>
      </p>
      <div className={styles.mainContentContainer}>
        <div className={styles.description}>
          <p>
            Here you can find <Link href={`/diys`}>DIYs</Link> (mostly with fabric),{' '}
            <Link href={`/recipes`}>recipes</Link> (mostly with vegetables), and a very “great”{' '}
            <Link href={`/bake-off`}>British baking project</Link>. Basically, any project that I am
            working on ends up here, to share and to archive. And if you prefer to enjoy video, I
            have that for you too{' '}
            <a
              href="https://www.youtube.com/@moonbellymakes"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              here
            </a>
            .
          </p>
          <p>
            Feel free to explore the website, find me on Instagram or Pinterest (@moonbellymakes),
            join the newsletter, and check out the YouTube for more!
          </p>
          <p>
            The making of things and doing of projects is a spiritual practice for me, so if you
            want to know more about me and my philosophy, please do read on…
          </p>
        </div>
        <div className={styles.headshot}>
          <Image
            src={katrinaHeadshot}
            sizes="(min-width: 768px) 50vw, 100vw"
            quality={100}
            placeholder="blur"
            alt="Katrina headshot"
          />
        </div>
        <div className={styles.quickFacts}>
          <h2>Katrina Quick Facts</h2>
          <ul>
            <li>I share life with my wonderful husband, Josh</li>
            <li>We live with our ridiculous cats, Jack and Pete</li>
            <li>I am obsessed with produce, especially vegetables</li>
            <li>I am younger than my sewing machine</li>
            <li>I have a degree in Dance Performance</li>
            <li>I enjoy yoga and day hikes</li>
            <li>I am a Libra sun, Pisces moon, and Scorpio rising</li>
            <li>I will choose cheesecake over regular cake any day</li>
            <li>I live between two gorgeous lakes in Wisconsin</li>
            <li>
              I love Tarot (current frequent pulls are Temperance, King of Pentacles, and Ace of
              Wands)
            </li>
          </ul>
        </div>
        <div className={styles.philosophy}>
          <h2>Philosophy</h2>
          <p>
            The project of Moonbelly Makes emerges from a turning and tuning into the closeness I
            have felt to the process of making for my whole life. The urge and inspiration to create
            comes from a deep and wise place that I do not understand and therefore cannot explain,
            but I have always found more of myself within my projects: choreographing, sewing,
            crocheting, cooking, baking, writing, creating installation art and stop motion films
            and furniture, etc etc etc. These projects emerge into this reality as a bridge that
            teaches me something about the world and about myself, that connects me with others and
            grounds my being. (Both within process and when being witnessed, I practice opening my
            ears and mind and heart to the truth, in whatever way it chooses to show up for me.)
          </p>
          <p>•••</p>
          <p>
            Another massive piece that drives my making in general and Moonbelly specifically is a
            purposeful attempt to challenge societal understandings that suggest we as humans are
            somehow outside of and made of different stuff than the rest of nature. In practice,
            that looks like blurring the line between NATURE and ME - seeking out new ways to bring
            the natural, <em>outside</em> world into my <em>inside</em> world; both into my home by
            incorporating natural materials and themes into my projects, and into my body with
            delicious and nutrient rich dishes that work to respect and honor the land, people, and
            animals that nourish me, and my family and friends.
          </p>
        </div>
      </div>
      <div>
        <div className={styles.intention}>
          <p>
            Ultimately, the energy that drives Moonbelly is a tenderly held intention to bask in
            this abundant, rich, beautiful, magnificent, and magical existence.
          </p>
          <p>Through the projects I share here, I strive to find ways to support my main aim:</p>
          <p>
            <strong>to live a decorated life.</strong> 🌷
          </p>
        </div>
        <div className={`${styles.spiralText}`}>
          <p>
            Looking up to the{' '}
            <span>
              <strong>moon</strong>
            </span>
            , I am reminded of the cosmic vastness we are inherently a part of and speeding through
            at nearly 1.3 million mph. I am a blip of consciousness in a sea of possibility…
          </p>
          <p>
            Looking down to my own{' '}
            <span>
              <strong>belly</strong>
            </span>{' '}
            , I am reminded that <span>I AM HERE</span> in this body experiencing all of this
            inexplicable richness. It is with this body and these hands that I alchemize my thoughts
            into creations that can be seen, felt, and heard…
          </p>
          <Image src={spiralIcon} sizes="50vw" placeholder="blur" alt="Swirling spiral icon" />
        </div>
        <div className={styles.signatureContainer}>
          <div className={styles.signature}>
            <strong>
              <p>
                Making for me is an act of healing, connection, expression, and energetic exchange.
              </p>
              <p>
                <em>I make to know who I am. </em>✨
              </p>
              <p>
                I really love that you’re here sharing this with me. I hope you have a beautiful
                rest of your day, and thank you for visiting!
              </p>
              <p>💖, Katrina</p>
            </strong>
          </div>
          <Image
            src={katrinaDancing}
            sizes="(min-width: 768px) 50vw, 100vw"
            placeholder="blur"
            alt="Katrina Atkin dancing in the park"
          />
        </div>
        {cookies.userAcceptedCookies && (
          <div className={styles.youtubeContainer}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/Z7Dw8Sev_Ug"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  )
}
