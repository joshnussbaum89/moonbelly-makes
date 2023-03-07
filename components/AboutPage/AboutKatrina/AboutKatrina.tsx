// Components
import Image from 'next/image'
import Link from 'next/link'

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
  return (
    <section className={styles.wrapper}>
      <p className={styles.greeting}>
        <strong>
          <em>Hello you!</em> Welcome to Moonbelly Makes, the virtual vessel for
          sharing my homemade projects!
        </strong>
      </p>
      <div className={styles.mainContentContainer}>
        <div className={styles.description}>
          <p>
            Here you can find <Link href={`/diys`}>DIYs</Link> (mostly with
            fabric), <Link href={`/recipes`}>recipes</Link> (mostly with
            vegetables), and a very “great”{' '}
            <Link href={`/bake-off`}>British baking project</Link>. Basically,
            any project that I am working on ends up here, to share and to
            archive. And if you prefer to enjoy video, I have that for you too{' '}
            <Link href={`https://www.youtube.com/@moonbellymakes`}>here</Link>.
          </p>
          <p>
            Feel free to explore the website, find me on Instagram or Pinterest
            (@moonbellymakes), join the newsletter, and check out the YouTube
            for more!
          </p>
          <p>
            The making of things and doing of projects is a spiritual practice
            for me, so if you want to know more about me and my philosophy,
            please do read on…
          </p>
        </div>
        <div className={styles.headshot}>
          <Image
            src={katrinaHeadshot}
            width={500}
            height={500}
            sizes="(min-width: 768px) 50vw, 100vw"
            quality={100}
            placeholder="blur"
            priority
            alt="Katrina Atkin headshot"
          />
        </div>
        <div className={styles.quickFacts}>
          <h3>Katrina Quick Facts</h3>
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
        <div className={styles.philosophy}>
          <h3>Philosophy</h3>
          <p>
            The vessel that is Moonbelly has been born from a turning and tuning
            into the closeness I have felt to the process of making for my whole
            life. I have always found more of myself within my projects -
            whether it be sewing, crocheting, cooking, baking, writing,
            choreographing, creating installation art or stop motion films or
            furniture, etc etc etc, these projects come from a deep and wise
            place that I do not understand and therefore cannot explain. They
            then emerge into this reality as a bridge that teaches me something
            about the world and about myself, that connects me with others and
            grounds my being. Both within process and when being witnessed, I
            practice opening my ears and mind and heart to the truth, in
            whatever way it chooses to show up for me.
          </p>
          <p>•••</p>
          <p>
            Another massive piece that drives my making is a purposeful attempt
            to challenge societal understandings that suggest we are somehow
            outside of and made of different stuff than the rest of nature. In
            practice, that looks like blurring the line between NATURE/THE
            COSMOS and ME - seeking out new ways to bring the natural, outside
            world into my inside world; both into my home by incorporating
            natural materials and themes into my projects, and into my body with
            (always) delicious and (usually) nutrient rich dishes that work to
            honor the land, people, and animals that nourish me and my family.
          </p>
        </div>
      </div>
      <div>
        <div className={styles.intention}>
          <p>
            Ultimately, the energy that drives Moonbelly is a tenderly held
            intention to bask in this abundant, rich, beautiful, magnificent,
            and magical existence.
          </p>
          <p>
            Through the projects I share here, I strive to find ways to support
            my main aim:
          </p>
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
            , I am reminded of the cosmic vastness we are inherently a part of
            and speeding through at nearly 500,000 mph. I am a blip of
            consciousness in a sea of possibility…
          </p>
          <p>
            Looking down to myself - to my own body and my own{' '}
            <span>
              <strong>belly</strong>
            </span>{' '}
            - reminds me that <span>I AM HERE</span> in this body experiencing
            all of this inexplicable richness. It is with this body and these
            hands that I alchemize my thoughts into both permanent and fleeting
            physical creations…
          </p>
          <Image
            src={spiralIcon}
            width={293}
            height={294}
            sizes="50vw"
            placeholder="blur"
            alt="Swirling spiral icon"
          />
        </div>
        <div className={styles.signatureContainer}>
          <div className={styles.signature}>
            <strong>
              <p>
                Making for me is an act of healing, connection, expression, and
                energetic exchange.
              </p>
              <p>
                <em>I make to know who I am. </em>✨
              </p>
              <p>
                I really love that you’re here sharing this with me. I hope you
                have a beautiful rest of your day, and thank you for visiting!
              </p>
              <p>💖, Katrina</p>
            </strong>
          </div>
          <Image
            src={katrinaDancing}
            width={900}
            height={515}
            sizes="(min-width: 768px) 50vw, 100vw"
            placeholder="blur"
            alt="Katrina Atkin dancing in the park"
          />
        </div>
        <div className={styles.youtubeContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7yLxxyzGiko"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
