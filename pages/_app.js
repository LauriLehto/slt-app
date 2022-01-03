import '../styles/globals.css'
import '../styles/mapbox.css'
import { SessionProvider } from "next-auth/react"

import Layout from '../src/components/layout'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
