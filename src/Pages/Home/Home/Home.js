import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';

// #61b5e4
// #52b2fe
// #5ec2ed
// #3abff0
// #41c1ef
// #a3daff
// #ceebfb
// #ddf0fa

/* 
yarn build
 * 5. firebase deploy (every time you want to deploy)
 * or, yarn firebase deploy
*/

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;