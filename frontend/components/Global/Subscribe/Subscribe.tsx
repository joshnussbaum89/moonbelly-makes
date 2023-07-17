// Hooks, components
import useMailchimp from '../../../hooks/useMailchimp'
import { ThreeDots } from 'react-loader-spinner'

// Styles
import styles from './Subscribe.module.css'

/**
 * Main Subscribe Component
 */
export default function Subscribe() {
  const { emailValue, loading, error, success, handleSubcribe, subscribeUser } = useMailchimp()

  return (
    <div className={styles.subscribe}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h4>Join the Community!</h4>
          <p>I send out a newsletter once a month, want in?</p>
        </div>
        <form action="POST" className={styles.form} onSubmit={subscribeUser}>
          <input
            type="email"
            name="email-mobile"
            id="email-mobile"
            value={emailValue}
            onChange={handleSubcribe}
            placeholder="email address..."
            required
          />
          <button type="submit" className={`${loading && styles.loading}`} disabled={loading}>
            Subscribe
          </button>
          {loading && (
            <ThreeDots
              height="40"
              width="40"
              color="#cfbcff"
              ariaLabel="three-dots-loading"
              visible={true}
              wrapperStyle={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
          )}

          {error && <p className={styles.error}>{error}</p>}
          {success && <p className={styles.success}>{success}</p>}
        </form>
      </div>
    </div>
  )
}
