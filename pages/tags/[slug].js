// Components
import PageTitle from '../../components/Global/PageTitle/PageTitle'
import PostPreviewCard from '../../components/Global/PostPreviewCard/PostPreviewCard'

// Helpers
import { getAllTags } from '../../lib/getAllTags'
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

// Create dynamic URLs from tags
export async function getStaticPaths() {
  const tags = await getAllTags()

  // Create path for each tag
  const paths = tags.map((tag) => ({
    params: {
      slug: tag.title.toLowerCase().replace(/ /g, '-'),
    },
  }))

  return { paths, fallback: false }
}

// Fetch posts by tag
export async function getStaticProps({ params }) {
  const title = createTitleFromSlug(params.slug)
  const posts = await getAllPostsByTag(params.slug)

  return {
    props: {
      posts,
      title,
    },
    revalidate: 60,
  }
}
