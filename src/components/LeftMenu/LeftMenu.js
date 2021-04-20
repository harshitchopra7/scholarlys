import React, { useState } from 'react';
import './LeftMenu.css';
import Avatar from '@material-ui/core/Avatar';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { db } from '../../firebase';
import firebase from 'firebase';
import AddedKeyword from './AddedKeyword';
import { useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import AddedFeeds from './AddedFeeds';



function LeftMenu() {

    const history = useHistory();
    const dispatch = useDispatch()

	const user = useSelector(selectUser);

	const signOut=()=>{
		auth.signOut().then(()=>{
			dispatch(logout())
		})
        alert("Logged out");
        history.push("/");
	}

    const [keyword, setKeyword] = useState([]);
    const [input, setInput] = useState('');
    const [feed, setFeed] = useState([]);
    const [feedInput, setFeedInput] = useState('');

    // const [feed, setFeed] = useState([]);
    // const [feedInput, setFeedInput] = useState('');

    // when the add loads, we need to listen to database and fetch new keywords as they get added/removed
    useEffect(() => {
        // this code here fires when the component loads
        db.collection('keywords')  // access the keywords collection
            .orderBy('timestamp', 'desc') // order keywords by timeStamps
            .onSnapshot(snapshot =>    // take a snapshot when any updation, creation, deletion happens and return and then we can do anything with it
                {
                    console.log(snapshot.docs.map(doc => doc.data().keyword));
                    setKeyword(snapshot.docs.map(  // this line fires off when any changes or updations are made to the firebase database
                        doc => 
                        ({
                            id: doc.id,
                            keyword: doc.data().keyword
                        })
                    ))  
                }
            )

            db.collection('feeds').orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                console.log((snapshot.docs.map(doc => ({
                    id: doc.id,
                    feed: doc.data().feed
                }))));
                setFeed(snapshot.docs.map(doc => ({
                    id: doc.id,
                    feed: doc.data().feed
                })))
            })

    }, []); 

    const addKeyword = (event) => {
        // this will fire off when we click add keyword button 
        event.preventDefault(); // will prevevent refreshing the page
        console.log("Working");

        // adds keyword to database
        db.collection("keywords").add({
            keyword: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        // setKeyword([...keyword, input]); // append the new keyword to the existing array of keyword
        setInput(''); // clear up the input after clicking the add keyword button
    }

    const createFeed = (e) => {
        e.preventDefault();
        
        db.collection('feeds').add({
            feed: feedInput,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        alert("Feed Created");
        setFeedInput('');
        toggler();
    }


    // toggling the pop up aftetr clicking create feed button
    const toggler = () => {
        setFeedInput('');
        var blurrr = document.getElementById("blurrr");
        blurrr.classList.toggle('active');
        var popuppp = document.getElementById("popuppp");
        popuppp.classList.toggle('active');
    }


    return (
        <div>
            <div className="leftmenu" id="blurrr">
                <div className="menu_top">
                    <Avatar src={user.photoURL} style={{ width: '100px', height: '100px' }} />
                    <p>{user.displayName}</p>
                </div>

                {feed.map(({id, feed}) => (
                    <AddedFeeds id={id} feed={feed} feedUrl="/feeds" />
                ))}
                
                {/* <Link className="text_decoration" to="/feeds">
                    
                    <AddedFeeds />
                </Link> */}

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

                    <div onClick={signOut} className="option">
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
                    <input 
                        className="input_ff" 
                        placeholder="Feed Name"
                        value={feedInput}
                        onChange={e => setFeedInput(e.target.value)} 
                    />

                    <div className="input_keyy">
                        <input 
                            className="input_kk" 
                            placeholder="Add research keywords"
                            value={input}
                            onChange={event => setInput(event.target.value)}
                        />
                        <button onClick={addKeyword}>Add Keyword</button>
                    </div>
                </div>
                <div>
                    <div className="keyword_added">
                        {keyword.map(({id, keyword}) => (
                            <AddedKeyword id={id} keyword={keyword} />
                        ))}
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