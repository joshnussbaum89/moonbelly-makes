// Components
import PostPreviewCard from '../PostPreviewCard/PostPreviewCard'

// Helpers
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../lib/sanityClient'

// Styles
import styles from './ContentContainer.module.css'

export default function ContentContainer({ posts }) {
  // Build image from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source) => builder.image(source)

  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <PostPreviewCard
            key={post._id}
            imageSrc={urlFor(post.mainImage).url()}
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
