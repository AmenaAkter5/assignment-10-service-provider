import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './../../Shared/Loading/Loading';


const RequireAuth = ({ children }) => {

    // get user 
    const [user, loading] = useAuthState(auth);

    // get location
    const location = useLocation();

    // redirect to loading spinner
    if (loading) {
        return <Loading></Loading>
    }

    // redirect to sign in page if user is not logged in
    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate >
    }

    // if user is logged in then expected page is shown
    return children;
};

export default RequireAuth;