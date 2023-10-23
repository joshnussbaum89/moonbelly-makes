import Link from 'next/link'
import styles from './SeeMoreContent.module.css'

export default function SeeMoreContent() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>See More:</h3>
      </div>
      <div className={styles.buttons}>
        <Link href="/diys">DIYs</Link>
        <Link href="/recipes">Recipes</Link>
        <Link href="/bake-off">Bake Off</Link>
      </div>
    </div>
  )
}
