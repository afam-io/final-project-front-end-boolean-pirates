import Layout from '../components/Layout'
import '../styles/globals.css'
import { useFetchUser } from '../lib/user'

function MyApp({ Component, pageProps }) {
  const {user, loading } = useFetchUser()
  return (
    <Layout user={user} loading={loading}>
     <Component {...pageProps} user={user} loading={loading} />
    </Layout>
  )
}

export default MyApp
