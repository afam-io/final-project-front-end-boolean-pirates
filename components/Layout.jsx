import Header from './Header';
import { UserProvider } from "@auth0/nextjs-auth0"

const  Layout = ({ user, loading = false, children }) => {
    return ( 
        <div>
            <Header user={user} loading={loading} />
            <div className="h-24"></div>
            { children }
        </div>
    );
}
 
export default Layout;

