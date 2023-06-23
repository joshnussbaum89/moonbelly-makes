import { ThreeDots } from 'react-loader-spinner'
import useComment from '../../../hooks/useComment'
import styles from './CommentForm.module.css'

export default function CommentForm({ _id }: { _id: string }) {
  const {
    formData,
    loading,
    error,
    success,
    handleNameChange,
    handleEmailChange,
    handleCommentChange,
    handleSubscribeChange,
    handleSubmit,
  } = useComment(_id)

  return (
    <>
      <h3 className={styles.header}>Leave a Comment:</h3>
      <form action="POST" className={styles.form} onSubmit={handleSubmit}>
        <p>Your email address will not be published. Required fields are marked *</p>
        <label htmlFor="name" className={styles.label}>
          Name *
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className={styles.input}
          value={formData.name}
          onChange={handleNameChange}
          placeholder="Name"
          required
        />

        <label htmlFor="email" className={styles.label}>
          Email: *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.input}
          value={formData.email}
          onChange={handleEmailChange}
          placeholder="Email"
          required
        />

        <label htmlFor="comment" className={styles.label}>
          Comment: *
        </label>
        <textarea
          name="comment"
          id="comment"
          className={styles.input}
          value={formData.comment}
          onChange={handleCommentChange}
          placeholder="Comment"
          required
        />

        <div className={styles.subscribe}>
          <input
            type="checkbox"
            name="subscribe"
            id="subscribe"
            value="subscribe"
            onChange={handleSubscribeChange}
            checked={formData.isSubscribed}
          />
          <label htmlFor="subscribe">Stay connected, subscribe to my newsletter!</label>
        </div>

        <button type="submit" className={`${loading && styles.loading}`} disabled={loading}>
          Comment
        </button>

        {loading && (
          <ThreeDots
            height="40"
            width="40"
            color="#cfbcff"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        )}

        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
      </form>
    </>
  )
}
