// Hooks, components
import { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'

// Styles
import styles from './SubscribeMain.module.css'

/**
 * Main Subscribe Component
 */
export default function SubscribeMain() {
  const [emailValue, setEmailValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Handle subscribe logic
  const handleSubcribe = (event: React.FormEvent<EventTarget>) => {
    setEmailValue((event.target as HTMLInputElement).value)
  }

  // Subscribe user to newsletter
  const subscribeUser = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault()

    // 1. Reset state
    setError('')
    setSuccess('')

    // 2. Send a request to our API to subscribe the user
    setLoading(true)
    const response = await fetch('/api/subscribe', {
      body: JSON.stringify({ email: emailValue }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    // 3. If there was an error, display updated error message to user
    const { error } = await response.json()
    if (error) {
      setLoading(false)
      setError(error)
      return
    }

    // 4. Clear the input value and show updated success message to user
    setLoading(false)
    setEmailValue('')
    setSuccess('Success! 🎉 You are now subscribed to the newsletter.')
  }

  return (
    <div className={styles.subscribe}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h4>Join the Community!</h4>
          <p>
            Enter your email and I'll keep you posted with news and updates.
          </p>
        </div>
        <form action="POST" className={styles.form} onSubmit={subscribeUser}>
          <input
            type="email"
            name="email"
            id="email"
            value={emailValue}
            onChange={handleSubcribe}
            placeholder="email address..."
            required
          />
          <button
            type="submit"
            className={`${loading && styles.loading}`}
            disabled={loading}
          >
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
