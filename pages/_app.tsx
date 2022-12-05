// Types
import type { AppProps } from 'next/app'

// Styles, fonts
import '../styles/globals.css'
import localFont from '@next/font/local'
import { Be_Vietnam_Pro } from '@next/font/google'

const laguna = localFont({ src: '../public/fonts/laguna-bold-regular.otf' })
const vietnam = Be_Vietnam_Pro({
  weight: ['100', '200'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${vietnam.style.fontFamily};
        }
        h1,
        h2,
        h3,
        h4 {
          font-family: ${laguna.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
