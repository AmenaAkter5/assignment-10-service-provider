import React from 'react';
import './Users.css';

const Users = ({ user }) => {

    const { name, img, review } = user

    return (
        <div className="user-reviews px-3">
            <div className="d-flex justify-content-center pt-3 mb-3">
                <img src={img} alt="" />
            </div>
            <h4 className="text-center my-3">{name}</h4>
            <p>{review}</p>
        </div>
    );
};

export default Users;