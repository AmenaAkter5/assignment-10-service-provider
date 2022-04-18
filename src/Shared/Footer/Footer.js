import React from 'react';
import './Footer.css';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='footer'>
            <h3 className='text-center'>Stay Safe, Stay Healthy</h3>
            <h5 className='text-center'>Contact: 01717775552</h5>
            <p className='text-center mt-4'><small>Copyright © {year} healer.com</small></p>
        </footer>
    );
};

export default Footer;