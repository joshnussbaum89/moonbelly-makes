// Components
import Image from 'next/image'

// Styles
import styles from './LinkTree.module.css'

// Images
import headshot from '../../public/katrina-headshot.png'

export default function LinkTree() {
  const linkData = [
    {
      description: 'Website',
      url: 'https://moonbellymakes.com',
    },
    {
      description: 'YouTube',
      url: 'https://www.youtube.com/@moonbellymakes',
    },
    // TODO: make a page for this
    {
      description: 'Newsletter Signup',
      url: 'https://moonbellymakes.com/signup',
    },
    {
      description: 'Instagram',
      url: 'https://www.instagram.com/moonbellymakes/',
    },
    {
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
          alt="Katrina Atkin Headshot"
        />
        <h1>@moonbellymakes</h1>
        {linkData.map((link) => (
          <a className={styles.link} href={link.url}>
            <span>{link.description}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
