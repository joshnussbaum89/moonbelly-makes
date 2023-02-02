// Components
import PostPreviewCard from '../../Global/PostPreviewCard/PostPreviewCard'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../lib/sanityClient'

// Styles
import styles from './RecentPosts.module.css'

/**
 * MostRecentPosts Component
 *
 * @returns Preview cards for most recent posts on home page hero
 */
export default function MostRecentPosts({ posts }) {
  // Build image URL from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source) => builder.image(source)

  return (
    <section className={styles.recentPostscontainer}>
      <h2>Newest Projects</h2>
      <div className={styles.imagesContainer}>
        {posts.slice(0, 3).map((post) => {
          return (
            <PostPreviewCard
              key={post._id}
              imageSrc={urlFor(post.mainImage).quality(100).url()}
              category={post.category}
              title={post.title}
              slug={post.slug.current}
              alt={post.mainImage.alt}
            />
          )
        })}
      </div>
    </section>
  )
}
