// Components
import Head from 'next/head'
import Subscribe from '../components/SubscribePage/Subscribe'

/**
 * Subscribe Page
 */
export default function SubscribePage() {
  return (
    <>
      <Head>
        <title>Moonbelly Makes | Subscribe</title>
        <meta
          name="description"
          content="Subscribe to the Moonbelly Makes newsletter"
        />
        <meta property="og:title" content="Moonbelly Makes | Subscribe" />
        <meta property="og:image" content="/fabric-flowers.jpeg" />
        <meta
          property="og:description"
          content="Subscribe to the Moonbelly Makes newsletter"
        />
        <meta
          property="og:url"
          content="https://moonbellymakes.com/subscribe"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Subscribe />
    </>
  )
}
