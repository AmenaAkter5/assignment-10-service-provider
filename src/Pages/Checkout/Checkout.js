import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Checkout.css';

const Checkout = () => {

    // user, name, address, phonenumber state
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    // set name on blur
    const handleNameBlur = event => {
        setName(event.target.value);
    }

    // set address on blur
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    // set phone number on blur
    const handlePhoneNumberBlur = event => {
        setPhoneNumber(event.target.value);
    }


    return (
        <div className='form-container checkout'>
            <div>
                <h1 className='form-title my-4'>Checkout</h1>
                <form>
                    <div className='input-group'>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" placeholder='Enter Your Name' required />
                    </div>
                    <div className='input-group'>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" placeholder='Enter Your Address' required />
                    </div>
                    <div className='input-group'>
                        <input onBlur={handlePhoneNumberBlur} type="text" name="phone-number" id="" placeholder='Enter Your Phone Number' required />
                    </div>
                    <input className='form-submit' type="submit" value="Book an Appointment" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;