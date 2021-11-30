import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app'
import Head from "next/head";
import { Menu } from '../components';

export default function OAAUPE({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="logo.png" />
        <title>Ações Afirmativas - UPE Garanhuns</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald" />
      </Head>
      <Menu />
      <Component className="bg-whiteupe min-h-screen" {...pageProps} />
    </>
  )
};

