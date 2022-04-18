/* 
Register


import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'

const Register = () => {

    // ___________________________________________
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);


    // ___________________________________________
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    // ___________________________________________
    const [updateProfile, updating] = useUpdateProfile(auth);


    // ___________________________________________
    const navigate = useNavigate();
    if (user) {
        console.log(user)
        navigate('/')
    }


    // ___________________________________________
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    // ___________________________________________
    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }


    // ___________________________________________
    const handleCreateUser = async (event) => {
        event.preventDefault();
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }


    return (
        <div className='d-flex flex-row-reverse pt-5'>
            <div className='w-50 px-5'>
                <Form onSubmit={handleCreateUser} className='w-75 me-5 pe-5'>
                    <h1 className='mb-4'>Please Register</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleName} type="text" placeholder="Your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Accept Study Hacks Terms and Conditions" />
                    </Form.Group>
                    {
                        errorElement
                    }
                    {agree ? <Button className='w-100' variant="primary" type="submit">
                        Register
                    </Button> : <Button className='w-100 disabled' variant="primary" type="submit">
                        Register
                    </Button>}
                </Form>

                <div className='w-75 me-5 pe-5'>
                    <p className='mt-3 mb-0'>Already have an accout? <Link to={'/login'}>Please Login</Link></p>

                    <div className='w-100 d-flex justify-content-center align-items-center'>
                        <div className='login-methord-divided'>

                        </div>
                        <p className='mt-2 mb-3'>or</p>
                        <div className='login-methord-divided'>

                        </div>
                    </div>
                </div>
                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default Register;

*/



/* 
sign in 

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // ___________________________________________
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    // ___________________________________________
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const handleResetPassword = async () => {
        await sendPasswordResetEmail(email);
        toast('Sent');
    }


    // ___________________________________________
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }


    // ___________________________________________
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    // ___________________________________________
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }

    // ___________________________________________
    const handleCreateUser = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='d-flex flex-row-reverse pt-5'>
            <div className='w-50 px-5'>
                <Form onSubmit={handleCreateUser} className='w-75 me-5 pe-5'>
                    <h1 className='mb-4'>Welcome Back!</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                    </Form.Group>
                    {errorElement}
                    <Button className='w-100' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>

                <div className='w-75 me-5 pe-5'>
                    <p className='mt-3'>Are you new in Study Hacks Corner? <Link to={'/register'}>Please Register</Link></p>
                    <p className='mt-3'>Forgotten Password? <button onClick={handleResetPassword} className='link-button'>Reset Password</button></p>

                    <div className='w-100 d-flex justify-content-center align-items-center'>
                        <div className='login-methord-divided'>

                        </div>
                        <p className='mt-2 m-2'>or</p>
                        <div className='login-methord-divided'>

                        </div>
                    </div>
                </div>
                <SocialLogin></SocialLogin>
                <ToastContainer />

            </div>
        </div>
    );
};

export default Login;

*/