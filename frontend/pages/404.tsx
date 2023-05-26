// Components
import Head from 'next/head'
import Error from '../components/Global/Error/Error'

/**
 * 404: Page not found
 */
export default function Custom404() {
  const errorProps = {
    title: '404: Page not found',
    body: 'Oopsie, woopsies! The page you are looking for does not exist.',
  }

  return (
    <>
      <Head>
        <title>Moonbelly Makes | Error</title>
        <meta name="description" content="Error" />
        <meta property="og:title" content="Moonbelly Makes | Error" />
        <meta property="og:image" content="/fabric-flowers.jpeg" />
        <meta property="og:description" content="Error" />
        <meta property="og:url" content="https://moonbellymakes.com/404" />
        <meta property="og:type" content="website" />
      </Head>
      <Error title={errorProps.title} body={errorProps.body} />
    </>
  )
}
