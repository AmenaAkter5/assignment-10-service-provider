import React, { useEffect, useState } from 'react';
import Users from '../../Users/Users';
import './Reviews.css';

const Reviews = () => {

    // users data load state
    const [users, setUsers] = useState([]);

    // users data fetch
    useEffect(() => {
        fetch('users.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className="container mx-auto my-5">
            <h2 className="service-title text-center mb-5 pt-2">What My Clients Say!</h2>
            <div className="users-container">
                {
                    users.map(user => <Users
                        key={user.id}
                        user={user}
                    ></Users>)
                }
            </div>
        </div>
    );
};

export default Reviews;