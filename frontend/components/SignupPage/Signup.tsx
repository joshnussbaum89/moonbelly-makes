import Image from 'next/image'
import SubscribeWidget from '../Global/Subscribe/Subscribe'

import flowers from '../../public/fabric-flowers.jpeg'

import styles from './Signup.module.css'

export default function Signup() {
  return (
    <section id="signup" className={styles.signup}>
      <SubscribeWidget />
      <div className={styles.imageContainer}>
        <Image
          src={flowers}
          sizes="(min-width: 768px) 50vw, 100vw"
          alt="Flower bouquet made out of fabric"
          placeholder="blur"
          fill
        />
      </div>
    </section>
  )
}
