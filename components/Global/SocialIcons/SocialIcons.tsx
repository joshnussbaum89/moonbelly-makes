import { TbBrandYoutube, TbBrandInstagram, TbBrandTiktok } from 'react-icons/tb'

import styles from './SocialIcons.module.css'

type Props = {
  darkMode?: boolean
}

export default function SocialIcons({ darkMode = false }: Props) {
  return (
    <div
      className={
        darkMode
          ? `${styles.iconContainer} ${styles.dark}`
          : styles.iconContainer
      }
    >
      <TbBrandYoutube />
      <TbBrandInstagram />
      <TbBrandTiktok />
    </div>
  )
}
