import React from 'react';
import './Footer.css';

const Footer = () => {

    const year = new Date();

    return (
        <footer>
            <p className='text-center'>Copyright © {year.getFullYear()} </p>
        </footer>
    );
};

export default Footer;