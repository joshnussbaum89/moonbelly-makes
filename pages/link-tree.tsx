// Components
import Head from 'next/head'
import LinkTree from '../components/LinkTreePage/LinkTree'

/**
 * Link Tree Page
 */
export default function LinkTreePage() {
  return (
    <>
      <Head>
        <title>Moonbelly Makes | Link Tree</title>
        <meta name="description" content="Moonbelly Makes Link Tree" />
        <meta property="og:title" content="Moonbelly Makes | Link Tree" />
        <meta property="og:image" content="/fabric-flowers.jpeg" />
        <meta property="og:description" content="Moonbelly Makes Recipes" />
        <meta
          property="og:url"
          content="https://moonbellymakes.com/link-tree"
        />
        <meta property="og:type" content="website" />
      </Head>
      <LinkTree />
    </>
  )
}
