import Image from 'next/image'
import SubscribeWidget from '../Global/Subscribe/Subscribe'

import flowers from '../../public/fabric-flowers.jpeg'

import styles from './Subscribe.module.css'

export default function Subscribe() {
  return (
    <section id="subscribe" className={styles.subscribe}>
      <SubscribeWidget />
      <div className={styles.imageContainer}>
        <Image
          src={flowers}
          sizes="(min-width: 768px) 50vw, 100vw"
          alt="Flower bouquet made out of fabric"
          placeholder="blur"
          priority
          fill
        />
      </div>
    </section>
  )
}
