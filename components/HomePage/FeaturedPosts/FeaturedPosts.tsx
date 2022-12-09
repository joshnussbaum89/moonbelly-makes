import PostPreviewCard from '../../Global/PostPreviewCard/PostPreviewCard'

import styles from './FeaturedPosts.module.css'
import fabricFlowers from '../../../public/fabric-flowers.jpeg'
import fabricBaby from '../../../public/fabric-baby.jpeg'

export default function FeaturedPosts() {
  return (
    <div className={styles.cards}>
      <PostPreviewCard
        src={fabricFlowers}
        tag="DIYs"
        title="Fabric Flower Wedding Bouquet, Part 1: the Project Commences"
      />
      <PostPreviewCard
        src={fabricBaby}
        tag="DIYs"
        title="A Perfectly Tiny Puppy: Fabric Baby Toy"
      />
    </div>
  )
}
