import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import logo from '../../images/Google.jpg';
import { useNavigate } from 'react-router-dom';
import Loading from './../../Shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    if (loading) {
        return <Loading></Loading>
    }

    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleGooleSignIn = () => {
        signInWithGoogle();
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            {errorElement}
            <button onClick={handleGooleSignIn} className='google-sign'>
                <img src={logo} alt="" />
                <p>Continue with Google</p>
            </button>
        </div>
    );
};

export default SocialLogin;