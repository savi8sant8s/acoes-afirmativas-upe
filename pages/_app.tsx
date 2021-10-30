import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

export default function OAAUPE({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

