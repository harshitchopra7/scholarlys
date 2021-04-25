import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import LeftMenu from './components/LeftMenu/LeftMenu';
import NoKeywords from './components/NoKeywords/NoKeywords';
import Meme from './components/Meme/Meme';
import Feed from './components/Feed/Feed';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Content from './components/Content/Content';
import { useSelector, useDispatch } from 'react-redux';
import { login, selectUser } from './components/features/userSlice';
import { auth } from './firebase';
import { useEffect } from 'react';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          mail: user.email,
          photoURL: user.photoURL
        }))
      }
    })
  }, [])

  return (

    <Router>

      {(!user) ? (
        <Route exact path="/">
          <LandingPage />
        </Route>
      )
        : (
          <div className="App">
            <Route exact path="/">
              <LandingPage />
            </Route>

            <Route path="/no-keywords">
              <Navbar />
              <div className="align">
                <div className="main_mid_left">
                  <NoKeywords />
                </div>
                <div className="main_right">
                  <Meme />
                </div>
              </div>
            </Route>

            <Route path="/feeds">
              <Navbar />
              <div className="align">
                <div className="main_left">
                  <LeftMenu />
                </div>
                <div className="main_mid">
                  <Feed />
                </div>
                <div className="main_right">
                  <Meme />
                </div>
              </div>
            </Route>

            <Route path="/bookmarks">
              <Navbar />
              <div className="align">
                <div className="main_left">
                  <LeftMenu />
                </div>
                <div className="main_mid">
                  <Bookmarks />
                </div>
                <div className="main_right">
                  <Meme />
                </div>
              </div>
            </Route>

            <Route path="/content">
              <Navbar />
              <div className="align">
                <div className="main_left">
                  <LeftMenu />
                </div>
                <div className="main_mid">
                  <Content />
                </div>
                <div className="main_right">
                  <Meme />
                </div>
              </div>
            </Route>
          </div>
        )

      }

    </Router>

  );
}

export default App;
