// Components
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PostPreviewCard from '../../Global/PostPreviewCard/PostPreviewCard'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// Helpers, hooks
import client from '../../../lib/sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import useEmblaCarousel from 'embla-carousel-react'

// Styles
import styles from './RecentPosts.module.css'

/**
 * Preview cards for most recent posts on home page hero
 */
export default function MostRecentPosts({ posts }: PostProps) {
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [emblaRef, emblaApi] = useEmblaCarousel({})

  // Build image URL from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source: any) => builder.image(source)

  // Get most recent posts
  const newestDiyPost = posts.at(0)
  const newestRecipePost = posts.at(1)
  const newestBakeOffPost = posts.at(2)

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])

  return (
    <section className={styles.recentPostscontainer}>
      <h2>Newest Projects</h2>
      <div className={styles.embla}>
        <div ref={emblaRef}>
          <div className={styles.embla__container}>
            <div className={styles.embla__slide}>
              <Link href={`/posts/${newestDiyPost?.slug.current}`}>
                <Image
                  src={urlFor(newestDiyPost?.mainImage)
                    .auto('format')
                    .quality(100)
                    .url()}
                  alt={`${newestDiyPost?.mainImage.alt}`}
                  priority
                  fill
                  sizes="(min-width: 768px) 50vw,
                  (min-width: 1024px) 33vw,
                  100vw"
                />
              </Link>
            </div>
            <div className={styles.embla__slide}>
              <Link href={`/posts/${newestRecipePost?.slug.current}`}>
                <Image
                  src={urlFor(newestRecipePost?.mainImage)
                    .auto('format')
                    .quality(100)
                    .url()}
                  alt={`${newestRecipePost?.mainImage.alt}`}
                  priority
                  fill
                  sizes="(min-width: 768px) 50vw,
                  (min-width: 1024px) 33vw,
                  100vw"
                />
              </Link>
            </div>
            <div className={styles.embla__slide}>
              <Link href={`/posts/${newestBakeOffPost?.slug.current}`}>
                <Image
                  src={urlFor(newestBakeOffPost?.mainImage)
                    .auto('format')
                    .quality(100)
                    .url()}
                  alt={`${newestBakeOffPost?.mainImage.alt}`}
                  priority
                  fill
                  sizes="(min-width: 768px) 50vw,
                  (min-width: 1024px) 33vw,
                  100vw"
                />
              </Link>
            </div>
          </div>
          <IoIosArrowBack
            className={
              prevBtnEnabled
                ? `${styles.embla__prev} ${styles.active}`
                : styles.embla__prev
            }
            onClick={scrollPrev}
          />
          <IoIosArrowForward
            className={
              nextBtnEnabled
                ? `${styles.embla__next} ${styles.active}`
                : styles.embla__next
            }
            onClick={scrollNext}
          />
        </div>
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              data-selected={index === selectedIndex}
            />
          ))}
        </div>
      </div>
      <div className={styles.embla__info}>
        <Link
          href={`/${posts.at(selectedIndex)?.category}`}
          className={styles.animatedLink}
        >
          {posts.at(selectedIndex)?.category?.replace(/-/g, ' ')}
        </Link>
        <h3>
          <Link href={`/posts/${posts.at(selectedIndex)?.slug.current}`}>
            {posts.at(selectedIndex)?.title}
          </Link>
        </h3>
      </div>
      <div className={styles.desktopImagesContainer}>
        <PostPreviewCard
          key={newestDiyPost?._id}
          imageSrc={urlFor(newestDiyPost?.mainImage)
            .auto('format')
            .quality(100)
            .url()}
          category={newestDiyPost?.category}
          title={newestDiyPost?.title}
          slug={newestDiyPost?.slug.current}
          alt={newestDiyPost?.mainImage.alt}
        />
        <PostPreviewCard
          key={newestRecipePost?._id}
          imageSrc={urlFor(newestRecipePost?.mainImage)
            .auto('format')
            .quality(100)
            .url()}
          category={newestRecipePost?.category}
          title={newestRecipePost?.title}
          slug={newestRecipePost?.slug.current}
          alt={newestRecipePost?.mainImage.alt}
        />
        <PostPreviewCard
          key={newestBakeOffPost?._id}
          imageSrc={urlFor(newestBakeOffPost?.mainImage)
            .auto('format')
            .quality(100)
            .url()}
          category={newestBakeOffPost?.category}
          title={newestBakeOffPost?.title}
          slug={newestBakeOffPost?.slug.current}
          alt={newestBakeOffPost?.mainImage.alt}
        />
      </div>
    </section>
  )
}

// Types
type PostProps = { posts: Post[] }

type Post = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  body: Object[]
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
