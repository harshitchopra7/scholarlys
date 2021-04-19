import React from 'react';
import './LeftMenu.css';
import Avatar from '@material-ui/core/Avatar';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Link, useHistory } from 'react-router-dom';

function LeftMenu() {

    const history = useHistory();

    const createFeed = () => {
        history.push("/feeds");
    }

    const toggler = () => {
        var blurrr = document.getElementById("blurrr");
        blurrr.classList.toggle('active');
        var popuppp = document.getElementById("popuppp");
        popuppp.classList.toggle('active');
    }


    return (
        <div>
            <div className="leftmenu" id="blurrr">
                <div className="menu_top">
                    <Avatar src='' style={{ width: '100px', height: '100px' }} />
                    <p>Harshit Chopra</p>
                </div>

                <Link className="text_decoration" to="/feeds">
                    <div className="option">
                        <div>
                            <MenuBookIcon style={{color: '#012169'}} />
                        </div>
                        <div className="option_p">
                            <p> Feed 1</p>
                        </div>
                    </div>
                </Link>

                <div className="menu_options">
                    <div className="option" onClick={toggler}>
                        <div>
                            <AddCircleOutlineIcon style={{color: '#012169'}} />
                        </div>
                        <div className="option_p">
                            <p> Create Feed</p>
                        </div>
                    </div>

                    <Link className="text_decoration" to="/bookmarks">
                        <div className="option">
                            <div>
                                <BookmarkBorderIcon style={{color: '#012169'}} />
                            </div>
                            <div className="option_p">
                                <p> Bookmarks</p>
                            </div>
                        </div>
                    </Link>

                    <div className="option">
                        <div>
                            <ExitToAppIcon style={{color: '#012169'}} />
                        </div>
                        <div className="option_p">
                            <p> Logout</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="f">@2021 Scholarlys</p>
            {/* Login Pop goes here  */}
        <div id="popuppp">
                <div className="cross_mainnn">
                    <p>Create Feed</p>
                    <p className="crossss" onClick={toggler}>
                        &times;
                    </p>
                </div>
                <div className="inputss">
                    <input className="input_ff" placeholder="Feed Name" />
                    <div className="input_keyy">
                        <input className="input_kk" placeholder="Add research keywords" />
                        <button>Add Keyword</button>
                    </div>
                </div>
                <div className="no_addfeedd">
                    <button onClick={createFeed}>Create Feed</button>
                </div>
            </div>
        </div>
    )
}
export default LeftMenu;