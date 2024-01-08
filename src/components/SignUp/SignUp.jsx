import './SignUp.css'

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form>
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
                    <input type="password" name="password" id="comfirm-password" required />
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