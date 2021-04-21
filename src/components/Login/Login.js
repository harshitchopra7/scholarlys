import React from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider } from '../../firebase';
import { login, selectUser } from '../features/userSlice';
import google from '../images/google.jpg';
import { Link, useHistory } from 'react-router-dom';

function Login() {

    const dispatch = useDispatch();

    const history = useHistory();

    const goToNoKeywords = () => {
        history.push("/no-keywords");
    }

    const signIn = () => {
        auth.signInWithPopup(provider) 
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photURL,
                uid: user.uid
            }))
        }).catch(error => alert(error.message));
        alert("Successful");
        goToNoKeywords();
    }

    
    return (
        <div className="logingoogle">
            
            <button className="lg_button" onClick={signIn}>
                <img className="lg_img" src={google} alt="" />
                Login with Google
            </button>
        </div>
    )
}

export default Login;