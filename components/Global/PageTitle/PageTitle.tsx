// Styles
import styles from './PageTitle.module.css'

/**
 * Styled page header
 */
export default function PageTitle({ text }: { text: string }) {
  return <h2 className={styles.title}>{text}</h2>
}
