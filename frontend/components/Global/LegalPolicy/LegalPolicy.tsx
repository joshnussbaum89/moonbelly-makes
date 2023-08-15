import PageTitle from '../PageTitle/PageTitle'
import { motion } from 'framer-motion'
import SEO from '../SEO/SEO'
import styles from './LegalPolicy.module.css'

export default function LegalPolicy({
  children,
  type,
}: {
  children: React.ReactNode
  type: string
}) {
  return (
    <div className={styles.container}>
      <SEO
        title={`Moonbelly Makes | ${type} Policy`}
        url="https://moonbellymakes.com/privacy-policy"
        image="/fabric-flowers.jpeg"
        description={`Moonbelly Makes ${type} Policy`}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      >
        <PageTitle text={`${type} Policy`} />
        {children}
      </motion.div>
    </div>
  )
}
