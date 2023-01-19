// Styles
import styles from './PageTitle.module.css'

/**
 * PageTitle
 *
 * @param {string} text
 * @returns Styled page header
 */
export default function PageTitle({ text }) {
  return <h2 className={styles.title}>{text}</h2>
}
