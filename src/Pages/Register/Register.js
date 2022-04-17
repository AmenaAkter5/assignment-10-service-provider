import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Google.jpg';
import './Register.css';

const Register = () => {

    // email, password, confirm password and custom error state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [customError, setCustomError] = useState('');

    // page redirect handle after get user
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // create user hook
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    // send email verification hook
    const [sendEmailVerification] = useSendEmailVerification(auth);


    // sign in with google hook
    const [signInWithGoogle] = useSignInWithGoogle(auth);


    // set email on blur
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    // set password on blur
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    // set confirm password on blur
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }


    // register the new user
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setCustomError('Your two passwords did not match')
            return;
        }
        if (password.length < 6) {
            setCustomError('Password must be longer than 6 characters')
            return;
        }
        setCustomError('');

        // create user
        createUserWithEmailAndPassword(email, password);

        // send email verification
        sendEmailVerification();
    }


    // after get user redirect to the previous page
    if (user) {
        navigate(from, { replace: true })
    }


    // handle google sign in button
    const handleGooleSignIn = () => {
        signInWithGoogle();
    }


    return (
        <section>
            <div className='form-container register'>
                <div>
                    <h1 className='form-title my-4'>Register Please</h1>
                    <form onSubmit={handleCreateUser}>
                        <div className='input-group'>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Enter Email' required />
                        </div>
                        <div className='input-group'>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Enter Password' required />
                        </div>
                        <div className='input-group'>
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" placeholder='Confirm Your Password' required />
                        </div>
                        <p>{loading && 'Loading...'}</p>
                        <p className='error-message'>{error && error?.message}</p>
                        <p className='error-message'>{customError}</p>
                        <input className='form-submit' type="submit" value="Register" />
                    </form>
                    <p>
                        Already have an account? <Link className='form-link' to="/login">Log in</Link>
                    </p>
                    <div className='divider-line'>
                        <span className="line"></span><p>or</p><span className="line"></span>
                    </div>
                    <button onClick={handleGooleSignIn} className='google-sign'>
                        <img src={logo} alt="" />
                        <p>Continue with Google</p>
                    </button>
                </div>
            </div>
        </section>
    );
};


export default Register;