// Styles
import styles from './WidgetTitle.module.css'

/**
 * WidgetTitle component
 *
 * @returns Styled header for side panel widgets
 */
export default function WidgetTitle({ titleCopy }) {
  return (
    <h4 className={styles.title}>
      <span>{titleCopy}</span>
    </h4>
  )
}
