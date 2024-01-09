import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    //this navigation hook work to login user direction
    const navigate = useNavigate();
    // Find user location(Which place user come form thats login page)
    const location = useLocation();
    const from = location.state?.form?.pathname || "/"//optional chaining
    console.log(from)
    const { loginUser } = useContext(AuthContext);
    const handleFormLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
                // its means when user login route go to target location page
                navigate(from);
            }).catch(error => {
                console.log(error);
                setError(error.message);
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleFormLogin}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <p className='error'>{error}</p>
                <div className='submit'>
                    <label htmlFor=""></label>
                    <input type="submit" value="Login" />
                </div>
            </form>
            <p className='login-message'>New to Ema-john? <Link className='login-link' to="/signup">Create New Account </Link> </p>
        </div>
    );
};

export default Login;