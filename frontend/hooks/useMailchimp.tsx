import { useState } from 'react'

/**
 * (useMailchimp hook) handle Mailchimp state and subscribe logic
 */
export default function useMailchimp() {
  const [emailValue, setEmailValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  /**
   * (useMailchimp hook) update email value in state
   * @param event
   */
  const handleSubcribe = (event: React.FormEvent<EventTarget>) => {
    setEmailValue((event.target as HTMLInputElement).value)
  }

  /**
   * (useMailchimp hook) make a POST request to our Mailchimp API endpoint `/api/subscribe` to subscribe the user
   * @param event
   */
  const subscribeUser = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault()

    // Reset state
    setError('')
    setSuccess('')

    // Send a request to our API to subscribe the user
    try {
      setLoading(true)
      const response = await fetch('/api/subscribe', {
        body: JSON.stringify({ email: emailValue }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      })

      // Get API response
      const { error, message } = await response.json()

      // If there was an error, display updated error message to user
      if (error) {
        console.error(error)
        setLoading(false)
        setError(error)
        return
      }

      // Clear the input value and show updated success message to user
      setLoading(false)
      setEmailValue('')
      setSuccess(message)

      // If there was an error, log full error to console
      // Display user friendly error message to user
    } catch (error) {
      console.error(error)
      setLoading(false)
      setError('Something went wrong. Please try again later.')
      return
    }
  }

  return {
    emailValue,
    loading,
    error,
    success,
    handleSubcribe,
    subscribeUser,
  }
}
