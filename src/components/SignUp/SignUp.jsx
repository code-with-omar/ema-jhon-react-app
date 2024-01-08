import { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const { signUp } = useContext(AuthContext);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const comfirmPassword = form.comfirm.value;
        setError('');
        if (password.length < 6) {
            setError("Password must grater then or equal six digits");
            return;
        }
        else if (password !== comfirmPassword) {
            setError("Password did not match");
            return;
        }
        signUp(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
            }).catch(error => console.error(error))

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleFormSubmit}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="comfirm" id="comfirm-password" required />
                </div>
                <div>
                    <p className='error'>{error}</p>
                </div>
                <div className='submit'>
                    <label htmlFor=""></label>
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
            <p className='login-message'>Already have an account? <Link className='login-link' to="/login">Login </Link> </p>
        </div>
    );
};

export default SignUp;