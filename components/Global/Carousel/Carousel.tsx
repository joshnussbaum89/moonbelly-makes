// Components, helpers, hooks
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import client from '../../../lib/sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import useEmblaCarousel from 'embla-carousel-react'

// Styles
import styles from './Carousel.module.css'

// Types
import { PostProps } from '../../../types'

export default function Carousel({ posts }: PostProps) {
  const [prevBtnActive, setprevBtnActive] = useState(false)
  const [nextBtnActive, setnextBtnActive] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [emblaRef, emblaApi] = useEmblaCarousel({})

  // Build image URL from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source: any) => builder.image(source)

  // Embla Carousel
  const scrollToPreviousSlide = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )

  const scrollToNextSlide = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )

  const scrollToSlideByIndex = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onSlideSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setprevBtnActive(emblaApi.canScrollPrev())
    setnextBtnActive(emblaApi.canScrollNext())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSlideSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSlideSelect)
    emblaApi.on('reInit', onSlideSelect)
  }, [emblaApi, setScrollSnaps, onSlideSelect])

  return (
    <>
      <div className={styles.embla}>
        <div ref={emblaRef}>
          <div className={styles.embla__container}>
            {posts.map((post) => (
              <div className={styles.embla__slide} key={post?._id}>
                <Link href={`/posts/${post?.slug.current}`}>
                  <Image
                    src={urlFor(post?.mainImage)
                      .auto('format')
                      .quality(100)
                      .url()}
                    alt={`${post?.mainImage.alt}`}
                    priority
                    fill
                    sizes="(min-width: 768px) 50vw,
                  (min-width: 1024px) 33vw,
                  100vw"
                  />
                </Link>
              </div>
            ))}
          </div>
          <IoIosArrowBack
            className={`${styles.embla__prev} ${
              prevBtnActive && styles.active
            }`}
            onClick={scrollToPreviousSlide}
          />
          <IoIosArrowForward
            className={`${styles.embla__next} ${
              nextBtnActive && styles.active
            }`}
            onClick={scrollToNextSlide}
          />
        </div>
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlideByIndex(index)}
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
    </>
  )
}
