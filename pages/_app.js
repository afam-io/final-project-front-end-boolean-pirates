import Layout from '../components/Layout'
import '../styles/globals.css'
import { useFetchUser } from '../lib/user'
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  const { user, loading } = useFetchUser()
  return (
    <Layout user={user} loading={loading}>
    <UserProvider>
    <Head>
    <title>Redeem</title>
    </Head>
     <Component {...pageProps} user={user} loading={loading} />
     </UserProvider>
    </Layout>
  )
}

export default MyApp
