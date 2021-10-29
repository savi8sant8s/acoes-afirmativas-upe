import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Menu from '../components/Menu'

export default function OAAUPE({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  )
}

