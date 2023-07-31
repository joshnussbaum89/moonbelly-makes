import SEO from '../components/Global/SEO/SEO'
import Signup from '../components/SignupPage/Signup'
import { motion } from 'framer-motion'

export default function SignupPage() {
  return (
    <>
      <SEO
        title="Moonbelly Makes | Sign-up"
        url="https://moonbellymakes.com/signup"
        image="/fabric-flowers.jpeg"
        description="Sign up to the Moonbelly Makes newsletter"
      />
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
