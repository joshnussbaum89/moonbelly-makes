// Components
import PostPreviewCard from '../../Global/PostPreviewCard/PostPreviewCard'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../lib/sanityClient'

// Styles
import styles from './FeaturedPosts.module.css'

/**
 * FeaturedPosts Component
 *
 * @returns Preview cards for featured posts
 */
export default function FeaturedPosts({ posts }) {
  // Build image URL from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source) => builder.image(source)

  return (
    <div className={styles.cards}>
      {posts.slice(3, 5).map((post) => {
        return (
          <PostPreviewCard
            key={post._id}
            imageSrc={urlFor(post.mainImage).url()}
            category={post.category.replace('-', ' ')}
            categoryPath={post.category}
            title={post.title}
            slug={post.slug.current}
            alt={post.mainImage.alt}
          />
        )
      })}
    </div>
  )
}
