// Components
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import SubscribeMain from '../../components/Global/SubscribeMain/SubscribeMain'
import SubscribeAside from '../../components/Global/SubscribeAside/SubscribeAside'

// Helpers
import sanityClient from '../../lib/sanityClient'
import { getAllPosts } from '../../lib/getAllPosts'
import { formatDate } from '../../lib/formatDate'

// Styles
import styles from './Posts.module.css'

// Post template
export default function Post({ post }) {
  // Build image from Sanity data
  const builder = imageUrlBuilder(sanityClient)
  const urlFor = (source) => builder.image(source)

  // Grab post details
  const { title, mainImage, body, publishedAt } = post[0]
  const altText = mainImage.alt ? mainImage.alt : 'Lab header image'

  // Format date
  const formattedDate = formatDate(publishedAt)

  return (
    <div className={styles.wrapper}>
      <article className={styles.post}>
        <div className={styles.postHeader}>
          <h2>{title}</h2>
          <p>{formattedDate}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={urlFor(mainImage).quality(100).url()}
            className={styles.image}
            sizes="(min-width: 768px) 50vw, 100vw"
            fill
            alt={altText}
            priority
          />
        </div>
        <div className={styles.postBody}>
          <PortableText
            value={body}
            components={{
              types: {
                image: ({ value }) => {
                  return (
                    <figure
                      className={styles.imageContainer}
                      data-column-layout={value.columnLayout}
                      data-alignment={value.alignment}
                    >
                      <Image
                        src={urlFor(value.asset).quality(100).url()}
                        className={styles.image}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        alt={value.alt ? value.alt : 'Post body image'}
                      />
                    </figure>
                  )
                },
              },
            }}
          />
        </div>
      </article>
      <SubscribeMain />
      <SubscribeAside />
    </div>
  )
}

// Create dynamic URLs from post slug
export async function getStaticPaths() {
  const posts = await getAllPosts()

  // Create paths for each post
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return { paths, fallback: 'blocking' }
}

// Get post props
export async function getStaticProps({ params }) {
  const allPosts = await getAllPosts()

  // Filter post by slug
  const post = allPosts.filter((post) => post.slug.current === params.slug)

  return {
    props: {
      post,
    },
    revalidate: 10,
  }
}
