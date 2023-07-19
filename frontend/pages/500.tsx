// Components
import Head from 'next/head'
import Error from '../components/Global/Error/Error'
import { motion } from 'framer-motion'

export default function Custom500Page() {
  const errorProps = {
    title: '500: Server-side error occurred',
    body: 'Oopsie, woopsies! Something went wrong on our end.',
  }

  return (
    <>
      <Head>
        <title>Moonbelly Makes | Error</title>
        <meta name="description" content="Error" />
        <meta property="og:title" content="Moonbelly Makes | Error" />
        <meta property="og:image" content="/fabric-flowers.jpeg" />
        <meta property="og:description" content="Error" />
        <meta property="og:url" content="https://moonbellymakes.com/500" />
        <meta property="og:type" content="website" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      >
        <Error title={errorProps.title} body={errorProps.body} />
      </motion.div>
    </>
  )
}
