// Components
import Head from 'next/head'
import Signup from '../components/SignupPage/Signup'

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
      <Signup />
    </>
  )
}
