import SEO from '../components/Global/SEO/SEO'
import LinkTree from '../components/LinkTreePage/LinkTree'
import { motion } from 'framer-motion'

export default function LinkTreePage() {
  return (
    <>
      <SEO
        title="Moonbelly Makes | Link Tree"
        url="https://moonbellymakes.com/link-tree"
        image="/fabric-flowers.jpeg"
        description="Moonbelly Makes Link Tree"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      >
        <LinkTree />
      </motion.div>
    </>
  )
}
