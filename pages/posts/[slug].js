// Components
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import PageTitle from '../../components/Global/PageTitle/PageTitle'

// Helpers
import sanityClient from '../../lib/sanityClient'
import { getAllPosts } from '../../lib/getAllPosts'

// Styles
import styles from './Posts.module.css'

// Post template
export default function Post({ post }) {
  // Build image from Sanity data
  const builder = imageUrlBuilder(sanityClient)
  const urlFor = (source) => builder.image(source)

  // Grab post details
  const { title, mainImage, body } = post[0]
  const altText = mainImage.alt ? mainImage.alt : 'Lab header image'

  return (
    <article className={styles.post}>
      <PageTitle text={title} />
      <div className={styles.imageContainer}>
        <Image
          src={urlFor(mainImage).url()}
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
                  <div
                    className={styles.imageContainer}
                    data-column-layout={value.columnLayout}
                    data-alignment={value.alignment}
                  >
                    <Image
                      src={urlFor(value.asset).url()}
                      className={styles.image}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      alt={value.alt ? value.alt : 'Post body image'}
                    />
                  </div>
                )
              },
            },
          }}
        />
      </div>
    </article>
  )
}

// Create dynamic URLs from post slug
export async function getStaticPaths() {
  const posts = await getAllPosts()

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return { paths, fallback: 'blocking' }
}

// Get post props
export async function getStaticProps(context) {
  const allPosts = await getAllPosts()

  // Get current post
  const post = allPosts.filter(
    (post) => post.slug.current === context.params.slug
  )

  return {
    props: {
      post,
    },
    revalidate: 60,
  }
}
