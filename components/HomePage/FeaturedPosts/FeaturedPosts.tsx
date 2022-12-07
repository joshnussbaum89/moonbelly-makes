import Image from 'next/image'

import styles from './FeaturedPosts.module.css'
import chocolateMiniRolls from '../../../public/chocolate-mini-rolls.jpeg'
import thankYou from '../../../public/thank-you.jpeg'
import deviledEggs from '../../../public/deviled-eggs.jpeg'

export default function FeaturedPosts() {
  return (
    <section className={styles.recentPostscontainer}>
      <h2>Recent Posts</h2>
      <div className={styles.imagesContainer}>
        <div className={styles.image}>
          <span>DIYs</span>
          <Image src={thankYou} alt="Most recent 'DIY' image" />
          <h3>Handcarved Thank You Cards</h3>
        </div>
        <div className={styles.image}>
          <span>Recipes</span>
          <Image src={deviledEggs} alt="Most recent 'Recipe' image" />
          <h3>Super Savory Deviled Eggs</h3>
        </div>
        <div className={styles.image}>
          <span>Bake Off</span>
          <Image src={chocolateMiniRolls} alt="Most recent 'Bake Off' image" />
          <h3>Prue&apos;s Chocolate Mini Rolls</h3>
        </div>
      </div>
    </section>
  )
}
