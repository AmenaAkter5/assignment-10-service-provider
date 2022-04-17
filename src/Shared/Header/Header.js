import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.PNG';
import './Header.css';

/* 
{
                    user ?
                        <button className='sign-out' onClick={handleSignOut}>Sign Out</button>
                        :
                        <Link to="/login">Log in</Link>
                }
*/


/* 
<Link to='/'><img src={logo} alt="" /></Link>
*/


/* 
<nav>
                <Link to='/home'>Home</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About</Link>
                <Link to='/register'>Register</Link>
                <Link to='/signin'>Sign In</Link>
            </nav>
*/

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <header className='header'>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Link className='brand-logo' to='/'><img src={logo} alt="" /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='text-center' id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to='/home'>Home</Link>
                            <Link to='/blogs'>Blogs</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/checkout'>Checkout</Link>
                            {
                                user ?
                                    <button className='sign-out' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Link to="/signin">Sign in</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;