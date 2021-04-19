import React from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider } from '../../firebase';
import { login, selectUser } from '../features/userSlice';
import google from '../images/google.png';
import { Link, useHistory } from 'react-router-dom';

function Login() {

    const dispatch = useDispatch();

    const history = useHistory();

    

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
    }
    
    return (
        <div className="logingoogle">
            
            <button className="lg_button" onClick={signIn}><Link className="text-decoration" to="/no-keywords"><img className="lg_img" src={google} alt="" />Login with Google</Link></button>
        </div>
    )
}

export default Login;