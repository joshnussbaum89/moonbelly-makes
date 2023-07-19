import Head from 'next/head'
import PageTitle from '../components/Global/PageTitle/PageTitle'
import AboutKatrina from '../components/AboutPage/AboutKatrina/AboutKatrina'
import Subscribe from '../components/Global/Subscribe/Subscribe'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Moonbelly Makes | About</title>
        <meta name="description" content="About Moonbelly Makes" />
        <meta property="og:title" content="Moonbelly Makes | About" />
        <meta property="og:image" content="/fabric-flowers.jpeg" />
        <meta property="og:description" content="About Moonbelly Makes" />
        <meta property="og:url" content="https://moonbellymakes.com/about" />
        <meta property="og:type" content="website" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      >
        <PageTitle text="About" />
        <AboutKatrina />
        <Subscribe />
      </motion.div>
    </>
  )
}
