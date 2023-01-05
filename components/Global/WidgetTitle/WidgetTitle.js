import styles from './WidgetTitle.module.css'

export default function WidgetTitle({ titleCopy }) {
  return (
    <h4 className={styles.title}>
      <span>{titleCopy}</span>
    </h4>
  )
}
