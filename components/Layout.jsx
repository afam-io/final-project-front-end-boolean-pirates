import Header from './Header';

const  Layout = ({ user, loading = false, children }) => {
    return ( 
        <div>
            <Header user={user} loading={loading} />
            { children }
        </div>
    );
}
 
export default Layout;

