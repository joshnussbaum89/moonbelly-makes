import { useState } from 'react'
import useMailchimp from './useMailchimp'

/**
 * (useComment hook) handle commenting engine state and logic
 * @param _id string
 */
export default function useComment(_id: string) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    isSubscribed: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Mailchimp subscribe hook
  const { handleSubcribe, subscribeUser } = useMailchimp()

  /**
   * (useComment hook) update name value in state
   * @param event
   */
  const handleNameChange = (event: React.FormEvent<EventTarget>) => {
    setFormData({
      ...formData,
      name: (event.target as HTMLInputElement).value,
    })
  }

  /**
   * (useComment hook) update email value in state
   * @param event
   */
  const handleEmailChange = (event: React.FormEvent<EventTarget>) => {
    setFormData({
      ...formData,
      email: (event.target as HTMLInputElement).value,
    })

    // Pass email value to mailchimp subscribe hook
    handleSubcribe(event)
  }

  /**
   * (useComment hook) update comment value in state
   * @param event
   */
  const handleCommentChange = (event: React.FormEvent<EventTarget>) => {
    setFormData({
      ...formData,
      comment: (event.target as HTMLInputElement).value,
    })
  }

  /**
   * (useComment hook) update isSubscribed value in state
   * @param event
   */
  const handleSubscribeChange = (event: React.FormEvent<EventTarget>) => {
    setFormData({
      ...formData,
      isSubscribed: (event.target as HTMLInputElement).checked,
    })
  }

  /**
   * (useComment hook) make a POST request to our comment API endpoint `/api/createComment` to create a comment
   *
   * If user is subscribed, send a request to our Mailchimp API endpoint `/api/subscribe` to subscribe the user
   *
   * @param event
   */
  const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault()

    // Reset state
    setError('')
    setSuccess('')

    // Send a request to API to create a comment
    try {
      setLoading(true)

      const response = await fetch('/api/createComment', {
        body: JSON.stringify({
          _id,
          name: formData.name,
          email: formData.email,
          comment: formData.comment,
          isSubscribed: formData.isSubscribed,
        }),
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

      // if user is subscribed, send a request to API to add user to Mailchimp list
      if (formData.isSubscribed) {
        subscribeUser(event)
      }

      // Clear the input value and show updated success message to user
      setLoading(false)
      setFormData({ name: '', email: '', comment: '', isSubscribed: false })
      setError('')
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
    formData,
    loading,
    error,
    success,
    handleNameChange,
    handleEmailChange,
    handleCommentChange,
    handleSubscribeChange,
    handleSubmit,
  }
}
