import styles from './WidgetTitle.module.css'

// TODO: add types
export default function WidgetTitle({ titleCopy }) {
  return (
    <h4 className={styles.title}>
      <span>{titleCopy}</span>
    </h4>
  )
}
