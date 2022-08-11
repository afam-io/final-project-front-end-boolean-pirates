import Layout from '../components/Layout'
import '../styles/globals.css'
import { useFetchUser } from '../lib/user'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const { user, loading } = useFetchUser()
  return (
    <Layout user={user} loading={loading}>
    <Head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css" />
    </Head>
     <Component {...pageProps} user={user} loading={loading} />
    </Layout>
  )
}

export default MyApp
