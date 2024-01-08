import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className="header">
            <img src={Logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Header;