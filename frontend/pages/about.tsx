// Components
import Head from 'next/head'
import PageTitle from '../components/Global/PageTitle/PageTitle'
import AboutKatrina from '../components/AboutPage/AboutKatrina/AboutKatrina'
import Subscribe from '../components/Global/Subscribe/Subscribe'

/**
 * About page - Information about Katrina and Moonbelly Makes
 */
export default function About() {
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
      <PageTitle text="About" />
      <AboutKatrina />
      <Subscribe />
    </>
  )
}
