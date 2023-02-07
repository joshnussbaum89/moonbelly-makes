// Hooks
import { useRef, useState, useEffect, MutableRefObject } from 'react'
import { useRouter } from 'next/router'

// Styles
import styles from './SubscribeAside.module.css'

/**
 * Secondary Subscribe Component for sidebar
 */
export default function SubscribeAside() {
  const inputEl = useRef() as MutableRefObject<HTMLInputElement>
  const [isPost, setIsPost] = useState(false)
  const [message, setMessage] = useState('')

  // Connect to router
  const router = useRouter()

  // Check if user is on a post page
  useEffect(() => {
    if (router.pathname.includes('posts')) {
      setIsPost(true)
    } else {
      setIsPost(false)
    }
  })

  // Subscribe user to newsletter
  const subscribeUser = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()

    // 1. Send a request to our API to subscribe the user
    setMessage('Loading...')

    const response = await fetch('/api/subscribe', {
      body: JSON.stringify({ email: inputEl.current.value }),
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
    inputEl.current.value = ''

    setMessage('Success! 🎉 You are now subscribed to the newsletter.')
  }

  return (
    <aside className={styles.subscribe} data-is-post={`${isPost}`}>
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
    </aside>
  )
}
