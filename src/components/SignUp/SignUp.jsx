import { useState } from 'react';
import './SignUp.css'

const SignUp = () => {
    const [error, setError] = useState('')
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const comfirmPassword = form.comfirm.value;
        if (password !== comfirmPassword) {
            setError("Password did not match");
            return;
        } else if (password < 6) {
            setError("Password must grater then or equal six digits");
        }
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
                    <p>{error}</p>
                </div>
                <div className='submit'>
                    <label htmlFor=""></label>
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
        </div>
    );
};

export default SignUp;