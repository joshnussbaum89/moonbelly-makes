// Components
import Image from 'next/image'
import Link from 'next/link'
import PageTitle from '../PageTitle/PageTitle'

// Styles
import styles from './Error.module.css'

// Images
import woopsiesGif from '../../../public/middleditch-and-schwartz.gif'

/**
 * Displays on error pages
 */
export default function Error({ title, body }: { title: string; body: string }) {
  return (
    <section className={styles.container}>
      <PageTitle text={title} />
      <p>{body}</p>
      <Image
        src={woopsiesGif}
        width={498}
        height={278}
        sizes="(min-width: 768px) 50vw, 100vw"
        alt="error gif"
      />
      <Link href={`/`}>Click here to go home</Link>
    </section>
  )
}
