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
        imageSrc={fabricFlowers}
        category="diys"
        categoryPath="/diys"
        title="Fabric Flower Wedding Bouquet, Part 1: the Project Commences"
        slug="slug-placeholder"
        alt="placeholder alt text"
      />
      <PostPreviewCard
        imageSrc={fabricBaby}
        category="diys"
        categoryPath="/diys"
        title="A Perfectly Tiny Puppy: Fabric Baby Toy"
        slug="slug-placeholder"
        alt="placeholder alt text"
      />
    </div>
  )
}
