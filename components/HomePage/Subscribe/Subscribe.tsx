import styles from './Subscribe.module.css'

export default function Subscribe() {
  return (
    <section className={styles.subscribe}>
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
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  )
}
