// Styles
import styles from './SubscribeAside.module.css'

/**
 * Subscribe Component
 *
 * @returns "Subscribe with Moonbelly" CTA widget
 */
export default function SubscribeAside() {
  return (
    <aside className={styles.subscribe}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h4>Join the Community!</h4>
          <p>
            Enter your email and I&apos;ll keep you posted with news and
            updates.
          </p>
        </div>
        <form action="POST" className={styles.form}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email address..."
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </aside>
  )
}
