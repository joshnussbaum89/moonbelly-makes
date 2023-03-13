// Components
import Image from 'next/image'

// Styles
import styles from './LinkTree.module.css'

// Images
import headshot from '../../public/katrina-headshot.png'

export default function LinkTree() {
  const linkData = [
    {
      id: 1,
      description: 'Website',
      url: 'https://moonbellymakes.com',
    },
    {
      id: 2,
      description: 'YouTube',
      url: 'https://www.youtube.com/@moonbellymakes',
    },
    {
      id: 3,
      description: 'Newsletter Signup',
      url: 'https://moonbellymakes.com/signup',
    },
    {
      id: 4,
      description: 'Instagram',
      url: 'https://www.instagram.com/moonbellymakes/',
    },
    {
      id: 5,
      description: 'Pinterest',
      url: 'https://www.pinterest.com/moonbellymakes/',
    },
  ]

  return (
    <section id="link-tree" className={styles.linkTree}>
      <div className={styles.wrapper}>
        <Image
          src={headshot}
          className={styles.headshot}
          placeholder="blur"
          alt="Katrina Atkin Headshot"
          sizes="50vw"
          priority
        />
        <h1>@moonbellymakes</h1>
        {linkData.map((link) => (
          <a key={link.id} className={styles.link} href={link.url}>
            <span>{link.description}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
