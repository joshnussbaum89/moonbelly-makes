// Components
import SEO from '../components/Global/SEO/SEO'
import Error from '../components/Global/Error/Error'
import { motion } from 'framer-motion'

export default function Custom404Page() {
  const errorProps = {
    title: '404: Page not found',
    body: 'Oopsie, woopsies! The page you are looking for does not exist.',
  }

  return (
    <>
      <SEO
        title="Moonbelly Makes | Error"
        url="https://moonbellymakes.com/404"
        image="/fabric-flowers.jpeg"
        description="Error"
      />
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
