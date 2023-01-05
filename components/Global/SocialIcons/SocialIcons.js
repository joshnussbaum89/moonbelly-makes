import { TbBrandYoutube, TbBrandInstagram, TbBrandTiktok } from 'react-icons/tb'

import styles from './SocialIcons.module.css'

// TODO: replace link URLs
export default function SocialIcons({ darkMode = false }) {
  return (
    <div
      className={
        darkMode
          ? `${styles.iconContainer} ${styles.dark}`
          : styles.iconContainer
      }
    >
      <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
        <TbBrandYoutube />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <TbBrandInstagram />
      </a>
      <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
        <TbBrandTiktok />
      </a>
    </div>
  )
}
