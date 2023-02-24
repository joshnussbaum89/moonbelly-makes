// Components
import Head from 'next/head'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import getYouTubeId from 'get-youtube-id'
import SideBar from '../../components/Global/SideBar/SideBar'

// Helpers
import sanityClient from '../../lib/sanityClient'
import { getAllPosts } from '../../lib/getAllPosts'
import { formatDate } from '../../lib/formatDate'

// Styles
import styles from './Posts.module.css'

// Types
import { GetStaticProps, GetStaticPaths } from 'next'
import { TypedObject } from '@portabletext/types'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Post template
export default function Post({ post }: { post: Post[] }) {
  // Build image from Sanity data
  const builder = imageUrlBuilder(sanityClient)
  const urlFor = (source: SanityImageSource) => builder.image(source)

  // Grab post details
  const { title, mainImage, body, publishedAt, slug } = post[0]
  const altText = mainImage.alt ? mainImage.alt : 'Lab header image'

  // Format date
  const formattedDate = formatDate(publishedAt)

  // Portable Text serializers
  const serializers = {
    types: {
      image: ({ value }: { value: Image }) => {
        return (
          <figure
            className={
              value.caption
                ? `${styles.imageContainer} ${styles.hasCaption}`
                : styles.imageContainer
            }
            data-column-layout={value.columnLayout}
            data-alignment={value.alignment}
          >
            <Image
              src={urlFor(value.asset).auto('format').quality(100).url()}
              sizes="(min-width: 768px) 50vw, 100vw"
              alt={value.alt ? value.alt : 'Post body image'}
              fill
            />
            {value.caption && <figcaption>{value.caption}</figcaption>}
          </figure>
        )
      },
      youtube: ({ value }: { value: YouTube }) => {
        const { url } = value
        const id = getYouTubeId(url)
        return (
          <div className={styles.youtubeContainer}>
            <iframe
              width="737"
              height="500"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )
      },
    },
  }

  return (
    <>
      <Head>
        <title>{`Moonbelly Makes | ${title}`}</title>
        <meta
          name="description"
          content={`Moonbelly Makes blog post: ${title}`}
        />
        <meta property="og:title" content={`Moonbelly Makes | ${title}`} />
        <meta property="og:image" content="/fabric-flowers.jpeg" />
        <meta
          property="og:description"
          content={`Moonbelly Makes blog post: ${title}`}
        />
        <meta
          property="og:url"
          content={`https://moonbellymakes.com/posts/${slug.current}`}
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.wrapper}>
        <article className={styles.post}>
          <div className={styles.postHeader}>
            <h2>{title}</h2>
            <p>{formattedDate}</p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={urlFor(mainImage).auto('format').quality(100).url()}
              className={styles.image}
              sizes="(min-width: 768px) 50vw, 100vw"
              fill
              alt={altText}
              priority
            />
          </div>
          <div className={styles.postBody}>
            <PortableText value={body} components={serializers} />
          </div>
        </article>
        <SideBar />
      </div>
    </>
  )
}

// Create dynamic URLs from post slug
export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Post[] = await getAllPosts()

  // Create paths for each post
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return { paths, fallback: 'blocking' }
}

// Get post props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPosts: Post[] = await getAllPosts()

  // Filter post by slug
  const post = allPosts.filter((post) => post.slug.current === params?.slug)

  return {
    props: {
      post,
    },
    revalidate: 10,
  }
}

// Types
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

interface Image {
  _key: string
  _type: string
  alignment: string
  alt: string
  asset: {
    _ref: string
    _type: string
  }
  caption: string
  columnLayout: string
  crop: {
    _type: string
    bottom: number
    left: number
    right: number
    top: number
  }
  hotspot: {
    _type: string
    height: number
    width: number
    x: number
    y: number
  }
}

interface YouTube {
  _key: string
  _type: string
  url: string
}
