// import { useState } from 'react'
// import { TiHeartFullOutline, TiHeartOutline } from 'react-icons/ti'
import { formatDate, formatTime } from '../../../lib/dates'
import styles from './Comments.module.css'
import { Comment } from '../../../types'

export default function Comments({ comments }: { comments: Comment[] }) {
  return (
    <div className={styles.comments}>
      <h3>Comments:</h3>
      <ul>
        {/* If there are no comments */}
        {comments?.length === 0 && <li>No comments yet 💅🏼</li>}

        {/* If there are comments */}
        {comments?.map(({ _id, _createdAt, name, comment }) => (
          <li key={_id}>
            <h4>{name}</h4>
            <p className={styles.comment}>{comment}</p>
            <p className={styles.date}>
              {formatDate(_createdAt)} at {formatTime(_createdAt)}
            </p>
            {/* TODO: should we have this if there is no user login? */}
            {/* <Likes /> */}
          </li>
        ))}
      </ul>
    </div>
  )
}

// function Likes() {
//   const [likes, setLikes] = useState(0)

//   const handleLike = () => setLikes(likes + 1)

//   return (
//     <div className={styles.likes} onClick={handleLike}>
//       {likes > 0 ? <TiHeartFullOutline /> : <TiHeartOutline />}
//       <span>{likes}</span>
//     </div>
//   )
// }
