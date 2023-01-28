// Components
import Head from 'next/head'
import PageTitle from '../components/Global/PageTitle/PageTitle'
import AboutKatrina from '../components/AboutPage/AboutKatrina/AboutKatrina'
import SubscribeMain from '../components/Global/SubscribeMain/SubscribeMain'

/**
 * About page
 *
 * @returns Information about Katrina and Moonbelly Makes
 */
export default function About() {
  return (
    <>
      <Head>
        <title>Moonbelly Makes | About</title>
        <meta name="description" content="decorate your life" />
      </Head>
      <PageTitle text="About" />
      <AboutKatrina />
      <SubscribeMain />
    </>
  )
}
