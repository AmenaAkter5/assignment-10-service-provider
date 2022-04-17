import React from 'react';
import './Service.css';

const Service = ({ service }) => {

    const { img, name, price, description } = service;

    return (
        <div>
            <div className='service'>
                <img className='w-100' src={img} alt="" />
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <p><small>{description}</small></p>
                <button className='service-btn'>Book Appointment</button>
            </div>
        </div>
    );
};

export default Service;