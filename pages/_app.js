// [UPDATED] Wrapped with LangProvider for bilingual support
import '../styles/globals.css'
import Head from 'next/head'
import { LangProvider } from '../context/LangContext'

export default function App({ Component, pageProps }) {
  return (
    <LangProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FAFAF8" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </LangProvider>
  )
}
