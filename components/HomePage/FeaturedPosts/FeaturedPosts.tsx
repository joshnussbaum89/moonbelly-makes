// Components
import PostPreviewCard from '../../Global/PostPreviewCard/PostPreviewCard'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../lib/sanityClient'

// Styles
import styles from './FeaturedPosts.module.css'

// Types
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

/**
 * Preview cards for featured posts
 */
export default function FeaturedPosts({ posts }: PostProps) {
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

// Types
type PostProps = { posts: Post[] }

interface Post {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  body: Object[]
  category: string
  mainImage: {
    _type: string
    alt: string
    asset: Object[]
  }
  publishedAt: string
  slug: { _type: string; current: string }
  tag: []
  title: string
}
