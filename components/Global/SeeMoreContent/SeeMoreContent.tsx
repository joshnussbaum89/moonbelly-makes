import Link from 'next/link'
import styles from './SeeMoreContent.module.css'

export default function SeeMoreContent() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>See More:</h2>
      </div>
      <div className={styles.buttons}>
        <Link href="/diys">DIYs</Link>
        <Link href="/recipes">Recipes</Link>
        <Link href="/bake-off">Bake Off</Link>
      </div>
    </div>
  )
}
