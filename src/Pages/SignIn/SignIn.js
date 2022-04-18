import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, } from 'react-firebase-hooks/auth'
import './SignIn.css';
import auth from './../../firebase.init';
import Loading from './../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from './../SocialLogin/SocialLogin';



const SignIn = () => {

    // get email and password state
    const emailRef = useRef('');
    const passwordRef = useRef('');


    // page redirect handle after get user
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';


    // sign in user hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // password reset email sent hook
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    // loading page
    if (loading || sending) {
        return <Loading></Loading>
    }


    // error handle
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'><b>Error: {error?.message}</b></p>
    }


    // sign in the registered user with email and password
    const handleUserSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // sign in user
        signInWithEmailAndPassword(email, password);
    }

    // navigate to Register page
    const navigateRegister = event => {
        navigate('/register');
    }

    // reset password email sent confirmed by using toast
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    // after get user redirect to the previous page
    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <section className='sign-in'>
            <div className='form-container'>
                <div>
                    <h1 className='form-title my-5'>Sign in</h1>
                    <form onSubmit={handleUserSignIn}>
                        <div className='input-group'>
                            <input ref={emailRef} type="email" name="email" id="" placeholder='Enter Email' required />
                        </div>
                        <div className='input-group'>
                            <input ref={passwordRef} type="password" name="password" id="" placeholder='Enter Password' required />
                        </div>
                        <p>{loading && 'Loading...'}</p>
                        {errorElement}
                        <input className='form-submit' type="submit" value="Sign in" />
                    </form>
                    <p>
                        New to Healer? <Link className='form-link' to="/register" onClick={navigateRegister}>Create New Account</Link>
                    </p>
                    <p>Forget Password? <button className='form-link btn btn-link pe-2 ps-0 pb-2' onClick={resetPassword}>Reset Password</button></p>
                    <div className='divider-line'>
                        <span className="line"></span><p>or</p><span className="line"></span>
                    </div>
                    <SocialLogin></SocialLogin>
                    <ToastContainer />
                </div>
            </div>
        </section>
    );
};

export default SignIn;