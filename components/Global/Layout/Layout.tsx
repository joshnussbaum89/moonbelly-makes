import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}
