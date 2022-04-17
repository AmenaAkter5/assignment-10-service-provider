import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.PNG';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Link to='/'><img src={logo} alt="" /></Link>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About</Link>
                <Link to='/register'>Register</Link>
                <Link to='/signin'>Sign In</Link>
            </nav>
        </header>
    );
};

export default Header;