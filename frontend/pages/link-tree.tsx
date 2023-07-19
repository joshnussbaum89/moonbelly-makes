import Head from 'next/head'
import LinkTree from '../components/LinkTreePage/LinkTree'
import { motion } from 'framer-motion'

export default function LinkTreePage() {
  return (
    <>
      <Head>
        <title>Moonbelly Makes | Link Tree</title>
        <meta name="description" content="Moonbelly Makes Link Tree" />
        <meta property="og:title" content="Moonbelly Makes | Link Tree" />
        <meta property="og:image" content="/fabric-flowers.jpeg" />
        <meta property="og:description" content="Moonbelly Makes Link Tree" />
        <meta property="og:url" content="https://moonbellymakes.com/link-tree" />
        <meta property="og:type" content="website" />
      </Head>
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
