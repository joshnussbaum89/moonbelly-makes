// Components
import PageTitle from '../components/Global/PageTitle/PageTitle'
import PostPreviewCard from '../components/Global/PostPreviewCard/PostPreviewCard'
import imageUrlBuilder from '@sanity/image-url'
import client from '../lib/sanityClient'

// Helpers
import { getAllDiyPosts } from '../lib/getAllDiyPosts'

/**
 * Diys Page
 *
 * @param {object} posts
 */
export default function Diys({ posts }) {
  // Build image from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source) => builder.image(source)

  return (
    <>
      <PageTitle text="Diys" />
      {posts.map((post) => {
        return (
          <PostPreviewCard
            key={post._id}
            imageSrc={urlFor(post.mainImage).url()}
            category="diys"
            categoryPath="/diys"
            title={post.title}
            slug={post.slug.current}
            alt={post.mainImage.alt}
          />
        )
      })}
    </>
  )
}

// Fetch Sanity posts
export async function getStaticProps() {
  const posts = await getAllDiyPosts()

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}
