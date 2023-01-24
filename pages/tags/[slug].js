// Components
import PageTitle from '../../components/Global/PageTitle/PageTitle'
import PostPreviewCard from '../../components/Global/PostPreviewCard/PostPreviewCard'

// Helpers
import { getAllPostsByTag } from '../../lib/getAllPostsByTag'
import { createTitleFromSlug } from '../../lib/createTitleFromSlug'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../lib/sanityClient'

export default function tags({ posts, title }) {
  // Build image from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source) => builder.image(source)

  return (
    <>
      <PageTitle text={title} />
      {posts.map((post) => {
        return (
          <PostPreviewCard
            key={post.slug}
            imageSrc={urlFor(post.mainImage).url()}
            category={post.category.replace(/-/g, ' ')}
            categoryPath={`/${post.category}`}
            title={post.title}
            slug={post.slug.current}
            alt={post.mainImage.alt}
          />
        )
      })}
    </>
  )
}

// Create dynamic URLs from post slug
export async function getStaticPaths() {
  const posts = await getAllPostsByTag()

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return { paths, fallback: 'blocking' }
}

// Get post props
export async function getStaticProps(context) {
  const title = createTitleFromSlug(context.params.slug)
  const postsByTag = await getAllPostsByTag(title)

  return {
    props: {
      posts: postsByTag,
      title,
    },
  }
}
