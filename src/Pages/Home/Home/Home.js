import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';
import Reviews from './Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;