// Components
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import getYouTubeId from 'get-youtube-id'
import SideBar from '../../components/Global/SideBar/SideBar'

// Helpers
import sanityClient from '../../lib/sanityClient'
import { getAllPosts } from '../../lib/getAllPosts'
import { getAllTagsByPostTitle } from '../../lib/getAllTagsByPostTitle'
import { formatDate } from '../../lib/formatDate'

// Styles
import styles from './Posts.module.css'

// Types
import { ReactNode } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { Post } from '../../types'

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

interface Tag {
  title: string
}

export default function PostPageTemplate({
  post,
  tags,
}: {
  post: Post[]
  tags: Tag[]
}) {
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
    block: {
      Handshake: ({ children }: { children?: ReactNode }) => (
        <p className={styles.handshake}>{children}</p>
      ),
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
            <h1>{title}</h1>
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
            {tags && (
              <>
                <h3>Tags:</h3>
                <div className={styles.tagContainer}>
                  {tags.map((tag) => (
                    <Link
                      key={tag.title}
                      href={`/tags/${tag.title
                        .toLowerCase()
                        .replace(/ /g, '-')}`}
                    >
                      {tag.title}
                    </Link>
                  ))}
                </div>
              </>
            )}
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

  // Get tags for post
  const tags = await getAllTagsByPostTitle(post[0].title)

  return {
    props: {
      post,
      tags: tags[0].tag as Tag[],
    },
    revalidate: 10,
  }
}
