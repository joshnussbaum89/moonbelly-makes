import Image from 'next/image'

import styles from './PostPreviewCard.module.css'

// TODO: add types
export default function PostPreviewCard({ src, tag, title }) {
  return (
    <div className={styles.card}>
      <span>{tag}</span>
      <Image src={src} alt={`Post preview card for "${title}"`} />
      <h3>{title}</h3>
    </div>
  )
}
