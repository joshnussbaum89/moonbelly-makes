// Components
import PageTitle from '../components/Global/PageTitle/PageTitle'
import PostPreviewCard from '../components/Global/PostPreviewCard/PostPreviewCard'
import imageUrlBuilder from '@sanity/image-url'
import client from '../lib/sanityClient'

// Helpers
import { getAllRecipePosts } from '../lib/getAllRecipePosts'

// Fetch Sanity posts
export async function getStaticProps() {
  const posts = await getAllRecipePosts()

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}

/**
 * Recipes Page
 *
 * @param {object} posts
 */
export default function Recipes({ posts }) {
  // Build image from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source) => builder.image(source)

  return (
    <>
      <PageTitle text="Recipes" />
      {posts.map((post) => {
        return (
          <PostPreviewCard
            key={post._id}
            imageSrc={urlFor(post.mainImage).url()}
            category="recipes"
            categoryPath="/recipes"
            title={post.title}
            slug={post.slug.current}
            alt={post.mainImage.alt}
          />
        )
      })}
    </>
  )
}
