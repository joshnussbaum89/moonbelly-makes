// Components
import Head from 'next/head'
import Error from '../components/Global/Error/Error'

// TODO: This isn't working at /500 for some reason
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
      <Error title={errorProps.title} body={errorProps.body} />
    </>
  )
}
