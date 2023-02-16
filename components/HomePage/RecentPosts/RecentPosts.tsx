// Components
import PostPreviewCard from '../../Global/PostPreviewCard/PostPreviewCard'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../lib/sanityClient'

// Styles
import styles from './RecentPosts.module.css'

/**
 * Preview cards for most recent posts on home page hero
 */
export default function MostRecentPosts({ posts }: PostProps) {
  // Build image URL from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source: any) => builder.image(source)

  // Get most recent posts
  const newestDiyPost = posts.at(0)
  const newestRecipePost = posts.at(1)
  const newestBakeOffPost = posts.at(2)

  return (
    <section className={styles.recentPostscontainer}>
      <h2>Newest Projects</h2>
      <div className={styles.imagesContainer}>
        <PostPreviewCard
          key={newestDiyPost?._id}
          imageSrc={urlFor(newestDiyPost?.mainImage)
            .auto('format')
            .quality(100)
            .url()}
          category={newestDiyPost?.category}
          title={newestDiyPost?.title}
          slug={newestDiyPost?.slug.current}
          alt={newestDiyPost?.mainImage.alt}
        />
        <PostPreviewCard
          key={newestRecipePost?._id}
          imageSrc={urlFor(newestRecipePost?.mainImage)
            .auto('format')
            .quality(100)
            .url()}
          category={newestRecipePost?.category}
          title={newestRecipePost?.title}
          slug={newestRecipePost?.slug.current}
          alt={newestRecipePost?.mainImage.alt}
        />
        <PostPreviewCard
          key={newestBakeOffPost?._id}
          imageSrc={urlFor(newestBakeOffPost?.mainImage)
            .auto('format')
            .quality(100)
            .url()}
          category={newestBakeOffPost?.category}
          title={newestBakeOffPost?.title}
          slug={newestBakeOffPost?.slug.current}
          alt={newestBakeOffPost?.mainImage.alt}
        />
      </div>
    </section>
  )
}

// Types
type PostProps = { posts: Post[] }

type Post = {
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
