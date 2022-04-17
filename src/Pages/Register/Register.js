import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Google.jpg';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // page redirect handle after get user
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true })
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match')
            return;
        }
        if (password.length < 6) {
            setError('Password must be longer than 6 characters')
            return;
        }
        setError('');

        // create user
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <section>
            <div className='form-container'>
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
                        <p className='error-message'>{error}</p>
                        <input className='form-submit' type="submit" value="Register" />
                    </form>
                    <p>
                        Already have an account? <Link className='form-link' to="/login">Log in</Link>
                    </p>
                    <div className='divider-line'>
                        <span className="line"></span><p>or</p><span className="line"></span>
                    </div>
                    <button className='google-sign'>
                        <img src={logo} alt="" />
                        <p>Continue with Google</p>
                    </button>
                </div>
            </div>
        </section>
    );
};


export default Register;