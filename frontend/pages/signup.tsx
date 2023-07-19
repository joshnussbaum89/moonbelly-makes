import Head from 'next/head'
import Signup from '../components/SignupPage/Signup'
import { motion } from 'framer-motion'

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Moonbelly Makes | Sign-up</title>
        <meta name="description" content="Sign up to the Moonbelly Makes newsletter" />
        <meta property="og:title" content="Moonbelly Makes | Sign-up" />
        <meta property="og:image" content="/fabric-flowers.jpeg" />
        <meta property="og:description" content="Sign up to the Moonbelly Makes newsletter" />
        <meta property="og:url" content="https://moonbellymakes.com/signup" />
        <meta property="og:type" content="website" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      >
        <Signup />
      </motion.div>
    </>
  )
}
