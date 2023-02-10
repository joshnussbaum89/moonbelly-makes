// Components
import Layout from '../components/Global/Layout/Layout'

// Fonts
import localFont from '@next/font/local'
import { Be_Vietnam_Pro } from '@next/font/google'
import { Nothing_You_Could_Do } from '@next/font/google'
const laguna = localFont({ src: '../public/fonts/laguna-bold-regular.otf' })
const vietnam = Be_Vietnam_Pro({ weight: '300', subsets: ['latin'] })
const nothingYouCouldDo = Nothing_You_Could_Do({
  weight: '400',
  subsets: ['latin'],
})

// Types
import type { AppProps } from 'next/app'

// Styles
import '../styles/globals.css'

/**
 * App Component
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-laguna: ${laguna.style.fontFamily};
          --font-vietnam: ${vietnam.style.fontFamily};
          --font-nothing-you-could-do: ${nothingYouCouldDo.style.fontFamily};
        }

        body,
        input,
        button {
          font-family: var(--font-vietnam);
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          font-family: var(--font-laguna);
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
