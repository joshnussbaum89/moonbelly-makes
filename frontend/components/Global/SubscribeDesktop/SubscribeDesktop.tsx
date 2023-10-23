// Hooks, components
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThreeDots } from 'react-loader-spinner'
import useMailchimp from '../../../hooks/useMailchimp'

// Styles
import styles from './SubscribeDesktop.module.css'

/**
 * Secondary Subscribe Component for sidebar
 */
export default function SubscribeDesktop() {
  const [isPost, setIsPost] = useState(false)

  // Mailchimp
  const { emailValue, loading, error, success, handleSubcribe, subscribeUser } = useMailchimp()

  // Next Router
  const router = useRouter()

  // Check if user is on a post page
  useEffect(() => {
    if (router.pathname.includes('posts')) {
      setIsPost(true)
    } else {
      setIsPost(false)
    }
  }, [router.pathname])

  return (
    <div className={styles.subscribe} data-is-post={`${isPost}`}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h3>Join the Community!</h3>
          <p>I send out a newsletter once a month, want in?</p>
        </div>
        <form action="POST" className={styles.form} onSubmit={subscribeUser}>
          <input
            type="email"
            name="email-desktop"
            id="email-desktop"
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
