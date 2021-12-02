import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import { Menu } from '../components'

function OAAUPE({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link rel="icon" href="logo.png" />
        <title>Ações Afirmativas da UPE Garanhuns</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald" />
      </Head>
      <Menu />
      <Component {...pageProps} />
    </>
  )
}

export default OAAUPE
