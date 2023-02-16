// Components
import Head from 'next/head'
import PageTitle from '../../components/Global/PageTitle/PageTitle'

// Helpers
import { getAllTags } from '../../lib/getAllTags'
import { getAllPostsByTag } from '../../lib/getAllPostsByTag'
import { createTitleFromSlug } from '../../lib/createTitleFromSlug'
import ContentContainer from '../../components/Global/ContentContainer/ContentContainer'

// Types
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypedObject } from '@portabletext/types'
import { ParsedUrlQuery } from 'querystring'

export default function tags({
  posts,
  title,
}: {
  posts: Post[]
  title: string
}) {
  // Grab post details for SEO
  const { slug } = posts[0]

  return (
    <>
      <Head>
        <title>{`Moonbelly Makes | ${title}`}</title>
        <meta
          name="description"
          content={`Moonbelly Makes tag: ${title.toLowerCase()}`}
        />
        <meta property="og:title" content={`Moonbelly Makes | ${title}`} />
        <meta property="og:image" content="/fabric-flowers.jpeg" />
        <meta property="og:description" content={`Moonbelly Makes ${title}`} />
        <meta
          property="og:url"
          content={`https://moonbellymakes.com/tags/${slug.current}`}
        />
        <meta property="og:type" content="website" />
      </Head>
      <PageTitle text={title} />
      <ContentContainer posts={posts} />
    </>
  )
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

// Types
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

interface Post {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  _key: string
  body: TypedObject[]
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
