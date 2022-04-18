import React from 'react';
import './Footer.css';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer>
            <p className='text-center'>Copyright © {year} healer.com</p>
        </footer>
    );
};

export default Footer;