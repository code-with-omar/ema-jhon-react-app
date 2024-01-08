import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
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