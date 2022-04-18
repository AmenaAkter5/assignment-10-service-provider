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
            <h2 className="my-5 text-center">What My Users Say!</h2>
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