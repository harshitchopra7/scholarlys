import React from 'react';
import './LandingPage.css';
import vid1 from '../video/Scholarlys_Demo.mp4';
import vid2 from '../video/v2.mp4';
import Login from '../Login/Login';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function LandingPage() {

    const history = useHistory();

    const user = useSelector(selectUser);

    const goToFeeds = () => {
        history.push("/feeds")
    }

    const toggle = () => {
        var blur = document.getElementById("blur");
        blur.classList.toggle('active');
        var popup = document.getElementById("popup");
        popup.classList.toggle('active');
    }

    return (
        <div className="landingpage">   
            <div className="lp_nav">
                <div className="lp_nav_left">
                    <p>Scholarlys</p>
                </div>
                {(!user) ? 
                    (
                        <div className="lp_nav_right">
                            <button onClick={toggle}>Log In</button>
                        </div>
                    ) :
                        <div className="lp_nav_right">
                            <button onClick={goToFeeds}>Go To Feeds</button>
                        </div> 
                    }
                
            </div>
            <hr className="nav_hr" />
            <div className="landingp" id="blur">
            <div className="lp_title">
                <div className="lp_title1">
                    <p>Keep up with research, everything in one place</p>
                </div>
                <div className="lp_title2">
                    <p>Say goodbye to email alerts. Get an organized daily feed of the latest research papers, <br /> science news, blogs and events.</p>
                </div>
            </div>
            <div className="vid">
                <div className="vid_left">
                    <video src={vid2} autoPlay="true" type="video/mp4" muted loop />
                </div>
                <div className="arrow_bw">
                    <img src="https://img.icons8.com/ios/52/000000/forward-arrow.png"/>
                </div>
                <div className="vid_right">
                    <video src={vid1} autoPlay="true" type="video/mp4" muted loop />
                </div>
            </div>
            <div className="lp_btn">
                <button onClick={toggle}>Get Started</button>
            </div>
            </div>

            {/* Login Pop goes here  */}
            <div id="popup">
                <div className="cross_main">
                    <p className="cross" onClick={toggle}>
                        &times;
                    </p>
                </div>
                <div className="welcome_main">
                    <p className="welcome">Welcome to Scholarlys</p>
                </div>
                <div className="login_google">
                    <Login />
                </div>
            </div>

            <div className="foo">
                <p>@2021 Scholarlys</p>
            </div>
        </div>
        
    )
}
export default LandingPage;