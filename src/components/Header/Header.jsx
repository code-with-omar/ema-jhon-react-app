import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg'
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Logout !')
            }).catch(error => console.error(error));
    }
    return (
        <nav className="header">
            <img src={Logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {user && <><span className='user-login'>{user.email}</span> <Link onClick={handleLogOut}>Logout</Link></>}
            </div>
        </nav>
    );
};

export default Header;