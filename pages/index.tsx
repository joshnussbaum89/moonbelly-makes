import Head from 'next/head'
import Header from '../components/Header/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>[NEXT] Moonbelly Makes - decorate your life</title>
        <meta name="description" content="decorate your life" />
      </Head>
      <Header />
    </>
  )
}
