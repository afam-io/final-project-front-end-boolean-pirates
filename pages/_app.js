import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <UserProvider>
    <Head>
    <title>Redeem</title>
    </Head>
     <Component {...pageProps}/>
     </UserProvider>
    </Layout>
  )
}

export default MyApp
