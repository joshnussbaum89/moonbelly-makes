// Components + packages
import Router from 'next/router'
import localFont from 'next/font/local'
import { Be_Vietnam_Pro } from 'next/font/google'
import { Nothing_You_Could_Do } from 'next/font/google'
import NProgress from 'nprogress'

// Styles
import 'nprogress/nprogress.css'
import '../styles/Nprogress.css'
import '../styles/globals.css'

// Fonts
const laguna = localFont({ src: '../public/fonts/laguna-bold-regular.otf' })
const vietnam = Be_Vietnam_Pro({ weight: '300', subsets: ['latin'] })
const nothingYouCouldDo = Nothing_You_Could_Do({
  weight: '400',
  subsets: ['latin'],
})

// NProgress
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  )
}
