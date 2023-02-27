// Components
import PostPreviewCard from '../../Global/PostPreviewCard/PostPreviewCard'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../lib/sanityClient'

// Styles
import styles from './RecentProjects.module.css'

// Types
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { PostProps } from '../../../types'

/**
 * Preview cards for recent posts
 */
export default function RecentProjects({ posts }: PostProps) {
  // Build image URL from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source: SanityImageSource) => builder.image(source)

  return (
    <div className={styles.cards}>
      {posts.map((post) => {
        return (
          <PostPreviewCard
            key={post._id}
            imageSrc={urlFor(post.mainImage).auto('format').quality(100).url()}
            category={post.category}
            title={post.title}
            slug={post.slug.current}
            alt={post.mainImage.alt}
          />
        )
      })}
    </div>
  )
}
