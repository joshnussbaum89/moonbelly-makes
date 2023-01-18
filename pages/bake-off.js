// Components
import PageTitle from '../components/Global/PageTitle/PageTitle'
import PostPreviewCard from '../components/Global/PostPreviewCard/PostPreviewCard'
import imageUrlBuilder from '@sanity/image-url'
import client from '../lib/sanityClient'

// Helpers
import { getAllBakeOffPosts } from '../lib/getAllBakeOffPosts'

// Fetch Sanity posts
export async function getStaticProps() {
  const posts = await getAllBakeOffPosts()

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}

/**
 * Bake Off Page
 *
 * @param {object} posts
 */
export default function BakeOff({ posts }) {
  // Build image from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source) => builder.image(source)

  return (
    <>
      <PageTitle text="Bake Off" />
      {posts.map((post) => {
        return (
          <PostPreviewCard
            key={post._id}
            imageSrc={urlFor(post.mainImage).url()}
            category="bake off"
            categoryPath="/bake-off"
            title={post.title}
            slug={post.slug.current}
            alt={post.mainImage.alt}
          />
        )
      })}
    </>
  )
}
