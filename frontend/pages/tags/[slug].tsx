// Components
import SEO from '../../components/Global/SEO/SEO'
import PageTitle from '../../components/Global/PageTitle/PageTitle'
import { motion } from 'framer-motion'

// Helpers
import { getAllTags, getAllPostsByTag } from '../../lib/sanityApi'
import { createTitleFromSlug } from '../../lib/strings'
import ContentContainer from '../../components/Global/ContentContainer/ContentContainer'

// Types
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Post } from '../../types'

interface SlugParams extends ParsedUrlQuery {
  slug: string
}

interface Tag {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  title: string
}

// Create dynamic URLs from tags
export const getStaticPaths: GetStaticPaths = async () => {
  const tags: Tag[] = await getAllTags()

  // Create path for each tag
  const paths = tags.map((tag) => ({
    params: {
      slug: tag.title.toLowerCase().replace(/ /g, '-'),
    },
  }))

  return { paths, fallback: 'blocking' }
}

// Fetch posts by tag
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as SlugParams

  const posts: Post[] = await getAllPostsByTag(slug)
  const title: string = createTitleFromSlug(slug)

  return {
    props: {
      posts,
      title,
    },
    revalidate: 10,
  }
}

export default function TagPageTemplate({ posts, title }: { posts: Post[]; title: string }) {
  // Grab post details for SEO
  const { slug } = posts[0]
  const capitalizedTitle = title
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <>
      <SEO
        title={`Moonbelly Makes | ${capitalizedTitle}`}
        url={`https://moonbellymakes.com/tags/${slug.current}`}
        image="/fabric-flowers.jpeg"
        description={`Moonbelly Makes blog posts that include the '${title}' tag.`}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      >
        <PageTitle text={title} />
        <ContentContainer posts={posts} />
      </motion.div>
    </>
  )
}
