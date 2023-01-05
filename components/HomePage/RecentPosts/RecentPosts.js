import PostPreviewCard from '../../Global/PostPreviewCard/PostPreviewCard'

import styles from './RecentPosts.module.css'
import chocolateMiniRolls from '../../../public/chocolate-mini-rolls.jpeg'
import thankYou from '../../../public/thank-you.jpeg'
import deviledEggs from '../../../public/deviled-eggs.jpeg'

export default function MostRecentPosts() {
  return (
    <section className={styles.recentPostscontainer}>
      <h2>Newest Projects</h2>
      <div className={styles.imagesContainer}>
        <PostPreviewCard
          src={thankYou}
          tag="DIYs"
          path="/diys"
          title="Handcarved Thank You Cards"
        />
        <PostPreviewCard
          src={deviledEggs}
          tag="Recipes"
          path="/recipes"
          title="Super Savory Deviled Eggs"
        />
        <PostPreviewCard
          src={chocolateMiniRolls}
          tag="Bake Off"
          path="/bake-off"
          title="Prue's Chocolate Mini Rolls"
        />
      </div>
    </section>
  )
}
