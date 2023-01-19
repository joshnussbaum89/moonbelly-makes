// Components
import PostPreviewCard from '../../Global/PostPreviewCard/PostPreviewCard'

// Styles
import styles from './RecentPosts.module.css'

// Images
import chocolateMiniRolls from '../../../public/chocolate-mini-rolls.jpeg'
import thankYou from '../../../public/thank-you.jpeg'
import deviledEggs from '../../../public/deviled-eggs.jpeg'

/**
 * MostRecentPosts Component
 *
 * @returns Preview cards for most recent posts on home page hero
 */
export default function MostRecentPosts() {
  return (
    <section className={styles.recentPostscontainer}>
      <h2>Newest Projects</h2>
      <div className={styles.imagesContainer}>
        <PostPreviewCard
          imageSrc={thankYou}
          category="Diys"
          categoryPath="/diys"
          title="Handcarved Thank You Cards"
          alt="placeholder alt text"
        />
        <PostPreviewCard
          imageSrc={deviledEggs}
          category="Recipes"
          categoryPath="/recipes"
          title="Super Savory Deviled Eggs"
          alt="placeholder alt text"
        />
        <PostPreviewCard
          imageSrc={chocolateMiniRolls}
          category="Bake Off"
          categoryPath="/bake-off"
          title="Prue's Chocolate Mini Rolls"
          alt="placeholder alt text"
        />
      </div>
    </section>
  )
}
