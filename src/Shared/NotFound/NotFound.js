import React from 'react';
import confused from '../../images/confused.PNG';
import four from '../../images/four.jpg';

const NotFound = () => {
    return (
        <div className="container mx-auto my-5">
            <h3 className="fw-bold text-center my-5 pt-5">oops! sorry, The page is not Available!</h3>
            <div className="d-flex justify-content-center mt-5 pt-5">
                <img width={200} src={four} alt="" />
                <img width={200} src={confused} alt="" />
                <img width={200} src={four} alt="" />
            </div>
        </div>
    );
};

export default NotFound;