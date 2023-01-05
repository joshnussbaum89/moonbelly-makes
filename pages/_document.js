// Components
import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Document component (rendered only on the server)
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
