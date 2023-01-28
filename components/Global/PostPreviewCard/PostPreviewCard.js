// Components
import Image from 'next/image'
import Link from 'next/link'

// Styles
import styles from './PostPreviewCard.module.css'

/**
 * PostPreviewCard Component
 *
 * @param {object} imageSrc
 * @param {string} category
 * @param {string} title
 * @param {string} slug
 * @param {string} alt
 * @returns Post preview card that links to corresponding post page
 */
export default function PostPreviewCard({
  imageSrc,
  category,
  title,
  slug,
  alt,
}) {
  // Format category name
  const formattedCategory = category.replace(/-/g, ' ')

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Link href={`/posts/${slug}`}>
          <Image
            src={imageSrc}
            sizes="(min-width: 768px) 50vw,
            (min-width: 1024px) 33vw,
            100vw"
            alt={alt}
            width={390}
            height={350}
          />
        </Link>
      </div>
      <Link href={`/${category}`} className={styles.animatedLink}>
        {formattedCategory}
      </Link>
      <h3>
        <Link href={`/posts/${slug}`}>{title}</Link>
      </h3>
    </div>
  )
}
