import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app'
import Head from "next/head";
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default function OAAUPE({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-whiteupe min-h-screen">
      <Head>
        <link rel="icon" href="logo.png" />
        <title>Ações Afirmativas - UPE Garanhuns</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald" />
      </Head>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
};

