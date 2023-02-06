// Hooks
import { useRef, useState, MutableRefObject } from 'react'

// Styles
import styles from './SubscribeMain.module.css'

/**
 * Main Subscribe Component
 */
export default function SubscribeMain() {
  const inputEl = useRef() as MutableRefObject<HTMLInputElement>
  const [message, setMessage] = useState('')

  const subscribeUser = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()

    setMessage('Loading...')

    const response = await fetch('/api/subscribe', {
      body: JSON.stringify({ email: inputEl.current.value }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    const { error } = await response.json()

    if (error) {
      setMessage(error)
      return
    }

    inputEl.current.value = ''
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
            ref={inputEl}
            placeholder="email address..."
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  )
}
