import Image from 'next/image'
import Link from 'next/link'

import styles from './PostPreviewCard.module.css'

export default function PostPreviewCard({ src, tag, title, path }) {
  return (
    <div className={styles.card}>
      <Image src={src} alt={`Post preview card for "${title}"`} />
      <Link href={`${path}`}>{tag}</Link>
      <h3>{title}</h3>
    </div>
  )
}
