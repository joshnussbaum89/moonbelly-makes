// Styles
import styles from './WidgetTitle.module.css'

/**
 * Styled header for side panel widgets
 */
export default function WidgetTitle({ titleCopy }: { titleCopy: string }) {
  return (
    <h3 className={styles.title}>
      <span>{titleCopy}</span>
    </h3>
  )
}
