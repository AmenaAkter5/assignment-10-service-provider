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

    // email and password state
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    // page redirect handle after get user
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    let errorElement;


    // sign in user hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'><b>Error: {error?.message}</b></p>
    }


    // sign in with google hook
    // const [signInWithGoogle] = useSignInWithGoogle(auth);


    // set email on blur
    /* const handleEmailBlur = event => {
        setEmail(event.target.value);
    } */

    // set password on blur
    /* const handlePasswordBlur = event => {
        setPassword(event.target.value);
    } */


    // sign in the registered user with email and password
    /* const handleUserSignIn = event => {
        event.preventDefault();

        // sign in user
        signInWithEmailAndPassword(email, password)
    } */

    const handleUserSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // sign in user
        signInWithEmailAndPassword(email, password);
    }


    // after get user redirect to the previous page
    if (user) {
        navigate(from, { replace: true });
    }

    const navigateRegister = event => {
        navigate('/register');
    }

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


    // handle google sign in button
    /* const handleGooleSignIn = () => {
        signInWithGoogle();
    } */



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
                    {/* <button className='google-sign'>
                        <img src={logo} alt="" />
                        <p>Continue with Google</p>
                    </button> */}
                    <SocialLogin></SocialLogin>
                    <ToastContainer />
                </div>
            </div>
        </section>
    );
};

export default SignIn;