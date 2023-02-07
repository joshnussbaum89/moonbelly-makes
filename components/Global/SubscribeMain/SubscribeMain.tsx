// Hooks
import { useState } from 'react'

// Styles
import styles from './SubscribeMain.module.css'

/**
 * Main Subscribe Component
 */
export default function SubscribeMain() {
  const [emailValue, setEmailValue] = useState('')
  const [message, setMessage] = useState('')

  // Handle subscribe logic
  const handleSubcribe = (event: React.FormEvent<EventTarget>) => {
    setEmailValue((event.target as HTMLInputElement).value)
  }

  // Subscribe user to newsletter
  const subscribeUser = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault()

    // 1. Send a request to our API to subscribe the user
    setMessage('Loading...')
    const response = await fetch('/api/subscribe', {
      body: JSON.stringify({ email: emailValue }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    // 2. If there was an error, display updated error message to user
    const { error } = await response.json()
    if (error) {
      setMessage(error)
      return
    }

    // 3. Clear the input value and show updated success message to user
    setEmailValue('')
    setMessage('Success! 🎉 You are now subscribed to the newsletter.')
  }

  return (
    <div className={styles.subscribe}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h4>Join the Community!</h4>
          <p>
            {message
              ? message
              : `Enter your email and I'll keep you posted with news and updates.`}
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
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  )
}
