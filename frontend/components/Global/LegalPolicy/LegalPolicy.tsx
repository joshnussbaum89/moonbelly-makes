import PageTitle from '../PageTitle/PageTitle'
import { motion } from 'framer-motion'
import SEO from '../SEO/SEO'
import styles from './LegalPolicy.module.css'

export default function LegalPolicy({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <div className={styles.container}>
      <SEO
        title={`Moonbelly Makes | ${title}`}
        url="https://moonbellymakes.com/privacy-policy"
        image="/fabric-flowers.jpeg"
        description={`Moonbelly Makes ${title}`}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      >
        <PageTitle text={`${title}`} />
        {children}
      </motion.div>
    </div>
  )
}
