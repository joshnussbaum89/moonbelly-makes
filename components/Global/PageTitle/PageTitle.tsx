// Styles
import styles from './PageTitle.module.css'

/**
 * PageTitle
 *
 * @returns Styled page header
 */
export default function PageTitle({ text }) {
  return <h2 className={styles.title}>{text}</h2>
}
