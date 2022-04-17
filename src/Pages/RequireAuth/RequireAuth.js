import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';


const RequireAuth = ({ children }) => {

    // get user 
    const [user] = useAuthState(auth);

    // get location
    const location = useLocation();

    // redirect to sign in page if user is not logged in
    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate >
    }

    // if user is logged in then expected page is shown
    return children;
};

export default RequireAuth;