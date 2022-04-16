// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwpncqMn0IwM1UMSHdmWPbF_wurbgPt-Q",
    authDomain: "independent-service-prov-1f0bd.firebaseapp.com",
    projectId: "independent-service-prov-1f0bd",
    storageBucket: "independent-service-prov-1f0bd.appspot.com",
    messagingSenderId: "965343065451",
    appId: "1:965343065451:web:cb50b552edbe17c58fc82e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export default auth;