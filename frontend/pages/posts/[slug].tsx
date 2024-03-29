// Components
import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import getYouTubeId from 'get-youtube-id'
import SEO from '../../components/Global/SEO/SEO'
import PageTitle from '../../components/Global/PageTitle/PageTitle'
import SideBar from '../../components/Global/SideBar/SideBar'
import Tags from './Tags/Tags'
import Comments from './Comments/Comments'
import CommentForm from './CommentForm/CommentForm'
import { useCookies } from '../../hooks/useCookies'
import { motion, useScroll } from 'framer-motion'

// Helpers
import sanityClient from '../../lib/sanityClient'
import { getAllPosts, getAllTagsByPostTitle, getAllCommentsByPostId } from '../../lib/sanityApi'
import { formatDate } from '../../lib/dates'

// Styles
import styles from './Posts.module.css'

// Types
import { GetStaticProps, GetStaticPaths } from 'next'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { Post, Comment } from '../../types'

// TODO: Add a noFormatting option to Image component
// TODO: Replace 'any' on serializers with proper types

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
  comments,
}: {
  post: Post[]
  tags: Tag[]
  comments: Comment[]
}) {
  // User cookie global state
  const cookies = useCookies()

  // Scroll progress
  const { scrollYProgress } = useScroll()

  // Build image from Sanity data
  const builder = imageUrlBuilder(sanityClient)
  const urlFor = (source: SanityImageSource) => builder.image(source)

  // Grab post details
  const { title, description, mainImage, body, publishedAt, slug, _id } = post[0]
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
          <>
            {cookies.userAcceptedCookies && (
              <div className={styles.youtubeContainer}>
                <iframe
                  width="737"
                  height="500"
                  src={`https://www.youtube-nocookie.com/embed/${id}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </>
        )
      },
    },
    marks: {
      link: ({ value, children }: any) => {
        const { href } = value

        return (
          <a href={href} target="_blank" rel="noopener">
            {children}
          </a>
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
      <SEO
        title={`Moonbelly Makes | ${title}`}
        description={description || `Moonbelly Makes blog post: ${title}`}
        url={`https://moonbellymakes.com/posts/${slug.current}`}
        image={urlFor(mainImage).auto('format').quality(100).url()}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      >
        <motion.div className={styles.progressBar} style={{ scaleX: scrollYProgress }}></motion.div>
        <div className={styles.wrapper}>
          <article className={styles.post}>
            <div className={styles.postHeader}>
              <PageTitle text={title} />
              <p>{formattedDate}</p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={urlFor(mainImage).auto('format').quality(100).url()}
                className={styles.image}
                sizes="(min-width: 768px) 50vw, 100vw"
                fill
                alt={altText}
              />
            </div>
            <p className={styles.affiliateDisclosure}>
              * Products linked below may be affiliate links. I may receive a small commission if
              you place an order through them (at no cost to you). For more, see our{' '}
              <Link href={`/affiliate-disclosure`}>Affiliate Disclosure.</Link>
            </p>
            <div className={styles.postBody}>
              <PortableText value={body} components={serializers} />
              {tags && <Tags tags={tags} />}
            </div>
            <Comments comments={comments} />
            <CommentForm _id={_id} />
          </article>
          <SideBar />
        </div>
      </motion.div>
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

  // Get comments for post
  const comments = await getAllCommentsByPostId(post[0]._id)

  return {
    props: {
      post,
      tags: tags[0].tag as Tag[],
      comments,
    },
    revalidate: 10,
  }
}
