// Components
import Carousel from '../../Global/Carousel/Carousel'
import PostPreviewCard from '../../Global/PostPreviewCard/PostPreviewCard'

// Helpers, hooks
import client from '../../../lib/sanityClient'
import imageUrlBuilder from '@sanity/image-url'

// Styles
import styles from './RecentPosts.module.css'

// Types
import { Post, PostProps } from '../../../types'

/**
 * Preview cards for most recent posts on home page hero
 */
export default function MostRecentPosts({ posts }: PostProps) {
  // Get most recent posts
  const mostRecentPosts = [posts.at(0), posts.at(1), posts.at(2)] as Post[]

  // Build image URL from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source: any) => builder.image(source)

  return (
    <section className={styles.recentPostscontainer}>
      <h2>Newest Projects</h2>
      <Carousel posts={mostRecentPosts} />
      <div className={styles.desktopImagesContainer}>
        {mostRecentPosts.map((post) => (
          <PostPreviewCard
            key={post?._id}
            imageSrc={urlFor(post?.mainImage).auto('format').quality(100).url()}
            category={post?.category}
            title={post?.title}
            slug={post?.slug.current}
            alt={post?.mainImage.alt}
          />
        ))}
      </div>
    </section>
  )
}
