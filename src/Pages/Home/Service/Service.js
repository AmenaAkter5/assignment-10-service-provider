import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { img, name, price, description } = service;

    const navigate = useNavigate();

    // redirect to checkout page by click on card button
    const handleServiceBtn = () => {
        navigate('/checkout');
    }

    return (
        <div>
            <div className='service'>
                <img className='w-100' src={img} alt="" />
                <h3 className='mt-2'>{name}</h3>
                <p>Price: <b>{price}</b></p>
                <p className='service-description'>{description}</p>
                <button onClick={handleServiceBtn} className='service-btn mt-2'>Book Appointment</button>
            </div>
        </div>
    );
};

export default Service;