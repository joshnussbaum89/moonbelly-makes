// Components
import PostPreviewCard from '../../Global/PostPreviewCard/PostPreviewCard'

// Styles
import styles from './FeaturedPosts.module.css'

// Images
import fabricFlowers from '../../../public/fabric-flowers.jpeg'
import fabricBaby from '../../../public/fabric-baby.jpeg'

/**
 * FeaturedPosts Component
 *
 * @returns Preview cards for featured posts
 */
export default function FeaturedPosts() {
  return (
    <div className={styles.cards}>
      <PostPreviewCard
        src={fabricFlowers}
        tag="DIYs"
        path="/diys"
        title="Fabric Flower Wedding Bouquet, Part 1: the Project Commences"
      />
      <PostPreviewCard
        src={fabricBaby}
        tag="DIYs"
        path="/diys"
        title="A Perfectly Tiny Puppy: Fabric Baby Toy"
      />
    </div>
  )
}
