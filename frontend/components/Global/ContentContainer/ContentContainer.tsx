// Components
import PostPreviewCard from '../PostPreviewCard/PostPreviewCard'
import SideBar from '../SideBar/SideBar'

// Helpers
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../lib/sanityClient'

// Styles
import styles from './ContentContainer.module.css'

// Types
import { Post } from '../../../types'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export default function ContentContainer({ posts }: { posts: Post[] }) {
  // Build image from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source: SanityImageSource) => builder.image(source)

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {posts.map((post) => {
          return (
            <PostPreviewCard
              key={post._id ? post._id : post.slug.current}
              imageSrc={urlFor(post.mainImage).url()}
              category={post.category}
              title={post.title}
              slug={post.slug.current}
              alt={post.mainImage.alt}
            />
          )
        })}
      </div>
      <SideBar />
    </section>
  )
}
