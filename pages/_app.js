import Layout from '../components/Layout';
import '../styles/globals.css';
import { useFetchUser } from '../lib/user';

if (process.env.NEXT_PUBLIC_API_MOCKING === true) {
  import('../mocks').then(({ setupMocks }) => {
    setupMocks();
  });
}
function MyApp({ Component, pageProps }) {
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user} loading={loading}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
