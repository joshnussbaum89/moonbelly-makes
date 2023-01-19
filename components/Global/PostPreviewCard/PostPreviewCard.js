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
 * @param {string} categoryPath
 * @param {string} title
 * @param {string} slug
 * @param {string} alt
 * @returns Post preview card that links to corresponding post page
 */
export default function PostPreviewCard({
  imageSrc,
  category,
  categoryPath,
  title,
  slug,
  alt,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Link href={`posts/${slug}`}>
          <Image
            src={imageSrc}
            sizes="(min-width: 768px) 50vw,
            (min-width: 1024px) 33vw,
            100vw"
            alt={alt}
            fill
          />
        </Link>
      </div>
      <Link href={`${categoryPath}`} className={styles.animatedLink}>
        {category}
      </Link>
      <h3>
        <Link href={`posts/${slug}`}>{title}</Link>
      </h3>
    </div>
  )
}
