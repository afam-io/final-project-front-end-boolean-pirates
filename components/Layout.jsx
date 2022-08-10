import Header from './Header';
import Footer from './Footer'
import { UserProvider } from "@auth0/nextjs-auth0"

const  Layout = ({ user, loading = false, children }) => {
    return ( 
        <div>
            <Header user={user} loading={loading} />
            { children }
            <Footer />
        </div>
    );
}
 
export default Layout;

