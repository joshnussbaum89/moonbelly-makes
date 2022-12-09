import Layout from '../components/Global/Layout/Layout'

// Fonts
import localFont from '@next/font/local'
import { Be_Vietnam_Pro } from '@next/font/google'

const laguna = localFont({ src: '../public/fonts/laguna-bold-regular.otf' })
const vietnam = Be_Vietnam_Pro({ weight: '300', subsets: ['latin'] })

// Styles
import '../styles/globals.css'

// Types
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        body,
        input,
        button {
          font-family: ${vietnam.style.fontFamily};
        }
        h1,
        h2,
        h3,
        h4,
        h5 {
          font-family: ${laguna.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
