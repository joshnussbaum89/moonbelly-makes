// Components, helpers, hooks
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import client from '../../../lib/sanityClient'
import imageUrlBuilder from '@sanity/image-url'

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
  const scrollToPreviousSlide = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])

  const scrollToNextSlide = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

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

  const previousButtonStyles = `${styles.embla__prev} ${prevBtnActive && styles.active}`

  const nextButtonStyles = `${styles.embla__next} ${nextBtnActive && styles.active}`

  const activePost = posts.at(selectedIndex)
  const formattedCategoryText = activePost?.category?.replace(/-/g, ' ')

  return (
    <>
      <div className={styles.embla}>
        <div ref={emblaRef}>
          <div className={styles.embla__container}>
            {posts.map((post) => (
              <div className={styles.embla__slide} key={post?._id}>
                <Link href={`/posts/${post?.slug.current}`}>
                  <Image
                    src={urlFor(post?.mainImage).auto('format').quality(100).url()}
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
          <div className={styles.embla__navigation}>
            <IoIosArrowBack className={previousButtonStyles} onClick={scrollToPreviousSlide} />
            <div className={styles.embla__dots}>
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlideByIndex(index)}
                  data-selected={index === selectedIndex}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <IoIosArrowForward className={nextButtonStyles} onClick={scrollToNextSlide} />
          </div>
        </div>
      </div>
      <div className={styles.embla__info}>
        <Link href={`/${activePost?.category}`} className={styles.animatedLink}>
          {formattedCategoryText}
        </Link>
        <h3>
          <Link href={`/posts/${activePost?.slug.current}`}>{activePost?.title}</Link>
        </h3>
      </div>
    </>
  )
}
