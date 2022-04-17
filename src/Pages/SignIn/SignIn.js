import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import './SignIn.css';
import logo from '../../images/Google.jpg';
import auth from './../../firebase.init';



const SignIn = () => {

    // email and password state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // page redirect handle after get user
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    // sign in user hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    // sign in with google hook
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);


    // set email on blur
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    // set password on blur
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }


    // sign in the registered user with email and password
    const handleUserSignIn = event => {
        event.preventDefault();

        // sign in user
        signInWithEmailAndPassword(email, password)
    }


    // after get user redirect to the previous page
    if (user) {
        navigate(from, { replace: true });
    }


    // handle google sign in button
    const handleGooleSignIn = () => {
        signInWithGoogle();
    }



    return (
        <section className='sign-in'>
            <div className='form-container'>
                <div>
                    <h1 className='form-title my-5'>Sign in</h1>
                    <form onSubmit={handleUserSignIn}>
                        <div className='input-group'>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Enter Email' required />
                        </div>
                        <div className='input-group'>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Enter Password' required />
                        </div>
                        <p>{loading && 'Loading...'}</p>
                        <p className='error-message'>{error && error?.message}</p>
                        <input className='form-submit' type="submit" value="Sign in" />
                    </form>
                    <p>
                        New to Healer? <Link className='form-link' to="/register">Create New Account</Link>
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

export default SignIn;