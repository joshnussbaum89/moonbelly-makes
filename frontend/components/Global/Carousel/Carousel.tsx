import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import client from '../../../lib/sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// Styles
import styles from './Carousel.module.css'

// Types
import { PostProps } from '../../../types'
import { AnimatePresence, motion } from 'framer-motion'

export default function Carousel({ posts }: PostProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const activePost = posts.at(currentIndex)
  const formattedCategoryText = activePost?.category?.replace(/-/g, ' ')

  // Build image URL from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source: any) => builder.image(source)

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      return prevIndex + 1 === posts.length ? 0 : prevIndex + 1
    })
  }, [posts.length])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex - 1 < 0 ? posts.length - 1 : prevIndex - 1
    })
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto increment carousel on mobile
  useEffect(() => {
    if (window !== undefined && window.innerWidth < 768) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [handleNext])

  return (
    <div className={styles.carousel}>
      <div className={styles.slide}>
        <div key={posts[currentIndex]?.slug.current} className={styles.imageContainer}>
          <Link href={`/posts/${posts[currentIndex]?.slug.current}`}>
            <Image
              src={urlFor(posts[currentIndex]?.mainImage).auto('format').quality(100).url()}
              alt={`${posts[currentIndex]?.mainImage.alt}`}
              sizes="(min-width: 768px) 50vw,
                (min-width: 1024px) 33vw,
                100vw"
              fill
            />
          </Link>
        </div>
        <div className={styles.left} onClick={handlePrevious}>
          <IoIosArrowBack />
        </div>
        <div className={styles.right} onClick={handleNext}>
          <IoIosArrowForward />
        </div>
      </div>

      <div className={styles.indicator}>
        {posts.map((_, index) => (
          <div
            key={index}
            className={`${currentIndex === index ? styles.active : ''} ${styles.dot} `}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>

      <div className={styles.info}>
        <Link href={`/${activePost?.category}`} className={styles.animatedLink}>
          {formattedCategoryText}
        </Link>
        <h3>
          <Link href={`/posts/${activePost?.slug.current}`}>{activePost?.title}</Link>
        </h3>
      </div>
    </div>
  )
}
