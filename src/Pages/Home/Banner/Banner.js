import React from 'react';
import './Banner.css';
import banner from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-container container d-flex justify-content-between align-items-center'>
                <div>
                    <h5 className='banner-heading mb-3'>HELPING YOU LIVE LIFE</h5>
                    <h1 className='banner-title mb-4'>Feel Better, move better, be better</h1>
                    <button className='banner-btn'>Book Appointment</button>
                </div>
                <div>
                    <img className='banner-img img-fluid' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;