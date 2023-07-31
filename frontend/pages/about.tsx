import SEO from '../components/Global/SEO/SEO'
import PageTitle from '../components/Global/PageTitle/PageTitle'
import AboutKatrina from '../components/AboutPage/AboutKatrina/AboutKatrina'
import Subscribe from '../components/Global/Subscribe/Subscribe'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <SEO
        title="Moonbelly Makes | About"
        url="https://moonbellymakes.com/about"
        image="/fabric-flowers.jpeg"
        description="About Moonbelly Makes"
      />
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
