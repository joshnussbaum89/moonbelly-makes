// Components
import Image from 'next/image'
import Link from 'next/link'

// Styles
import styles from './PostPreviewCard.module.css'

/**
 * PostPreviewCard Component
 *
 * @param {object} src
 * @param {string} tag
 * @param {string} title
 * @param {string} path
 * @returns Post preview with title, tag, image and url
 */
export default function PostPreviewCard({ src, tag, title, path }) {
  return (
    <div className={styles.card}>
      <Image src={src} alt={`Post preview card for "${title}"`} />
      <Link href={`${path}`}>{tag}</Link>
      <h3>{title}</h3>
    </div>
  )
}
