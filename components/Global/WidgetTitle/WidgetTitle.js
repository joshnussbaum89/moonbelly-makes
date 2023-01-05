// Styles
import styles from './WidgetTitle.module.css'

/**
 * WidgetTitle component
 *
 * @param {string} titleCopy
 * @returns Styled header for side panel widgets
 */
export default function WidgetTitle({ titleCopy }) {
  return (
    <h4 className={styles.title}>
      <span>{titleCopy}</span>
    </h4>
  )
}
