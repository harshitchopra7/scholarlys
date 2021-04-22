import React from 'react';
import './NoKeywords.css';
import LeftMenu from '../LeftMenu/LeftMenu';
import Avatar from '@material-ui/core/Avatar';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function NoKeywords() {

    const toggler = () => {
        var blurr = document.getElementById("blurr");
        blurr.classList.toggle('active');
        var popupp = document.getElementById("popupp");
        popupp.classList.toggle('active');
    }

    return (
        <div>
        <div className="no_full" id="blurr">

            <LeftMenu />

            {/* <div className="leftmenu"> */}
                {/* <div className="menu_top">
                    <Avatar src='' style={{ width: '100px', height: '100px' }} />
                    <p>Harshit Chopra</p>
                </div> */}
                {/* <div className="menu_options">
                    <div className="option" onClick={toggler}>
                        <div>
                            <AddCircleOutlineIcon style={{color: '#012169'}} />
                        </div>
                        <div className="option_p">
                            <p>Create Feed</p>
                        </div>
                    </div>

                    <Link className="text_decoration" to="/bookmarks">
                        <div className="option">
                            <div>
                                <BookmarkBorderIcon style={{color: '#012169'}} />
                            </div>
                            <div className="option_p">
                                <p>Bookmarks</p>
                            </div>
                        </div>
                    </Link>

                    <div className="option">
                        <div>
                            <ExitToAppIcon style={{color: '#012169'}} />
                        </div>
                        <div className="option_p">
                            <p>Logout</p>
                        </div>
                    </div>
                </div> */}
                {/* <p className="foote">@2021 Scholarlys</p>
            </div> */}
            <div className="nokeywords">
                <p>Create your first feed and add your research interests </p>
                <p className="divert_cf">
                    <ArrowBackIcon /> Click on Create Feed
                </p>
            </div>

            

        </div>
        {/* Login Pop goes here  */}
        <div id="popupp">
                <div className="cross_mainn">
                    <p>Create Feed</p>
                    <p className="crosss" onClick={toggler}>
                        &times;
                    </p>
                </div>
                <div className="inputs">
                    <input className="input_f" placeholder="Feed Name" />
                    <div className="input_key">
                        <input className="input_k" placeholder="Add research keywords" />
                        <button>Add Keyword</button>
                    </div>
                </div>
                <div className="no_addfeed">
                    <button>Create Feed</button>
                </div>
            </div>
        </div>
    )
}
export default NoKeywords;