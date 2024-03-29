import Link from 'next/link'
import styles from './Tags.module.css'

interface Tag {
  title: string
}

export default function Tags({ tags }: { tags: Tag[] }) {
  return (
    <>
      <h2>Tags:</h2>
      <div className={styles.tagContainer}>
        {tags?.map((tag) => (
          <Link
            className={styles.tag}
            key={tag.title}
            href={`/tags/${tag.title.toLowerCase().replace(/ /g, '-')}`}
          >
            {tag.title}
          </Link>
        ))}
      </div>
    </>
  )
}
